import dynamic from 'next/dynamic';
import HomeFiveMain from '../components/Home-five';
import SEO from '../components/seo';

const HomeFive = () => {
  return (
    <>
      <SEO pageTitle="Professionnels & Entreprises" />
      <HomeFiveMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(HomeFive), { ssr: false });