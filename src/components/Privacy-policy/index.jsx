import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/HeaderYako';
import PrivacyContent from './PrivacyContent';
import Contact from '../Contact/ContactArea';


const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="Actualités" subtitle="ACTUALITES" />
      <PrivacyContent/>
      <Contact />
      <FooterTwo/>
    </>
  );
};

export default index;