import useSWR from "swr";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import toSecondsFromEpoch from "../../utils/toSecondsFromEpoch";
import Heading from "../Heading/Heading";
import Control from "../Control/Control";
import Loading from "../Loading/Loading";
import Body from "../Body/Body";
import Card from "../Card/Card";
import WaitTime from "../WaitTime/WaitTime";
import CreateReservationButton from "../CreateReservationButton/CreateReservationButton";
import styles from "./Queue.module.scss";

const placeMap = {
  2: "nd",
  3: "rd",
};

const baseApi = process.env.NEXT_PUBLIC_API_BASE_URL;
const pollInterval = process.env.NEXT_PUBLIC_WAIT_TIME_POLL_INTERVAL;
const sessionLength = process.env.NEXT_PUBLIC_SESSION_LENGTH;

const Queue = () => {
  const router = useRouter();
  const [placeText, setPlaceText] = useState("");
  const { query } = router;
  const { rid } = query;

  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    return await response.json();
  };

  const { data, error } = useSWR(
    `${baseApi}/refresh-reservation/${rid}`,
    fetcher,
    {
      refreshInterval: pollInterval,
    }
  );

  const waitTime = data?.wait_time;

  useEffect(() => {
    if (data?.teleop_url && data?.session_length) {
      let expiry = new Date();
      expiry.setSeconds(expiry.getSeconds() + data.session_length);

      const expirySecondsFromEpoch = toSecondsFromEpoch(expiry);

      router.push(
        `/${rid}/teleop?teleop_url=${encodeURIComponent(
          data?.teleop_url
        )}&expiry=${expirySecondsFromEpoch}&session_length=${
          data.session_length
        }`
      );
    }
  }, [data, router]);

  useEffect(() => {
    if (waitTime) {
      const place = waitTime / sessionLength;

      if (place === 1) {
        return setPlaceText("next");
      }

      const placeToString = String(place);
      const lastNumber = String(place).charAt(placeToString.length - 1);
      const placeToText = placeMap[lastNumber]
        ? `${place}${placeMap[lastNumber]}`
        : `${place}th`;

      setPlaceText(placeToText);
    }
  }, [waitTime]);

  if (error) {
    return (
      <div className={styles.header}>
        <Heading as="display">Your reservation was not found</Heading>
        <CreateReservationButton buttonText="Hop back in line" />
      </div>
    );
  }

  if (!placeText) {
    return <Loading />;
  }

  return (
    <div>
      <div className={styles.header}>
        <WaitTime
          time={waitTime}
          text={
            <span>
              Estimated <br /> wait
            </span>
          }
        />
        <Heading as="display">You're {placeText} in line</Heading>
        <Body size="M">
          As soon as it is your turn you will be dropped into the teleop session
          and your 1 minutes will begin.
        </Body>
      </div>

      <div className={styles.grid}>
        <Card>
          <Heading as="h1">While you wait...</Heading>
          <Body size="L">
            Formant teleoperation controls are very intuitive. All you need is
            your finger and a touch screen, a mouse, or a keyboard. We have put
            together a quick video to get you familiar with the controls and
            provide a few tips to maximize your time with Spot.
          </Body>
        </Card>
      </div>
      <Control />
    </div>
  );
};

export default Queue;
