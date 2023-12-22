import styles from "../styles/CardInventory.module.css";
import { Modal, Button } from "antd";
import SellCardModal from "./modals/SellCardModal.js";
import { useState } from "react";
function CardInventory({ playerName, playerImage, rarity, id, idCard }) {

  const [sellCardVisible, setSellCardVisible] = useState(false);

  const ModalVisibleSellCard = () => {
    setSellCardVisible(true);
  };

  const handleCancelModalSellCard = () => {
    setSellCardVisible(false);
  };

  let style = {};
  switch (rarity) {
    case 6:
      style = { backgroundColor: "#F5DF41" };
      break;
    case 5:
      style = { backgroundColor: "#863965" };
      break;
    case 4:
      style = { backgroundColor: "#6C3082" };
      break;
    case 3:
      style = { backgroundColor: "#0070BB" };
      break;
    case 2:
      style = { backgroundColor: "#00A86B" };
      break;
    case 1:
      style = { backgroundColor: "#E5E4E2" };
      break;

    default:
      break;
  }

  const handleModalVisible = () => {
    ModalVisibleSellCard()
  }

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer} style={style}>
        <img src={playerImage} width={148} height={150}/>
        <p>{playerName}</p>
      </div>
      <div>
        <button className={styles.btn} onClick={handleModalVisible}>SELL</button>
      </div>
      <Modal
        closeIcon={<CustomCloseIcon />}
        width={300}
        centered={true}
        onCancel={() => handleCancelModalSellCard()}
        visible={sellCardVisible}
        footer={null}
      >
        <SellCardModal id={id} idCard={idCard}/>
      </Modal>
    </div>
  );
}

const CustomCloseIcon = () => {
  return <Button className={styles.closeModalButton}>X</Button>;
};

export default CardInventory;
