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

const PROFILE_SUMMARY = createActions("profileSummary");
export const profileSummary = (profileSummaryData) => (dispatch, getState) => {
  dispatch(PROFILE_SUMMARY.START());

  const { username, token } = getState().auth.login.result;

  return fetch(domain + "/users/" + username, {
    method: "PATCH",
   headers: { Authorization: "Bearer " + token, ...jsonHeaders },
   body: JSON.stringify(profileSummaryData),
  })
    .then(handleJsonResponse)
    .then((result) => dispatch(PROFILE_SUMMARY.SUCCESS(result)))
    .catch((err) => Promise.reject(dispatch(PROFILE_SUMMARY.FAIL(err))));
};

const GET_IMAGE_PROFILE = createActions("getImageProfile");
export const getImageProfile = (getImageProfileData) => (dispatch, getState) => {
  dispatch(GET_IMAGE_PROFILE.START());
  let data = new FormData(getImageProfileData)
  const { username, token } = getState().auth.login.result;

  return fetch(domain + `/users/${username}/picture`,  {
    method: "PUT",
   headers: { Authorization: "Bearer " + token, Accept:"application/json" },
   body: data,
  })
    .then(handleJsonResponse)
    .then((result) => dispatch(GET_IMAGE_PROFILE.SUCCESS(result)))
    .catch((err) => Promise.reject(dispatch(GET_IMAGE_PROFILE.FAIL(err))));
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
  profileSummary: createReducer(asyncInitialState, {
    ...asyncCases(PROFILE_SUMMARY),
  }),
  getImageProfile: createReducer(asyncInitialState, {
    ...asyncCases(GET_IMAGE_PROFILE),
  }),

};

