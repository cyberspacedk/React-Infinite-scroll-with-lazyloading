import React, {useReducer, useRef} from 'react';  

import ImageCard from '../ImageCard';

import { imageReducer, imageInitialState, pageReducer, pageInitialState} from '../../utils' 
import {useImagesFetch, useInfiniteScroll, useLazyLoading} from '../../hooks';

import '../../index.css';

const  App = ()=> {
const [imgData, imgDispatch]=useReducer(imageReducer, imageInitialState);
const [pageData, pageDispatch]=useReducer(pageReducer, pageInitialState); 
const bottomBoundaryRef = useRef()  


useImagesFetch(pageData.page, imgDispatch);
useInfiniteScroll(bottomBoundaryRef, pageDispatch);
useLazyLoading('.card-img-top', imgData.images)

  return (
    <div className="gallery">
      <nav className="navbar bg-light">
        <div className="container">
          <a className="navbar-brand" href="/#">
            <h2>Infinite scroll and image lazy loading</h2>
          </a>
        </div>
      </nav>

      <div id='images' className="container">
        <div className="row"> 
          {imgData.images.map(({ author, download_url }) => (
            <ImageCard 
              key={download_url} 
              author={author}
              url={download_url}
            />
          ))}            
        </div>
      </div>

      {imgData.fetching && (
        <div className="text-center bg-secondary m-auto p-3">
          <p className="m-0 text-white">Getting images</p>
        </div>
      )}
      
      <div id='page-bottom-boundary' style={{ border: '1px solid red' }} ref={bottomBoundaryRef} />
    </div>
  );
}

export default App;
