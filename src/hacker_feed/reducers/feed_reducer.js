//Simple sliced reducer to get the feeds
export const getFeed = (state, action) => {
    return {
        ...state,
        loading: false,
        ...action.payload,
        error: null
    };
};
