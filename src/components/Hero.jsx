import React from "react";
import hero from "../assets/images/vic.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={hero}
          alt=""
          className="md:w-11/12 h-full object-cover"
          style={{ width: "300px", borderRadius: "40px" }}
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Olá!
              <br />
            </span>
            Meu nome é <span>Victória Martinez</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Estudante de Medicina
          </h4>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            <div className="text-gray-600 hover:text-white cursor-pointer ">
              <a
                href="https://www.instagram.com/vicks.martinezz/"
                target="_blank"
              >
                <InstagramIcon />
              </a>
            </div>
            <div className="text-gray-600 hover:text-white cursor-pointer ">
              <a href="https://twitter.com/vicksmartinezz" target="_blank">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
