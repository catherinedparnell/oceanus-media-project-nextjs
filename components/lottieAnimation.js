import { useLottie } from 'lottie-react';

const LottieAnimation = ({ animationData, stop, ref=null }) => {
  const options = {
    animationData,
    loop: true,
    autoplay: !stop,
    lottieRef: ref || null,
  };

  const { View } = useLottie(options);

  return View;
};

export default LottieAnimation;
