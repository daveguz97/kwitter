import {
  domain,
  jsonHeaders,
  handleJsonResponse,
  asyncInitialState,
  asyncCases,
  createActions,
  createReducer,
} from './helpers';
const url = domain + '/messages';
// import {messageList} from './messageList';
const MESSAGE_LIST = createActions('messageList');
export const messageList = (limit = 100, offset = 0, username) => (
  dispatch
) => {
  dispatch(MESSAGE_LIST.START());

  const apiUrl =
    url +
    '?limit=' +
    limit +
    '&offset=' +
    offset +
    (username ? '&username=' + username : '');

  return fetch(apiUrl, {
    method: 'GET',
    headers: jsonHeaders,
  })
    .then(handleJsonResponse)
    .then((result) => dispatch(MESSAGE_LIST.SUCCESS(result)))
    .catch((err) => Promise.reject(dispatch(MESSAGE_LIST.FAIL(err))));
};

// Add a message
const CREATE_MESSAGE = createActions('createMessage');
export const createMessage = (createMessageData) => (dispatch, getState) => {
  dispatch(CREATE_MESSAGE.START());
  dispatch(messageList());

  const token = getState().auth.login.result.token;

  return fetch(url, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + token, ...jsonHeaders },
    body: JSON.stringify({ text: createMessageData }),
  })
    .then(handleJsonResponse)
    .then((result) => {
      dispatch(messageList());
      dispatch(CREATE_MESSAGE.SUCCESS(result));
    })
    .catch((err) => Promise.reject(dispatch(CREATE_MESSAGE.FAIL(err))));
};

// delete a message
const DELETE_MESSAGE = createActions('deleteMessage');
export const deleteMessage = (id) => (dispatch, getState) => {
  dispatch(DELETE_MESSAGE.START());

  const token = getState().auth.login.result.token;
  const apiUrl = url + '/' + id;

  return fetch(apiUrl, {
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + token, ...jsonHeaders },
  })
    .then(handleJsonResponse)
    .then((result) => dispatch(DELETE_MESSAGE.SUCCESS(result)))
    .catch((err) => Promise.reject(dispatch(DELETE_MESSAGE.FAIL(err))));
};

export const reducers = {
  messageList: createReducer(asyncInitialState, {
    ...asyncCases(MESSAGE_LIST),
  }),
  createMessage: createReducer(asyncInitialState, {
    ...asyncCases(CREATE_MESSAGE),
  }),
  deleteMessage: createReducer(asyncInitialState, {
    ...asyncCases(DELETE_MESSAGE),
  }),
};
