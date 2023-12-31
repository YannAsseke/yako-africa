import Head from "next/head";

const SEO = ({ pageTitle,font }) => (
  <>
    <Head>
      <title>
        {pageTitle} || Yako Africa Assurances Vie
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Yako Africa Assurances Vie" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link href={font} rel="stylesheet" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;