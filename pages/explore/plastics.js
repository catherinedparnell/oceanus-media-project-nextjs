import React from 'react';
import Image from 'next/image';

import NavBar from '../../components/nav';
import BarChart from '../../components/barChart';
import Text from '../../constants/plastics';
import MacroData from '../../data/eco';
import MicroData from '../../data/human';

import LifeCycleFull from '../../public/lifecyclefull.png';
import GPGP from '../../public/GPGP.png';
import MicroplasticsPlasticStatic from '../../public/microplasticsplasticstatic.png';

export default function Plastic() {
  return (
    <div className="mt-16 h-screen w-screen text-2xl bg-offwhite text-darker thin">
      <NavBar />
      <div className="flex flex-col text-center p-10">
        <div className="uppercase font-bold text-5xl">{Text.intro[0]}</div>
        <div className="mt-10 py-5 bg-dark text-offwhite">
          <div className="text-center font-bold text-4xl">{Text.lifecycle[0]}</div>
        </div>
        <div className="mt-10 w-3/5 self-center">
          <Image src={LifeCycleFull} alt="table" />
        </div>
      </div>
      <div className="flex-col text-left p-10">
        <div>{Text.long}</div>
        <div className="mt-10 py-5 bg-dark text-offwhite">
          <div className="text-center font-bold text-4xl">Macroplastics</div>
        </div>
        <div className="pt-10">{Text.macroplastic}</div>
      </div>
      <div className="bg-yellow p-5 mx-10">
        <div className="bg-offwhite container mx-40 p-10 w-3/4">
          <div className="font-sans font-bold text-2xl w-3/4 py-5">{Text.graphmacroTitle}</div>
          <BarChart data={MacroData} width={500} height={500} />
        </div>
      </div>
      <div className="flex flex-col text-left p-10">
        <div className="pt-10">{Text.patch}</div>
        <div className="pt-10">{Text.decades}</div>
        <div className="h-2/5 w-2/5 mt-10 self-center">
          <Image src={GPGP} alt="table" />
        </div>
        <div className="mt-10 py-5 bg-dark text-offwhite">
          <div className="text-center font-bold text-4xl">Microplastics</div>
        </div>
        <div className="pt-10">{Text.microplastic}</div>
        <div className="h-2/5 w-2/5 mt-10 self-center">
          <Image src={MicroplasticsPlasticStatic} alt="table" />
        </div>
        <div className="pt-10">{Text.particles}</div>
      </div>
      <div className="bg-yellow p-5 mx-10">
        <div className="bg-offwhite container mx-40 p-10 w-3/4">
          <div className="font-sans font-bold text-2xl w-3/4 py-5">{Text.graphmicroTitle}</div>
          <BarChart data={MicroData} width={500} height={500} />
        </div>
      </div>
      <div className="flex-col text-left p-10">
        <div>{Text.end}</div>
      </div>
      <footer className="footer">
          Powered by OceanUS &copy; 2021
      </footer>
    </div>
  );
}
