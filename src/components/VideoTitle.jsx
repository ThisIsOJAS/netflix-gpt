const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-10 text-xl rounded-lg hover:opacity-50 cursor-pointer">
          <span style={{ fontFamily: "Arial, sans-serif" }}>&#9654;</span> Play{" "}
          {/* Span used to add the Play Symbol, no CSS here */}
        </button>
        <button className="mx-2 bg-gray-500/50 text-white p-4 px-10 text-xl hover:bg-gray-500/60 rounded-lg cursor-pointer">
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
