import React from 'react';
import BrandArea from '../common/BrandArea';
import FooterFour from '../common/Footers/FooterFour';
import Header from '../common/Header';
import Testimonial from '../Home/Testimonial';
import AboutFive from './AboutFive';
import BlogFive from './BlogFive';
import HeroAreaFive from './HeroAreaFive';
import PortfolioFive from './PortfolioFive';
import ServicesFive from './ServicesFive';
import VideoAreaFive from './VideoAreaFive';
import FooterTwo from '../common/Footers/FooterTwo';
import HeaderYako from '../common/HeaderYako';
import ServiceContact from '../../components/Service-details/ServiceContact';

const HomeFiveMain = () => {
  return (
    <>
      <HeaderYako/>
      <HeroAreaFive/>
      {/* <AboutFive/>
      <ServicesFive/>
      <VideoAreaFive/>
      <PortfolioFive/>
      <BrandArea homeFiveBrand={true} brand="-2" />
      <Testimonial/>
      <BlogFive/> */}
      <FooterTwo/>
    </>
  );
};

export default HomeFiveMain;