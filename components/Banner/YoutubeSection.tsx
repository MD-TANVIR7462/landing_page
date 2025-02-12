"use client"
import YouTube from "react-youtube";

const YoutubeSection = () => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId="U9JMdmQaDOg" opts={opts} className="aspect-video w-full " />;
};

export default YoutubeSection;
