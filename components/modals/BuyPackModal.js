import styles from "../../styles/Header.module.css";
import { useSelector } from "react-redux";

function BuyPackModal({ id, sellerToken, price }) {
  const token = useSelector((state) => state.users.value.token);

  const handleBuyPack = () => {
    fetch(`http://localhost:3000/pack/buy/${token}/${sellerToken}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, sellerToken, id }),
    })
      .then((response) => response.json())
      .then((data) => {});
  };
  return (
    <div className={styles.modal}>
      <main className={styles.modalContainer}>
        <p>Use {price} credits ?</p>
        <button className={styles.modalButton} onClick={handleBuyPack}>
          Confirm
        </button>
      </main>
    </div>
  );
}

export default BuyPackModal;
