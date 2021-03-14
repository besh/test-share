import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import toSecondsFromEpoch from "../../utils/toSecondsFromEpoch";
import toMediaSuffixMap from "../../utils/toMediaSuffixMap";
import styles from "./Teleop.module.scss";

import Timer from "../Timer/Timer";

const startRecordingTime =
  process.env.NEXT_PUBLIC_START_RECORDING_COUNTDOWN_TIME;
const countDownTime = process.env.NEXT_PUBLIC_RECORDING_COUNTDOWN_TIME;

const Teleop = () => {
  const { NEXT_PUBLIC_API_BASE_URL } = process.env;
  const router = useRouter();
  const [remainingTime, setRemainingTime] = useState();
  const [clipTime, setClipTime] = useState();
  const [recordingCountDown, setRecordingCountDown] = useState(countDownTime);
  const [clipSuffix, setClipSuffix] = useState(toMediaSuffixMap);
  const [numberOfClips, setNumberOfClips] = useState(toMediaSuffixMap.length);
  const [recording, setRecording] = useState(false);
  const { query } = router;
  const { rid, expiry, teleop_url, session_length } = query;

  useEffect(() => {
    const sessionTime = () => {
      const timer = setInterval(() => {
        const currentSecondsFromEpoch = toSecondsFromEpoch();
        const difference = expiry - currentSecondsFromEpoch;

        if (difference < 0) {
          setRemainingTime(0);
          router.push(`/${rid}/share`);
          return clearInterval(timer);
        }

        setRemainingTime(difference);
      }, 1000);
    };

    if (expiry) {
      sessionTime();
    }
  }, [expiry]);

  useEffect(() => {
    if (remainingTime <= session_length - startRecordingTime && !recording) {
      console.log("starting count down");
      setRecording(true);
    }
  }, [remainingTime, recording, recordingCountDown]);

  useEffect(() => {
    if (!recording) {
      return;
    }

    const countDownInterval = setInterval(() => {
      const newCount = recordingCountDown - 1;

      if (newCount < 0) {
        handleRecord();
        return clearInterval(countDownInterval);
      }

      setRecordingCountDown(newCount);
    }, 1000);

    return () => clearInterval(countDownInterval);
  }, [recording, recordingCountDown]);

  useEffect(() => {
    if (clipTime && numberOfClips > 0 && recording) {
      // add padding to give latest segment time to upload to s3
      setTimeout(() => {
        generateShareData(clipTime);
      }, 10000);
    }
  }, [clipTime, numberOfClips, recording]);

  const generateShareData = async (clipTime) => {
    if (clipSuffix?.[0]) {
      const response = await fetch(
        `${NEXT_PUBLIC_API_BASE_URL}/media-clip/${rid}-${clipSuffix?.[0]}?clip_time=${clipTime}`
      );
      if (!response.ok) throw new Error(response.statusText);

      setClipSuffix(clipSuffix.slice(1));

      handleRecord();
    }
  };

  const handleRecord = () => {
    setClipTime(toSecondsFromEpoch());
    setNumberOfClips(numberOfClips - 1);
  };

  return (
    <div>
      <iframe
        src={teleop_url}
        style={{ width: "100%", height: "100vh", border: "none" }}
      />
      <div className={styles.timeRemaining}>
        <Heading as="h2" className={styles.time}>
          {remainingTime} sec
        </Heading>
        <Timer time={session_length} />
      </div>

      {recordingCountDown > 0 && (
        <div className={styles.record}>
          <button
            onClick={() => {
              setRecording(true);
              handleRecord();
            }}
          >
            Get ready to record this!
          </button>

          {recording && <Heading as="display">{recordingCountDown}</Heading>}
        </div>
      )}
    </div>
  );
};

export default Teleop;
