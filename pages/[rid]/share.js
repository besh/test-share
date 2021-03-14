import Head from "next/head";
import Header from "../../components/header";
import Share from "../../components/Share/Share";

const SharePage = ({ rid, referer }) => {
  const description = "My pose with Spot";
  const pageTitle = "formant spot teleop";
  const imgSrc = `https://geppetto-clips.formant.io/${rid}.png`;
  const videoSrc = `https://geppetto-clips.formant.io/${rid}.mp4`;
  const siteUrl = "http://formant.io/";

  return (
    <>
      <Head>
        <meta
          property="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta charSet="utf-8" />
        <meta property="description" content={description}></meta>
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:type" content="video.movie" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="Formant" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:video:secure_url" content={videoSrc} />
        <meta property="og:video" content={videoSrc} />
        <meta property="og:image" content={imgSrc} />

        {/* twiiter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:site" content="@FormantInc" />
        <meta property="twitter:creator" content="@FormantInc" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:image:src" content={imgSrc} />

        <title>{pageTitle}</title>
      </Head>
      {/* <Header /> */}
      <Share id={rid} pageTitle={pageTitle} videoSrc={videoSrc} />
    </>
  );
};

export async function getServerSideProps({ params }) {
  return {
    props: {
      rid: params?.rid,
    },
  };
}

export default SharePage;
