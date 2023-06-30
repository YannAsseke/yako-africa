import React from 'react';
import FooterTwo from '../common/Footers/FooterTwo';
import HeaderYako from '../common/HeaderYako';
import PortfolioThirteen from './PortfolioThirteen';
import AboutArea from './AboutArea';
import Contact from '../Contact/ContactArea';

const index = () => {
  return (
    <>
      <HeaderYako/>
      <PortfolioThirteen/>
      {/* <AboutArea/> */}
      <Contact/>
      <FooterTwo/>
    </>
  );
};

export default index;