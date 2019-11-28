import {  IActionType, IStateAuth } from '../../types';
export default (state:IStateAuth, action: IActionType) => {
  switch (action.type) {
    case 'apa':
        return{
          ...state
        }


    default:
        return state
  }
}