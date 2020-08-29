import {useEffect, useCallback, useRef} from 'react';

export const useLazyLoading = (imageSelector, imageItems)=> {
  const lazyLoadObserver = useCallback(intersectionTarget=> {  
    const options = {
      rootMargin: "100px 0px",
      threshold: 0.01,
    };

    const observer =  new IntersectionObserver((entries, localObserver) => {
      entries.forEach(entryNode=> {  
        if(entryNode.isIntersecting){
          const currentImgNode = entryNode.target;
          const updatedAttSrc = currentImgNode.dataset.src
          if(updatedAttSrc) currentImgNode.src = updatedAttSrc;
  
          localObserver.disconnect(); 
        }
      })
    }, options);

    observer.observe(intersectionTarget);
  },[]);

  const imagesRef = useRef(null);

  useEffect(()=>{
    const imageNodes = document.querySelectorAll(imageSelector);
    imagesRef.current = imageNodes;

    if(imageNodes) imageNodes.forEach(imageNode => lazyLoadObserver(imageNode)); 
  }, [lazyLoadObserver, imagesRef, imageSelector, imageItems]);

}