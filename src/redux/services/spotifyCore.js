const url =
  "https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv";
const options = {
  method: "GET",
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
const headers = {
  "X-RapidAPI-Key": "91c3df7527mshf6470590c1ce95cp1362bcjsn8e3c2558894a",
  "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
};
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const spotifyCore = createApi({
  reducerPath: "spotifyTracksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify23.p.rapidapi.com",
    prepareHeaders: (headers, { getState }) => {
      headers.set(
        "X-RapidAPI-Key",
        "91c3df7527mshf6470590c1ce95cp1362bcjsn8e3c2558894a"
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getSpotifyTracks: builder.query({
      query: () =>
        `/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=50`,
    }),
    getSpotifyArtist: builder.query({
      query: () => ``,
    }),
  }),
});
export const { useGetSpotifyTracksQuery } = spotifyCore;
export const { useGetSpotifyArtistQuery } = spotifyCore;
