import { useNavigate } from "react-router-dom";

export const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/artists/${track.artists[0]?.adamid}`)}
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer hover:brightness-75 transition-colors"
    >
      <img
        src={track?.images.background}
        alt="artist"
        className="w-full h-56"
      />
      <p className="mt-4 font-semibold text-lg text-white truncate ">
        {track?.subtitle}
      </p>
    </button>
  );
};
