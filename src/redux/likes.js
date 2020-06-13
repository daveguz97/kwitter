import {
    domain,
    jsonHeaders,
    handleJsonResponse,
    asyncInitialState,
    asyncCases,
    createActions,
    createReducer,
  } from './helpers';

  const url = domain + "/likes";

  const CREATE_LIKE = createActions("createlike");
  export const createlike = likeData => (dispatch, getState) => {
    dispatch(createlike.START());
    const token = getState().auth.login.result.token;
    return fetch(url , {
      method: "POST",
      headers:{ Authorization: "Bearer " + token, ...jsonHeaders },
      body: JSON.stringify(createlikeData)
    })
      .then(handleJsonResponse)
      .then(result => dispatch(CREATE_LIKE.SUCCESS(result)))
      .catch(err => Promise.reject(dispatch(CREATE_LIKE.FAIL(err))));
  };
  
const DELETE_LIKE = createActions('deleteLike');
export const deleteLike = (likeId) => (dispatch, getState) => {
  dispatch(DELETE_LIKE.START());

  const token = getState().auth.login.result.token;
  return fetch( url + "/" + likeId,{
 
    method: 'DELETE',
    headers:{ Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then((result) => dispatch(DELETE_LIKE.SUCCESS(result)))
    .catch((err) => Promise.reject(dispatch(DELETE_LIKE.FAIL(err))))
  
};

   
export const reducers = {
    createlike: createReducer(asyncInitialState, {
        ...asyncCases(CREATE_LIKE),
     deleteLike: createReducer(asyncInitialState, {
      ...asyncCases(DELETE_LIKE),
     })
    }),
  
}