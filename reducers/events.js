import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: { myEvents: [], pendingEvent: [], futureEvent: [] }
}

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addMyEventsToStore: (state, action) => {
            state.value.myEvents.push(action.payload)
        },
        addPendingEventsToStore: (state, action) => {
            state.value.pendingEvent = (action.payload)
        },
        addFutureEventsToStore: (state, action) => {
            state.value.futureEvent = (action.payload)
        },
    }
})

export const { addMyEventsToStore, addPendingEventsToStore, addFutureEventsToStore } = eventsSlice.actions
export default eventsSlice.reducer