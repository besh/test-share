import { useRouter } from "next/router";
import Header from "../../../components/header";

const Comment = () => {
  const router = useRouter();
  const { id, comment } = router.query;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description}></meta>
        + <meta property="og:title" content={pageTitle} key="ogtitle" />
        + <meta property="og:description" content={description} key="ogdesc" />
        +{" "}
        <meta
          property="og:video"
          content={`https://geppetto-clips.formant.io/${id}.mp4`}
          key="ogdesc"
        />
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <h1>Post: {id}</h1>
      <h1>Comment: {comment}</h1>
    </>
  );
};

export default Comment;
