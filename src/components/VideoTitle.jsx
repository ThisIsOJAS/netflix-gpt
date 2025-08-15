const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[16%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block pt-6 text-lg w-1/4 line-clamp-4">
        {overview}
      </p>
      <div className="pt-6">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-10 text-xl rounded-lg hover:opacity-50 cursor-pointer">
          <span style={{ fontFamily: "Arial, sans-serif" }}>&#9654;</span> Play{" "}
          {/* Span used to add the Play Symbol, no CSS here */}
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500/50 text-white p-4 px-10 text-xl hover:bg-gray-500/60 rounded-lg cursor-pointer">
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
