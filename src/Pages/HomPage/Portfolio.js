import React from "react";
import TV from "./../../assets/portfolio/TV.png";
import visa from "./../../assets/portfolio/visa.png";
import Office from "./../../assets/portfolio/Office.png";
import { Link } from "react-router-dom";



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: TV,
      address: "/tvproject"
    },
    {
      id: 2,
      src: visa,
      address: "/visaproject"
    },
    {
      id: 3,
      src: Office,
      address: "/officeproject"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, address }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <Link to={address} className="btn text-white"> View Project </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
