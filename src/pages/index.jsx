import dynamic from 'next/dynamic';
import HomeYakoMain from '../components/Home-yako';
import SEO from '../components/seo';

const index = () => {
  return (
    <>
      <SEO pageTitle="Home" />
      <HomeYakoMain/>
    </>
  );
};

export default dynamic(()=> Promise.resolve(index), {ssr: false});