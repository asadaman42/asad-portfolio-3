import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-8 md:pb-8 md:pt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          I completed diploma in engineering in electronics from Munshigonj polytechnic institute. Although, I prepared myself and planned to do diploma in Computer trade, I failed to manage myself to gain my possession in computer technology and had to enroll in  electronics technology.
        </p>

        <br />

        <p className="text-xl">
          In 2022, I met programming hero which I found myself to fulfill my dream and jumped in. Finally, I have completed full stack web development course from programming hero. 
        </p>
      </div>
    </div>
  );
};

export default About;
