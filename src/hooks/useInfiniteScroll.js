import {useEffect, useCallback} from 'react';

import {PAGE_ACTION_TYPES} from '../constants';
 
export const useInfiniteScroll = (intersectionTarget, dispatch)=> {
  const scrollObserver = useCallback(targetNode => {
    const observerHandler = entries => {
      entries.forEach(entryNode => { 
        if(entryNode.isIntersecting) dispatch({type: PAGE_ACTION_TYPES.ADVANCE_PAGE})
      })
    }
    const observer = new IntersectionObserver(observerHandler);
    observer.observe(targetNode)
  }, [dispatch]);

  useEffect(()=>{
    if(intersectionTarget.current) scrollObserver(intersectionTarget.current)
  }, [scrollObserver, intersectionTarget])
}