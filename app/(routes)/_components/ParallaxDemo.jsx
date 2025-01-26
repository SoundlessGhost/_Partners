"use client";

import { Parallax } from "react-scroll-parallax";
const ParallaxDemo = () => {
  return (
    <Parallax
      speed={-20}
      className="bg-cover mb-40 mt-96 bg-center lg:h-[400px] h-[500px] w-full flex flex-col lg:flex-row items-center justify-between p-8"
      style={{
        backgroundImage: "url(/plash.jpg)",
      }}
    >
      {/* Text Section */}
      <div className="text-center text-white mb-6 lg:mb-0 lg:text-left">
        <h3 className="text-4xl font-bold mb-2">Our Success Story</h3>
        <p className="text-lg">
          Discover how we achieved milestones in our journey to success.
        </p>
      </div>

      <div className="h-[300px] w-[400px] flex flex-col items-center text-white">
        <p className="text-2xl mb-4">Abdul Al Hamid</p>
        <p className="">
          The platform's commitment to diversity allowed us to appreciate each
          other's backgrounds, and today, we're happily married. Alliance is not
          just a website; it's the beginning of our beautiful journey.
        </p>
        <p className="my-4">Marriage Date: 31 December 2020</p>
        <img
          className="h-20 w-20 rounded-full object-cover"
          src="/New2.jpg"
          alt=""
        />
      </div>
    </Parallax>
  );
};

export default ParallaxDemo;
