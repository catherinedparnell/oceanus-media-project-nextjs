import React from 'react';
import Vector from '../../components/vectors-explore';
import NavBar from '../../components/nav';

import Text from '../../constants/home';

export default function Home() {
  return (
    <div className="mt-16 bg-offwhite relative h-screen w-screen text-darker">
      <NavBar />
      <div className="bg-dark container text-offwhite p-5 w-1/2 z-50 mt-20 ml-10">
        <div className="uppercase text-5xl self-center">{Text.know}</div>
      </div>
      <div className="bg-dark container text-offwhite p-5 w-1/2 z-50 absolute bottom-24 right-20">
        <div className="text-3xl">{Text.learn}</div>
      </div>
      <Vector name="sea-floor" className="absolute bottom-0 z-0 w-full" />
    </div>
  );
}
