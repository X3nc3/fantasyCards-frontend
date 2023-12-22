import styles from "../styles/Game.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PassGame from "./PassGame";
import {
    addFinishGamesToStore,
} from "../reducers/games";


function MatchFinished() {
  const dispatch = useDispatch();
  const infoFinishGames = useSelector((state) => state.games.value.finishGames);


  useEffect(() => {
    fetch("http://localhost:3000/games/MatchFinished")
      .then((response) => response.json())
      .then((data) => {
        
        dispatch(
            addFinishGamesToStore(
            data.games
          )
        );
        
      });
  }, []);

  const infoFinish = infoFinishGames && infoFinishGames.map((data, i) => {
    return (
      <PassGame
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
    {infoFinish}
    </div>
  );
}

export default MatchFinished;