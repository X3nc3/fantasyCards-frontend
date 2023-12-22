import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    token: null,
    username: null,
    email: null,
    cardsList: [],
    packsList: [],
    cardIdSell: null,
    gameList: [],
  },
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.email = action.payload.email;
      state.value.cardsList = action.payload.cardsList;
      state.value.packsList = action.payload.packsList;
      state.value.gameList = action.payload.gameList;
    },
    logout: (state) => {
      state.value.token = null;
      state.value.username = null;
      state.value.email = null;
      state.value.cardsList = [];
      state.value.packsList = [];
      state.value.gameList = [];
    },
    addCardToStore: (state, action) => {
      state.value.cardsList.push(action.payload.cardsList);
    },
    addPackToStore: (state, action) => {
      state.value.packsList.push(action.payload.packsList);
    },
    removeCardToStore: (state, action) => {
        const indexToRemove = state.value.cardsList.indexOf(action.payload.cardsList);

        if (indexToRemove !== -1) {
          state.value.cardsList.splice(indexToRemove, 1);
        }
    },
    removePackToStore: (state, action) => {
      const indexToRemove = state.value.packsList.indexOf(
        action.payload.packsList
      );
      if (indexToRemove !== -1) {
        state.value.packsList.splice(indexToRemove, 1);
      }
    },
  },
});

export const {
  login,
  logout,
  setCardIdSell,
  addCardToStore,
  addPackToStore,
  removeCardToStore,
  removePackToStore,
} = usersSlice.actions;
export default usersSlice.reducer;
