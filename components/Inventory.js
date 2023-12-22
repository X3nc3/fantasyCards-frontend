import styles from "../styles/Inventory.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useSelector } from "react-redux";
import { useState } from "react";
import CardInventory from "./CardInventory";
import PackInventory from "./PackInventory";

export default function Inventory() {
  const userCards = useSelector((state) => state.users.value.cardsList);
  const userPacks = useSelector((state) => state.users.value.packsList);
  const token = useSelector((state) => state.users.value.token);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabCards = [];

  userCards &&
    userCards.map((card) => {
      const {
        _id,
        teamId,
        name,
        rarity,
        stock,
        picture,
        eventsId,
        cardPrices,
      } = card;

      for (const data of cardPrices) {
        if (data.userToken === token) {
          const dataCard = {
            cardId: _id,
            teamId,
            name,
            rarity,
            stock,
            picture,
            eventsId,
            cardPrice: data ? data.price : null,
            subDocId: data._id,
            userToken: data ? data.userToken : null,
          };
          tabCards.push(dataCard);
        }
      }
    });

  const cards =
    tabCards &&
    tabCards.map((data, i) => {
      return (
        <CardInventory
          key={i}
          idCard={data.cardId}
          id={data.subDocId}
          playerName={data.name}
          playerImage={data.picture}
          rarity={data.rarity}
        />
      );
    });

  const tabPacks = [];

  userPacks &&
    userPacks.map((pack) => {
      const { _id, rarity, stock, packPrices } = pack;
      if (packPrices && packPrices.length) {
        for (const data of packPrices) {
          if (data.userToken === token) {
            const dataPack = {
              packId: _id,
              rarity,
              stock,
              packPrice: data ? data.price : null,
              subDocId: data._id,
              userToken: data ? data.userToken : null,
            };
            tabPacks.push(dataPack);
          }
        }
      }
    });

  const packPlayer = tabPacks.map((data, i) => {
    return <PackInventory key={i} id={data.subDocId} packId={data.packId} rarity={data.rarity} />;
  });

  return (
    <main className='main'>
      <h1 className='title'>Inventory</h1>
      <div className={styles.container}>
        <div className={styles.content}>
          <Box sx={{ width: "50%" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange} className={styles.tabList}>
                  <Tab className={styles.tab} label="Cards" value="1" />
                  <Tab className={styles.tab} label="Packs" value="2" />
                </TabList>
              </Box>
              <TabPanel
                style={{
                  height: "0px",
                  paddingTop: "50px",
                  textAlign: "center",
                  overflow: "auto",
                  width: "1367px",
                  height: "100%",
                }}
                className={styles.cardContainer}
                value="1"
              >
                {cards}
              </TabPanel>
              <TabPanel
                style={{
                  height: "300px",
                  padding: "0px",
                  textAlign: "center",
                  overflow: "auto",
                  width: "1367px",
                  height: "100%",
                }}
                className={styles.packContainer}
                value="2"
              >
                {packPlayer}
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </main>
  );
}