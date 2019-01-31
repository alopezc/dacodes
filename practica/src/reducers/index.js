import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import playersReducer from './playersReducer';

export default combineReducers({
    games: gamesReducer,
    players: playersReducer
});
