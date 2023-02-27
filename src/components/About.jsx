import React from "react";
import aboutImg from "../assets/images/vick_princesa.png";
const About = () => {
  const info = [
    { text: "Anos de vida", count: "17" },
    { text: "Semestre da Faculdade", count: "01" },
    { text: "Em busca de muito mais", count: "100%" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Sobre <span className="text-cyan-600">Mim</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">Minha introdução</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Olá! Eu tenho 17 anos e estou prestes a completar 18 anos em
                abril. Estou muito animado com essa fase da minha vida, pois
                estou em transição para a idade adulta e estou no primeiro
                período da faculdade de medicina na Anhembi Morumbi.
              </p>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Ingressar na faculdade de medicina foi uma decisão importante
                para mim, pois sei que será um desafio, exigindo muito estudo e
                dedicação. No entanto, estou determinado a obter o melhor
                aproveitamento possível nessa jornada.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-[#5d273c] rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
