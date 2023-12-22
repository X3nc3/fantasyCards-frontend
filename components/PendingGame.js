import styles from "../styles/PendingGame.module.css";
import { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import AddCardInGameModal from "./modals/AddCardInGameModal.js";
import CardGameTa from "./modals/CardGameTa.js";

function PendingGame(props) {
  const [teamHome, setTeamHome] = useState("");
  const [imgTeamHome, setImgTeamHome] = useState("");
  const [teamAway, setTeamAway] = useState("");
  const [imgTeamAway, setImgTeamAway] = useState("");
  const [addCardVisible, setAddCardVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:3000/games/teams/${props.teamHomeId}/${props.teamAwayId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTeamHome(data.teamHome);
        setImgTeamHome(data.imageTeamHome);
        setTeamAway(data.teamAway);
        setImgTeamAway(data.imageTeamAway);
      });
  }, []);

  const handleAddCard = () => {
    setAddCardVisible(true);
  };

  const handleCancelAddCard = () => {
    setAddCardVisible(false);
  };

  const CustomCloseIcon = () => {
    return <Button className={styles.closeModalButton}>X</Button>;
  };

  const handleSelectedCard = (name) => {
    fetch(`http://localhost:3000/card/find/${name}`)
      .then((response) => response.json())
      .then((card) => {
        setSelectedCard([...selectedCard, card.data]);
        setAddCardVisible(false);
      });
  };

  const players =
    selectedCard &&
    selectedCard.map((data, i) => {
      return (
        <CardGameTa
          key={i}
          playerName={data.name}
          playerImage={data.picture}
          rarity={data.rarity}
          imgTeamAway={props.imgTeamAway}
        />
      )
    })

  const startDate = new Date(props.startDate).toDateString()
  const startHour = new Date(props.startDate).getHours()
  const startMin = new Date(props.startDate).getMinutes()

  const endDate = new Date(props.endDate).toDateString()
  const endHour = new Date(props.startDate).getHours()
  const endMin = new Date(props.startDate).getMinutes()

  return (
    <div className={styles.gameInfo}>
      <p className={styles.info}>Match</p>
      <p className={styles.matchOverview}>
        <img className={styles.img} src={imgTeamHome} /> {teamHome}
        <span className={styles.separator}>VS</span>
        <img className={styles.img} src={imgTeamAway} /> {teamAway}
      </p>
      <p>Start: {startDate + ' ' + startHour + ':' + startMin}</p>
      <p>End: {endDate + ' ' + endHour + ':' + endMin}</p>
      <p className={styles.info}>Status</p>
      <p>{props.status}</p>
      <p className={styles.info}>Select cards</p>
      <div className={styles.allCardContainer}>
        {players}
        <button
          className={styles.buttonContainer}
          onClick={() => {
            handleAddCard();
          }}
        >
          <div className={styles.addCard}>+</div>
        </button>
      </div>
      <Modal
        closeIcon={<CustomCloseIcon />}
        width={600}
        centered={true}
        onCancel={() => handleCancelAddCard()}
        visible={addCardVisible}
        footer={null}
      >
        <AddCardInGameModal
          handleSelectedCard={handleSelectedCard}
          teamHomeId={props.teamHomeId}
          teamAwayId={props.teamAwayId}
          imgTeamHome={props.imgTeamHome}
          imgTeamAway={props.imgTeamAway}
        />
      </Modal>
    </div >
  );
}

export default PendingGame;
