import styles from "../styles/ResumeEvent.module.css";

function ResumeEvent(props) {
  return (
    <div className={styles.eventInfo}>
      <p className={styles.info}>Title: {props.title}</p>
      <p className={styles.info}>Start date: {props.startDate}</p>
      <p className={styles.info}>End date: {props.endDate}</p>
      <p className={styles.info}>Status: {props.status}</p>
    </div>
  );
}

export default ResumeEvent;
