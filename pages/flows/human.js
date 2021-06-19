/* eslint-disable max-len */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import NavigationPage from '../../components/navigationPage';
import Vector from '../../components/vectors';
import BarChart from '../../components/barChart';
import LottieAnimation from '../../components/lottieAnimation';
import AnimatedPlastics from '../../components/animatedPlastics';

import Human from '../../animations/human.json';
import Fish from '../../animations/fastFish.json';
import Scuba from '../../animations/scuba.json';
import Bag from '../../animations/bag.json';
import Bottle from '../../animations/bottle.json';

import Text from '../../constants/human';
import Data from '../../data/human';

export default function HumanFlow() {
  const [started, setStarted] = useState(false);

  const [refScuba, inViewScuba] = useInView();
  const [refBag, inViewBag] = useInView();
  const [refBottle, inViewBottle] = useInView();

  const variants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
  };

  return (
    <div>
      <div className="bg-blue text-dark flex-col justify-center h-screen overflow-y-scroll">
        <div className="flex-col justify-center">
          <div className="bg-yellow container p-10 mt-80 ml-20">
            <div className="font-sans uppercase text-center text-5xl">{Text.intro[0]}</div>
          </div>
          <LottieAnimation animationData={Scuba} ref={refScuba} stop={inViewScuba} />
          <div className="bg-yellow container p-10 ml-20">
            <div className="font-sans uppercase text-center text-5xl">{Text.intro[1]}</div>
          </div>
          <LottieAnimation animationData={Bottle} ref={refBottle} stop={inViewBottle} />
          <div className="bg-yellow container p-10 ml-20">
            <div className="font-sans uppercase text-center text-5xl">{Text.intro[2]}</div>
          </div>
          <LottieAnimation animationData={Bag} ref={refBag} stop={inViewBag} />
          <div className="bg-yellow container p-10 ml-20">
            <div className="font-sans uppercase text-center text-5xl">{Text.intro[3]}</div>
          </div>
          <div className="bg-yellow container p-10 my-80 ml-20">
            <div className="font-sans uppercase text-center text-5xl">{Text.intro[4]}</div>
          </div>
        </div>
      </div>
      <div className="bg-yellow text-dark h-screen">
        <div className="h-screen w-screen flex">
          <motion.div
            className="self-start m-10 w-1/2"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <div className="font-sans text-blue uppercase text-7xl">
              There are almost <div className="text-8xl text-red">5 trillion</div> microplastic particles in the world&apos;s surface oceans.
            </div>
          </motion.div>
          <div className="bg-offwhite container m-10 p-10 w-1/2">
            <div className="font-sans text-2xl w-3/4 py-5">{Text.graphTitle}</div>
            <BarChart data={Data} width={500} height={500} />
          </div>
        </div>
      </div>
      <div className="bg-dark text-offwhite flex justify-center h-screen">
        <AnimatedPlastics setStarted={setStarted} start={started} />
        <LottieAnimation animationData={Fish} stop={!started} />
        <div className="font-sans uppercase text-5xl py-60 w-1/2">{Text.ingest}</div>
      </div>
      <div className="bg-blue text-dark flex justify-evenly h-screen w-screen">
        <div className="flex-col w-1/2">
          <div className="flex bg-yellow container justify-center p-5 h-1/3 m-20">
            <div className="font-sans uppercase text-3xl m-5 my-12 w-3/4">{Text.dinner}</div>
            <Vector name="dinner-plate" className="my-14" />
          </div>
          <div className="flex bg-yellow container justify-center p-5 h-1/3 m-20">
            <div className="font-sans uppercase text-3xl m-5 my-10">{Text.eat}</div>
          </div>
        </div>
        <div className="mt-5 ml-20 w-1/2">
          <LottieAnimation animationData={Human} />
        </div>
      </div>
      <div className="bg-red text-dark flex-col h-screen justify-center relative">
        <div className="bg-yellow container p-5 w-1/2 absolute top-20 left-1/4">
          <div className="font-sans text-4xl text-center">{Text.extent}</div>
        </div>
        <div className="bg-yellow container z-50 w-1/2 absolute bottom-20 left-1/4 p-5">
          <div className=" font-sans text-dark text-center text-4xl ">{Text.final}</div>
        </div>
        <Vector name="wave-bottom" className=" z-0 absolute bottom-0" />
      </div>
      <NavigationPage />
    </div>
  );
}
