import useSWR from "swr";
import Head from "next/head";
import "../styles/index.scss";

const baseApi = process.env.NEXT_PUBLIC_API_BASE_URL;
const pollInterval =
  process.env.NEXT_PUBLIC_ACCEPTING_RESERVATIONS_POLL_INTERVAL;

export default function App({ Component, pageProps }) {
  const { data } = useSWR(`${baseApi}/accepting-reservations`, {
    refreshInterval: pollInterval,
    loadingTimeout: 5000,
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" initial-scale="1" />
      </Head>
      <Component acceptingReservations={data} {...pageProps} />
    </>
  );
}
