import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: { pendingGames: [], finishGames: [] }
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        addPendingGamesToStore: (state, action) => {
            state.value.pendingGames = (action.payload)
        },
        addFinishGamesToStore: (state, action) => {
            state.value.finishGames = (action.payload)
        },
    }
})

export const { addPendingGamesToStore, addFinishGamesToStore } = gameSlice.actions
export default gameSlice.reducer