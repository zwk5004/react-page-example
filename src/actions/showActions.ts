import { createAction } from "redux-actions";

import { cstbapi } from "../apis/cstbapi";

export const getShowsSuccess = createAction("SHOWS/GET_SUCCESS");
export const selectShowSuccess = createAction("SHOWS/SELECT_SUCCESS");
export const getShowThumbnailsSuccess = createAction(
  "SHOWS/GET_THUMBNAILS_SUCCESS"
);

export const getShows = (
  query?: string | null,
  cursor?: string | null
) => dispatch => {
  return cstbapi
    .get("/show/searchShows", { params: { query, cursor } })
    .then(response => dispatch(getShowsSuccess(response.data)));
};

export const getShow = (name: string) => dispatch => {
  return cstbapi
    .get(`/show/${name}`)
    .then(response => dispatch(selectShowSuccess(response.data)));
};

export const getThumbnails = (paths: string[]) => dispatch => {
  return cstbapi
    .post("/show/thumbnails", paths)
    .then(response => dispatch(getShowThumbnailsSuccess(response.data)));
};
