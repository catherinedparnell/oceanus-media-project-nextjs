import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Vector from '../components/vectors';
import VectorLogo from '../components/vectors-explore';
import Text from '../constants/america';

export default function America(props) {
  const {
    none, top, left, textID,
  } = props;

  const variants = {
    visible: { opacity: 1, transition: { duration: 4 } },
    hidden: { opacity: 0 },
  };

  const renderText = () => {
    switch (textID) {
      case 0:
        return (
          <div className="relative flex-col justify-center h-full pt-20">
            {Text[textID]}
          </div>
        );
      case 1:
        return (
          <div className="relative flex-col justify-center h-full pt-20">
            {Text[textID]}
          </div>
        );
      case 2:
        return (
          <div className="relative flex flex-col justify-center items-center h-full text-9xl pt-20">
            {Text[textID]}
          </div>
        );
      default:
        break;
    }
    return null;
  };

  return (
    <div className="flag text-offwhite flex h-screen w-screen relative">
      <div className="relative h-screen w-screen flex justify-center m-3">
        <Vector name="america" />
      </div>
      <div className="font-sans uppercase text-7xl h-screen w-screen absolute">
        <div className="relative h-full w-full">
          {textID === -1 ? (
            <div className="absolute right-1/4 flex-col text-center w-1/2 top-40">
              Our
              <div className="font-sans uppercase text-9xl wave-pattern wave">Oceans</div>
              <div className="text-5xl">Are the</div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                pulse of america.
              </motion.div>
            </div>
          ) : (
            <motion.div
              className="absolute right-1/4 flex-col text-center w-1/2 top-40"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              {renderText()}
            </motion.div>
          )}
        </div>
      </div>
      {textID < 2 ? (
        <motion.div initial="hidden"
          animate="visible"
          variants={variants}
          className={none ? 'hidden' : 'absolute h-20 w-20'}
          style={{ left, top }}
        >
          <Vector name="trident" />
        </motion.div>
      ) : (
        <motion.div initial="hidden"
          animate="visible"
          variants={variants}
          className={none ? 'hidden' : 'absolute'}
          style={{ left, top }}
        >
          <Vector name="sm-plastic-bag" />
        </motion.div>
      )}

      <motion.div initial="hidden"
        animate="visible"
        variants={variants}
      >
        <Link href="/explore/home" passHref>
          <div className="container flex h-10 w-44 justify-evenly bg-offwhite text-dark uppercase text-xs absolute top-0 right-0 m-5 px-3 py-1 text-right">
            <VectorLogo name="dark-logo" className="h-10 w-44" />
            <div>Skip the story</div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
