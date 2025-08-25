import Image from "next/image";
import { useState, useEffect } from "react";

const Cta = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    checkIfMobile();

    // Add resize listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const MobileVersion = () => {
    return (
      <>
        <div className="mt-48 self-stretch bg-white flex flex-col items-start justify-start relative gap-2.5 z-[13] text-xs text-white">
          <div className="w-full max-w-[370px] sm:max-w-[600px] absolute !!m-[0 important] top-[-144.87px] left-1/2 -translate-x-1/2 shadow-[0px_0px_7.8px_1.95px_rgba(255,_255,_255,_0.2)_inset,_0px_57.525001525878906px_15.93px_rgba(24,_26,_104,_0),_0px_36.72500228881836px_14.63px_rgba(24,_26,_104,_0.02),_0px_20.80000114440918px_12.35px_rgba(24,_26,_104,_0.07),_0px_9.100000381469727px_9.1px_rgba(24,_26,_104,_0.11),_0px_2.2750000953674316px_5.2px_rgba(24,_26,_104,_0.13)] rounded-[13px] [background:radial-gradient(50%_50%_at_50%_50%,_#12b2f9_20%,_#514dfa)] h-[400px] overflow-hidden shrink-0 z-[0]">
            <Image
              className="absolute -top-[140%] w-[1515.8px] h-[1515.8px] overflow-hidden opacity-[1]"
              width={779}
              height={779}
              sizes="100vw"
              alt=""
              src="/assets/cta/Frame 2147228249.svg"
            />
            <div className="absolute top-6 left-6 rounded-[15.8px] w-[46.8px] h-[46.8px] overflow-hidden flex items-center justify-center rotate-[10deg]">
              <div className="size-10 rounded-xl relative bg-whitesmoke-200 shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1),_0px_8px_5px_rgba(0,_0,_0,_0.12)] flex justify-center items-center">
                <Image
                  className="absolute max-w-full max-h-full"
                  width={30}
                  height={30}
                  sizes="100vw"
                  alt=""
                  src="/assets/cta/unlock-3.svg"
                />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 rounded-2xl w-[45.6px] h-[45.6px] overflow-hidden flex items-center justify-center rotate-[-10deg]">
              <div className="size-10 rounded-xl relative bg-whitesmoke-200 shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1),_0px_8px_5px_rgba(0,_0,_0,_0.12)] flex justify-center items-center">
                <Image
                  className="absolute max-w-full max-h-full"
                  width={30}
                  height={30}
                  sizes="100vw"
                  alt=""
                  src="/assets/cta/shopping-cart1.svg"
                />
              </div>
            </div>
            <div className="absolute bottom-6 right-6 rounded-2xl w-[49.1px] h-[49.1px] overflow-hidden flex items-center justify-center rotate-[10deg]">
              <div className="size-10 rounded-xl relative bg-whitesmoke-200 shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1),_0px_8px_5px_rgba(0,_0,_0,_0.12)] flex justify-center items-center">
                <Image
                  className="absolute max-w-full max-h-full"
                  width={30}
                  height={30}
                  sizes="100vw"
                  alt=""
                  src="/assets/cta/package.svg"
                />
              </div>
            </div>
            <div className="absolute top-6 right-6 rounded-2xl w-[49.1px] h-[49.1px] overflow-hidden flex items-center justify-center rotate-[-10deg]">
              <div className="size-10 rounded-xl relative bg-whitesmoke-200 shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1),_0px_8px_5px_rgba(0,_0,_0,_0.12)] flex justify-center items-center">
                <Image
                  className="absolute max-w-full max-h-full"
                  width={30}
                  height={30}
                  sizes="100vw"
                  alt=""
                  src="/assets/cta/tag-2.svg"
                />
              </div>
            </div>
            <div className="absolute top-[calc(50%_-_137.76px)] left-[calc(50%_-_173.23px)] w-[346.5px] flex flex-col items-center justify-start gap-6">
              <div className="shadow-[0px_90px_35px_-8px_rgba(13,_36,_73,_0.02),_0px_53px_32px_-5px_rgba(13,_36,_73,_0.03),_0px_20px_24px_-2px_rgba(13,_36,_73,_0.06),_0px_6px_12px_-1px_rgba(13,_36,_73,_0.08)] rounded-[60px] bg-gray-600 border-gray-500 border-solid border-[1px] flex flex-row items-center justify-start py-2 px-4 gap-2">
                <Image
                  className="w-4 relative max-h-full"
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/assets/hero/Layer_1.svg"
                />
                <div className="relative tracking-[-0.02em] leading-[140%] capitalize">
                  Built for shopify
                </div>
              </div>
              <div className="flex flex-col items-center justify-start text-3xl font-plus-jakarta-sans">
                <b className="w-[314.1px] relative tracking-[-0.02em] leading-[110%] inline-block">
                  Unlock the Power of
                </b>
                <div className="flex flex-row items-center justify-center gap-0.5">
                  <b className="relative tracking-[-0.02em] leading-[110%]">{`Apptics `}</b>
                  <div className="w-[34.5px] relative rounded-[10.67px] h-[34.5px] shrink-0 overflow-hidden flex items-center justify-center">
                    <Image
                      className="w-full h-full overflow-hidden shrink-0 object-cover absolute left-[0px] top-[18px] [transform:scale(1.88)]"
                      width={34.5}
                      height={34.5}
                      sizes="100vw"
                      alt=""
                      src="/assets/cta/Frame 2147227937.svg"
                    />
                  </div>
                  <b className="relative tracking-[-0.02em] leading-[110%]">Subscriptions</b>
                </div>
              </div>
              <div className="w-[301.5px] relative text-sm tracking-[-0.04em] leading-[150%] inline-block">
                Apptics is a platform for online merchants to manage subscriptions, optimize
                payments, and enhance retention with analytics and checkouts.
              </div>
              <div className="w-[135px] rounded-full relative shadow-[0px_88px_25px_rgba(0,_0,_0,_0),_0px_56px_23px_rgba(0,_0,_0,_0.03),_0px_32px_19px_rgba(0,_0,_0,_0.1),_0px_14px_14px_rgba(0,_0,_0,_0.17),_0px_4px_8px_rgba(0,_0,_0,_0.2)] h-10 text-left text-[15px] font-plus-jakarta-sans">
                <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_8px_4px_rgba(255,_255,_255,_0.16)_inset,_0px_-2px_0px_#000_inset,_0px_1px_1px_#000_inset,_0px_2px_1px_rgba(255,_255,_255,_0.25)_inset] rounded-3xl [background:linear-gradient(88.67deg,_#1d1d1d,_#333_34.6%,_#3d3d3d_76.69%,_#1d1d1d)] flex flex-row items-center justify-center p-2 gap-4">
                  <Image
                    className="size-6 relative rounded-md max-h-full overflow-hidden shrink-0 object-cover"
                    width={6}
                    height={6}
                    sizes="100vw"
                    alt=""
                    src="/assets/cta/Frame 2147228244.png"
                  />
                  <div className="flex flex-row items-center justify-start py-0 pl-0 pr-4">
                    <div className="relative tracking-[-0.03em] font-medium whitespace-nowrap">
                      Book a Call
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-[300px] px-0 pb-5 gap-[68px] z-[1] text-base text-gray-300">
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-5 gap-10">
              <div className="self-stretch flex flex-col items-center justify-start gap-6">
                <Image
                  className="w-[226.6px] relative h-[58px] object-cover"
                  width={226.6}
                  height={58}
                  sizes="100vw"
                  alt=""
                  src="/assets/cta/asset 39.svg"
                />
                <div className="flex flex-row items-center justify-start gap-[22px]">
                  <div className="relative tracking-[-0.04em] leading-[150%] hidden">
                    Social Media
                  </div>
                  <div className="flex flex-row items-center justify-start gap-2">
                    <div className="w-10 relative rounded-lg bg-white border-gainsboro-300 border-solid border-[1px] box-border h-10 overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] bg-gray-1500 w-5 h-5 overflow-hidden">
                        <Image
                          className="absolute h-[79%] w-full top-[8.33%] right-[8.17%] bottom-[12.67%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                          width={16.7}
                          height={15.8}
                          sizes="100vw"
                          alt=""
                          src="/assets/cta/Capa_1 (1).svg"
                        />
                      </div>
                    </div>
                    <div className="w-10 relative rounded-lg bg-white border-gainsboro-300 border-solid border-[1px] box-border h-10 overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] bg-gray-1500 w-5 h-5 overflow-hidden">
                        <Image
                          className="absolute h-[79%] w-full top-[8.33%] right-[8.17%] bottom-[12.67%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                          width={16.7}
                          height={15.8}
                          sizes="100vw"
                          alt=""
                          src="/assets/cta/svg168.svg"
                        />
                      </div>
                    </div>
                    <div className="w-10 relative rounded-lg bg-white border-gainsboro-300 border-solid border-[1px] box-border h-10 overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] bg-gray-1500 w-5 h-5 overflow-hidden">
                        <Image
                          className="absolute h-[79%] w-full top-[8.33%] right-[8.17%] bottom-[12.67%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                          width={16.7}
                          height={15.8}
                          sizes="100vw"
                          alt=""
                          src="/assets/cta/linkedin.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch relative border-gainsboro-300 border-solid border-t-[1px] box-border h-px" />
              <div className="self-stretch flex flex-col items-start justify-start gap-12 text-left">
                <div className="flex flex-col items-start justify-start gap-4">
                  <div className="relative tracking-[-0.04em] leading-[150%] font-medium">
                    Reach out to us
                  </div>
                  <div className="rounded-xl bg-aliceblue-100 border-lightblue border-solid border-[1px] overflow-hidden flex flex-row items-center justify-start p-4 gap-3 text-sm">
                    <Image
                      className="w-11 relative h-11 overflow-hidden shrink-0"
                      width={44}
                      height={44}
                      sizes="100vw"
                      alt=""
                      src="/assets/cta/Capa_1.svg"
                    />
                    <div className="w-[209.4px] flex flex-col items-start justify-start">
                      <div className="self-stretch relative tracking-[-0.04em] leading-[150%]">
                        Contact us on telegram
                      </div>
                      <div className="self-stretch relative text-xs tracking-[-0.04em] leading-[150%] text-gray-200">
                        Our associate will reply within 24h
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-8 text-gray-200">
                  <div className="flex flex-col items-start justify-start gap-4">
                    <div className="relative tracking-[-0.04em] leading-[150%] font-medium text-gray-300">
                      Features
                    </div>
                    <div className="relative tracking-[-0.04em] leading-[150%]">
                      Subscription Management
                    </div>
                    <div className="relative tracking-[-0.04em] leading-[150%]">
                      Custom checkout
                    </div>
                    <div className="relative tracking-[-0.04em] leading-[150%]">{`Champaign strategy `}</div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-4">
                    <div className="relative tracking-[-0.04em] leading-[150%] font-medium text-gray-300">
                      Explore
                    </div>
                    <div className="relative tracking-[-0.04em] leading-[150%]">Features</div>
                    <div className="relative tracking-[-0.04em] leading-[150%]">Pricing</div>
                    <div className="relative tracking-[-0.04em] leading-[150%]">Calculator</div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-4">
                    <div className="relative tracking-[-0.04em] leading-[150%] font-medium text-gray-300">
                      Help
                    </div>
                    <div className="relative tracking-[-0.04em] leading-[150%]">FAQs</div>
                    <div className="relative tracking-[-0.04em] leading-[150%]">Email</div>
                    <div className="relative tracking-[-0.04em] leading-[150%]">Help centre</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-6 text-left text-sm text-gray-200">
              <Image
                className="self-stretch relative max-w-full overflow-hidden h-[256.3px] shrink-0"
                width={1280}
                height={256.3}
                sizes="100vw"
                alt=""
                src="/assets/cta/Vector.svg"
              />
              <div className="self-stretch flex flex-col items-center justify-start gap-4">
                <div className="relative tracking-[-0.04em] leading-[150%]">
                  ©2025 Apptics. All rights reserved.
                </div>
                <div className="flex flex-row items-center justify-start gap-6">
                  <div className="relative tracking-[-0.04em] leading-[150%]">Terms of Service</div>
                  <div className="relative tracking-[-0.04em] leading-[150%]">Privacy Policy</div>
                  <div className="relative tracking-[-0.04em] leading-[150%]">Cookie Policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const DesktopVersion = () => {
    return (
      <>
        <div className="self-stretch relative bg-white h-[1126px] z-[13] text-white font-plus-jakarta-sans">
          <div className="absolute top-[-137px] left-1/2 -translate-x-1/2 shadow-[0px_0px_24px_6px_rgba(255,_255,_255,_0.2)_inset,_0px_177px_49px_rgba(24,_26,_104,_0),_0px_113px_45px_rgba(24,_26,_104,_0.02),_0px_64px_38px_rgba(24,_26,_104,_0.07),_0px_28px_28px_rgba(24,_26,_104,_0.11),_0px_7px_16px_rgba(24,_26,_104,_0.13)] rounded-[40px] [background:radial-gradient(50%_50%_at_50%_50%,_#12b2f9_20%,_#514dfa)] w-full max-w-[1000px] xl:max-w-[1200px] h-[550px] overflow-hidden">
            <Image
              className="absolute -top-[88%] w-[1515.8px] h-[1515.8px] overflow-hidden opacity-[1]"
              width={1515.8}
              height={1515.8}
              sizes="100vw"
              alt=""
              src="/assets/cta/Frame 2147228249.svg"
            />
            <div className="absolute inset-0 px-5 md:px-10">
              <div className="absolute top-[73.76px] left-10 md:left-14 rounded-[32px] w-[94.8px] h-[94.8px] overflow-hidden flex items-center justify-center transform rotate-[10deg]">
                <div className="size-16 rounded-3xl relative bg-whitesmoke-200 shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1),_0px_8px_5px_rgba(0,_0,_0,_0.12)] flex justify-center items-center">
                  <Image
                    className="absolute max-w-full max-h-full"
                    width={40}
                    height={40}
                    sizes="100vw"
                    alt=""
                    src="/assets/cta/unlock-3.svg"
                  />
                </div>
              </div>
              <div className="absolute bottom-10 left-8 md:left-10 rounded-[32px] w-[91.3px] h-[91.3px] overflow-hidden flex items-center justify-center transform rotate-[-10deg]">
                <div className="size-16 rounded-3xl relative bg-whitesmoke-200 shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1),_0px_8px_5px_rgba(0,_0,_0,_0.12)] flex justify-center items-center">
                  <Image
                    className="absolute max-w-full max-h-full"
                    width={40}
                    height={40}
                    sizes="100vw"
                    alt=""
                    src="/assets/cta/shopping-cart1.svg"
                  />
                </div>
              </div>
              <div className="absolute bottom-10 right-8 md:right-10 rounded-[32px] w-[98.1px] h-[98.1px] overflow-hidden flex items-center justify-center transform rotate-[10deg]">
                <div className="size-16 rounded-3xl relative bg-whitesmoke-200 shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1),_0px_8px_5px_rgba(0,_0,_0,_0.12)] flex justify-center items-center">
                  <Image
                    className="absolute max-w-full max-h-full"
                    width={40}
                    height={40}
                    sizes="100vw"
                    alt=""
                    src="/assets/cta/package.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[75.01px] right-10 md:right-14 rounded-[32px] w-[98.3px] h-[98.3px] overflow-hidden flex items-center justify-center transform rotate-[-10deg]">
                <div className="size-16 rounded-3xl relative bg-whitesmoke-200 shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1),_0px_8px_5px_rgba(0,_0,_0,_0.12)] flex justify-center items-center">
                  <Image
                    className="absolute max-w-full max-h-full"
                    width={40}
                    height={40}
                    sizes="100vw"
                    alt=""
                    src="/assets/cta/tag-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[calc(50%_-_187.34px)] left-[calc(50%_-_533px)] w-[1066px] flex flex-col items-center justify-start gap-6">
              <div className="shadow-[0px_90px_35px_-8px_rgba(13,_36,_73,_0.02),_0px_53px_32px_-5px_rgba(13,_36,_73,_0.03),_0px_20px_24px_-2px_rgba(13,_36,_73,_0.06),_0px_6px_12px_-1px_rgba(13,_36,_73,_0.08)] rounded-[60px] bg-gray-600 border-gray-500 border-solid border-[1px] flex flex-row items-center justify-start py-2 px-4 gap-2.5 font-geist">
                <Image
                  className="w-5 relative max-h-full"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/assets/hero/Layer_1.svg"
                />
                <div className="relative tracking-[-0.02em] leading-[150%] capitalize">
                  Built for shopify
                </div>
              </div>
              <div className="flex flex-col items-center justify-start text-[66px]">
                <b className="w-[966.5px] relative tracking-[-0.02em] leading-[110%] inline-block">
                  Unlock the Power of
                </b>
                <div className="flex flex-row items-center justify-center gap-1.5">
                  <b className="relative tracking-[-0.02em] leading-[110%]">{`Apptics `}</b>
                  <div className="w-[77.7px] relative rounded-3xl h-[77.7px] shrink-0 overflow-hidden flex items-center justify-center">
                    <Image
                      className="w-full h-full overflow-hidden shrink-0 object-cover absolute left-[0px] top-[40px] [transform:scale(1.878)]"
                      width={77.7}
                      height={77.7}
                      sizes="100vw"
                      alt=""
                      src="/assets/cta/Frame 2147227937.svg"
                    />
                  </div>
                  <b className="relative tracking-[-0.02em] leading-[110%]">Subscriptions</b>
                </div>
              </div>
              <div className="w-[625.8px] relative tracking-[-0.04em] leading-[150%] font-inter inline-block">
                Apptics is an all-in-one platform that helps online merchants manage subscriptions,
                optimize payments, and boost retention with smart analytics and seamless checkouts
              </div>
              <div className="w-[216px] relative rounded-full shadow-[0px_88px_25px_rgba(0,_0,_0,_0),_0px_56px_23px_rgba(0,_0,_0,_0.03),_0px_32px_19px_rgba(0,_0,_0,_0.1),_0px_14px_14px_rgba(0,_0,_0,_0.17),_0px_4px_8px_rgba(0,_0,_0,_0.2)] h-16 text-left text-2xl">
                <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_8px_4px_rgba(255,_255,_255,_0.16)_inset,_0px_-2px_0px_#000_inset,_0px_1px_1px_#000_inset,_0px_2px_1px_rgba(255,_255,_255,_0.25)_inset] rounded-3xl [background:linear-gradient(88.67deg,_#1d1d1d,_#333_34.6%,_#3d3d3d_76.69%,_#1d1d1d)] flex flex-row items-center justify-center p-2 gap-4">
                  <Image
                    className="w-12 relative rounded-2xl max-h-full overflow-hidden shrink-0 object-cover"
                    width={48}
                    height={48}
                    sizes="100vw"
                    alt=""
                    src="/assets/cta/Frame 2147228244.png"
                  />
                  <div className="flex flex-row items-center justify-start py-0 pl-0 pr-4">
                    <div className="relative tracking-[-0.03em] font-medium">Book a Call</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[493px] left-1/2 -translate-x-1/2 w-full max-w-[1280px] px-5 flex flex-col items-center justify-start gap-[68px] text-gray-300 font-inter">
            <div className="self-stretch flex flex-col items-start justify-start gap-10">
              <div className="self-stretch flex flex-row items-center justify-between gap-0">
                <Image
                  className="w-[156.3px] relative h-10 object-cover"
                  width={156.3}
                  height={40}
                  sizes="100vw"
                  alt=""
                  src="/assets/cta/asset 39.svg"
                />
                <div className="flex flex-row items-center justify-start gap-[22px]">
                  <div className="relative tracking-[-0.04em] leading-[150%]">Social Media</div>
                  <div className="flex flex-row items-center justify-start gap-2">
                    <div className="w-10 relative rounded-lg bg-white border-gainsboro-300 border-solid border-[1px] box-border h-10 overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] bg-gray-1500 w-5 h-5 overflow-hidden">
                        <Image
                          className="absolute h-[79%] w-full top-[8.33%] right-[8.17%] bottom-[12.67%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                          width={16.7}
                          height={15.8}
                          sizes="100vw"
                          alt=""
                          src="/assets/cta/Capa_1 (1).svg"
                        />
                      </div>
                    </div>
                    <div className="w-10 relative rounded-lg bg-white border-gainsboro-300 border-solid border-[1px] box-border h-10 overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] bg-gray-1500 w-5 h-5 overflow-hidden">
                        <Image
                          className="absolute h-[79%] w-full top-[8.33%] right-[8.17%] bottom-[12.67%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                          width={16.7}
                          height={15.8}
                          sizes="100vw"
                          alt=""
                          src="/assets/cta/svg168.svg"
                        />
                      </div>
                    </div>
                    <div className="w-10 relative rounded-lg bg-white border-gainsboro-300 border-solid border-[1px] box-border h-10 overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] bg-gray-1500 w-5 h-5 overflow-hidden">
                        <Image
                          className="absolute h-[79%] w-full top-[8.33%] right-[8.17%] bottom-[12.67%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                          width={16.7}
                          height={15.8}
                          sizes="100vw"
                          alt=""
                          src="/assets/cta/linkedin.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch relative border-gainsboro-300 border-solid border-t-[1px] box-border h-px" />
              <div className="self-stretch flex flex-row items-start justify-between gap-0 text-left">
                <div className="flex flex-col items-start justify-start gap-4">
                  <div className="relative tracking-[-0.04em] leading-[150%] font-medium">
                    Reach out to us
                  </div>
                  <div className="rounded-xl bg-aliceblue-100 border-lightblue border-solid border-[1px] overflow-hidden flex flex-row items-center justify-start p-4 gap-3 text-sm">
                    <Image
                      className="w-11 relative h-11 overflow-hidden shrink-0"
                      width={44}
                      height={44}
                      sizes="100vw"
                      alt=""
                      src="/assets/cta/Capa_1.svg"
                    />
                    <div className="w-[209.4px] flex flex-col items-start justify-start">
                      <div className="self-stretch relative tracking-[-0.04em] leading-[150%]">
                        Contact us on telegram
                      </div>
                      <div className="self-stretch relative text-xs tracking-[-0.04em] leading-[150%] text-gray-200">
                        Our associate will reply within 24h
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-20 text-gray-200">
                  <div className="flex flex-col items-start justify-start gap-4">
                    <div className="relative tracking-[-0.04em] leading-[150%] font-medium text-gray-300">
                      Features
                    </div>
                    <div className="relative tracking-[-0.04em] leading-[150%]">
                      Subscription Management
                    </div>
                    <div className="relative tracking-[-0.04em] leading-[150%]">
                      Custom checkout
                    </div>
                    <div className="relative tracking-[-0.04em] leading-[150%]">{`Champaign strategy `}</div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-4">
                    <div className="relative tracking-[-0.04em] leading-[150%] font-medium text-gray-300">
                      Explore
                    </div>
                    <div className="relative tracking-[-0.04em] leading-[150%]">Features</div>
                    <div className="relative tracking-[-0.04em] leading-[150%]">Pricing</div>
                    <div className="relative tracking-[-0.04em] leading-[150%]">Calculator</div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-4">
                    <div className="relative tracking-[-0.04em] leading-[150%] font-medium text-gray-300">
                      Help
                    </div>
                    <div className="relative tracking-[-0.04em] leading-[150%]">FAQs</div>
                    <div className="relative tracking-[-0.04em] leading-[150%]">Email</div>
                    <div className="relative tracking-[-0.04em] leading-[150%]">Help centre</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[1280px] px-5 h-[277.3px] flex flex-col items-center justify-between gap-0 text-left text-sm text-gray-200">
              <Image
                className="self-stretch relative max-w-full overflow-hidden h-[256.3px] shrink-0"
                width={1280}
                height={256.3}
                sizes="100vw"
                alt=""
                src="/assets/cta/Vector.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-between gap-0">
                <div className="relative tracking-[-0.04em] leading-[150%]">
                  ©2025 Apptics. All rights reserved.
                </div>
                <div className="flex flex-row items-center justify-start gap-6">
                  <div className="relative tracking-[-0.04em] leading-[150%]">Terms of Service</div>
                  <div className="relative tracking-[-0.04em] leading-[150%]">Privacy Policy</div>
                  <div className="relative tracking-[-0.04em] leading-[150%]">Cookie Policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  // Используем условный рендеринг для отображения соответствующей версии
  return <>{isMobile ? <MobileVersion /> : <DesktopVersion />}</>;
};

export default Cta;
