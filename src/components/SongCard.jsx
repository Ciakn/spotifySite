import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useState, useEffect } from "react";
import defaultImg from "../assets/defaultImages/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg";

const SongCard = ({ isPlaying, activeSong, song, index, trackList }) => {
  const dispatch = useDispatch();
  const TrackList = trackList;
 
  const { track } = song;
  // console.log(track);
  // const ShowSomething = (s) => {
  //   console.log(s);
  // };
  const handlePause = () => {
    dispatch(playPause(false));
  };
  const handlePlay = () => {
    dispatch(setActiveSong({ track, trackList, index }));
    dispatch(playPause(true));
  };
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 hover:bg-black hover:bg-opacity-50   animate-slideup rounded-lg cursor-pointer">
      <div
        // onClick={() => ShowSomething(track)}
        className="relative h-56 w-full group flex justify-center items-center ">
        <div
          className={`absolute   inset-0 justify-center items-center  h-full w-full bg-opacity-50r group-hover:flex ${
            activeSong?.name === track?.name ? "flex" : ""
          }`}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            track={track}
            trackList={trackList}
            handlePause={handlePause}
            handlePlay={handlePlay}
          />
        </div>
        <img src={track?.album.images[0].url || defaultImg} alt="song_img" />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${track?.name}`}>
            {track?.name || `default Name`}{" "}
          </Link>
        </p>
        <p className="text-sm text-gray-300 mt-1s">
          <Link
            to={
              track?.artists[0].name
                ? `/artists/${track?.artists[0].name}`
                : `/top-artists`
            }>
            {track?.artists[0].name || `default Name`}{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
