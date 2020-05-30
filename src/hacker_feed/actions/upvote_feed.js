import * as types from '../action_types';

//If there is an API for upvote, it can be based on ajax call
export const upVoteFeed = (idx) => {
    return (dispatch) => {
        dispatch({
            type: types.UPVOTE_FEED_SUCCESS,
            payload: idx
        });
        
    };
};

