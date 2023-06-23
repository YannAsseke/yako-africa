import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import HeaderYako from '../common/HeaderYako';
import PrivacyContent from './PrivacyContent';
import SearchArea from './SearchArea';

const index = () => {
  return (
    <>
      <HeaderYako/>
      {/* <Breadcrumb title="HELP CENTER" subtitle="Help Center" /> */}
      {/* <SearchArea/> */}
      <PrivacyContent/>
      <FooterTwo/>
    </>
  );
};

export default index;