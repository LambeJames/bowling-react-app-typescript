import { combineReducers } from 'redux'
import * as fromBowlingScoreReducers from './bowlingScoreReducer'

export interface State {
    rolls: fromBowlingScoreReducers.State
}

export const initialState: State = {
    rolls: fromBowlingScoreReducers.initialState
}

export const reducer = combineReducers<State>({
    rolls: fromBowlingScoreReducers.reducer
})