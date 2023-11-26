import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useState, useEffect } from "react";
const SongCard = ({ key, song, index }) => {
  const { track } = song;
  const activeSong = "test";
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative h-56 w-full group ">
        <div
          className={`absloute inset-0 justify-center items-center   h-full w-full bg-opacity-50 group-hover:flex hover:bg-black hover:bg-opacity-50`}>
          

          <PlayPause/>
        </div>
        <img src="" alt="song_img"/>
      </div>
    </div>
  );
};

export default SongCard;
