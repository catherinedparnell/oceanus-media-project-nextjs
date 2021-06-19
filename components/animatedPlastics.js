/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SimpleTranslation = (props) => {
  const { scale, start, setStarted } = props;
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (inView && first) {
      controls.start({
        x: [0, Math.random() * scale * 3],
        y: [0, Math.random() * scale * 2.5],
        rotate: 360,
      });
      setFirst(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controls, inView]);

  return (
    <motion.div
      className="plastic absolute"
      animate={controls}
      ref={ref}
      transition={{ duration: 3, ease: 'circOut' }}
      onAnimationStart={!start ? () => setStarted(true) : null}
    />
  );
};

export default function AnimatedPlastics(props) {
  const { setStarted, start } = props;

  // eslint-disable-next-line prefer-spread
  const n = Array.apply(null, Array(500)).map((x, i) => { return i; });

  return (
    <div className="plastic-animation relative">
      {n.map((key) => <SimpleTranslation key={key} scale={key} start={start} setStarted={setStarted} />)}
    </div>
  );
}
