import {
    domain,
    jsonHeaders,
    handleJsonResponse,
    asyncInitialState,
    asyncCases,
    createActions,
    createReducer,
  } from './helpers';

  const url = domain + "/messages";

  const CREATE_MESSAGE = createActions("createMessage");
  export const CREATE_MESSAGE = createMessageData => dispatch => {
    dispatch(LOGIN.START());
  
    return fetch(url + "/message", {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify(createMessageData)
    })
      .then(handleJsonResponse)
      .then(result => dispatch(LOGIN.SUCCESS(result)))
      .catch(err => Promise.reject(dispatch(LOGIN.FAIL(err))));
  };
  
const DELETE_MESSAGE = createActions('deleteMessage');
export const deleteMessage = (deleteMessageData) => (dispatch, getState) => {
  dispatch(DELETE_MESSAGE.START());

  const { username, token } = getState().auth.login.result;

  return fetch(domain + `/message/${username}`, {
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + token, ...jsonHeaders },
  })
    .then(handleJsonResponse)
    .then((result) => dispatch(DELETE_MESSAGE.SUCCESS(result)))
    .catch((err) => Promise.reject(dispatch(GET_IMAGE_PRO.FAIL(err))))
    .then((result) => dispatch(LOGOUT.SUCCESS(result)));
};
const MESSAGE_LIST = createActions('messageList');
export const messageList = (messageListData) => (dispatch, getState) => {
  dispatch(MESSAGE_LIST.START());

  const { username, token } = getState().auth.login.result;

  return fetch(domain + `/message/${username}`, {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + token, ...jsonHeaders },
  })
    .then(handleJsonResponse)
    .then((result) => dispatch(MESSAGE_LIST.SUCCESS(result)))
    .catch((err) => Promise.reject(dispatch(MESSAGE_LIST.FAIL(err))))
    .then((result) => dispatch(LOGOUT.SUCCESS(result)));
};
export const reducers = {
    addUser: createReducer(asyncInitialState, {
      ...asyncCases(DELETE_MESSAGE),
    }),
    getUser: createReducer(asyncInitialState, {
      ...asyncCases(MESSAGE_LIST),
    }),
    getProfileSum: createReducer(asyncInitialState, {
      ...asyncCases(CREATE_MESSAGE),
    })
}