import React from 'react';

const MainBanner = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-md-6' style={{cursor: "pointer"}}>
          <img alt='' src='../img/Main/banner_1.jpg' style={{width: "100%"}}/>
        </div>
        <div className='col-md-6' style={{cursor: "pointer"}}>
          <img alt='' src='../img/Main/banner_2.jpg' style={{width: "100%"}}/>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;