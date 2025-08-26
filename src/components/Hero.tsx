import type { NextPage } from "next";
import Image from "next/image";
import MyLottieComponent from "./LottieComponent";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  appearAnimationVariants,
  scrollAnimationVariants,
  headerScrollVariants,
} from "@/libs/framer-motion";
import Link from "next/link";
import InfiniteLogoCarousel from "./InfiniteLogoCarousel";

const Hero: NextPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const navTriggerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY) {
      setScrollDirection("down");
    } else if (latest < lastScrollY) {
      setScrollDirection("up");
    }

    setLastScrollY(latest);

    const scrollThreshold = 100;

    if (latest > scrollThreshold && (scrollDirection === "down" || navScrolled)) {
      setNavScrolled(true);
    } else if (
      latest <= scrollThreshold ||
      (scrollDirection === "up" && latest <= scrollThreshold)
    ) {
      setNavScrolled(false);
    }
  });

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add resize listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Mobile component rendering
  if (isMobile) {
    return (
      <>
        {/* Mobile Hero Section */}
        <div className="w-full overflow-hidden flex flex-col items-start justify-start pt-[90px] px-5 pb-10 box-border gap-10 z-[0] text-gray-300">
          <div className="self-stretch flex flex-col items-center justify-start gap-6">
            <div className="self-stretch flex flex-col items-center justify-start gap-[22px] font-geist">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={appearAnimationVariants}
                className="rounded-[60px] bg-white border-gainsboro-300 border-solid border-[1px] flex flex-row items-center justify-start py-1.5 px-3 gap-2.5"
              >
                <Image
                  className="w-[18px] relative max-h-full"
                  width={18}
                  height={18}
                  sizes="100vw"
                  alt=""
                  src="/assets/hero/Layer_1.svg"
                />
                <div className="relative tracking-[-0.02em] leading-[150%] capitalize">
                  Built for shopify
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={appearAnimationVariants}
                className="self-stretch flex flex-col items-center justify-start gap-[9px] text-[47px] font-plus-jakarta-sans"
              >
                <div className="self-stretch flex flex-col items-center justify-start gap-0.5">
                  <b className="relative tracking-[-0.06em]">{`Turn your `}</b>
                  <div className="h-[46px] flex flex-row items-center justify-start gap-[5px]">
                    <b className="relative tracking-[-0.06em]">Shoppers</b>
                    <b className="relative tracking-[-0.06em]">into</b>
                  </div>
                </div>
                <div className="h-[46px] flex flex-row items-center justify-start py-0 pl-0 pr-1 box-border gap-[5px]">
                  <div className="w-[51.9px] relative rounded-[12.32px] h-[51.9px] shrink-0 overflow-hidden flex items-center justify-center">
                    <Image
                      className="w-full h-full overflow-hidden shrink-0 object-cover absolute left-[0px] top-[13px] [transform:scale(1.415)]"
                      width={51.9}
                      height={51.9}
                      sizes="100vw"
                      alt=""
                      src="/assets/hero/Frame 2147226509.svg"
                    />
                  </div>
                  <b className="relative tracking-[-0.06em] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Subscribers
                  </b>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={appearAnimationVariants}
              transition={{ delay: 0.2 }}
              className="self-stretch relative tracking-[-0.01em] leading-[150%] text-gray-200 whitespace-pre-wrap"
            >
              Everything you need to create and grow your subscriptions all in one place!
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={appearAnimationVariants}
              transition={{ delay: 0.3 }}
              className="rounded-full h-[60px] flex flex-row items-start justify-start text-left text-white"
            >
              <div className="shadow-[0px_0px_9.6px_4.8px_rgba(255,_255,_255,_0.16)_inset,_0px_-2.4000000953674316px_0px_#000_inset,_0px_1.2000000476837158px_1.2px_#000_inset,_0px_2.4000000953674316px_1.2px_rgba(255,_255,_255,_0.25)_inset] rounded-2xl [background:linear-gradient(88.67deg,_#1d1d1d,_#333_34.6%,_#3d3d3d_76.69%,_#1d1d1d)] flex flex-row items-center justify-center py-4 px-6">
                <div className="[filter:drop-shadow(0px_2.4000000953674316px_2.4px_rgba(0,_0,_0,_0.48))] flex flex-row items-center justify-start gap-[14.4px]">
                  <a className="relative tracking-[-0.03em] font-medium z-[10]" href="#calculator">
                    Calculate My MRR
                  </a>
                  <Image
                    className="w-[20.4px] relative max-h-full"
                    width={20.4}
                    height={20}
                    sizes="100vw"
                    alt=""
                    src="/assets/hero/Group1000011035.svg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="self-stretch relative h-[230px] text-left text-[6.97px] text-dimgray flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center -z-10">
              {/* Mobile Hero Animation/Images */}
              <MyLottieComponent animationType="hero" width="w-full" height="h-full" />
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        <div className="w-full max-w-[550px] absolute top-[16px] left-0 right-0 mx-auto shadow-[0px_8.057844161987305px_8.06px_rgba(11,_32,_103,_0.05),_0px_1.1511205434799194px_2.3px_rgba(11,_32,_103,_0.14),_0px_30px_40px_rgba(0,_0,_0,_0.03)] rounded-[16px] bg-white h-12 flex flex-row items-center justify-between p-2 box-border gap-0 z-[1]">
          <Image
            className="w-[99.8px] h-7 overflow-hidden shrink-0 object-cover"
            width={99.8}
            height={28}
            sizes="100vw"
            alt=""
            src="/assets/nav/asset 39.svg"
          />
          <div className="w-[30px] overflow-hidden shrink-0 flex flex-col items-start justify-start p-[5px] box-border gap-1">
            <div className="self-stretch relative rounded-xl bg-gray-300 h-0.5" />
            <div className="self-stretch relative rounded-xl bg-gray-300 h-0.5" />
            <div className="self-stretch relative rounded-xl bg-gray-300 h-0.5" />
          </div>
        </div>
        {/* Mobile Integration Section */}
        <motion.b
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={scrollAnimationVariants}
          className="self-stretch overflow-hidden flex flex-col items-center justify-start py-8 px-0 z-[2] text-gray-300 font-plus-jakarta-sans"
        >
          <div className="self-stretch relative rounded-2xl h-[102px] overflow-hidden shrink-0">
            <div className="absolute top-[0px] left-[calc(50%_-_153.71px)] leading-[110%] font-medium inline-block w-[307.4px] mb-[30px] z-10">
              Seamless Integration Across all your Apps
            </div>
            <div className="absolute top-[42px] w-full">
              <InfiniteLogoCarousel
                logos={[
                  {
                    src: "/assets/hero/Logo.svg",
                    width: 125.9,
                    height: 60,
                    className: "w-[125.9px] relative h-[60px] overflow-hidden shrink-0",
                  },
                  {
                    src: "/assets/hero/Logo02.svg",
                    width: 193.4,
                    height: 41.3,
                    className: "w-[193.4px] relative h-[41.3px] overflow-hidden shrink-0",
                  },
                  {
                    src: "/assets/hero/Logo.svg",
                    width: 128.4,
                    height: 36.4,
                    className: "w-[128.4px] relative h-[36.4px] overflow-hidden shrink-0",
                  },
                  {
                    src: "/assets/hero/Logo02.svg",
                    width: 92.3,
                    height: 24,
                    className: "w-[92.3px] relative h-6 overflow-hidden shrink-0",
                  },
                  {
                    src: "/assets/hero/Logo03.svg",
                    width: 107.8,
                    height: 34.5,
                    className:
                      "w-[107.8px] relative h-[34.5px] overflow-hidden shrink-0 object-cover",
                  },
                  {
                    src: "/assets/hero/Logo04.svg",
                    width: 145.7,
                    height: 37.9,
                    className: "w-[145.7px] relative h-[37.9px] overflow-hidden shrink-0",
                  },
                ]}
                gap={40}
                speed={25}
                isMobile={true}
              />
            </div>
          </div>
        </motion.b>
      </>
    );
  }

  // Desktop component rendering
  return (
    <>
      {/* Невидимый элемент для отслеживания прокрутки и триггера анимации хедера */}
      <div
        id="nav-trigger"
        ref={navTriggerRef}
        className="absolute top-0 w-full h-[100px] z-[-1]"
      />

      <div
        ref={heroRef}
        className="self-stretch rounded-3xl overflow-hidden flex flex-col items-center justify-start pt-[140px] px-5 sm:px-10 md:px-[70px] pb-0 z-[0] text-left text-lg text-white"
      >
        <div className="w-full max-w-[1150px] flex flex-col items-center justify-start gap-12">
          <div className="self-stretch flex flex-col items-center justify-start gap-6 text-center text-gray-300 font-plus-jakarta-sans">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={appearAnimationVariants}
              className="shadow-[0px_51px_14px_rgba(0,_0,_0,_0),_0px_33px_13px_rgba(0,_0,_0,_0.01),_0px_18px_11px_rgba(0,_0,_0,_0.03),_0px_8px_8px_rgba(0,_0,_0,_0.06),_0px_2px_5px_rgba(0,_0,_0,_0.07)] rounded-[60px] bg-white border-gainsboro-300 border-solid border-[1px] flex flex-row items-center justify-start py-2 px-4 gap-2.5"
            >
              <Image
                className="w-[22px] relative max-h-full"
                width={22}
                height={22}
                sizes="100vw"
                alt=""
                src="/assets/hero/Layer_1.svg"
              />
              <div className="relative tracking-[-0.02em] leading-[150%] capitalize">
                Built for shopify
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={appearAnimationVariants}
              transition={{ delay: 0.1 }}
              className="self-stretch flex flex-col items-center justify-start text-5xl sm:text-6xl md:text-[90px]"
            >
              <b className="self-stretch relative tracking-[-0.01em] leading-[115%]">
                Turn Your Shoppers
              </b>
              <div className="flex flex-row items-center justify-center gap-1">
                <b className="relative tracking-[-0.03em] leading-[115%]">into</b>
                <div className="w-[101.1px] relative rounded-3xl h-[101.1px] shrink-0 overflow-hidden flex items-center justify-center">
                  <Image
                    className="w-full h-full overflow-hidden shrink-0 object-cover absolute left-[0px] top-[26px] [transform:scale(1.416)]"
                    width={101.1}
                    height={101.1}
                    sizes="100vw"
                    alt=""
                    src="/assets/hero/Frame 2147226509.svg"
                  />
                </div>
                <b className="relative tracking-[-0.03em] leading-[115%] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Subscribers `}</b>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={appearAnimationVariants}
              transition={{ delay: 0.2 }}
              className="w-full max-w-[596.7px] relative text-xl md:text-2xl tracking-[-0.01em] leading-[150%] font-inter text-gray-200 whitespace-pre-wrap inline-block"
            >
              Everything you need to create and grow your subscriptions all in one place!
            </motion.div>
          </div>
          <div className="hidden flex-row items-start justify-start gap-4 text-xl">
            <div className="shadow-[0px_0px_9.6px_4.8px_rgba(255,_255,_255,_0.16)_inset,_0px_-2.4000000953674316px_0px_rgba(0,_0,_0,_0.1)_inset,_0px_1.2000000476837158px_1.2px_rgba(0,_0,_0,_0.1)_inset,_0px_2.4000000953674316px_1.2px_rgba(255,_255,_255,_0.25)_inset] rounded-3xl [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] overflow-hidden flex flex-row items-center justify-center py-[18px] px-6">
              <div className="shadow-[0px_2.4000000953674316px_2.4px_rgba(26,_60,_105,_0.24)] flex flex-row items-center justify-start gap-[14.4px]">
                <a
                  href="#calculator"
                  className="relative tracking-[-0.03em] font-medium z-[10] cursor-pointer"
                >
                  Calculate My MRR
                </a>
                <Image
                  className="w-[24.5px] relative max-h-full"
                  width={24.5}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/assets/hero/Group1000011035.svg"
                />
              </div>
            </div>
            <div className="w-[250px] shadow-[0px_0px_8px_4px_rgba(255,_255,_255,_0.16)_inset,_0px_-2px_0px_#000_inset,_0px_1px_1px_#000_inset,_0px_2px_1px_rgba(255,_255,_255,_0.25)_inset] rounded-[20px] [background:linear-gradient(88.67deg,_#1d1d1d,_#333_34.6%,_#3d3d3d_76.69%,_#1d1d1d)] overflow-hidden shrink-0 hidden flex-row items-center justify-center py-[18px] px-6 box-border">
              <div className="shadow-[0px_2.4000000953674316px_2.4px_rgba(26,_60,_105,_0.24)] flex flex-row items-center justify-start gap-[14.4px]">
                <Link
                  href="https://cal.com/akash-fmj/30min"
                  target="_blank"
                  className="relative tracking-[-0.03em] font-medium cursor-pointer hover:text-gray-300 transition-colors duration-300"
                >
                  Book a Call
                </Link>
                <Image
                  className="w-[24.5px] relative max-h-full"
                  width={24.5}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/assets/hero/Group1000011035.svg"
                />
              </div>
            </div>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={appearAnimationVariants}
            transition={{ delay: 0.3 }}
            className="h-[60px] flex flex-row items-start justify-start text-[19.2px]"
          >
            <div className="shadow-[0px_0px_9.6px_4.8px_rgba(255,_255,_255,_0.16)_inset,_0px_-2.4000000953674316px_0px_#000_inset,_0px_1.2000000476837158px_1.2px_#000_inset,_0px_2.4000000953674316px_1.2px_rgba(255,_255,_255,_0.25)_inset] rounded-3xl [background:linear-gradient(88.67deg,_#1d1d1d,_#333_34.6%,_#3d3d3d_76.69%,_#1d1d1d)] h-[60px] overflow-hidden flex flex-row items-center justify-center py-[14.4px] px-[28.8px] box-border">
              <div className="[filter:drop-shadow(0px_2.4000000953674316px_2.4px_rgba(0,_0,_0,_0.48))] flex flex-row items-center justify-start gap-[14.4px]">
                <a
                  href="#calculator"
                  className="relative tracking-[-0.03em] font-medium z-[10] cursor-pointer"
                >
                  Calculate My MRR
                </a>
                <Image
                  className="w-[24.5px] relative max-h-full"
                  width={24.5}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/assets/hero/Group1000011035.svg"
                />
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full max-w-[1250px] relative h-[400px] md:h-[500px] lg:h-[580px] text-sm text-dimgray -z-10">
          <MyLottieComponent animationType="hero" width="w-full" height="h-full" />
        </div>
      </div>
      <motion.header
        initial="default"
        animate={navScrolled ? "desktop_scroll" : "default"}
        variants={headerScrollVariants}
        className="flex flex-row items-center justify-between gap-0 z-[10] text-left text-lg text-gray-200 font-plus-jakarta-sans"
        transition={{ type: "spring", stiffness: 50, damping: 14 }}
      >
        <Link href="/">
          <Image
            className="w-[128.5px] h-10 object-cover"
            width={128.5}
            height={40}
            sizes="100vw"
            alt=""
            src="/assets/nav/asset 39.svg"
          />
        </Link>
        <motion.div
          className="hidden md:flex flex-row items-center justify-start gap-0 md-gap-4"
          transition={{ duration: 0.5, ease: [0.19, 0.39, 0.4, 0.99] }}
        >
          <div className="rounded-2xl flex flex-row items-center justify-center py-3 px-4">
            <a
              href="#features"
              className="relative tracking-[-0.03em] leading-[140%] font-medium cursor-pointer hover:text-gray-300 transition-colors duration-300"
            >
              Features
            </a>
          </div>
          <div className="rounded-2xl flex flex-row items-center justify-center py-3 px-4">
            <a
              href="#onboarding"
              className="relative tracking-[-0.03em] leading-[140%] font-medium cursor-pointer hover:text-gray-300 transition-colors duration-300"
            >
              Onboarding
            </a>
          </div>
          <div className="rounded-2xl flex flex-row items-center justify-center py-3 px-4">
            <a
              href="#calculator"
              className="relative tracking-[-0.03em] leading-[140%] font-medium cursor-pointer hover:text-gray-300 transition-colors duration-300"
            >
              Calculator
            </a>
          </div>
          <div className="rounded-2xl flex flex-row items-center justify-center py-3 px-4">
            <a
              href="#faqs"
              className="relative tracking-[-0.03em] leading-[140%] font-medium cursor-pointer hover:text-gray-300 transition-colors duration-300"
            >
              FAQs
            </a>
          </div>
        </motion.div>
        <motion.div
          className="shadow-[0px_6px_4px_rgba(255,_255,_255,_0.36)_inset,_0px_9.735769271850586px_9.74px_rgba(11,_32,_103,_0.05),_0px_1.3908241987228394px_2.78px_rgba(11,_32,_103,_0.14),_0px_36.24705123901367px_48.33px_rgba(0,_0,_0,_0.03)] rounded-2xl bg-white overflow-hidden hidden md:flex flex-row items-center justify-center py-3 px-4 text-gray-300 font-inter"
          animate={{
            backgroundColor: navScrolled ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.9)",
            boxShadow: navScrolled
              ? "0px 6px 4px rgba(255, 255, 255, 0.36) inset, 0px 9.7px 9.7px rgba(11, 32, 103, 0.08), 0px 1.4px 2.8px rgba(11, 32, 103, 0.18)"
              : "0px 6px 4px rgba(255, 255, 255, 0.36) inset, 0px 9.7px 9.7px rgba(11, 32, 103, 0.05), 0px 1.4px 2.8px rgba(11, 32, 103, 0.14)",
          }}
          transition={{ duration: 0.5, ease: [0.19, 0.39, 0.4, 0.99] }}
        >
          <div className="flex flex-row items-center justify-center opacity-[0.6]">
            <Link
              href="https://cal.com/akash-fmj/30min"
              target="_blank"
              className="relative tracking-[-0.03em] font-medium cursor-pointer hover:text-gray-300 transition-colors duration-300"
            >
              Book a Call
            </Link>
          </div>
        </motion.div>
      </motion.header>
      <motion.b
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={scrollAnimationVariants}
        className="self-stretch overflow-hidden flex flex-col items-center justify-start py-10 px-5 z-[2] text-xl md:text-2xl text-gray-300 font-plus-jakarta-sans"
      >
        <div className="w-full max-w-[1200px] relative rounded-2xl h-[138px] overflow-hidden shrink-0">
          <div className="absolute top-[0px] left-[0px] leading-[110%] font-medium inline-block w-full mb-[40px] z-10">
            Seamless Integration Across all your Apps
          </div>
          <div className="absolute top-[58px] w-full">
            <InfiniteLogoCarousel
              logos={[
                {
                  src: "/assets/hero/wordpresscom_logo.svg",
                  width: 167.8,
                  height: 80,
                  className: "w-[167.8px] relative h-20 overflow-hidden shrink-0",
                },
                {
                  src: "/assets/hero/Logo (1).svg",
                  width: 257.8,
                  height: 55,
                  className: "w-[257.8px] relative h-[55px] overflow-hidden shrink-0",
                },
                {
                  src: "/assets/hero/Logo (2).svg",
                  width: 171.2,
                  height: 48.6,
                  className: "w-[171.2px] relative h-[48.6px] overflow-hidden shrink-0",
                },
                {
                  src: "/assets/hero/nmi_logo.svg",
                  width: 123.1,
                  height: 32,
                  className: "w-[123.1px] relative h-8 overflow-hidden shrink-0",
                },
                {
                  src: "/assets/hero/Logo Alternative.svg",
                  width: 143.8,
                  height: 46,
                  className: "w-[143.8px] relative h-[46px] overflow-hidden shrink-0 object-cover",
                },
                {
                  src: "/assets/hero/checkoutcom_logo.svg",
                  width: 194.2,
                  height: 50.5,
                  className: "w-[194.2px] relative h-[50.5px] overflow-hidden shrink-0",
                },
                {
                  src: "/assets/hero/bigcommerce_logo.svg",
                  width: 194.2,
                  height: 50.5,
                  className: "w-[194.2px] relative h-[50.5px] overflow-hidden shrink-0",
                },
              ]}
              gap={80}
              speed={30}
              isMobile={false}
            />
          </div>
        </div>
      </motion.b>
    </>
  );
};

export default Hero;
