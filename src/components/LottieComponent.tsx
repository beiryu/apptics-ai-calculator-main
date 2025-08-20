"use client";

import { useLottie } from "lottie-react";

// Import all animations
import heroLottie from "../assets/lottie/hero lottie.json";
import bentoAnimation1 from "../assets/lottie/bento animation 1 (1).json";
import bentoAnimation2 from "../assets/lottie/bento animation 2 (1).json";
import bentoAnimation3 from "../assets/lottie/bento animation 3 (3).json";
import moreGrowth1 from "../assets/lottie/more growth1 (1).json";

// Animation options mapping
const animationFiles = {
  hero: heroLottie,
  bento1: bentoAnimation1,
  bento2: bentoAnimation2,
  bento3: bentoAnimation3,
  growth: moreGrowth1,
};

interface LottieComponentProps {
  animationType?: keyof typeof animationFiles;
  loop?: boolean;
  autoplay?: boolean;
  width?: string;
  height?: string;
  className?: string;
  title?: string;
}

const MyLottieComponent = ({
  animationType = "hero",
  loop = true,
  autoplay = true,
  width = "w-full",
  height = "h-full",
  className = "",
  title,
}: LottieComponentProps) => {
  const selectedAnimation = animationFiles[animationType];

  const defaultOptions = {
    animationData: JSON.parse(JSON.stringify(selectedAnimation)),
    loop,
    autoplay,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <div className={`${width} ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold mb-2 text-center text-gray-800">
          {title}
        </h3>
      )}
      <div className={`${width} ${height}`}>{View}</div>
    </div>
  );
};

export default MyLottieComponent;
