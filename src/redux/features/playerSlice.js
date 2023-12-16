import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",
};
const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, { payload }) => {
      console.log(payload);
      const { index, track, trackList } = payload;

      state.activeSong = track;
      if (track?.preview_url) {
        state.currentSongs = trackList?.map((t, i) => {
          console.log(t.track);
          return t.track;
        });
      } else if (track?.properties) {
        state.currentSongs = trackList?.map((t, i) => {
          return t.track;
        });
      } else {
        state.currentSongs = trackList?.map((t, i) => {
          return t.track;
        });
      }

      state.currentIndex = index;
      state.isActive = true;
    },

    nextSong: (state, action) => {
      if (state.currentSongs[action.payload]) {
        state.activeSong = state.currentSongs[action.payload];
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      if (state.currentSongs[action.payload]) {
        state.activeSong = state.currentSongs[action.payload];
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const {
  setActiveSong,
  nextSong,
  prevSong,
  playPause,
  selectGenreListId,
} = playerSlice.actions;

export default playerSlice.reducer;
