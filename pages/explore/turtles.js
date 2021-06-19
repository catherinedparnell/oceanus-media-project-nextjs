import React from 'react';
import Image from 'next/image';

import Vector from '../../components/vectors-explore';
import NavBar from '../../components/nav';
import Text from '../../constants/turtles';

import TurtleThoughtBubble from '../../public/turtlethoughtbubble.png';
import Seven from '../../public/seven.png';
import SuzieCrawl from '../../public/suziecrawl.png';
import Hatchlings from '../../public/hatchlings.png';
import Sargassum from '../../public/sargassum.png';
import USTurtles from '../../public/usturtles.png';
import DeadBaby from '../../public/deadbabyturt.png';
import HopefulBaby from '../../public/hopefulbaby.png';

export default function Suzie() {
  return (
    <div className="mt-16 text-darker thin">
      <NavBar />
      <div className="flex flex-col text-2xl text-left p-10 items-center">
        <div className="flex">
          <div className="uppercase font-bold text-5xl">{Text.magnificent}</div>
          <Image src={TurtleThoughtBubble} alt="table" />
        </div>
        <div className="text-4xl font-bold text-left">{Text.seven}</div>
        <div className="h-4/5 w-4/5 mx-10 mt-10">
          <Image src={Seven} alt="table" />
        </div>
        <div className="pt-10 w-full font-bold text-4xl text-left">{Text.endangered}</div>
        <div className="pt-10 w-full text-left">{Text.cycle}</div>
        <div className="pt-10 w-full text-left">{Text.nest}</div>
        <div className="h-2/5 w-2/5 mt-10 ">
          <Image src={SuzieCrawl} alt="table" />
        </div>
        <div className="pt-10 w-full text-left">{Text.incubate}</div>
        <div className="pt-10 w-full text-left">{Text.hatch}</div>
        <div className="h-2/5 w-2/5 mt-10">
          <Image src={Hatchlings} alt="table" />
        </div>
        <div className="pt-10 w-full text-left">{Text.seaweed}</div>
        <div className="h-2/5 w-2/5 mt-10">
          <Image src={Sargassum} alt="table" />
        </div>
        <div className="pt-10 w-full text-left">{Text.survive}</div>
        <div className="pt-10 w-full text-left">{Text.maturity}</div>
        <div className="pt-10 w-full text-left">{Text.old}</div>
        <div className="mt-10 py-5 bg-dark text-offwhite w-full">
          <div className="text-center font-bold text-4xl">{Text.heading}</div>
        </div>
        <div className="pt-10 text-left text-3xl">{Text.states}</div>
        <div className="h-3/5 w-3/5 my-10">
          <Image src={USTurtles} alt="table" />
        </div>
        <div className="pt-10 w-full text-left">{Text.protect}</div>
        <div className="pt-10 w-full text-left font-bold text-3xl">{Text.threatTitle}</div>
        <div className="pt-5 w-full text-left">{Text.threat.map((t) => <div key={t} className="ml-10">{t}</div>)}</div>
        <div className="pt-10 w-full text-left">{Text.plastic}</div>
        <div className="mt-10 py-5 bg-dark text-offwhite w-full">
          <div className="text-center font-bold text-4xl">{Text.section}</div>
        </div>
        <div className="pt-10 text-left w-full font-bold text-3xl">{Text.impactTitle}</div>
        <div className="pt-5 text-left w-full">{Text.impact.map((t) => <div key={t} className="ml-10">{t}</div>)}</div>
        <div className="pt-10 text-left w-full">{Text.young}</div>
        <div className="pt-10 text-left w-full">{Text.baby}</div>
        <div className="pt-10 text-left w-full">{Text.digestive}</div>
        <div className="pt-10 text-left w-full">{Text.death}</div>
        <div className="h-2/5 w-2/5 mt-10">
          <Image src={DeadBaby} alt="table" />
        </div>
        <div className="pt-10 font-bold text-3xl">{Text.hope}</div>
        <div className="h-2/5 w-2/5 mt-10">
          <Image src={HopefulBaby} alt="table" />
        </div>
      </div>
      <footer className="footer">
          Powered by OceanUS &copy; 2021
      </footer>
    </div>
  );
}
