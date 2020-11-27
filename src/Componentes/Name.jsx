import React, { Fragment } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons';

const FirstView = () => {
  return (  
    <Fragment>
      <div className= "firstView">
      <h3 className= "name">Hola Camila</h3>
      <FontAwesomeIcon icon={faBell}/>
      </div>
    </Fragment>
  );
}
export default FirstView;