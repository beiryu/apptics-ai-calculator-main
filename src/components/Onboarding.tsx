import { scrollAnimationVariants } from "@/libs/framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import OnboardingCardFramerComponent from "./framer/card/onboarding-card";

const Onboarding = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const MobileVersion = () => {
    return (
      <>
        <div
          id="onboarding"
          className="self-stretch bg-whitesmoke-400 flex flex-row items-center justify-start py-6 px-5 z-[6]"
        >
          <div className="flex-1 rounded-[32px] bg-white overflow-hidden flex flex-row items-center justify-center px-0 sm:px-10 md:px-20">
            <div className="flex-1 overflow-hidden flex flex-col items-center justify-start py-12 px-3 gap-[60px]">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={scrollAnimationVariants}
                className="self-stretch flex flex-col items-center justify-start relative gap-5"
              >
                <div className="shadow-[0px_8px_8px_-4px_rgba(0,_0,_0,_0.12),_0px_3px_2px_-1px_rgba(0,_0,_0,_0.08)] rounded-[99px] bg-white border-gainsboro-400 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-center py-2 px-4 z-[0]">
                  <div className="relative tracking-[-0.04em] leading-[130%]">Onboarding</div>
                </div>
                <b className="self-stretch relative text-[28px] tracking-[-0.02em] leading-[110%] capitalize font-plus-jakarta-sans z-[1] text-gray-300">
                  <p className="m-0">{`Effortless onboarding `}</p>
                  <p className="m-0">
                    <span className="whitespace-pre-wrap">{`in         `}</span>
                    <span className="text-transparent !bg-clip-text [background:linear-gradient(90.5deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`minutes `}</span>
                  </p>
                </b>
                <div className="w-[268.8px] relative text-sm tracking-[-0.04em] leading-[150%] text-gray-200 inline-block z-[2]">
                  Get up and running quickly with a guide, hassle free setup
                </div>
                <div className="w-[34.6px] absolute !!m-[0 important] top-[calc(50%_-_2.5px)] left-[calc(50%_-_57.5px)] rounded-[10.67px] h-[34.6px] shrink-0 overflow-hidden flex items-center justify-center z-[3]">
                  <Image
                    className="w-full h-full overflow-hidden shrink-0 object-cover absolute left-[0px] top-[18px] [transform:scale(1.874)]"
                    width={34.6}
                    height={34.6}
                    sizes="100vw"
                    alt=""
                    src="/assets/onboarding/Frame 2147227938.svg"
                  />
                </div>
              </motion.div>
              <div className="self-stretch flex flex-col items-center justify-start gap-8 text-left text-sm text-white">
                <div className="self-stretch rounded-2xl bg-whitesmoke-400 border-gainsboro-200 border-solid border-[1px] overflow-hidden flex flex-col items-start justify-center">
                  <Image
                    className="self-stretch relative max-w-full overflow-hidden w-full h-auto object-contain"
                    width={356}
                    height={350}
                    sizes="100vw"
                    alt=""
                    src="/assets/onboarding/Frame 2147228204.png"
                  />
                  <div className="self-stretch overflow-hidden flex flex-col items-start justify-end p-4 relative gap-4">
                    <div className="shadow-[0px_8px_4px_rgba(0,_0,_0,_0.04),_0px_4px_4px_rgba(54,_58,_109,_0.24),_0px_1px_2px_rgba(54,_58,_109,_0.2)] rounded-[99px] [background:linear-gradient(137.69deg,_#12b2f9_44.5%,_#514dfa)] border-gray-900 border-solid border-[0.5px] overflow-hidden flex flex-row items-center justify-center py-1.5 px-[19px] z-[0]">
                      <div className="relative tracking-[-0.02em] leading-[150%] uppercase font-semibold">
                        Step 1
                      </div>
                    </div>
                    <div className="self-stretch relative text-xl tracking-[-0.01em] leading-[125%] font-semibold font-plus-jakarta-sans text-gray-300 z-[1]">
                      Connect your business
                    </div>
                    <div className="self-stretch relative tracking-[-0.01em] leading-[150%] text-gray-200 z-[2]">{`Connect payment systems, set up compliance, & sync your store. We manage the full technical setup & guide you through approvals if you’re not processing payments`}</div>
                    <div className="!!m-[0 important] absolute top-[19.96px] left-[40px] hidden flex-row items-center justify-center py-2 px-0 z-[3] text-[90px] text-whitesmoke-200">
                      <b className="relative tracking-[-0.06em] leading-[150%] [text-shadow:0px_4px_8px_rgba(0,_0,_0,_0.05),_0px_1.5268816947937012px_1.53px_rgba(0,_0,_0,_0.08)]">
                        01
                      </b>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-2xl bg-whitesmoke-400 border-gainsboro-200 border-solid border-[1px] overflow-hidden flex flex-col items-start justify-center text-center text-[14.74px] text-black font-plus-jakarta-sans">
                  <div className="self-stretch relative [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0.62)_22.01%,_rgba(255,_255,_255,_0))] border-gainsboro-800 border-solid border-l-[1.8px] box-border h-[350px] overflow-hidden shrink-0">
                    <div className="absolute top-[calc(50%_-_132.63px)] left-[calc(50%_-_117.57px)] shadow-[0px_40.12348556518555px_11.1px_rgba(35,_33,_69,_0),_0px_25.610734939575195px_10.24px_rgba(35,_33,_69,_0.01),_0px_14.512749671936035px_8.54px_rgba(35,_33,_69,_0.03),_0px_5.9758381843566895px_5.98px_rgba(35,_33,_69,_0.06),_0px_1.707382321357727px_3.41px_rgba(35,_33,_69,_0.07)] rounded-[12.89px] bg-white w-[256.1px] flex flex-col items-start justify-start p-[18.4px] box-border">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[7.4px]">
                        <div className="self-stretch relative rounded-[84.52px] [background:linear-gradient(90deg,_#f5f5f5,_#e5e5e5_50%,_#f5f5f5)] h-[7.4px]" />
                        <div className="self-stretch relative rounded-[84.52px] [background:linear-gradient(90deg,_#f5f5f5,_#e5e5e5_12.14%,_#f5f5f5)] h-[7.4px]" />
                        <div className="w-[125.5px] relative rounded-[84.52px] [background:linear-gradient(90deg,_#f5f5f5,_#e5e5e5,_#f5f5f5)] h-[7.4px]" />
                      </div>
                    </div>
                    <div className="absolute top-[calc(50%_-_36.84px)] left-[calc(50%_-_117.57px)] shadow-[0px_40.12348556518555px_11.1px_rgba(35,_33,_69,_0),_0px_25.610734939575195px_10.24px_rgba(35,_33,_69,_0.01),_0px_14.512749671936035px_8.54px_rgba(35,_33,_69,_0.03),_0px_5.9758381843566895px_5.98px_rgba(35,_33,_69,_0.06),_0px_1.707382321357727px_3.41px_rgba(35,_33,_69,_0.07)] rounded-[12.89px] bg-white w-[256.1px] flex flex-col items-start justify-start p-[18.4px] box-border">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[7.4px]">
                        <div className="self-stretch relative rounded-[84.52px] [background:linear-gradient(90deg,_#f5f5f5,_#e5e5e5_50%,_#f5f5f5)] h-[7.4px]" />
                        <div className="self-stretch relative rounded-[84.52px] [background:linear-gradient(90deg,_#f5f5f5,_#e5e5e5_12.14%,_#f5f5f5)] h-[7.4px]" />
                        <div className="w-[125.5px] relative rounded-[84.52px] [background:linear-gradient(90deg,_#f5f5f5,_#e5e5e5,_#f5f5f5)] h-[7.4px]" />
                      </div>
                    </div>
                    <div className="absolute top-[calc(50%_+_58.67px)] left-[calc(50%_-_118px)] shadow-[0px_40.12348556518555px_11.1px_rgba(35,_33,_69,_0),_0px_25.610734939575195px_10.24px_rgba(35,_33,_69,_0.01),_0px_14.512749671936035px_8.54px_rgba(35,_33,_69,_0.03),_0px_5.9758381843566895px_5.98px_rgba(35,_33,_69,_0.06),_0px_1.707382321357727px_3.41px_rgba(35,_33,_69,_0.07)] rounded-[12.89px] bg-white w-[257px] h-[151.1px] flex flex-col items-center justify-start p-[18.4px] box-border gap-[22.1px]">
                      <div className="flex flex-col items-center justify-start gap-[11.1px]">
                        <div className="w-[29.5px] relative rounded-[48.63px] bg-honeydew h-[29.5px] overflow-hidden shrink-0">
                          <div className="absolute top-[calc(50%_-_8.61px)] left-[calc(50%_-_8.61px)] bg-gray-1500 w-[17.2px] h-[17.2px] overflow-hidden">
                            <Image
                              className="absolute h-[91.86%] w-full top-[4.17%] right-[3.97%] bottom-[3.97%] left-[4.16%] max-w-full overflow-hidden max-h-full"
                              width={15.8}
                              height={15.8}
                              sizes="100vw"
                              alt=""
                              src="/assets/onboarding/loader.svg"
                            />
                          </div>
                        </div>
                        <div className="relative tracking-[-0.01em] leading-[150%] font-medium">{`Processing Stragety `}</div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[7.4px]">
                        <div className="self-stretch relative rounded-[84.52px] [background:linear-gradient(90deg,_#f5f5f5,_#e5e5e5_50%,_#f5f5f5)] h-[7.4px]" />
                        <div className="self-stretch relative rounded-[84.52px] [background:linear-gradient(90deg,_#f5f5f5,_#e5e5e5_12.14%,_#f5f5f5)] h-[7.4px]" />
                        <div className="w-[125.5px] relative rounded-[84.52px] [background:linear-gradient(90deg,_#f5f5f5,_#e5e5e5,_#f5f5f5)] h-[7.4px]" />
                      </div>
                    </div>
                    <div className="absolute top-[70.92px] left-[24.55px] w-[16.6px] h-[208.2px]">
                      <Image
                        className="absolute top-[6.45px] left-[7.6px] max-w-full overflow-hidden h-[194.3px]"
                        width={0.9}
                        height={194.3}
                        sizes="100vw"
                        alt=""
                        src="/assets/onboarding/Vector 1194223293.svg"
                      />
                      <div className="absolute top-[0px] left-[0px] shadow-[0px_20.263158798217773px_5.53px_rgba(20,_56,_118,_0),_0px_12.894737243652344px_5.53px_rgba(20,_56,_118,_0.03),_0px_7.3684210777282715px_4.61px_rgba(20,_56,_118,_0.1),_0px_3.6842105388641357px_3.68px_rgba(20,_56,_118,_0.17),_0px_0.9210526347160339px_1.84px_rgba(20,_56,_118,_0.2)] rounded-[113.98px] bg-white border-deepskyblue border-solid border-[1.7px] box-border w-[16.6px] h-[16.6px]" />
                      <div className="absolute top-[92.11px] left-[0px] shadow-[0px_20.263158798217773px_5.53px_rgba(20,_56,_118,_0),_0px_12.894737243652344px_5.53px_rgba(20,_56,_118,_0.03),_0px_7.3684210777282715px_4.61px_rgba(20,_56,_118,_0.1),_0px_3.6842105388641357px_3.68px_rgba(20,_56,_118,_0.17),_0px_0.9210526347160339px_1.84px_rgba(20,_56,_118,_0.2)] rounded-[113.98px] bg-white border-deepskyblue border-solid border-[1.7px] box-border w-[16.6px] h-[16.6px]" />
                      <div className="absolute top-[191.58px] left-[0px] shadow-[0px_2.3026316165924072px_1.15px_rgba(0,_0,_0,_0.08),_0px_2.3026316165924072px_2.3px_rgba(0,_0,_0,_0.08),_0px_2.3026316165924072px_9.21px_rgba(0,_0,_0,_0.14)] rounded-[113.98px] [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] border-white border-solid border-[1.7px] box-border w-[16.6px] h-[16.6px]" />
                    </div>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-col items-start justify-end p-4 relative gap-4 text-left text-sm text-white font-inter">
                    <div className="shadow-[0px_8px_4px_rgba(0,_0,_0,_0.04),_0px_4px_4px_rgba(54,_58,_109,_0.24),_0px_1px_2px_rgba(54,_58,_109,_0.2)] rounded-[99px] [background:linear-gradient(137.69deg,_#12b2f9_44.5%,_#514dfa)] border-gray-900 border-solid border-[0.5px] overflow-hidden flex flex-row items-center justify-center py-1.5 px-[19px] z-[0]">
                      <div className="relative tracking-[-0.02em] leading-[150%] uppercase font-semibold">
                        Step 2
                      </div>
                    </div>
                    <div className="self-stretch relative text-xl tracking-[-0.01em] leading-[125%] font-semibold font-plus-jakarta-sans text-gray-300 z-[1]">{`Unlock your growth strategy `}</div>
                    <div className="self-stretch relative tracking-[-0.01em] leading-[150%] text-gray-200 z-[2]">{`Answer few questions & get subscriptions strategies built for you. receiving expert guidance & support from account managers who understand your business goal`}</div>
                    <div className="!!m-[0 important] absolute top-[19.96px] left-[40px] hidden flex-row items-center justify-center py-2 px-0 z-[3] text-[90px] text-whitesmoke-200">
                      <b className="relative tracking-[-0.06em] leading-[150%] [text-shadow:0px_4px_8px_rgba(0,_0,_0,_0.05),_0px_1.5268816947937012px_1.53px_rgba(0,_0,_0,_0.08)]">
                        02
                      </b>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-2xl bg-whitesmoke-400 border-gainsboro-200 border-solid border-[1px] overflow-hidden flex flex-col items-start justify-center text-center text-[14.63px] text-gray-200">
                  <div className="self-stretch relative [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0.62)_22.01%,_rgba(255,_255,_255,_0))] border-gainsboro-800 border-solid border-l-[2px] box-border h-[350px] overflow-hidden shrink-0">
                    <div className="absolute top-[calc(50%_-_149.11px)] left-[calc(50%_-_160px)] w-80 flex flex-col items-start justify-start gap-[14.6px]">
                      <div className="self-stretch rounded-[7.31px] bg-white flex flex-col items-start justify-start p-[14.6px] gap-[28.3px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
                          <div className="self-stretch flex flex-row items-center justify-between gap-0">
                            <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                              Total
                            </div>
                            <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                              $120.00
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-between gap-0">
                            <div className="flex flex-row items-center justify-start gap-[7.3px]">
                              <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                                Discount
                              </div>
                              <div className="rounded-[3.66px] bg-honeydew flex flex-row items-center justify-center p-[3.7px] text-[10.97px] text-mediumseagreen-100">
                                <div className="relative tracking-[-0.01em] leading-[125%] uppercase font-medium">
                                  10% Off
                                </div>
                              </div>
                            </div>
                            <div className="relative tracking-[-0.01em] leading-[150%] font-medium text-mediumseagreen-200">
                              -$12.00
                            </div>
                          </div>
                          <div className="self-stretch relative border-black border-solid border-t-[0.9px] box-border h-[0.9px] opacity-[0.1]" />
                          <div className="self-stretch flex flex-row items-center justify-between gap-0 text-gray-300">
                            <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                              Subtotal
                            </div>
                            <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                              $108.00
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[7.3px]">
                          <Image
                            className="flex-1 relative rounded-[7.31px] max-w-full overflow-hidden h-[50.3px]"
                            width={92}
                            height={50.3}
                            sizes="100vw"
                            alt=""
                            src="/assets/onboarding/Apple_Pay-Logo.wine (1) 1.svg"
                          />
                          <Image
                            className="flex-1 relative rounded-[7.31px] max-w-full overflow-hidden h-[50.3px]"
                            width={92}
                            height={50.3}
                            sizes="100vw"
                            alt=""
                            src="/assets/onboarding/Logo Alternative.svg.svg"
                          />
                          <Image
                            className="flex-1 relative rounded-[7.31px] max-w-full overflow-hidden h-[50.3px]"
                            width={92}
                            height={50.3}
                            sizes="100vw"
                            alt=""
                            src="/assets/onboarding/google-pay-primary-logo-logo-svgrepo-com 1.svg"
                          />
                        </div>
                      </div>
                      <div className="self-stretch shadow-[0px_0px_5.52px_0.69px_rgba(33,_36,_80,_0.04),_0px_17.250675201416016px_10.35px_-2.07px_rgba(33,_36,_80,_0.05),_0px_5.5202155113220215px_6.9px_-2.76px_rgba(33,_36,_80,_0.09),_0px_2.0700809955596924px_4.14px_-1.38px_rgba(33,_36,_80,_0.1)] rounded-[7.31px] bg-white border-whitesmoke-400 border-solid border-[0.3px] overflow-hidden flex flex-row items-center justify-start py-[7.3px] pl-[7.3px] pr-[14.6px] gap-[14.6px] text-left text-[12.8px] text-gray-300">
                        <Image
                          className="bg-whitesmoke-200 w-[62.2px] relative rounded-[3.66px] max-h-full overflow-hidden shrink-0 object-cover"
                          width={62.2}
                          height={62.2}
                          sizes="100vw"
                          alt=""
                          src="/assets/onboarding/3899-1.png"
                        />
                        <div className="flex-1 flex flex-row items-center justify-center gap-[8.3px]">
                          <div className="flex-1 flex flex-col items-center justify-start">
                            <div className="self-stretch relative tracking-[-0.01em] leading-[130%] capitalize">
                              <p className="m-0">{`Add one more item for `}</p>
                              <p className="m-0">
                                <b>free shipping!</b>
                              </p>
                            </div>
                          </div>
                          <div className="rounded-[8.28px] bg-gray-300 flex flex-row items-center justify-center py-[5.5px] px-[8.3px] text-[8.28px] text-white">
                            <div className="relative tracking-[-0.01em] leading-[130%] capitalize font-medium">
                              Add to cart
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-col items-start justify-end p-4 relative gap-4 text-left text-sm text-white">
                    <div className="shadow-[0px_8px_4px_rgba(0,_0,_0,_0.04),_0px_4px_4px_rgba(54,_58,_109,_0.24),_0px_1px_2px_rgba(54,_58,_109,_0.2)] rounded-[99px] [background:linear-gradient(137.69deg,_#12b2f9_44.5%,_#514dfa)] border-gray-900 border-solid border-[0.5px] overflow-hidden flex flex-row items-center justify-center py-1.5 px-[19px] z-[0]">
                      <div className="relative tracking-[-0.02em] leading-[150%] uppercase font-semibold">
                        Step 3
                      </div>
                    </div>
                    <div className="self-stretch relative text-xl tracking-[-0.01em] leading-[125%] font-semibold font-plus-jakarta-sans text-gray-300 z-[1]">
                      Turn clicks into cash
                    </div>
                    <div className="self-stretch relative tracking-[-0.01em] leading-[150%] text-gray-200 z-[2]">
                      We transform your store to create seamless purchase flow checkouts and set uo
                      intelligent upsells that turn onetime buyers into repeat customers with
                      Apptics
                    </div>
                    <div className="!!m-[0 important] absolute top-[19.96px] left-[40px] hidden flex-row items-center justify-center py-2 px-0 z-[3] text-[90px] text-whitesmoke-200">
                      <b className="relative tracking-[-0.06em] leading-[150%] [text-shadow:0px_4px_8px_rgba(0,_0,_0,_0.05),_0px_1.5268816947937012px_1.53px_rgba(0,_0,_0,_0.08)]">
                        03
                      </b>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-2xl bg-whitesmoke-400 border-gainsboro-200 border-solid border-[1px] overflow-hidden flex flex-col items-start justify-center">
                  <Image
                    className="self-stretch relative max-w-full overflow-hidden w-full h-auto object-contain"
                    width={425}
                    height={380}
                    sizes="100vw"
                    alt=""
                    src="/assets/onboarding/Frame 2147228108.svg"
                  />
                  <div className="self-stretch overflow-hidden flex flex-col items-start justify-end p-4 relative gap-4">
                    <div className="shadow-[0px_8px_4px_rgba(0,_0,_0,_0.04),_0px_4px_4px_rgba(54,_58,_109,_0.24),_0px_1px_2px_rgba(54,_58,_109,_0.2)] rounded-[99px] [background:linear-gradient(137.69deg,_#12b2f9_44.5%,_#514dfa)] border-gray-900 border-solid border-[0.5px] overflow-hidden flex flex-row items-center justify-center py-1.5 px-[19px] z-[0]">
                      <div className="relative tracking-[-0.02em] leading-[150%] uppercase font-semibold">
                        Step 4
                      </div>
                    </div>
                    <div className="self-stretch relative text-xl tracking-[-0.01em] leading-[125%] font-semibold font-plus-jakarta-sans text-gray-300 z-[1]">
                      Grow on autopilot
                    </div>
                    <div className="self-stretch relative tracking-[-0.01em] leading-[150%] text-gray-200 z-[2]">
                      Track real time analytics and scale while we run the backend. spot growth
                      opportunities and expand operation with full support form our platform team
                    </div>
                    <div className="!!m-[0 important] absolute top-[19.96px] left-[40px] hidden flex-row items-center justify-center py-2 px-0 z-[3] text-[90px] text-whitesmoke-200">
                      <b className="relative tracking-[-0.06em] leading-[150%] [text-shadow:0px_4px_8px_rgba(0,_0,_0,_0.05),_0px_1.5268816947937012px_1.53px_rgba(0,_0,_0,_0.08)]">
                        04
                      </b>
                    </div>
                  </div>
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
        <div
          id="onboarding"
          className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[60px] px-0 z-[6]"
        >
          <div className="flex-1 rounded-[60px] bg-white overflow-hidden flex flex-row items-center justify-center relative gap-2.5 px-5 lg:px-0">
            <Image
              className="w-[812.4px] absolute !!m-[0 important] top-[calc(50%_-_1318.88px)] left-[-284.81px] h-[881.8px] object-contain hidden z-[0]"
              width={812.4}
              height={881.8}
              sizes="100vw"
              alt=""
              src="/assets/onboarding/Frame 2147227938.svg"
            />
            <div className="w-full max-w-[850px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-[60px] px-0 box-border gap-[60px] z-[1]">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={scrollAnimationVariants}
                className="w-full max-w-[742px] flex flex-col items-center justify-start relative gap-6"
              >
                <div className="shadow-[0px_8px_8px_-4px_rgba(0,_0,_0,_0.12),_0px_3px_2px_-1px_rgba(0,_0,_0,_0.08)] rounded-[99px] bg-white border-gainsboro-400 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-center py-2 px-4 z-[0]">
                  <div className="relative tracking-[-0.04em] leading-[130%]">Onboarding</div>
                </div>
                <b className="self-stretch relative text-5xl tracking-[-0.02em] leading-[110%] capitalize font-plus-jakarta-sans z-[1] text-gray-300">
                  <p className="m-0">{`Effortless onboarding `}</p>
                  <p className="m-0">
                    <span className="whitespace-pre-wrap">{`in         `}</span>
                    <span className="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`minutes `}</span>
                  </p>
                </b>
                <div className="self-stretch relative text-lg tracking-[-0.04em] leading-[150%] text-gray-200 z-[2]">
                  Get up and running quickly with a guide, hassle free setup
                </div>
                <div className="w-[51.8px] absolute !!m-[0 important] top-[calc(50%_+_6.17px)] left-[calc(50%_-_90.33px)] rounded-2xl h-[51.8px] shrink-0 overflow-hidden flex items-center justify-center z-[3]">
                  <Image
                    className="w-full h-full overflow-hidden shrink-0 object-cover absolute left-[0px] top-[26px] [transform:scale(1.878)]"
                    width={51.8}
                    height={51.8}
                    sizes="100vw"
                    alt=""
                    src="/assets/onboarding/Frame 2147227938.svg"
                  />
                </div>
              </motion.div>
              <div className="self-stretch flex flex-col items-center justify-start gap-10 text-left text-sm text-white">
                <OnboardingCardFramerComponent.Responsive />
                <div className="self-stretch rounded-2xl bg-whitesmoke-400 border-gainsboro-200 border-solid border-[1px] box-border h-[380px] overflow-hidden shrink-0 flex flex-row items-center justify-start">
                  <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end py-6 px-10 relative gap-4">
                    <div className="shadow-[0px_18px_7px_rgba(54,_58,_109,_0.09),_0px_8px_4px_rgba(0,_0,_0,_0.12),_0px_4px_4px_rgba(54,_58,_109,_0.51),_0px_1px_2px_rgba(54,_58,_109,_0.59)] rounded-[99px] [background:linear-gradient(137.69deg,_#12b2f9_44.5%,_#514dfa)] border-gray-900 border-solid border-[0.5px] overflow-hidden flex flex-row items-center justify-center py-1.5 px-[19px] z-[0]">
                      <div className="relative tracking-[-0.02em] leading-[150%] uppercase font-semibold">
                        Step 1
                      </div>
                    </div>
                    <div className="self-stretch relative text-2xl tracking-[-0.01em] leading-[125%] font-semibold font-plus-jakarta-sans text-gray-300 z-[1]">
                      Connect your business
                    </div>
                    <div className="self-stretch relative text-base tracking-[-0.01em] leading-[150%] text-gray-200 z-[2]">{`Connect payment systems, set up compliance, & sync your store. We manage the full technical setup & guide you through approvals if you’re not processing payments`}</div>
                    <div className="!!m-[0 important] absolute top-[19.96px] left-[40px] flex flex-row items-center justify-center py-2 px-0 z-[3] text-[90px] text-gray-100">
                      <b className="relative tracking-[-0.06em] leading-[150%] [text-shadow:0px_4px_8px_rgba(0,_0,_0,_0.03),_0px_1.5268816947937012px_1.53px_rgba(0,_0,_0,_0.06)]">
                        01
                      </b>
                    </div>
                  </div>
                  <Image
                    className="w-[425px] relative h-[380px] overflow-hidden shrink-0 object-cover"
                    width={425}
                    height={380}
                    sizes="100vw"
                    alt=""
                    src="/assets/onboarding/Frame 2147228204.png"
                  />
                </div>
                <div className="self-stretch rounded-2xl bg-whitesmoke-400 border-gainsboro-200 border-solid border-[1px] box-border h-[380px] overflow-hidden shrink-0 flex flex-row items-center justify-start">
                  <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end py-6 px-10 relative gap-4">
                    <div className="shadow-[0px_18px_7px_rgba(54,_58,_109,_0.09),_0px_8px_4px_rgba(0,_0,_0,_0.12),_0px_4px_4px_rgba(54,_58,_109,_0.51),_0px_1px_2px_rgba(54,_58,_109,_0.59)] rounded-[99px] [background:linear-gradient(137.69deg,_#12b2f9_44.5%,_#514dfa)] border-gray-900 border-solid border-[0.5px] overflow-hidden flex flex-row items-center justify-center py-1.5 px-[19px] z-[0]">
                      <div className="relative tracking-[-0.02em] leading-[150%] uppercase font-semibold">
                        Step 2
                      </div>
                    </div>
                    <div className="self-stretch relative text-2xl tracking-[-0.01em] leading-[125%] font-semibold font-plus-jakarta-sans text-gray-300 z-[1]">{`Unlock your growth strategy `}</div>
                    <div className="self-stretch relative text-base tracking-[-0.01em] leading-[150%] text-gray-200 z-[2]">{`Answer few questions & get subscriptions strategies built for you. receiving expert guidance & support from account managers who understand your business goal`}</div>
                    <div className="!!m-[0 important] absolute top-[19.96px] left-[40px] flex flex-row items-center justify-center py-2 px-0 z-[3] text-[90px] text-gray-100">
                      <b className="relative tracking-[-0.06em] leading-[150%] [text-shadow:0px_4px_8px_rgba(0,_0,_0,_0.03),_0px_1.5268816947937012px_1.53px_rgba(0,_0,_0,_0.06)]">
                        02
                      </b>
                    </div>
                  </div>
                  <div className="w-[425px] relative [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0.2))] border-gainsboro-800 border-solid border-l-[2px] box-border h-[380px] overflow-hidden shrink-0 text-center text-base text-black font-plus-jakarta-sans">
                    <Image
                      className="absolute top-[84px] left-[44.29px] max-w-full overflow-hidden h-[210.9px]"
                      width={1}
                      height={210.9}
                      sizes="100vw"
                      alt=""
                      src="/assets/onboarding/loader.svg"
                    />
                    <div className="absolute top-[calc(50%_-_144px)] left-[calc(50%_-_139.03px)] shadow-[0px_43.56264114379883px_12.05px_rgba(35,_33,_69,_0),_0px_27.805940628051758px_11.12px_rgba(35,_33,_69,_0.01),_0px_15.756699562072754px_9.27px_rgba(35,_33,_69,_0.03),_0px_6.488052845001221px_6.49px_rgba(35,_33,_69,_0.06),_0px_1.8537293672561646px_3.71px_rgba(35,_33,_69,_0.07)] rounded-[14px] bg-white w-[278.1px] flex flex-col items-start justify-start p-5 box-border">
                      <div className="self-stretch flex flex-col items-start justify-start gap-2">
                        <div className="self-stretch relative rounded-[91.76px] [background:linear-gradient(90deg,_#f5f5f5,_#e5e5e5_50%,_#f5f5f5)] h-2" />
                        <div className="self-stretch relative rounded-[91.76px] [background:linear-gradient(90deg,_#f5f5f5,_#e5e5e5_12.14%,_#f5f5f5)] h-2" />
                        <div className="w-[136.3px] relative rounded-[91.76px] [background:linear-gradient(90deg,_#f5f5f5,_#e5e5e5,_#f5f5f5)] h-2" />
                      </div>
                    </div>
                    <div className="absolute top-[calc(50%_-_40px)] left-[calc(50%_-_139.03px)] shadow-[0px_43.56264114379883px_12.05px_rgba(35,_33,_69,_0),_0px_27.805940628051758px_11.12px_rgba(35,_33,_69,_0.01),_0px_15.756699562072754px_9.27px_rgba(35,_33,_69,_0.03),_0px_6.488052845001221px_6.49px_rgba(35,_33,_69,_0.06),_0px_1.8537293672561646px_3.71px_rgba(35,_33,_69,_0.07)] rounded-[14px] bg-white w-[278.1px] flex flex-col items-start justify-start p-5 box-border">
                      <div className="self-stretch flex flex-col items-start justify-start gap-2">
                        <div className="self-stretch relative rounded-[91.76px] [background:linear-gradient(90deg,_#f5f5f5,_#e5e5e5_50%,_#f5f5f5)] h-2" />
                        <div className="self-stretch relative rounded-[91.76px] [background:linear-gradient(90deg,_#f5f5f5,_#e5e5e5_12.14%,_#f5f5f5)] h-2" />
                        <div className="w-[136.3px] relative rounded-[91.76px] [background:linear-gradient(90deg,_#f5f5f5,_#e5e5e5,_#f5f5f5)] h-2" />
                      </div>
                    </div>
                    <div className="absolute top-[calc(50%_+_63.7px)] left-[calc(50%_-_139.5px)] shadow-[0px_43.56264114379883px_12.05px_rgba(35,_33,_69,_0),_0px_27.805940628051758px_11.12px_rgba(35,_33,_69,_0.01),_0px_15.756699562072754px_9.27px_rgba(35,_33,_69,_0.03),_0px_6.488052845001221px_6.49px_rgba(35,_33,_69,_0.06),_0px_1.8537293672561646px_3.71px_rgba(35,_33,_69,_0.07)] rounded-[14px] bg-white w-[279px] h-[164px] flex flex-col items-center justify-start p-5 box-border gap-6">
                      <div className="flex flex-col items-center justify-start gap-3">
                        <div className="w-8 relative rounded-[52.8px] bg-honeydew h-8 overflow-hidden shrink-0">
                          <div className="absolute top-[calc(50%_-_9.33px)] left-[calc(50%_-_9.33px)] bg-gray-1500 w-[18.7px] h-[18.7px] overflow-hidden">
                            <Image
                              className="absolute h-[91.44%] w-full top-[4.16%] right-[4.4%] bottom-[4.4%] left-[4.16%] max-w-full overflow-hidden max-h-full"
                              width={17.1}
                              height={17.1}
                              sizes="100vw"
                              alt=""
                              src="/assets/onboarding/loader.svg"
                            />
                          </div>
                        </div>
                        <div className="relative tracking-[-0.01em] leading-[150%] font-medium">{`Processing Stragety `}</div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-2">
                        <div className="self-stretch relative rounded-[91.76px] [background:linear-gradient(90deg,_#f5f5f5,_#e5e5e5_50%,_#f5f5f5)] h-2" />
                        <div className="self-stretch relative rounded-[91.76px] [background:linear-gradient(90deg,_#f5f5f5,_#e5e5e5_12.14%,_#f5f5f5)] h-2" />
                        <div className="w-[136.3px] relative rounded-[91.76px] [background:linear-gradient(90deg,_#f5f5f5,_#e5e5e5,_#f5f5f5)] h-2" />
                      </div>
                    </div>
                    <div className="absolute top-[77px] left-[36.04px] shadow-[0px_22px_6px_rgba(20,_56,_118,_0),_0px_14px_6px_rgba(20,_56,_118,_0.03),_0px_8px_5px_rgba(20,_56,_118,_0.1),_0px_4px_4px_rgba(20,_56,_118,_0.17),_0px_1px_2px_rgba(20,_56,_118,_0.2)] rounded-[123.75px] bg-white border-deepskyblue-100 border-solid border-[1.9px] box-border w-[18px] h-[18px]" />
                    <div className="absolute top-[177px] left-[36.04px] shadow-[0px_22px_6px_rgba(20,_56,_118,_0),_0px_14px_6px_rgba(20,_56,_118,_0.03),_0px_8px_5px_rgba(20,_56,_118,_0.1),_0px_4px_4px_rgba(20,_56,_118,_0.17),_0px_1px_2px_rgba(20,_56,_118,_0.2)] rounded-[123.75px] bg-white border-deepskyblue-100 border-solid border-[1.9px] box-border w-[18px] h-[18px]" />
                    <div className="absolute top-[285px] left-[36.04px] shadow-[0px_2.5px_1.25px_rgba(0,_0,_0,_0.08),_0px_2.5px_2.5px_rgba(0,_0,_0,_0.08),_0px_2.5px_10px_rgba(0,_0,_0,_0.14)] rounded-[123.75px] [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] border-white border-solid border-[1.9px] box-border w-[18px] h-[18px]" />
                  </div>
                </div>
                <div className="self-stretch rounded-2xl bg-whitesmoke-400 border-gainsboro-200 border-solid border-[1px] box-border h-[380px] overflow-hidden shrink-0 flex flex-row items-center justify-start">
                  <div className="self-stretch flex-[0.8156] overflow-hidden flex flex-col items-start justify-end py-6 px-10 relative gap-4">
                    <div className="shadow-[0px_18px_7px_rgba(54,_58,_109,_0.09),_0px_8px_4px_rgba(0,_0,_0,_0.12),_0px_4px_4px_rgba(54,_58,_109,_0.51),_0px_1px_2px_rgba(54,_58,_109,_0.59)] rounded-[99px] [background:linear-gradient(137.69deg,_#12b2f9_44.5%,_#514dfa)] border-gray-900 border-solid border-[0.5px] overflow-hidden flex flex-row items-center justify-center py-1.5 px-[19px] z-[0]">
                      <div className="relative tracking-[-0.02em] leading-[150%] uppercase font-semibold">
                        Step 3
                      </div>
                    </div>
                    <div className="self-stretch relative text-2xl tracking-[-0.01em] leading-[125%] font-semibold font-plus-jakarta-sans text-gray-300 z-[1]">
                      Turn clicks into cash
                    </div>
                    <div className="self-stretch relative text-base tracking-[-0.01em] leading-[150%] text-gray-200 z-[2]">
                      We transform your store to create seamless purchase flow checkouts and set uo
                      intelligent upsells that turn onetime buyers into repeat customers with
                      Apptics
                    </div>
                    <div className="!!m-[0 important] absolute top-[19.96px] left-[40px] flex flex-row items-center justify-center py-2 px-0 z-[3] text-[90px] text-gray-100">
                      <b className="relative tracking-[-0.06em] leading-[150%] [text-shadow:0px_4px_8px_rgba(0,_0,_0,_0.03),_0px_1.5268816947937012px_1.53px_rgba(0,_0,_0,_0.06)]">
                        03
                      </b>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0))] border-gainsboro-800 border-solid border-l-[2px] overflow-hidden text-center text-base text-gray-200">
                    <div className="absolute top-[27px] left-[37.5px] rounded-lg bg-white w-[350px] flex flex-col items-start justify-start p-4 box-border gap-[31px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-3">
                        <div className="self-stretch flex flex-row items-center justify-between gap-0">
                          <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                            Total
                          </div>
                          <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                            $120.00
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-between gap-0">
                          <div className="flex flex-row items-center justify-start gap-2">
                            <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                              Discount
                            </div>
                            <div className="rounded bg-honeydew flex flex-row items-center justify-center p-1 text-xs text-mediumseagreen-100">
                              <div className="relative tracking-[-0.01em] leading-[125%] uppercase font-medium">
                                10% Off
                              </div>
                            </div>
                          </div>
                          <div className="relative tracking-[-0.01em] leading-[150%] font-medium text-mediumseagreen-200">
                            -$12.00
                          </div>
                        </div>
                        <div className="self-stretch relative border-gray-300 border-solid border-t-[1px] box-border h-px opacity-[0.1]" />
                        <div className="self-stretch flex flex-row items-center justify-between gap-0 text-gray-300">
                          <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                            Subtotal
                          </div>
                          <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                            $108.00
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-2">
                        <Image
                          className="flex-1 relative rounded-lg max-w-full overflow-hidden h-[55px]"
                          width={100.7}
                          height={55}
                          sizes="100vw"
                          alt=""
                          src="/assets/onboarding/Apple_Pay-Logo.wine (1) 1.svg"
                        />
                        <Image
                          className="flex-1 relative rounded-lg max-w-full overflow-hidden h-[55px]"
                          width={100.7}
                          height={55}
                          sizes="100vw"
                          alt=""
                          src="/assets/onboarding/Logo Alternative.svg.svg"
                        />
                        <Image
                          className="flex-1 relative rounded-lg max-w-full overflow-hidden h-[55px]"
                          width={100.7}
                          height={55}
                          sizes="100vw"
                          alt=""
                          src="/assets/onboarding/google-pay-primary-logo-logo-svgrepo-com 1.svg"
                        />
                      </div>
                    </div>
                    <div className="absolute top-[269px] left-[37.5px] shadow-[0px_0px_6.04px_0.75px_rgba(33,_36,_80,_0.04),_0px_18.8679256439209px_11.32px_-2.26px_rgba(33,_36,_80,_0.05),_0px_6.037735939025879px_7.55px_-3.02px_rgba(33,_36,_80,_0.09),_0px_2.264151096343994px_4.53px_-1.51px_rgba(33,_36,_80,_0.1)] rounded-lg bg-white border-whitesmoke-400 border-solid border-[0.4px] box-border w-[350px] overflow-hidden flex flex-row items-center justify-start py-2 pl-2 pr-4 gap-4 text-left text-sm text-gray-300">
                      <Image
                        className="w-[68px] relative rounded max-h-full overflow-hidden shrink-0 object-cover"
                        width={68}
                        height={68}
                        sizes="100vw"
                        alt=""
                        src="/assets/onboarding/3899-1.png"
                      />
                      <div className="flex-1 flex flex-row items-center justify-center gap-[9.1px]">
                        <div className="flex-1 flex flex-col items-center justify-start">
                          <div className="self-stretch relative tracking-[-0.01em] leading-[130%] capitalize">
                            <p className="m-0">{`Add one more item for `}</p>
                            <p className="m-0">
                              <b>free shipping!</b>
                            </p>
                          </div>
                        </div>
                        <div className="rounded-[9.06px] bg-gray-300 flex flex-row items-center justify-center py-1.5 px-[9.1px] text-[9.06px] text-white">
                          <div className="relative tracking-[-0.01em] leading-[130%] capitalize font-medium">
                            Add to cart
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-2xl bg-whitesmoke-400 border-gainsboro-200 border-solid border-[1px] box-border h-[380px] overflow-hidden shrink-0 flex flex-row items-center justify-start">
                  <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end py-6 px-10 relative gap-4">
                    <div className="shadow-[0px_18px_7px_rgba(54,_58,_109,_0.09),_0px_8px_4px_rgba(0,_0,_0,_0.12),_0px_4px_4px_rgba(54,_58,_109,_0.51),_0px_1px_2px_rgba(54,_58,_109,_0.59)] rounded-[99px] [background:linear-gradient(137.69deg,_#12b2f9_44.5%,_#514dfa)] border-gray-900 border-solid border-[0.5px] overflow-hidden flex flex-row items-center justify-center py-1.5 px-[19px] z-[0]">
                      <div className="relative tracking-[-0.02em] leading-[150%] uppercase font-semibold">
                        Step 4
                      </div>
                    </div>
                    <div className="self-stretch relative text-2xl tracking-[-0.01em] leading-[125%] font-semibold font-plus-jakarta-sans text-gray-300 z-[1]">
                      Grow on autopilot
                    </div>
                    <div className="self-stretch relative text-base tracking-[-0.01em] leading-[150%] text-gray-200 z-[2]">
                      Track real time analytics and scale while we run the backend. spot growth
                      opportunities and expand operation with full support form our platform team
                    </div>
                    <div className="!!m-[0 important] absolute top-[19.96px] left-[40px] flex flex-row items-center justify-center py-2 px-0 z-[3] text-[90px] text-gray-100">
                      <b className="relative tracking-[-0.06em] leading-[150%] [text-shadow:0px_4px_8px_rgba(0,_0,_0,_0.03),_0px_1.5268816947937012px_1.53px_rgba(0,_0,_0,_0.06)]">
                        04
                      </b>
                    </div>
                  </div>
                  <Image
                    className="w-[425px] relative h-[380px] overflow-hidden shrink-0 object-cover"
                    width={425}
                    height={380}
                    sizes="100vw"
                    alt=""
                    src="/assets/onboarding/Frame 2147228108.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return <>{isMobile ? <MobileVersion /> : <DesktopVersion />}</>;
};

export default Onboarding;
