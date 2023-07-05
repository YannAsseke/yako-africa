import dynamic from 'next/dynamic';
import AboutMain from '../components/Qui-Sommes-Nous'
import SEO from '../components/seo';

const About = () => {
  return (
    <>
      <SEO pageTitle="Qui sommes nous" />
      <AboutMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(About), { ssr: false });