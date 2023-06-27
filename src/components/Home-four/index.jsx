import React from 'react';
import BrandArea from '../common/BrandArea';
import Footer from '../common/Footers/Footer';
import FooterTwo from '../common/Footers/FooterTwo';
import HeaderYako from '../common/HeaderYako';
import AboutFour from './AboutFour';
import BlogFour from './BlogFour';
import HeroSliderFour from './HeroSliderFour';
import CtaFour from './CtaFour';
import PortfolioFour from './PortfolioFour';
import ServicesFour from './ServicesFour';
import TestimonialFour from './TestimonialFour';
import VideoAreaFour from './VideoAreaFour';
import ServiceContact from '../../components/Service-details/ServiceContact';

const HomeFourMain = () => {
  return (
    <>
      <HeaderYako/>
      <ServicesFour/> 
      {/* <AboutFour/>
      <ServicesFour/>
      <VideoAreaFour/>
      <PortfolioFour/>
      <CtaFour/>
      <BrandArea hideTopBar={true} />
      <TestimonialFour/>
      <BlogFour/> */}
      <FooterTwo/>
    </>
  );
};

export default HomeFourMain;