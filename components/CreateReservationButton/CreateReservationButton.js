import { useState } from "react";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import styles from "./CreateReservationButton.module.scss";

const CreateReservationButton = ({ buttonText }) => {
  const { NEXT_PUBLIC_API_BASE_URL } = process.env;
  const [creatingReservation, setCreatingReservation] = useState(false);
  const router = useRouter();

  const handleOnQueue = async () => {
    setCreatingReservation(true);
    const response = await fetch(
      `${NEXT_PUBLIC_API_BASE_URL}/create-reservation`
    );
    const reservationData = await response.json();
    const rid = reservationData?.rid;

    // TODO: What should happen if there is no rid or the reservation failed to create?
    if (rid) {
      router.push(`/${rid}/queue`);
    }
  };

  return (
    <div className={styles.root}>
      <Button
        className={styles.button}
        onClick={handleOnQueue}
        disabled={creatingReservation}
      >
        {creatingReservation ? "Hopping in line..." : buttonText}
      </Button>
    </div>
  );
};

export default CreateReservationButton;
