import React from 'react';
import FooterFour from '../common/Footers/FooterFour';
import PortfolioOne from '../common/Portfolio/PortfolioOne';
import HeaderSix from './HeaderSix';
import HeroAreaSix from './HeroAreaSix';
import FooterTwo from '../common/Footers/FooterTwo';
import HeaderYako from '../common/HeaderYako';
import ServiceContact from '../../components/Service-details/ServiceContact';

const index = () => {
  return (
    <>
      <HeaderYako/>
      <HeroAreaSix/>
      <ServiceContact />
      <FooterTwo/>
    </>
  );
};

export default index;