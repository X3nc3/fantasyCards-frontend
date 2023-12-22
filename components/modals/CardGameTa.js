import styles from "../../styles/CardMarket.module.css";
function CardGameTa({ playerName, playerImage, rarity, imgTeamAway, handleSelectedCard }) {
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

  return (
    <div className={styles.container} onClick={() => handleSelectedCard(playerName)}>
      <div className={styles.cardContainer} style={style}>
        <img height={150} width={148} src={playerImage} />
        <div className={styles.logo}>
          <img height={20} width={20} src={imgTeamAway} /> <p>{playerName}</p>
        </div>
      </div>
    </div>
  );
}

export default CardGameTa;
