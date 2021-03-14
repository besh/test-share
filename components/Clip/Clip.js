import Heading from "../Heading/Heading";
import Body from "../Body/Body";
import CreateReservationButton from "../CreateReservationButton/CreateReservationButton";

const Share = ({ videoSrc, imageSrc }) => {
  return (
    <div>
      <div>
        <div>
          <video width="100%" height="100%" controls poster={imageSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        <Heading as="h4">Project geppeto</Heading>

        <Body size="M">
          Control Spot remotely and experience what fun it is to be a robot
          puppet master. Formant created an environment that anyone can pose and
          play with Spot on any device from anywhere in the world.
        </Body>

        <Body size="M">
          Leverage Formant’s teleoperation feature to pose, move, and take a
          video recording to share with your colleagues, friends, and family.
        </Body>

        <CreateReservationButton buttonText="Play with Spot" />
      </div>
    </div>
  );
};

export default Share;
