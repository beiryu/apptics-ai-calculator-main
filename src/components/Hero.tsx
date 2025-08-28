import type { NextPage } from "next";
import Image from "next/image";
import MyLottieComponent from "./LottieComponent";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, Variants } from "framer-motion";
import {
  // appearAnimationVariants,
  scrollAnimationVariants,
  headerScrollVariants,
} from "@/libs/framer-motion";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import NavFramerComponent from "@/components/framer/navigation/nav";
import CtaButtonFramerComponent from "@/components/framer/button/cta-button";

const builtForShopifyVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 1,
    rotate: 0,
    skewX: 0,
    skewY: 0,
    x: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    skewX: 0,
    skewY: 0,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.6,
      bounce: 0.2,
      delay: 0,
    },
  },
};

const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 1,
    rotate: 0,
    skewX: 0,
    skewY: 0,
    x: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    skewX: 0,
    skewY: 0,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.6,
      bounce: 0.2,
      delay: 0.2,
    },
  },
};

const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 1,
    rotate: 0,
    skewX: 0,
    skewY: 0,
    x: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    skewX: 0,
    skewY: 0,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.6,
      bounce: 0.2,
      delay: 0.2,
    },
  },
};

const calculateMyMRRVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 1,
    rotate: 0,
    skewX: 0,
    skewY: 0,
    x: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    skewX: 0,
    skewY: 0,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.6,
      bounce: 0.2,
      delay: 0.3,
    },
  },
};

