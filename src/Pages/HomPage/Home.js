import React from "react";
import HeroImage from "../../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight, MdDownload } from "react-icons/md";

import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="mt-10 text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have completed full stack web development course and built 10+ projects with modern technologies.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>

          <div className="flex items-center justify-evenly md:justify-start">
            <Link to="portfolio" smooth duration={500} className="group text-white btn flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <a className="text-white btn bg-gradient-to-r from-cyan-500 to-blue-500" href="https://drive.google.com/file/d/10tlTMaTW4WIuOvzDcGbNvkDUNfc06WVE/view?usp=share_link" download={true}> Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdDownload size={25} className="ml-1" />
              </span> </a>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className=" my-8 max-w-sm shadow-2xl rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
