import { combineReducers } from 'redux';
import { constants as boardConstants, reducers } from '../hacker_feed';

export default combineReducers({
    [boardConstants.NAME]: reducers
});
