import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({
  isPlaying,
  activeSong,
  track,
  handlePause,
  handlePlay,
}) => {
  if (isPlaying && activeSong?.name === track?.name) return <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />;

  return (
    <div>
      <FaPlayCircle  size={35} className="text-gray-300" onClick={handlePlay} />
    </div>
  );
};

export default PlayPause;
