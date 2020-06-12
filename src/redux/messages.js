import {
    domain,
    jsonHeaders,
    handleJsonResponse,
    asyncInitialState,
    asyncCases,
    createActions,
    createReducer,
  } from './helpers';


const CREATE_MESSAGE = createActions('createMessage');
export const createMessage = (createMessageData) => (dispatch, getState) => {
  dispatch(CREATE_MESSAGE.START());

  const { username, token } = getState().auth.login.result;

  return fetch(domain + `/users/${username}`, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + token, ...jsonHeaders },
  })
    .then(handleJsonResponse)
    .then((result) => dispatch(CREATE_MESSAGE.SUCCESS(result)))
    .catch((err) => Promise.reject(dispatch(GET_IMAGE_PRO.FAIL(err))))
    .then((result) => dispatch(LOGOUT.SUCCESS(result)));
};
const DELETE_MESSAGE = createActions('deleteMessage');
export const deleteMessage = (deleteMessageData) => (dispatch, getState) => {
  dispatch(DELETE_MESSAGE.START());

  const { username, token } = getState().auth.login.result;

  return fetch(domain + `/users/${username}`, {
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

  return fetch(domain + `/users/${username}`, {
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + token, ...jsonHeaders },
  })
    .then(handleJsonResponse)
    .then((result) => dispatch(MESSAGE_LIST.SUCCESS(result)))
    .catch((err) => Promise.reject(dispatch(GET_IMAGE_PRO.FAIL(err))))
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