import styles from "../../styles/Header.module.css";
import { useSelector } from "react-redux";

function OpenPackModal({ id, sellerToken, updateInventory }) {
  const token = useSelector((state) => state.users.value.token);

  const handleBuyCard = () => {
    fetch(`https://fantasy-cards-backend.vercel.app/pack/open/${token}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, id }),
    })
      .then((response) => response.json())
      .then((data) => {
        updateInventory();
      });
  };
  return (
    <div className={styles.modal}>
      <main className={styles.modalContainer}>
        <p>Congrats! You now have 5 new cards</p>
        <button className={styles.modalButton} onClick={handleBuyCard}>
          Confirm
        </button>
      </main>
    </div>
  );
}

export default OpenPackModal;
