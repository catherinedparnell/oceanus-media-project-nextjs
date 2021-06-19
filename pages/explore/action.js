import React from 'react';
import Image from 'next/image';

import NavBar from '../../components/nav';
import Text from '../../constants/action';
import RecycleGuide from '../../public/recycleguide.png';

export default function Action() {
  return (
    <div className="mt-16 text-2xl thin">
      <NavBar />
      <div className="flex-col text-left p-10 text-darker">
        <div className="uppercase text-center text-5xl font-bold">{Text.you}</div>
        <div className="mt-10 py-5 bg-dark text-offwhite">
          <div className="text-center font-bold text-4xl">{Text.part}</div>
        </div>
        <div className="pt-10 font-bold text-3xl">{Text.easy}</div>
        <div className="flex flex-col">
          <div className="pt-10 font-bold text-3xl">{Text.swaps}</div>
          <div className="pt-5">{Text.single.map((t) => <div key={t} className="ml-10">{t}</div>)}</div>
          <div className="pt-10 font-bold text-3xl">{Text.recycle}</div>
          <div className="pt-5">{Text.confusing.map((t) => <div key={t} className="ml-10">{t}</div>)}</div>
          <div className="mt-10 w-2/5 self-center">
            <Image src={RecycleGuide} alt="table" />
          </div>
          <div className="pt-10 ml-10">{Text.remember}</div>
          <div className="pt-10 font-bold text-3xl">{Text.water}</div>
          <div className="pt-5"><div className="ml-10">{Text.ditch}</div></div>
          <div className="pt-10 font-bold text-3xl">{Text.cleanup}</div>
          <div className="pt-5"><div className="ml-10">{Text.help}</div></div>
          <div className="pt-10 font-bold text-3xl">{Text.bans}</div>
          <div className="pt-5"><div className="ml-10">{Text.support}</div></div>
        </div>
      </div>
      <footer className="footer">
        Powered by OceanUS &copy; 2021
      </footer>
    </div>
  );
}
