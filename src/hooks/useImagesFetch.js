import {useEffect} from 'react';

import {IMAGE_ACTION_TYPES} from '../constants'
 
export const useImagesFetch = (page, dispatch) => {
  const API_URL = `https://picsum.photos/v2/list?page=${page}&limit=10`;

  useEffect(()=>{
    dispatch({type: IMAGE_ACTION_TYPES.FETCHING_IMAGES, fetching:true});

    fetch(API_URL)
      .then(data=> data.json())
      .then(images => {
        dispatch({type: IMAGE_ACTION_TYPES.STACK_IMAGES, images});
        dispatch({type: IMAGE_ACTION_TYPES.FETCHING_IMAGES, fetching: false});
      })
      .catch(()=> {
        dispatch({type: IMAGE_ACTION_TYPES.FETCHING_IMAGES, fetching: false})
      })
      
  }, [page, dispatch, API_URL])
}