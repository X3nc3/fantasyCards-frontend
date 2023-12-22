import styles from "../../styles/PendingGame.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CardGameTh from "./CardGameTh";
import CardGameTa from "./CardGameTa";

function AddCardInGameModal(props) {
  const token = useSelector((state) => state.users.value.token);
  const [cardsTh, setCardsTh] = useState([]);
  const [cardsTa, setCardsTa] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:3000/card/${props.teamHomeId}/${props.teamAwayId}/${token}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCardsTh(data.cardTa);
        setCardsTa(data.cardTh);
      });
  }, []);

  const playersTh =
    cardsTh &&
    cardsTh.map((data, i) => {
      return (
        <CardGameTh
        handleSelectedCard={props.handleSelectedCard}
          key={i}
          playerName={data.name}
          playerImage={data.picture}
          rarity={data.rarity}
          imgTeamHome={props.imgTeamHome}
        />
      );
    });

  const playersTa =
    cardsTa &&
    cardsTa.map((data, i) => {
      return (
        <CardGameTa
        handleSelectedCard={props.handleSelectedCard}
          key={i}
          playerName={data.name}
          playerImage={data.picture}
          rarity={data.rarity}
          imgTeamAway={props.imgTeamAway}
        />
      );
    });

  return (
    <div className={styles.modal}>
      <h2>Select Card</h2>
      <div className={styles.cardModal}>{playersTh}</div>
      <div className={styles.cardModal}>{playersTa}</div>
    </div>
  );
}

export default AddCardInGameModal;
