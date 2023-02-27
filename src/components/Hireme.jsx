import React from "react";
import hireMe from "../assets/images/hireMe.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Unidades <span className="text-cyan-600">Curriculares</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Algumas unidades</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Quer saber um pouco mais sobre as unidades Curriculares?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            As unidades curriculares são disciplinas ou matérias que compõem um
            curso ou programa de ensino. Elas são essenciais para que os alunos
            possam adquirir conhecimentos e habilidades específicas em uma
            determinada área de estudo.
          </p>
          <button className="btn-primary mt-10">Unidades Curriculares</button>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
