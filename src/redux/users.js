import {
  domain,
  jsonHeaders,
  handleJsonResponse,
  asyncInitialState,
  asyncCases,
  createActions,
  createReducer,
} from './helpers';
const LOGOUT = createActions('logout');
// Add user
const ADD_USER = createActions('addUser');
export const addUser = (addUserData) => (dispatch) => {
  dispatch(ADD_USER.START());

  return fetch(domain + '/users/', {
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify(addUserData),
  })
    .then(handleJsonResponse)
    .then((result) => dispatch(ADD_USER.SUCCESS(result)))
    .catch((err) => Promise.reject(dispatch(ADD_USER.FAIL(err))));
};

// get user data
const GET_USER = createActions('getUser');
export const getUser = () => (dispatch, getState) => {
  dispatch(GET_USER.START());

  const { username } = getState().auth.login.result;

  return fetch(domain + '/users/' + username, {
    method: 'GET',
    headers: jsonHeaders,
  })
    .then(handleJsonResponse)
    .then((result) => dispatch(GET_USER.SUCCESS(result)))
    .catch((err) => Promise.reject(dispatch(GET_USER.FAIL(err))));
};

const GET_PROFILE_SUM = createActions('getProfileSum');
export const getProfileSum = (getProfileSumData) => (dispatch, getState) => {
  dispatch(GET_PROFILE_SUM.START());

  const { username, token } = getState().auth.login.result;

  return fetch(domain + '/users/' + username, {
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + token, ...jsonHeaders },
    body: JSON.stringify(getProfileSumData),
  })
    .then(handleJsonResponse)
    .then((result) => dispatch(GET_PROFILE_SUM.SUCCESS(result)))
    .catch((err) => Promise.reject(dispatch(GET_PROFILE_SUM.FAIL(err))));
};

// set profile picture
const GET_IMAGE_PRO = createActions('getImagePro');
export const getImagePro = (getImageProData) => (dispatch, getState) => {
  dispatch(GET_IMAGE_PRO.START());

  let data = new FormData(getImageProData);

  const { username, token } = getState().auth.login.result;

  return fetch(domain + `/users/${username}/picture`, {
    method: 'PUT',
    headers: { Authorization: 'Bearer ' + token, Accept: 'application/json' },
    body: data,
  })
    .then(handleJsonResponse)
    .then((result) => dispatch(GET_IMAGE_PRO.SUCCESS(result)))
    .catch((err) => Promise.reject(dispatch(GET_IMAGE_PRO.FAIL(err))));
};

//Delte user
const DELETE_USER = createActions('deleteUsario');
export const deleteUsario = (deleteUserData) => (dispatch, getState) => {
  dispatch(DELETE_USER.START());

  const { username, token } = getState().auth.login.result;

  return fetch(domain + `/users/${username}`, {
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + token, ...jsonHeaders },
  })
    .then(handleJsonResponse)
    .then((result) => dispatch(DELETE_USER.SUCCESS(result)))
    .catch((err) => Promise.reject(dispatch(GET_IMAGE_PRO.FAIL(err))))
    .then((result) => dispatch(LOGOUT.SUCCESS(result)));
};

export const reducers = {
  addUser: createReducer(asyncInitialState, {
    ...asyncCases(ADD_USER),
  }),
  getUser: createReducer(asyncInitialState, {
    ...asyncCases(GET_USER),
  }),
  getProfileSum: createReducer(asyncInitialState, {
    ...asyncCases(GET_PROFILE_SUM),
  }),
  getImagePro: createReducer(asyncInitialState, {
    ...asyncCases(GET_IMAGE_PRO),
  }),
  deleteUsario: createReducer(asyncInitialState, {
    ...asyncCases(DELETE_USER),
  }),
};
