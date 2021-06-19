/* eslint-disable max-len */
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import BarChart from '../../components/barChart';
import NavigationPage from '../../components/navigationPage';
import LottieAnimation from '../../components/lottieAnimation';
import Vector from '../../components/vectors';

import Suzie from '../../animations/suziePlastic.json';
import SuzieSwim from '../../animations/suzieSwim.json';
import SuzieFloats from '../../animations/suzieFloats.json';
import SuzieDiagonal from '../../animations/suzieDiagonal.json';
import Seaweed from '../../animations/seaweed.json';

import Text from '../../constants/eco';
import Data from '../../data/eco';
import PlasticsSvg from '../../public/PlasticsSvg.png';

export default function EcologicalFlow() {
  const variants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
  };

  return (
    <div className="overflow-x-hidden">
      <div className="relative bg-blue text-dark">
        <div className="w-screen h-screen flex-col relative bg-yellow">
          <div className="bg-yellow container absolute left-0 bottom-0 p-8 z-50 m-5 w-1/4">
            <div className="font-sans uppercase text-5xl">This is <span className="text-turtle">Suzie</span>
              <div>the sea turtle.</div>
            </div>
          </div>
          <div className="absolute z-50">
            <LottieAnimation animationData={SuzieFloats} />
          </div>
          <Vector name="wave-bottom" className="absolute bottom-60 z-0" />
          <div className="w-screen bg-blue h-60 absolute bottom-0 z-0" />
        </div>
        <div className="h-screen w-screen relative">
          <div className="bg-yellow container absolute right-0 top-0 p-8 z-50 m-5 w-1/2">
            <div className="font-sans uppercase text-4xl">{Text.endangered}</div>
          </div>
          <LottieAnimation animationData={SuzieDiagonal} />
        </div>
        <div className="w-screen h-screen flex-col relative">
          <div className="bg-yellow container absolute left-0 top-0 p-8 z-50 m-5 w-1/2">
            <div className="font-sans uppercase text-4xl">{Text.journey}</div>
          </div>
          <LottieAnimation animationData={SuzieSwim} />
          <div className="bg-yellow container absolute right-0 bottom-0 p-8 z-50 m-5 w-2/5">
            <div className="relative">
              <Vector name="eggs" className="absolute -top-40 -right-10" />
              <div className="font-sans uppercase text-3xl w-2/3">{Text.eggs}</div>
            </div>
          </div>
        </div>
        <div className="w-screen h-screen relative flex bg-dark">
          <div className="bg-yellow container absolute left-0 top-0 p-8 z-50 m-5 w-1/2">
            <div className="font-sans uppercase text-4xl">{Text.threat}</div>
          </div>
          <div className="absolute bottom-0 right-0 z-50 h-screen w-screen overflow-hidden">
            <LottieAnimation animationData={Suzie} />
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
                There are an estimated<div className="text-8xl text-red">2,334 tons</div> of macroplastics in the world&apos;s surface oceans.
              </div>
            </motion.div>
            <div className="bg-offwhite container m-10 p-10 w-1/2">
              <div className="font-sans text-2xl w-3/4 py-5">{Text.graphTitle}</div>
              <BarChart data={Data} width={500} height={500} />
            </div>
          </div>
        </div>
        <div className="w-screen h-screen flex-col relative bg-yellow">
          <div className="bg-yellow container absolute left-0 bottom-0 p-8 z-50 m-5 w-1/2">
            <div className="font-sans uppercase text-5xl">{Text.story}</div>
          </div>
          <Vector name="suzie-caught" className="absolute right-0 -bottom-0 z-50" />
          <Vector name="wave-bottom" className="absolute bottom-80 z-0" />
          <div className="w-screen bg-blue h-80 absolute bottom-0 z-0" />
        </div>
        <div className="w-screen h-screen relative bg-dark">
          <div className="bg-yellow container absolute left-0 top-10 p-8 z-50 m-5 w-1/2">
            <div className="font-sans uppercase text-3xl">{Text.others}</div>
          </div>
          <Image src={PlasticsSvg} alt="alt" className="absolute right-0" layout="fill" />
        </div>
        <div className="w-screen h-screen flex relative bg-dark">
          <div className="bg-yellow container absolute left-10 top-1/5 p-8 z-50 m-5 w-1/4 text-center">
            <div className="font-sans uppercase text-3xl">{Text.hatchlings}</div>
          </div>
          <div className="w-screen">
            <LottieAnimation animationData={Seaweed} />
          </div>
          <div className="bg-yellow container absolute right-10 bottom-0 p-8 z-50 m-5 w-1/4 text-center">
            <div className="font-sans uppercase text-3xl">{Text.baby}</div>
          </div>
        </div>
        <div className="w-screen h-screen flex relative bg-red justify-center">
          <div className="bg-yellow text-dark container h-1/2 w-1/2 z-50 mt-10">
            <div className="font-sans uppercase text-5xl text-center p-10">{Text.actions}</div>
          </div>
        </div>
        <Vector name="wave-bottom" className="z-0 absolute -bottom-10" />
      </div>
      <NavigationPage />
    </div>
  );
}
