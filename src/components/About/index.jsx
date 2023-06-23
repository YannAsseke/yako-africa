import React from 'react';
import BrandArea from '../common/BrandArea';
import Breadcrumb from '../common/Breadcrumb';
import Chrono from './Chronologie';
import Feature1 from './Feature1';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import HeaderYako from '../common/HeaderYako';
import TestimonialFour from '../Home-four/TestimonialFour';
import AboutArea from './AboutAreaAbout';
import AboutCounter from './AboutCounter';
import CtaImages from './CtaImages';
import NeroxAwards from './NeroxAwards';
import Footer from '../common/Footers/Footer';

const index = () => {
  return (
    <>
      <HeaderYako/>
      <Breadcrumb title="Qui sommes nous" subtitle=" About Us" />
      <Chrono/>
      <Feature1/>
      <AboutArea/>
      {/* <AboutArea/>
      <AboutCounter/>
      <CtaImages/>
      <BrandArea brand="-2" about="about-brand" />
      <TestimonialFour/>
      <NeroxAwards/>*/}
      <FooterTwo/> 
    </>
  );
};

export default index;