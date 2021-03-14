import Head from "next/head";
import Header from "../../components/header";
import Clip from "../../components/Clip/Clip";

const ClipPage = ({ rid, referer }) => {
  const description = "My pose with Spot";
  const pageTitle = "formant spot teleop";
  const imageSrc = `https://geppetto-clips.formant.io/${rid}.png`;
  const videoSrc = `https://geppetto-clips.formant.io/${rid}.mp4`;
  const siteUrl = "http://formant.io/";
  const shareBaseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL;

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
        <meta property="og:type" content="video.other" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="Formant" />
        <meta property="og:description" content={description} key="ogdesc" />

        <meta property="og:video" content={videoSrc} />
        <meta property="og:video:url" content={videoSrc} />
        <meta property="og:video:secure_url" content={videoSrc} />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="480" />
        <meta property="og:video:height" content="204" />

        <meta property="og:image" content={imageSrc} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="480" />
        <meta property="og:image:height" content="204" />

        {/* twiiter */}
        <meta property="twitter:card" content="player" />
        <meta name="twitter:account_id" content="1052418293636714497" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:site" content="@FormantInc" />
        <meta property="twitter:creator" content="@FormantInc" />
        <meta property="twitter:url" content={siteUrl} />
        <meta name="twitter:domain" content="formant.com" />

        <meta property="twitter:image" content={imageSrc} />
        <meta property="twitter:image:src" content={imageSrc} />

        <meta
          name="twitter:player"
          content={`${shareBaseUrl}/${id}-${currentIndex}/clip`}
        />
        <meta name="twitter:player:width" content="435" />
        <meta name="twitter:player:height" content="184" />

        <title>{pageTitle}</title>
      </Head>
      {/* <Header /> */}
      <Clip
        rid={rid}
        pageTitle={pageTitle}
        videoSrc={videoSrc}
        imageSrc={imageSrc}
      />
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

export default ClipPage;
