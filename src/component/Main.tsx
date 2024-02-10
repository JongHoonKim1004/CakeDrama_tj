import React, { useState } from 'react';
import DarkVariantExample from './DarkVarientExample';
import MainTitle from './MainTitle';
import MainProductList from './MainProductList';
import MainProductBox from './MainProductBox';
import MainBanner from './MainBanner';


const Main = () => {
  return (
    <div>
      <DarkVariantExample/>
      <MainProductBox/>
      <MainBanner/>
      <MainTitle/>
      <MainProductList/>
    </div>
  );
};

export default Main;