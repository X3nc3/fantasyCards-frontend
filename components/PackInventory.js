import styles from "../styles/PackInventory.module.css";
import { Modal, Button } from "antd";
import SellPackModal from "./modals/SellPackModal.js";
import OpenPackModal from "./modals/OpenPackModal.js";
import { useState } from "react";
function PackInventory({ rarity, id, packId }) {

  const [sellPackVisible, setSellPackVisible] = useState(false);
  const [openPackVisible, setOpenPackVisible] = useState(false);

  const ModalVisibleSellPack = () => {
    setSellPackVisible(true);
  };

  const ModalVisibleOpenPack = () => {
    setOpenPackVisible(true);
  };


  const handleCancelModalSellPack = () => {
    setSellPackVisible(false);
  };

  const handleCancelModalOpenPack = () => {
    setOpenPackVisible(false);
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

  const handleModalSellVisible = () => {
    ModalVisibleSellPack()
  }

  const handleModalOpenVisible = () => {
    ModalVisibleOpenPack()
  }

  return (
    <div className={styles.container} id={id}>
      <div className={styles.packContainer} style={style}>
        <img className={styles.img} src="./images/logo.png" />
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={handleModalOpenVisible}>OPEN</button>
        <button className={styles.btn} onClick={handleModalSellVisible}>SELL</button>
      </div>
      <Modal
        closeIcon={<CustomCloseIcon />}
        width={300}
        centered={true}
        onCancel={() => handleCancelModalSellPack()}
        visible={sellPackVisible}
        footer={null}
      >
        <SellPackModal id={id} packId={packId} />
      </Modal>
      <Modal
        closeIcon={<CustomCloseIcon />}
        width={300}
        centered={true}
        onCancel={() => handleCancelModalOpenPack()}
        visible={openPackVisible}
        footer={null}
      >
        <OpenPackModal id={id} />
      </Modal>
    </div>
  );
}

const CustomCloseIcon = () => {
  return <Button className={styles.closeModalButton}>X</Button>;
};

export default PackInventory;
