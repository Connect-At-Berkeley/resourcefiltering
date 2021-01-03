import React from 'react';
import './App.css';
import Popup from 'reactjs-popup';
import Scale from './Scale';

export default () => (
  <Popup
    trigger={<button style={{"margin-left": "1vw"}}
    className="btn-style">Rate Our Matching</button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">How satisfied are you with the resources provided?</div>
        <div className="content">
        <Scale/>
        <div className="rating-num">
          <h3>1</h3>
          <h3>2</h3>
          <h3>3</h3>
          <h3>4</h3>
          <h3>5</h3>
        </div>
        </div>
        <div className="actions">
          <button
            className="btn-style3"
            onClick={() => {
              // console.log('modal closed ');
              close();
            }}
          >
            Submit Rating
          </button>
        </div>
      </div>
    )}
  </Popup>
);