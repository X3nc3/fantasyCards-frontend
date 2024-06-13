import styles from "../styles/CardMarket.module.css";
import { Modal, Button } from "antd";
import BuyCardModal from "./modals/BuyCardModal.js";
import { useState } from "react";
function CardMarket({ playerName, playerImage, rarity, id, token, price }) {

  const [buyCardVisible, setBuyCardVisible] = useState(false);

  const ModalVisibleBuyCard = () => {
    setBuyCardVisible(true);
  };

  const handleCancelModalBuyCard = () => {
    setBuyCardVisible(false);
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

  const handleModalVisible = ()=>{
    ModalVisibleBuyCard()
  }

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer} style={style}>
          <img height={150} width={148} src={playerImage} />
          <p>{playerName}</p>
      </div>
      <div className={styles.alignBtn}>
        <button className={styles.btn} onClick={handleModalVisible}>Buy</button>
      </div>
      <Modal
        closeIcon={<CustomCloseIcon />}
        width={300}
        centered={true}
        onCancel={() => handleCancelModalBuyCard()}
        visible={buyCardVisible}
        footer={null}
      >
        <BuyCardModal id={id} sellerToken={token} price={price}/>
      </Modal>
    </div>
  );
}

const CustomCloseIcon = () => {
  return <Button className={styles.closeModalButton}>X</Button>;
};

export default CardMarket;
