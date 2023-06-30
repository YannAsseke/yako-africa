import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import HeaderYako from '../common/HeaderYako';
import PortfolioOne from '../common/Portfolio/PortfolioOne';
import Contact from '../Contact/ContactArea';


const index = () => {
  return (
    <>
      <HeaderYako/>
      <Breadcrumb title="NOS PARTENAIRES"/>
      <PortfolioOne/>
      <Contact />
      <FooterTwo/>
    </>
  );
};

export default index;