const logos = [
  "/assets/hero/Logo.svg",
  "/assets/hero/Logo (1).svg",
  "/assets/hero/Group.svg",
  "/assets/hero/Logo (2).svg",
  "/assets/hero/Logo Alternative.svg",
  "/assets/hero/nmi_logo.svg",
  "/assets/hero/bigcommerce_logo.svg",
  "/assets/hero/checkoutcom_logo.svg",
  "/assets/hero/wordpresscom_logo.svg",
];

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
      setIsMobile(window.innerWidth < 1200);
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
        <div className="w-full overflow-hidden flex flex-col items-start justify-start pt-[120px] px-5 pb-10 box-border gap-10 z-[0] text-gray-300">
          <div className="self-stretch flex flex-col items-center justify-start gap-6">
            <div className="self-stretch flex flex-col items-center justify-start gap-[22px] font-geist">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={builtForShopifyVariants}
                className="shadow-[0px_51px_14px_rgba(0,_0,_0,_0),_0px_33px_13px_rgba(0,_0,_0,_0.01),_0px_18px_11px_rgba(0,_0,_0,_0.03),_0px_8px_8px_rgba(0,_0,_0,_0.06),_0px_2px_5px_rgba(0,_0,_0,_0.07)] rounded-[60px] bg-white border-gainsboro-300 border-solid border-[1px] flex flex-row items-center justify-start py-2 px-4 gap-2.5 font-plus-jakarta-sans"
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
                variants={titleVariants}
                className="self-stretch flex flex-col items-center justify-start gap-[9px] text-[47px] font-plus-jakarta-sans"
              >
                <div className="self-stretch flex flex-col items-center justify-start gap-0.5">
                  <b className="relative tracking-[-0.06em]">{`Turn your Shoppers into`}</b>
                  {/* <div className="h-[46px] flex flex-row items-center justify-start gap-[5px]">
                    <b className="relative tracking-[-0.06em]">Shoppers</b>
                    <b className="relative tracking-[-0.06em]">into</b>
                  </div> */}
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
              variants={descriptionVariants}
              transition={{ delay: 0.2 }}
              className="self-stretch relative tracking-[-0.01em] leading-[150%] text-gray-200 whitespace-pre-wrap"
            >
              Everything you need to create and grow your subscriptions all in one place!
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={calculateMyMRRVariants}
              transition={{ delay: 0.3 }}
              className="rounded-full h-[60px] flex flex-row items-start justify-start text-left text-white"
            >
              <CtaButtonFramerComponent
                variant="Variant 3"
                fill={"rgb(255, 255, 255)"}
                link={"/#calculator"}
                title={"Calculate My MRR"}
                newTab={false}
                smoothScroll={true}
              />
              {/* <div className="shadow-[0px_0px_9.6px_4.8px_rgba(255,_255,_255,_0.16)_inset,_0px_-2.4000000953674316px_0px_#000_inset,_0px_1.2000000476837158px_1.2px_#000_inset,_0px_2.4000000953674316px_1.2px_rgba(255,_255,_255,_0.25)_inset] rounded-2xl [background:linear-gradient(88.67deg,_#1d1d1d,_#333_34.6%,_#3d3d3d_76.69%,_#1d1d1d)] flex flex-row items-center justify-center py-4 px-6">
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
              </div> */}
            </motion.div>
          </div>
          <div className="self-stretch relative h-[230px] my-0 sm:my-5 md:my-10 lg:my-20 text-left text-[6.97px] text-dimgray flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center -z-10">
              {/* Mobile Hero Animation/Images */}
              <MyLottieComponent animationType="hero" width="w-full" height="h-full" />
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        <motion.div
          initial="default"
          animate={navScrolled ? "desktop_scroll" : "default"}
          variants={headerScrollVariants}
          className="flex flex-row items-center justify-center w-full gap-0 z-[10] text-left text-lg text-gray-200 font-plus-jakarta-sans mx-auto"
          transition={{ type: "spring", stiffness: 50, damping: 14 }}
        >
          <motion.div
            className="flex"
            transition={{ duration: 0.5, ease: [0.19, 0.39, 0.4, 0.99] }}
          >
            <NavFramerComponent variant={"Tablet/phone"} className="mx-auto" />
          </motion.div>
        </motion.div>
        {/* <div className="w-full max-w-[550px] absolute top-[16px] left-0 right-0 mx-auto shadow-[0px_8.057844161987305px_8.06px_rgba(11,_32,_103,_0.05),_0px_1.1511205434799194px_2.3px_rgba(11,_32,_103,_0.14),_0px_30px_40px_rgba(0,_0,_0,_0.03)] rounded-[16px] bg-white h-12 flex flex-row items-center justify-between p-2 box-border gap-0 z-[50]">
          <NavFramerComponent
            variant="Tablet/phone"
            // className="flex flex-row items-center justify-center mx-auto"
          />
        </div> */}

        {/* Mobile Integration Section */}
        <motion.b
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={scrollAnimationVariants}
          className="self-stretch overflow-hidden flex flex-col items-center justify-start py-8 px-0 z-[2] text-gray-300 font-plus-jakarta-sans"
        >
          <div className="self-stretch relative rounded-2xl h-[102px] overflow-hidden shrink-0">
            <div className="absolute top-[0px] left-[0px] leading-[110%] font-medium inline-block w-full mb-[40px] z-10">
              Seamless Integration Across all your Apps
            </div>
            <div className="absolute top-[42px] w-full">
              <Marquee gradient={false} speed={100} className="w-full">
                {logos.map((logo, index) => (
                  <Image
                    key={index}
                    src={logo}
                    alt="Logo"
                    width={125.9}
                    height={60}
                    className="w-[125.9px] relative h-[60px] overflow-hidden shrink-0 mx-5"
                  />
                ))}
              </Marquee>
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
        className="self-stretch rounded-3xl overflow-hidden flex flex-col items-center justify-start pt-[140px] pb-0 z-[0] text-left text-lg text-white"
      >
        <div className="w-full max-w-[1150px] flex flex-col items-center justify-start gap-12">
          <div className="self-stretch flex flex-col items-center justify-start gap-6 text-center text-gray-300 font-plus-jakarta-sans">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={builtForShopifyVariants}
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
              variants={titleVariants}
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
              variants={descriptionVariants}
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
            variants={calculateMyMRRVariants}
            transition={{ delay: 0.3 }}
            className="h-[60px] flex flex-row items-start justify-start text-[19.2px]"
          >
            <CtaButtonFramerComponent
              variant="Desktop"
              fill={"rgb(255, 255, 255)"}
              link={"/#calculator"}
              title={"Calculate My MRR"}
              newTab={false}
              smoothScroll={true}
            />
            {/* <div className="shadow-[0px_0px_9.6px_4.8px_rgba(255,_255,_255,_0.16)_inset,_0px_-2.4000000953674316px_0px_#000_inset,_0px_1.2000000476837158px_1.2px_#000_inset,_0px_2.4000000953674316px_1.2px_rgba(255,_255,_255,_0.25)_inset] rounded-3xl [background:linear-gradient(88.67deg,_#1d1d1d,_#333_34.6%,_#3d3d3d_76.69%,_#1d1d1d)] h-[60px] overflow-hidden flex flex-row items-center justify-center py-[14.4px] px-[28.8px] box-border">
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
            </div> */}
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
        className="flex flex-row items-center justify-center w-full gap-0 z-[10] text-left text-lg text-gray-200 font-plus-jakarta-sans"
        transition={{ type: "spring", stiffness: 50, damping: 14 }}
      >
        {/* <Link href="/">
          <Image
            className="w-[128.5px] h-10 object-cover"
            width={128.5}
            height={40}
            sizes="100vw"
            alt=""
            src="/assets/nav/asset 39.svg"
          />
        </Link> */}
        <motion.div
          className="flex-1 self-stretch"
          transition={{ duration: 0.5, ease: [0.19, 0.39, 0.4, 0.99] }}
        >
          <NavFramerComponent
            variant={navScrolled ? "Desktop - Scroll" : "Desktop"}
            className="mx-auto"
          />
        </motion.div>
        {/* <motion.div
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
        </motion.div> */}
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
            <Marquee gradient={false} speed={100} className="w-full">
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt="Logo"
                  width={125.9}
                  height={60}
                  className="w-[125.9px] relative h-[60px] overflow-hidden shrink-0 mx-10"
                />
              ))}
            </Marquee>
          </div>
        </div>
      </motion.b>
    </>
  );
};

export default Hero;
