import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Vector from './vectors';

export default function NavigationPage(props) {
  const { introFlow } = props;

  const variants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
  };

  return (
    <div className="bg-blue text-offwhite flex-col h-screen w-screen relative">
      <Vector name="sea-floor" className="absolute bottom-0 right-0 w-full" />
      <Vector name="scuba" className="absolute left-2/4 top-40 z-50" />
      <div className="flex absolute w-full justify-evenly">
        <div className="z-25 pt-3">
          <div className="font-sans uppercase text-5xl">Marine Life</div>
          <Link href="/flows/eco" passHref><Vector name="arrow-left" className="arrow" /></Link>
        </div>
        {introFlow ? <div className="bg-yellow container text-dark text-center w-1/4 text-3xl p-8 py-14">Learn more about the impacts on... </div> : null}
        <div className="z-25 pt-3">
          <div className="font-sans uppercase text-5xl">People</div>
          <Link href="/flows/human" passHref><Vector name="arrow-right" className="arrow" /></Link>
        </div>
      </div>
      {!introFlow
        ? (
          <motion.div initial="hidden"
            animate="visible"
            variants={variants}
          >
            <Link href="/flows/future" passHref>
              <div className="container flex-col bg-offwhite text-dark uppercase w-1/5 text-3xl absolute bottom-0 right-0 m-5 mr-10 p-10 text-center">
                Move on
                <div className="scroll-prompt" scroll-prompt="" ng-show="showPrompt" style={{ opacity: 1 }}>
                  <div className="scroll-prompt-arrow-container">
                    <div className="scroll-prompt-arrow"><div /></div>
                    <div className="scroll-prompt-arrow"><div /></div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )
        : null}
    </div>
  );
}
