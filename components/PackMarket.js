import styles from "../styles/PackMarket.module.css";
import { Modal, Button } from "antd";
import BuyPackModal from "./modals/BuyPackModal.js";
import { useState } from "react";
function PackMarket({ rarity, id, token, price }) {

  const [buyPackVisible, setBuyPackVisible] = useState(false);

  const ModalVisibleBuyPack = () => {
    setBuyPackVisible(true);
  };

  const handleCancelModalBuyPack = () => {
    setBuyPackVisible(false);
  };


  let style = {};
  switch (rarity) {
    case 6:
      style = { backgroundColor: "#F5DF41" };
      break;
    case 5:
      style = { backgroundColor: "#D23B3B" };
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

  const handleModalBuyVisible = () => {
    ModalVisibleBuyPack()
  }
  return (
    <div className={styles.container}>
      <div className={styles.packContainer} style={style}>
        <img className={styles.img} src="./images/logo.png" />
      </div>
      <div className={styles.alignBtn}>
        <button className={styles.btn} onClick={handleModalBuyVisible}>buy</button>
        <Modal
        closeIcon={<CustomCloseIcon />}
        width={300}
        centered={true}
        onCancel={() => handleCancelModalBuyPack()}
        visible={buyPackVisible}
        footer={null}
      >
        <BuyPackModal id={id} sellerToken={token} price={price}/>
      </Modal>
      </div>
    </div>
  );
}

const CustomCloseIcon = () => {
  return <Button className={styles.closeModalButton}>X</Button>;
};

export default PackMarket;
