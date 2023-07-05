import dynamic from 'next/dynamic';
import HomeFourMain from '../components/Home-four';
import SEO from '../components/seo';

const HomeFour = () => {
  return (
    <>
      <SEO pageTitle="Particuliers" />
      <HomeFourMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(HomeFour), { ssr: false });