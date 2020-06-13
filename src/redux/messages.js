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
    dispatch(CREATE_MESSAGE.START());
    const token = getState().auth.login.result.token;
    return fetch(url , {
      method: "POST",
      headers:{ Authorization: "Bearer " + token, ...jsonHeaders },
      body: JSON.stringify(createMessageData)
    })
      .then(handleJsonResponse)
      .then(result => dispatch(CREATE_MESSAGE.SUCCESS(result)))
      .catch(err => Promise.reject(dispatch(CREATE_MESSAGE.FAIL(err))));
  };
  
const DELETE_MESSAGE = createActions('deleteMessage');
export const deleteMessage = (id) => (dispatch, getState) => {
  dispatch(DELETE_MESSAGE.START());

  const token = getState().auth.login.result.token;
  const APIendpoint = url + "/" + id;
  return fetch(APIendpoint, {
    method: 'DELETE',
    headers:{ Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then((result) => dispatch(DELETE_MESSAGE.SUCCESS(result)))
    .catch((err) => Promise.reject(dispatch(DELETE_MESSAGE.FAIL(err))))
  
};
const MESSAGE_LIST = createActions('messageList');
export const messageList = (limit=100,offset=0,username) => (dispatch, getState) => {
  dispatch(MESSAGE_LIST.START());
    const APIendpoint= url + "?limit="+ limit + "&offset=" + offset + (username?"&username ="+ username:"");
  return fetch(APIendpoint, {
    method: 'GET',
    headers: jsonHeaders,

  })
    .then(handleJsonResponse)
    .then((result) => dispatch(MESSAGE_LIST.SUCCESS(result)))
    .catch((err) => Promise.reject(dispatch(MESSAGE_LIST.FAIL(err))))
    
};
export const reducers = {
    messageList: createReducer(asyncInitialState, {
        ...asyncCases(MESSAGE_LIST),
     createMessage: createReducer(asyncInitialState, {
      ...asyncCases(CREATE_MESSAGE),
     })
    }),
     deleteMessage: createReducer(asyncInitialState, {
      ...asyncCases(DELETE_MESSAGE),
   }),
}