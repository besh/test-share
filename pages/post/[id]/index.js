import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../../components/header";
import Head from "next/head";

const Post = ({ id }) => {
  const router = useRouter();
  const description = "My pose with Spot";
  const pageTitle = "formant spot teleop";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description}></meta>
        <meta name="og:title" content={pageTitle} key="ogtitle" />
        <meta name="og:description" content={description} key="ogdesc" />
        <meta
          name="og:video"
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

export async function getServerSideProps(context) {
  console.log(context);
  return {
    props: {
      id: context.query.id,
    }, // will be passed to the page component as props
  };
}

export default Post;
