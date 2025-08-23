import type { NextPage } from "next";
import Image from "next/image";
import MyLottieComponent from "./LottieComponent";
import { useEffect, useState } from "react";

const Hero: NextPage = () => {
  const [isMobile, setIsMobile] = useState(false);

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
              <div className="rounded-[60px] bg-white border-gainsboro-300 border-solid border-[1px] flex flex-row items-center justify-start py-1.5 px-3 gap-2.5">
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
              </div>
              <div className="self-stretch flex flex-col items-center justify-start gap-[9px] text-[47px] font-plus-jakarta-sans">
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
              </div>
            </div>
            <div className="self-stretch relative tracking-[-0.01em] leading-[150%] text-gray-200 whitespace-pre-wrap">
              Everything you need to create and grow your subscriptions all in one place!
            </div>
            <div className="rounded-full shadow-[0px_70.80000305175781px_19.2px_rgba(0,_0,_0,_0),_0px_45.60000228881836px_18px_rgba(0,_0,_0,_0.01),_0px_25.200000762939453px_15.6px_rgba(0,_0,_0,_0.05),_0px_10.800000190734863px_10.8px_rgba(0,_0,_0,_0.09),_0px_2.4000000953674316px_6px_rgba(0,_0,_0,_0.1)] h-[60px] flex flex-row items-start justify-start text-left text-white">
              <div className="shadow-[0px_0px_9.6px_4.8px_rgba(255,_255,_255,_0.16)_inset,_0px_-2.4000000953674316px_0px_#000_inset,_0px_1.2000000476837158px_1.2px_#000_inset,_0px_2.4000000953674316px_1.2px_rgba(255,_255,_255,_0.25)_inset] rounded-2xl [background:linear-gradient(88.67deg,_#1d1d1d,_#333_34.6%,_#3d3d3d_76.69%,_#1d1d1d)] flex flex-row items-center justify-center py-4 px-6">
                <div className="[filter:drop-shadow(0px_2.4000000953674316px_2.4px_rgba(0,_0,_0,_0.48))] flex flex-row items-center justify-start gap-[14.4px]">
                  <div className="relative tracking-[-0.03em] font-medium">Calculate My MRR</div>
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
            </div>
          </div>
          <div className="self-stretch relative h-[230px] text-left text-[6.97px] text-dimgray flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              {/* Mobile Hero Animation/Images */}
              <MyLottieComponent animationType="hero" width="w-full" height="h-full" />
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        <div className="w-[350px] absolute top-[16px] left-0 right-0 mx-auto shadow-[0px_8.057844161987305px_8.06px_rgba(11,_32,_103,_0.05),_0px_1.1511205434799194px_2.3px_rgba(11,_32,_103,_0.14),_0px_30px_40px_rgba(0,_0,_0,_0.03)] rounded-[73.08px] bg-white h-12 flex flex-row items-center justify-between p-2 box-border gap-0 max-w-[900px] z-[1]">
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
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-8 px-0 z-[2] text-gray-300 font-plus-jakarta-sans">
          <div className="self-stretch relative rounded-2xl h-[102px] overflow-hidden shrink-0">
            <div className="absolute top-[0px] left-[calc(50%_-_153.71px)] tracking-[-0.02em] leading-[110%] font-medium inline-block w-[307.4px]">
              Seamless Integration Across all your Apps
            </div>
            <div className="absolute top-[42px] left-[-338.2px] overflow-hidden flex flex-row items-center justify-start gap-10">
              <Image
                className="w-[125.9px] relative h-[60px] overflow-hidden shrink-0"
                width={125.9}
                height={60}
                sizes="100vw"
                alt=""
                src="/assets/hero/Logo.svg"
              />
              <Image
                className="w-[193.4px] relative h-[41.3px] overflow-hidden shrink-0"
                width={193.4}
                height={41.3}
                sizes="100vw"
                alt=""
                src="/assets/hero/Logo02.svg"
              />
              <Image
                className="w-[128.4px] relative h-[36.4px] overflow-hidden shrink-0"
                width={128.4}
                height={36.4}
                sizes="100vw"
                alt=""
                src="/assets/hero/Logo.svg"
              />
              <Image
                className="w-[92.3px] relative h-6 overflow-hidden shrink-0"
                width={92.3}
                height={24}
                sizes="100vw"
                alt=""
                src="/assets/hero/Logo02.svg"
              />
              <Image
                className="w-[107.8px] relative h-[34.5px] overflow-hidden shrink-0 object-cover"
                width={107.8}
                height={34.5}
                sizes="100vw"
                alt=""
                src="/assets/hero/Logo03.svg"
              />
              <Image
                className="w-[145.7px] relative h-[37.9px] overflow-hidden shrink-0"
                width={145.7}
                height={37.9}
                sizes="100vw"
                alt=""
                src="/assets/hero/Logo04.svg"
              />
            </div>
            <div className="absolute top-[0px] left-[0px] [background:linear-gradient(270deg,_rgba(245,_245,_245,_0),_#f5f5f5)] w-[77.8px] h-[202px]" />
            <div className="absolute top-[0px] right-[-66.2px] [background:linear-gradient(270deg,_rgba(245,_245,_245,_0),_#f5f5f5)] w-[66.2px] h-[218px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
          </div>
        </div>
      </>
    );
  }

  // Desktop component rendering
  return (
    <>
      <div className="self-stretch rounded-3xl overflow-hidden flex flex-col items-center justify-start pt-[140px] px-[70px] pb-0 z-[0] text-left text-lg text-white">
        <div className="w-[1150px] flex flex-col items-center justify-start gap-12">
          <div className="self-stretch flex flex-col items-center justify-start gap-6 text-center text-gray-300 font-plus-jakarta-sans">
            <div className="shadow-[0px_51px_14px_rgba(0,_0,_0,_0),_0px_33px_13px_rgba(0,_0,_0,_0.01),_0px_18px_11px_rgba(0,_0,_0,_0.03),_0px_8px_8px_rgba(0,_0,_0,_0.06),_0px_2px_5px_rgba(0,_0,_0,_0.07)] rounded-[60px] bg-white border-gainsboro-300 border-solid border-[1px] flex flex-row items-center justify-start py-2 px-4 gap-2.5">
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
            </div>
            <div className="self-stretch flex flex-col items-center justify-start text-[90px]">
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
            </div>
            <div className="w-[596.7px] relative text-2xl tracking-[-0.01em] leading-[150%] font-inter text-gray-200 whitespace-pre-wrap inline-block">
              Everything you need to create and grow your subscriptions all in one place!
            </div>
          </div>
          <div className="hidden flex-row items-start justify-start gap-4 text-xl">
            <div className="shadow-[0px_0px_9.6px_4.8px_rgba(255,_255,_255,_0.16)_inset,_0px_-2.4000000953674316px_0px_rgba(0,_0,_0,_0.1)_inset,_0px_1.2000000476837158px_1.2px_rgba(0,_0,_0,_0.1)_inset,_0px_2.4000000953674316px_1.2px_rgba(255,_255,_255,_0.25)_inset] rounded-3xl [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] overflow-hidden flex flex-row items-center justify-center py-[18px] px-6">
              <div className="shadow-[0px_2.4000000953674316px_2.4px_rgba(26,_60,_105,_0.24)] flex flex-row items-center justify-start gap-[14.4px]">
                <div className="relative tracking-[-0.03em] font-medium">Calculate My MRR</div>
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
                <div className="relative tracking-[-0.03em] font-medium">Book a Call</div>
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
          <div className="h-[60px] flex flex-row items-start justify-start text-[19.2px]">
            <div className="shadow-[0px_0px_9.6px_4.8px_rgba(255,_255,_255,_0.16)_inset,_0px_-2.4000000953674316px_0px_#000_inset,_0px_1.2000000476837158px_1.2px_#000_inset,_0px_2.4000000953674316px_1.2px_rgba(255,_255,_255,_0.25)_inset] rounded-3xl [background:linear-gradient(88.67deg,_#1d1d1d,_#333_34.6%,_#3d3d3d_76.69%,_#1d1d1d)] h-[60px] overflow-hidden flex flex-row items-center justify-center py-[14.4px] px-[28.8px] box-border">
              <div className="[filter:drop-shadow(0px_2.4000000953674316px_2.4px_rgba(0,_0,_0,_0.48))] flex flex-row items-center justify-start gap-[14.4px]">
                <div className="relative tracking-[-0.03em] font-medium">Calculate My MRR</div>
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
        </div>
        <div className="w-[1250px] relative h-[580px] text-sm text-dimgray">
          <MyLottieComponent animationType="hero" width="w-full" height="h-full" />
        </div>
      </div>
      <div className="w-[1280px] absolute top-[24px] left-[calc(50%_-_640px)] rounded-2xl flex flex-row items-center justify-between gap-0 z-[1] text-left text-lg text-gray-200 font-plus-jakarta-sans">
        <Image
          className="w-[128.5px] h-10 object-cover"
          width={128.5}
          height={40}
          sizes="100vw"
          alt=""
          src="/assets/nav/asset 39.svg"
        />
        <div className="flex flex-row items-center justify-start gap-4">
          <div className="rounded-2xl flex flex-row items-center justify-center py-3 px-4">
            <div className="relative tracking-[-0.03em] leading-[140%] font-medium">Features</div>
          </div>
          <div className="rounded-2xl flex flex-row items-center justify-center py-3 px-4">
            <div className="relative tracking-[-0.03em] leading-[140%] font-medium">Onboarding</div>
          </div>
          <div className="rounded-2xl flex flex-row items-center justify-center py-3 px-4">
            <div className="relative tracking-[-0.03em] leading-[140%] font-medium">Calculator</div>
          </div>
          <div className="rounded-2xl flex flex-row items-center justify-center py-3 px-4">
            <div className="relative tracking-[-0.03em] leading-[140%] font-medium">FAQs</div>
          </div>
        </div>
        <div className="shadow-[0px_6px_4px_rgba(255,_255,_255,_0.36)_inset,_0px_9.735769271850586px_9.74px_rgba(11,_32,_103,_0.05),_0px_1.3908241987228394px_2.78px_rgba(11,_32,_103,_0.14),_0px_36.24705123901367px_48.33px_rgba(0,_0,_0,_0.03)] rounded-2xl bg-white overflow-hidden flex flex-row items-center justify-center py-3 px-4 text-gray-300 font-inter">
          <div className="flex flex-row items-center justify-center opacity-[0.6]">
            <div className="relative tracking-[-0.03em] font-medium">Book a Call</div>
          </div>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-10 px-0 z-[2] text-2xl text-gray-300 font-plus-jakarta-sans">
        <div className="w-[1200px] relative rounded-2xl h-[138px] overflow-hidden shrink-0">
          <div className="absolute top-[0px] left-[0px] tracking-[-0.02em] leading-[110%] font-medium inline-block w-[1200px]">
            Seamless Integration Across all your Apps
          </div>
          <div className="absolute top-[58px] left-[-627px] flex flex-row items-center justify-start gap-[100px]">
            <Image
              className="w-[167.8px] relative h-20 overflow-hidden shrink-0"
              width={167.8}
              height={80}
              sizes="100vw"
              alt=""
              src="/assets/hero/Logo.svg"
            />
            <Image
              className="w-[257.8px] relative h-[55px] overflow-hidden shrink-0"
              width={257.8}
              height={55}
              sizes="100vw"
              alt=""
              src="/assets/hero/Logo02.svg"
            />
            <Image
              className="w-[171.2px] relative h-[48.6px] overflow-hidden shrink-0"
              width={171.2}
              height={48.6}
              sizes="100vw"
              alt=""
              src="/assets/hero/Logo.svg"
            />
            <Image
              className="w-[123.1px] relative h-8 overflow-hidden shrink-0"
              width={123.1}
              height={32}
              sizes="100vw"
              alt=""
              src="/assets/hero/Logo02.svg"
            />
            <Image
              className="w-[143.8px] relative h-[46px] overflow-hidden shrink-0 object-cover"
              width={143.8}
              height={46}
              sizes="100vw"
              alt=""
              src="/assets/hero/Logo03.svg"
            />
            <Image
              className="w-[194.2px] relative h-[50.5px] overflow-hidden shrink-0"
              width={194.2}
              height={50.5}
              sizes="100vw"
              alt=""
              src="/assets/hero/Logo04.svg"
            />
            <Image
              className="w-[194.2px] relative h-[50.5px] overflow-hidden shrink-0"
              width={194.2}
              height={50.5}
              sizes="100vw"
              alt=""
              src="/assets/hero/Group.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[0px] [background:linear-gradient(270deg,_rgba(245,_245,_245,_0),_#f5f5f5)] w-[134.7px] h-[218px]" />
          <div className="absolute top-[0px] right-[-134.7px] [background:linear-gradient(270deg,_rgba(245,_245,_245,_0),_#f5f5f5)] w-[134.7px] h-[218px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
        </div>
      </div>
    </>
  );
};

export default Hero;
