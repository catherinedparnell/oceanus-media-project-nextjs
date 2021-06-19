import React from 'react';
import { motion } from 'framer-motion';

export default function Toggle(props) {
  const { isOn, toggleSwitch } = props;

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="switch" data-isOn={isOn} onClick={toggleSwitch} role="button" tabIndex={0}>
      <motion.div className="handle" layout transition={spring} />
    </div>
  );
}
