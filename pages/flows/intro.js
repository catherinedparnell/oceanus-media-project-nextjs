/* eslint-disable max-len */
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import NavigationPage from '../../components/navigationPage';
import PieChart from '../../components/pieChart';
import BubbleChart from '../../components/bubbleChart';
import BarChart from '../../components/barChart';
import Vector from '../../components/vectors';
import Toggle from '../../components/toggle';

import Text from '../../constants/intro';
import Data from '../../data/intro';

export default function Intro() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  const variants = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0 },
  };

  return (
    <div>
      <div className="bg-blue text-offwhite h-screen w-screen flex">
        <motion.div
          className="self-start m-3"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <div className="font-sans text-white uppercase text-7xl">
            The world produces <div className="text-8xl text-yellow">381 million tons</div> of <span className="text-red">plastic</span> per year.
          </div>
        </motion.div>
        <div className="overflow-y-scroll p-14">
          <div className="container flex bg-yellow justify-center p-10 m-5 mt-10 mb-60">
            <div className="flex-col justify-between h-full">
              <div className="font-sans uppercase text-3xl text-blue">{Text.avgAmerican}</div>
              <div className="bg-blue p-5 flex justify-center content-center w-2/3 mt-48 container">
                {isOn ? <div className="font-sans text-s text-yellow pr-5 w-1/2">See as bars:</div> : <div className="font-sans text-s text-yellow pr-5 w-1/2">See as bubbles:</div>}
                <Toggle isOn={isOn} toggleSwitch={toggleSwitch} />
              </div>
            </div>
            {isOn ? <BubbleChart width={450} height={450} data={Data.bubble} /> : <BarChart width={450} height={450} data={Data.bar2} />}
          </div>
          <div className="container flex bg-yellow justify-center p-10 m-5 my-60">
            <div className="flex-col h-full justify-between">
              <div className="font-sans uppercase text-3xl text-blue">{Text.entersOceans}</div>
              <div className="font-sans uppercase text-3xl text-blue pt-56">That&apos;s 3% of all plastic waste.</div>
            </div>
            <PieChart width={450} height={450} data={Data.pie} />
          </div>
          <div className="container flex bg-yellow justify-center p-10 m-5 my-80">
            <div className="font-sans uppercase text-3xl text-blue">{Text.problem}</div>
          </div>
        </div>
      </div>
      <div className="bg-yellow h-screen w-screen relative">
        <div className="font-sans uppercase text-8xl text-dark text-center p-36">So <span className="text-red">why</span> is OCEAN PLASTIC POLLUTION a problem?</div>
        <Vector name="wave-bottom2" className="absolute bottom-0 w-full" />
      </div>
      <NavigationPage introFlow />
    </div>
  );
}
