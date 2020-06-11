import {
  domain,
  jsonHeaders,
  handleJsonResponse,
  asyncInitialState,
  asyncCases,
  createActions,
  createReducer,
} from "./helpers";

// Add user
const ADD_USER = createActions("addUser");
export const addUser = (addUserData) => (dispatch) => {
  dispatch(ADD_USER.START());

  return fetch(domain + "/users/", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(addUserData),
  })
    .then(handleJsonResponse)
    .then((result) => dispatch(ADD_USER.SUCCESS(result)))
    .catch((err) => Promise.reject(dispatch(ADD_USER.FAIL(err))));
};

// get user data
const GET_USER = createActions("getUser");
export const getUser = () => (dispatch, getState) => {
  dispatch(GET_USER.START());

  const { username } = getState().auth.login.result;

  return fetch(domain + "/users/" + username, {
    method: "GET",
    headers: jsonHeaders,
  })
    .then(handleJsonResponse)
    .then((result) => dispatch(GET_USER.SUCCESS(result)))
    .catch((err) => Promise.reject(dispatch(GET_USER.FAIL(err))));
};

export const reducers = {
  addUser: createReducer(asyncInitialState, {
    ...asyncCases(ADD_USER),
  }),
  getUser: createReducer(asyncInitialState, {
    ...asyncCases(GET_USER),
  }),
};
