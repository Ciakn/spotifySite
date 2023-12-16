import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import PlayPause from "./PlayPause";
import { useGetSpotifyTracksQuery } from "../redux/services/spotifyCore";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
const TopChartCard = ({
  song,
  index,
  handlePause,
  handlePlay,
  isPlaying,
  activeSong,
}) => {
  return (
    <div className="w-full flex flex-row items-center hover:bg-[#4c426e]  p-1 rounded-lg crusor-pointer ">
      <h3 className="font-bold text-base text-white mr-3">{index + 1} .</h3>
      <div className="flex-1 flex-row flex items-center justify-between">
        <img
          className="w-18 h-18 rounded-lg"
          src={song.track.album.images[2].url}
          alt="song"
        />
        <div className="flex flex-1 flex-col justify-center mx-3">
          <Link to={`/songs/${index}`}>
            <p className="text-white font-bold  text-sm"> {song.track.name}</p>
          </Link>
          <Link to={`/artists/${song.track.album.artists[0].name}`}>
            <p className="text-gray-400   text-sm">
              {" "}
              - {song.track.album.artists[0].name}
            </p>
          </Link>
        </div>
      </div>
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        track={song.track}
        handlePause={handlePause}
        handlePlay={handlePlay}
      />
    </div>
  );
};
const TopPlay = () => {
  const [items, setItems] = useState([]);
  const { data, isFetching, error } = useGetSpotifyTracksQuery();
  useEffect(() => {
    if (!data) return;
    if (data) {
      const { items } = data;
      setItems(items);
    }
  }, [data]);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } =
    useSelector((state) => state.player);
  const topPlays = items.slice(0, 5);
  // console.log(topPlays);
  const dispatch = useDispatch();
  const divRef = useRef(null);
  const handlePause = () => {
    dispatch(playPause(false));
  };
  const handlePlay = ({ track }, index) => {
    console.log(index);
    dispatch(setActiveSong({ track, trackList: topPlays, index }));
    dispatch(playPause(true));
  };
  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-l xl:max-w-[300px] flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-end">
          <h2 className="text-white font-bold text-2xl">top Charts</h2>

          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">
              See more...
            </p>
          </Link>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {!isFetching &&
            topPlays.map((song, index) => {
              return (
                <TopChartCard
                  key={index}
                  song={song}
                  index={index}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  handlePause={() => handlePause(song)}
                  handlePlay={() => handlePlay(song, index)}
                />
              );
            })}
        </div>
      </div>
      <div className="w-full flex flex-col mt-1">
        <div className="flex flex-row justify-between items-end">
          <h2 className="text-white font-bold text-2xl">top Artists</h2>

          <Link to="/top-artists">
            <p className="text-gray-300 text-base cursor-pointer">
              See more...
            </p>
          </Link>
        </div>
        <div
          slidesPerView="auto"
          spaceBetween={15}
          direction="vertical"
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4 flex justify-center items-center gap-4">
          {!isFetching &&
            topPlays.map((song, index) => (
              <SwiperSlide
                key={index}
                style={{ width: "15%", height: "auto" }}
                className="shadow-lg rounded-full animate-slideright  ">
                <Link
                  className="flex flex-col justify-center items-center gap-2"
                  to={`/artists/${song.track.album.artists[0].name}`}>
                  <img
                    className="rounded-full w-full object-contain"
                    src={song.track.album.images[1].url}
                  />
                  <p className="text-white">
                    {" "}
                    {song.track.album.artists[0].name}
                  </p>
                </Link>
              </SwiperSlide>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TopPlay;
