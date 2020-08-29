import {IMAGE_ACTION_TYPES} from '../constants' 

export const imageInitialState = {
  images: [],
  fetching: true
}

export const imageReducer = (state, action)=> {
  switch(action.type){
    case IMAGE_ACTION_TYPES.STACK_IMAGES:
      return {...state, images: [...state.images, ...action.images]};
    case IMAGE_ACTION_TYPES.FETCHING_IMAGES:
      return {...state, fetching:action.fetching};
    default:  return state
  }
} 
