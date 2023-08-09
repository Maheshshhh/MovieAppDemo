import databaseHandler from "../database/databaseHandler";

export const actionTypes = {
    USER_DETAILS: "USER_DETAILS",
    ADD_TO_FAVORITE : 'ADD_TO_FAVORITE',
    REMOVE_FROM_FAVORITE : 'REMOVE_FROM_FAVORITE',
    ADD_TO_WATCHLIST : 'ADD_TO_WATCHLIST',
    REMOVE_FROM_WATCHLIST : 'REMOVE_FROM_WATCHLIST',

  };

  export const setUserDetails = (data) => ({
    type: actionTypes.USER_DETAILS,
    payload: data,
  });

  export const getUserDetails = (params) => async (dispatch) => {
    let userDetails = await databaseHandler.fetchUserDetails()
    console.log('userDetails----', userDetails)
    dispatch(setUserDetails(userDetails));
  };

  export const addToFavorite = (data) => ({
    type: actionTypes.ADD_TO_FAVORITE,
    payload: data,
  });

  export const removeFromFavorite = (data) => ({
    type: actionTypes.REMOVE_FROM_FAVORITE,
    payload: index,
  });

  export const ADD_TO_WATCHLIST = (data) => ({
    type: actionTypes.ADD_TO_WATCHLIST,
    payload: data,
  });

  export const removeFromWatchList = (data) => ({
    type: actionTypes.REMOVE_FROM_WATCHLIST,
    payload: index,
  });
