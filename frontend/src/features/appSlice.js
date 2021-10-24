import { createSlice } from '@reduxjs/toolkit';
//creates a layer like onion of app and user. When info is required it goes to app layer and takes out channel id and name info form it 
export const appSlice = createSlice({
    name: 'app',
    initialState: { channelId: null, channelName: null, },
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setChannelInfo: (state, action) => {
            state.channelId = action.payload.channelId;
            state.channelName = action.payload.channelName;
        },
    },
});

export const { setChannelInfo } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;


export default appSlice.reducer;