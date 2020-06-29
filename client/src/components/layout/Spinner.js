import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
  <Fragment>
    <div className='spin-ctn'>
      <img className='spin-img' src={spinner} alt='Loading...' />
    </div>
  </Fragment>
);
