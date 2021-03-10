import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../../components/header";
import Head from "next/head";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const description = "My pose with Spot";
  const pageTitle = "formant spot teleop";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description}></meta>
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta
          property="og:video"
          content={`https://geppetto-clips.formant.io/${id}.mp4`}
          key="ogdesc"
        />
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <h1>Post: {id}</h1>
      <ul>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Post;
