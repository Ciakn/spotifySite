import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import React, { useEffect, useState } from "react";
import {
  useGetSpotifyTracksQuery,
  useGetSpotifyArtistQuery,
} from "../redux/services/spotifyCore";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
function Discover() {
  const { data, isFetching, error } = useGetSpotifyTracksQuery();
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  useEffect(() => {
    if (!data) return;
    if (data) {
      const { items } = data;
      setItems(items);
    }
  }, [data]);
  if (data === undefined && isFetching)
    return <Loader title="Loading songs..." />;
  if (error) return <Error />;
  const { tracks } = items;
  
  return (
    <div className="flex flex-col h-full ">
      <div className="flex justify-center items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="text-bold text-white teext-3xl text-left">
          Discover {`POP`}
        </h2>
        <select
          value={""}
          onChange={() => ""}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
          {genres.map((genre, index) => {
            return (
              <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center  mt-5 gap-8">
        {items.map((song, index) => (
          <SongCard
            key={song?.track?.name}
            song={song}
            trackList={items}
            index={index}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </div>
    </div>
  );
}

export default Discover;
