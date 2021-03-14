import useSWR from "swr";
import Heading from "../Heading/Heading";
import Body from "../Body/Body";
import WaitTime from "../WaitTime/WaitTime";
import Control from "../Control/Control";
import CreateReservationButton from "../CreateReservationButton/CreateReservationButton";
import Card from "../Card/Card";
import ProjectLogo from "../../svg/project-logo.svg";
import styles from "./Landing.module.scss";

const baseApi = process.env.NEXT_PUBLIC_API_BASE_URL;
const pollInterval = process.env.NEXT_PUBLIC_WAIT_TIME_POLL_INTERVAL;

const Landing = ({ acceptingReservations }) => {
  const { data: waitTime } = useSWR(`${baseApi}/wait-time`, {
    refreshInterval: pollInterval,
  });

  return (
    <div>
      <div className={styles.heroBanner}>
        <ProjectLogo className={styles.projectLogo} />

        <img src="/hero-image.png" alt="Spot" className={styles.heroImage} />
        <Card className={styles.heroCard}>
          <Heading as="display">
            Play
            <br /> with Spot
          </Heading>
          <Body size="L">
            Control Spot remotely and experience what fun it is to be a robot
            puppet master. Formant created an environment that anyone can pose
            and play with Spot on any device from anywhere in the world.
          </Body>
          <Body size="L">
            Leverage Formant’s teleoperation feature to pose and move, even take
            a video recording to share with your colleagues, friends, and
            family.
          </Body>
        </Card>
      </div>

      <div className={styles.grid}>
        <Card>
          <WaitTime
            time={waitTime}
            text={
              <span>
                Approximate <br />
                wait
              </span>
            }
          />
          <Heading as="h1">Get in the queue</Heading>

          <Body size="M">
            As you can imagine, the demand could be quite high. If you would
            like to try your hand at controlling Spot. Get in the queue below
            and stay on the page until it is your turn. We will have lots of
            videos for you to watch while you are waiting.
          </Body>
          <Body size="M">
            The page needs to stay open to keep your place in line. Keep
            checking back to see where you are in the queue.
          </Body>
          <div className={styles.queueButton}>
            <CreateReservationButton buttonText="Grab your place in line" />
          </div>
        </Card>

        <Card>
          <div className={styles.cardImage}>
            <img src="/paw-face.png" alt="Spot" className={""} />
          </div>
          <Heading as="h1">What you can expect</Heading>

          <Body size="M">
            Each session will be 1 minutes long. During your session, we will
            prompt you to record a short video that you can watch and shared at
            the end of your session.
          </Body>
          <Body size="M">
            We suggest you share on social media using the hashtag
            #ExperienceSpotwithFormant
          </Body>
        </Card>
      </div>
      <Control />
    </div>
  );
};

export default Landing;
