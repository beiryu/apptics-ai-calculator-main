"use client";

import { useLottie } from "lottie-react";
import { useEffect, useState, useRef, memo } from "react";

// Lazy import animations using dynamic import when needed
const loadAnimation = async (type: string) => {
  switch (type) {
    case "hero":
      return (await import("../assets/lottie/hero lottie.json")).default;
    case "bento1":
      return (await import("../assets/lottie/bento animation 1 (1).json")).default;
    case "bento2":
      return (await import("../assets/lottie/bento animation 2 (1).json")).default;
    case "bento3":
      return (await import("../assets/lottie/bento animation 3 (3).json")).default;
    case "growth":
      return (await import("../assets/lottie/more growth1 (1).json")).default;
    default:
      return (await import("../assets/lottie/hero lottie.json")).default;
  }
};

interface LottieComponentProps {
  animationType?: "hero" | "bento1" | "bento2" | "bento3" | "growth";
  loop?: boolean;
  autoplay?: boolean;
  width?: string;
  height?: string;
  className?: string;
}

const MyLottieComponent = memo(
  ({
    animationType = "hero",
    loop = true,
    autoplay = true,
    width = "w-full",
    height = "h-full",
    className = "",
  }: LottieComponentProps) => {
    const [animationData, setAnimationData] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    // Load animation data when component becomes visible
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { rootMargin: "200px" }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }, []);

    // Load animation data when visible
    useEffect(() => {
      if (isVisible) {
        let isMounted = true;

        loadAnimation(animationType).then((data) => {
          if (isMounted) {
            setAnimationData(data as unknown as never);
          }
        });

        return () => {
          isMounted = false;
        };
      }
    }, [animationType, isVisible]);

    const defaultOptions = animationData
      ? {
          animationData,
          loop,
          autoplay,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            progressiveLoad: true,
          },
        }
      : null;

    const { View } = useLottie(
      defaultOptions || { animationData: {}, loop: false, autoplay: false }
    );

    return (
      <div ref={containerRef} className={`${width} ${className}`}>
        <div className={`${width} ${height}`}>
          {!isVisible || !animationData ? (
            <div className={`${width} ${height} bg-gray-100 animate-pulse rounded-lg`} />
          ) : (
            View
          )}
        </div>
      </div>
    );
  }
);

MyLottieComponent.displayName = "MyLottieComponent";

export default MyLottieComponent;
