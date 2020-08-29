import {PAGE_ACTION_TYPES} from '../constants';

export const pageInitialState = {
  page: 0
}

export const pageReducer = (state, action)=> {
  switch(action.type){
    case PAGE_ACTION_TYPES.ADVANCE_PAGE:
      return {...state, page: state.page++};     
    default:  return state
  }
} 
