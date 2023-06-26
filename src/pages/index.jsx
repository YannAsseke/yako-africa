import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import HomeYakoMain from '../components/Home-yako';
import SEO from '../components/seo';
import Modal from '../components/Modal/Modal';

const index = () => {
  const [openModal, setOpenModal] = useState(true);
  return (
    <>
      <Modal open={openModal} onClose={()=> setOpenModal(false)}/>
      <SEO pageTitle="Home" />
      <HomeYakoMain/>
    
   </>
  );
};

export default dynamic(()=> Promise.resolve(index), {ssr: false});