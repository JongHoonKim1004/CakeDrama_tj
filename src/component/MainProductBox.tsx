import React, { useState } from 'react';
import mainData2 from './../db/Main2';
import CenterMode from './MainBox';

const MainProductBox = () => {
  let style1 = {
    marginTop: "50px",
    width: "1200px",
    height: "auto", 
    margin: " 0 auto",
  }

  let [bread,serBread] = useState(mainData2);

  return (
    <div style={style1}>
      <div className='row' style={{textAlign: "center"}}>
        <p style={{fontSize: "45px", margin: "50px 0", fontWeight: "600"}}>Cake Drama</p>
        <p style={{margin: " 10px 0 40px", fontSize: "20px"}}>케익드라마의 케익을 소개합니다</p>
      </div>
      <div className='row'>
        <CenterMode/>
      </div>
    </div>
  );
};

export default MainProductBox;