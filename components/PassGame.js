import styles from "../styles/PendingGame.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "antd";
import AddCardInGameModal from "./modals/AddCardInGameModal.js";
import CardGameTa from "./modals/CardGameTa.js";
import Pack from "./Pack.js";

function PassGame(props) {
  const [teamHome, setTeamHome] = useState("");
  const [imgTeamHome, setImgTeamHome] = useState("");
  const [teamAway, setTeamAway] = useState("");
  const [imgTeamAway, setImgTeamAway] = useState("");
  const [addCardVisible, setAddCardVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState([]);
  const token = useSelector((state) => state.users.value.token);

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

  const handleClaemCredits = () => {
    fetch(`http://localhost:3000/games/creditReward/${token}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === true) {
          setAddCardVisible(false);
        }
      });
  };

  const handleClaemPack = () => {
    setAddCardVisible(false);
  };

  const CustomCloseIcon = () => {
    return <Button className={styles.closeModalButton}>X</Button>;
  };

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
        <img className={styles.img} src={imgTeamHome} /> {teamHome} VS
        <img className={styles.img} src={imgTeamAway} /> {teamAway}
      </p>
      <p>Start: {startDate + ' ' + startHour + ':' + startMin}</p>
      <p>End: {endDate + ' ' + endHour + ':' + endMin}</p>
      <p className={styles.info}>Status</p>
      <p>{props.status}</p>

      <button
        className={styles.buttonRewards}
        onClick={() => {
          handleAddCard();
        }}
      >
        <p className="buttonText">Claim rewards</p>
      </button>

      <Modal
        closeIcon={<CustomCloseIcon />}
        width={600}
        centered={true}
        onCancel={() => handleCancelAddCard()}
        visible={addCardVisible}
        footer={null}
      >
        <h2 className={styles.titreRewards}>Cleam your reward :</h2>
        <div className={styles.texteRewardsContainer}>
          <p
            onClick={() => {
              handleClaemCredits();
            }}
            className={styles.texteRewards}
          >
            1 000 Crédits{" "}
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default PassGame;
