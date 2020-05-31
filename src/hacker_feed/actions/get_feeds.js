import axios from 'axios';

import { ENDPOINTS_BASE_URL, NO_OF_POSTS_PER_PAGE } from '../constants';
import * as types from '../action_types';

export const getFeeds = (pageNum = 0) => {
    return (dispatch) => {
        dispatch(getFeedStarted());
        axios
            .get(ENDPOINTS_BASE_URL, {
                params: {
                    tags: 'story',
                    hitsPerPage: NO_OF_POSTS_PER_PAGE,
                    page: pageNum
                }
            })
            .then((res) => {
                dispatch(getFeedSuccess(res.data));
            })
            .catch((err) => {
                dispatch(getFeedFailure(err.message));
            });
    };
};

const getFeedStarted = () => ({
    type: types.GET_FEED_STARTED
});

const getFeedSuccess = (data) => {
    return {
        type: types.GET_FEED_SUCCESS,
        payload: data
    };
};

const getFeedFailure = (error) => ({
    type: types.GET_FEED_FAILURE,
    payload: {
        error
    }
});
