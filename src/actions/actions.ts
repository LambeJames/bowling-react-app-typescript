export enum ActionTypes {
  ADD_ROLL = 'ADD_ROLL',
  SCORE_GAME = 'SCORE_GAME'
}

export interface AddRollAction { type: ActionTypes.ADD_ROLL, payload: { roll: string } }
export interface InitAction { type: 'init', payload: {} }

export function addRoll(score: string): AddRollAction {
  return {
    type: ActionTypes.ADD_ROLL,
    payload: {
      roll: score
    }
  }
}

export type Action = AddRollAction | InitAction