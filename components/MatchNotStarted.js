import styles from "../styles/Game.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PendingGame from "./PendingGame";
import {
  addPendingGamesToStore,
} from "../reducers/games";


function MatchNotStarted() {
  const dispatch = useDispatch();
  const infoPendingGames = useSelector((state) => state.games.value.pendingGames);


  useEffect(() => {
    fetch("http://localhost:3000/games/MatchNotStarted")
      .then((response) => response.json())
      .then((data) => {
        
        dispatch(
          addPendingGamesToStore(
            data.games
          )
        );
        
      });
  }, []);

  const infoPending = infoPendingGames.map((data, i) => {
    return (
      <PendingGame
        key={i}
        teamHomeId={data.teamHomeId}
        teamAwayId={data.teamAwayId}
        startDate={data.startDate}
        endDate={data.endDate}
        status={data.status}
      />
    );
  });


  return (
    <div className={styles.container}>
    {infoPending}
    </div>
  );
}

export default MatchNotStarted;
