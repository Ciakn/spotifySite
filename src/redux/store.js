import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import { spotifyCore } from "./services/spotifyCore";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    [spotifyCore.reducerPath]: spotifyCore.reducer,
    
  },
});
