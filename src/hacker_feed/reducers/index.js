import * as types from '../action_types';
import * as feedReducer from './feed_reducer';

// Initial state of the application.
const initialState = {
    loading: false,
    feeds: {},
    error: null
};

// action types
const {
    GET_FEED_STARTED,
    GET_FEED_SUCCESS,
    GET_FEED_FAILURE,
    UPVOTE_FEED_SUCCESS
} = types;

// Helper function to avoid switch cases and running the reducers
const createReducer = (initState, handlers) => {
    return function reducer(state = initState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        }
        return state;
    };
};

// Global handler for all the asynchronous actions to start loading
const startLoading = (state, action) => {
    return {
        ...state,
        loading: true
    };
};

// Global handler to report all errors
const reportError = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.payload.error
    };
};

// actual mapping the reducers to the respective slice reducers.
export default createReducer(initialState, {
    [GET_FEED_STARTED]: startLoading,
    [GET_FEED_SUCCESS]: feedReducer.getFeed,
    [GET_FEED_FAILURE]: reportError,
    [UPVOTE_FEED_SUCCESS]: feedReducer.upVoteFeed
});
