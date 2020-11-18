import { ActionTypes, Action } from '../actions/actions'

export interface State {
  rolls: string[]
}

export const initialState: State = {
  rolls: ["ds", "asd"]
}

export function reducer(state: State = initialState, action: Action) {

  switch (action.type) {
    case ActionTypes.ADD_ROLL: {
      return {
        ...state,
        rolls: [...state.rolls, action.payload.roll]
      }
    }

    default:
      return state

  }
}