import React from 'react';
import Image from 'next/image';
import NavBar from '../../components/nav';
import Text from '../../constants/health';
import ParticleCategoryTable from '../../public/particlecategorytable.png';
import CrabwordBubble from '../../public/crabwordbubble.png';
import MicroplasticHealth from '../../public/microplastichealth.png';
import FoodChain from '../../public/foodchain.png';
import PlateOfMussels from '../../public/plateofmussels.png';

export default function Health() {
  return (
    <div className="mt-16 bg-offwhite text-darker relative thin">
      <NavBar />
      <div className="flex flex-col text-2xl text-left p-10 items-center">
        <div className="py-5 bg-dark text-offwhite w-full">
          <div className="font-bold text-center uppercase text-4xl">Plastic &amp; Human health</div>
        </div>
        <div className="w-full font-bold text-3xl pt-10">{Text.microplastic}</div>
        <div className="h-3/5 w-3/5 mt-10">
          <Image src={ParticleCategoryTable} alt="table" />
        </div>
        <div className="w-full font-bold text-3xl pt-10">{Text.harmful}</div>
        <div className="w-full pt-10">{Text.ingestion}</div>
        <div className="flex w-full justify-evenly">
          <div className="h-2/5 w-2/5 mt-10 p-10">
            <Image src={CrabwordBubble} alt="table" />
          </div>
          <div className="h-2/5 w-2/5 mt-10">
            <Image src={MicroplasticHealth} alt="table" />
          </div>
        </div>
        <div className="w-full pt-10">{Text.negative}</div>
        <div className="w-full pt-10">{Text.examples}</div>
        <div className="w-full pt-10">{Text.poisonous}</div>
        <div className="w-full pt-10">{Text.toxins}</div>
        <div className="w-full pt-10">{Text.leach}</div>
        <div className="w-full font-bold text-3xl pt-10">{Text.question}</div>
        <div className="w-full pt-10">{Text.survive}</div>
        <div className="mt-10 py-5 bg-dark text-offwhite w-full">
          <div className="font-bold text-center text-4xl">{Text.sectionHeader}</div>
        </div>
        <div className="w-full font-bold text-3xl pt-10">{Text.biomagnification}</div>
        <div className="mt-10">
          <Image src={FoodChain} alt="table" />
        </div>
        <div className="w-full pt-10">{Text.plate}</div>
        <div className="h-1/5 w-1/5 mt-10">
          <Image src={PlateOfMussels} alt="table" />
        </div>
        <div className="w-full pt-10">{Text.understand}</div>
        <div className="w-full pt-10">{Text.linked}</div>
        <div className="w-full mt-10 p-10 bg-yellow container">
          <div className="font-bold text-3xl">{Text.you}</div>
        </div>
      </div>
      <footer className="footer">
          Powered by OceanUS &copy; 2021
      </footer>
    </div>
  );
}
