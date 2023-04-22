/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Therd = (props) => {
  return (
    <>
      <div className="bg-light text-center container shadow my-3 py-1">
        <div className="container">
          <div className="row py-2">
            <div className="col-md-4 col-sm-0">
              <img className='rounded' src={props.imgSrc}/>
            </div>
            <div className="col-md-8 col-sm-11 text-center">
              <p className="h3">{props.txt}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Therd;
