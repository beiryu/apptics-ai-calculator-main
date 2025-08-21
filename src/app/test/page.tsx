import Benefits from "@/components/Benefits";
import Calculator from "@/components/Calculator";
import CaseStudies from "@/components/CaseStudies";
import Comparison from "@/components/Comparison";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Onboarding from "@/components/Onboarding";
import type { NextPage } from "next";
import Image from "next/image";

const DesktopV3: NextPage = () => {
  return (
    <div className="w-full relative bg-whitesmoke-400 overflow-hidden flex flex-col items-start justify-start text-center text-base text-gray-1400 font-inter">
      {/* Hero */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Benefits */}
      <Benefits />

      {/* Comparison */}
      <Comparison />

      {/* Onboarding */}
      <Onboarding />

      {/* Case Studies */}
      <CaseStudies />

      {/* Calculator */}
      <Calculator />

      <div className="self-stretch flex flex-col items-center justify-start py-10 px-0 z-[9]">
        <div className="self-stretch rounded-[60px] bg-white flex flex-col items-center justify-start py-[60px] px-0 gap-[60px]">
          <div className="w-[780px] flex flex-col items-center justify-start relative gap-6">
            <div className="shadow-[0px_8px_8px_-4px_rgba(0,_0,_0,_0.12),_0px_3px_2px_-1px_rgba(0,_0,_0,_0.08)] rounded-[99px] bg-white border-gainsboro-400 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-center py-2 px-4 z-[0]">
              <div className="relative tracking-[-0.04em] leading-[130%]">Pricing</div>
            </div>
            <b className="self-stretch relative text-5xl tracking-[-0.02em] leading-[110%] font-plus-jakarta-sans z-[1] text-gray-300">
              <span className="whitespace-pre-wrap">{`Fair Pricing         `}</span>
              <span className="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                No Surprises
              </span>
            </b>
            <div className="w-[595.7px] relative text-lg tracking-[-0.04em] leading-[150%] text-gray-200 inline-block z-[2]">
              Sick of payment issues, billing errors, and chargebacks? We handle all the backend
              work payments, disputes, data, and retention.
            </div>
            <div className="w-[51.2px] absolute !!m-[0 important] top-[calc(50%_-_29.89px)] left-[calc(50%_-_38.58px)] rounded-2xl h-[51.2px] shrink-0 overflow-hidden flex items-center justify-center z-[3]">
              <Image
                className="w-full h-full overflow-hidden shrink-0 object-cover absolute left-[0px] top-[26px] [transform:scale(1.896)]"
                width={51.2}
                height={51.2}
                sizes="100vw"
                alt=""
                src="/assets/hero/Layer_1.svg"
              />
            </div>
          </div>
          <div className="w-[1280px] flex flex-row items-start justify-center gap-10 text-left text-lg text-gray-300 font-plus-jakarta-sans">
            <div className="w-[420px] shadow-[0px_0px_24px_4px_rgba(255,_255,_255,_0.8)_inset] rounded-3xl bg-white border-gainsboro-600 border-solid border-[1px] box-border flex flex-col items-center justify-start py-10 px-0 relative gap-[60px]">
              <div className="w-[420px] absolute !!m-[0 important] top-[0px] left-[0px] rounded-3xl h-[723px] overflow-hidden shrink-0 z-[0]">
                <div className="absolute top-[-308.05px] left-[-91.48px] w-full h-[468px] overflow-hidden flex items-center justify-center">
                  <Image
                    className="w-full h-full object-cover absolute left-[0px] top-[44px] [transform:scale(1)]"
                    width={674.3}
                    height={468}
                    sizes="100vw"
                    alt=""
                    src="/assets/hero/Layer_1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-8 z-[1] font-inter">
                <div className="self-stretch h-[180px] flex flex-col items-start justify-start py-0 px-2 box-border">
                  <div className="self-stretch shadow-[0px_1px_2px_rgba(255,_255,_255,_0.8)_inset] [backdrop-filter:blur(8px)] rounded-t-3xl rounded-b-none [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.3),_#fff)] flex flex-col items-start justify-start pt-6 px-5 pb-0 gap-5">
                    <div className="self-stretch flex flex-row items-center justify-center gap-2">
                      <div className="w-[26px] relative max-h-full overflow-hidden flex items-center justify-center">
                        <Image
                          className="w-full object-cover absolute left-[0px] top-[3px] h-full [transform:scale(2.128)]"
                          width={26}
                          height={26}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                      <div className="flex-1 relative tracking-[-0.04em] leading-[140%] uppercase font-semibold">
                        Pro Plan
                      </div>
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%]">
                      <p className="m-0">{`Perfect for Shopify merchants or want to `}</p>
                      <p className="m-0">scale their subscription</p>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-center text-[40px]">
                      <div className="flex flex-row items-end justify-start gap-1">
                        <div className="relative tracking-[-0.03em] leading-[115%] font-semibold">
                          $3999
                        </div>
                        <div className="relative text-sm tracking-[-0.03em] leading-[175%] font-medium text-gray-200">
                          One time Fee
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative border-lightgray border-solid border-t-[1px] box-border h-px" />
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 px-7 gap-5 text-base text-gray-200">
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          className="absolute h-[41.43%] w-full top-[29.17%] right-[18.39%] bottom-[29.4%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                          width={8.8}
                          height={5.8}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%] capitalize">
                      1:1 migration and onboarding
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          className="absolute h-[41.43%] w-full top-[29.17%] right-[18.39%] bottom-[29.4%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                          width={8.8}
                          height={5.8}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%]">
                      Subscription management tools
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          className="absolute h-[41.43%] w-full top-[29.17%] right-[18.39%] bottom-[29.4%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                          width={8.8}
                          height={5.8}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%]">
                      Advanced A/B testing capabilities
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          className="absolute h-[41.43%] w-full top-[29.17%] right-[18.39%] bottom-[29.4%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                          width={8.8}
                          height={5.8}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%]">
                      AI-powered cancellation
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          className="absolute h-[41.43%] w-full top-[29.17%] right-[18.39%] bottom-[29.4%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                          width={8.8}
                          height={5.8}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%]">
                      Churn prevention features
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          className="absolute h-[41.43%] w-full top-[29.17%] right-[18.39%] bottom-[29.4%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                          width={8.8}
                          height={5.8}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%]">
                      Branded digital punch card
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          className="absolute h-[41.43%] w-full top-[29.17%] right-[18.39%] bottom-[29.4%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                          width={8.8}
                          height={5.8}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%]">
                      Integrations with top e-comm tools
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-8 z-[2] text-white">
                <div className="self-stretch shadow-[0px_47px_13px_rgba(6,_16,_55,_0),_0px_30px_12px_rgba(6,_16,_55,_0.03),_0px_17px_10px_rgba(6,_16,_55,_0.12),_0px_8px_8px_rgba(6,_16,_55,_0.2),_0px_2px_4px_rgba(6,_16,_55,_0.23)] rounded-[20px] bg-mediumslateblue-200 flex flex-col items-start justify-start p-0.5">
                  <div className="self-stretch shadow-[0px_0px_10px_2px_rgba(255,_255,_255,_0.25)_inset,_0px_1px_0px_rgba(255,_255,_255,_0.25)_inset,_0px_-1px_0px_rgba(255,_255,_255,_0.25)_inset,_0px_3px_0px_rgba(255,_255,_255,_0.1)_inset,_0px_-3px_0px_rgba(255,_255,_255,_0.1)_inset,_0px_1.028807520866394px_0px_rgba(203,_203,_203,_0.15)] rounded-[18px] bg-mediumslateblue-100 overflow-hidden flex flex-row items-center justify-center p-2 relative gap-2">
                    <Image
                      className="w-[222.9px] absolute !!m-[0 important] top-[-33.19px] left-[calc(50%_-_111.78px)] h-[46.6px] hidden opacity-[0.3] [mix-blend-mode:linear-dodge] z-[0]"
                      width={222.9}
                      height={46.6}
                      sizes="100vw"
                      alt=""
                      src="/assets/hero/Layer_1.svg"
                    />
                    <div className="w-[240.4px] absolute !!m-[0 important] top-[-23.02px] left-[calc(50%_-_120.51px)] h-[34.3px] opacity-[0.2] [mix-blend-mode:linear-dodge] overflow-hidden flex items-center justify-center z-[1]">
                      <Image
                        className="w-full h-full [mix-blend-mode:linear-dodge] object-cover absolute left-[0px] top-[0px] [transform:scale(1.274)]"
                        width={240.4}
                        height={34.3}
                        sizes="100vw"
                        alt=""
                        src="/assets/hero/Layer_1.svg"
                      />
                    </div>
                    <Image
                      className="w-[34px] relative rounded-[96.17px] max-h-full overflow-hidden shrink-0 object-cover z-[2]"
                      width={34}
                      height={34}
                      sizes="100vw"
                      alt=""
                      src="/assets/hero/Layer_1.svg"
                    />
                    <div className="relative tracking-[-0.03em] font-medium [text-shadow:0px_2px_1px_rgba(0,_0,_0,_0.15)] z-[3]">
                      Book a 20-min Call
                    </div>
                  </div>
                </div>
              </div>
              <div className="!!m-[0 important] absolute top-[-17px] right-[23.67px] shadow-[0px_10px_24px_rgba(0,_0,_0,_0.1),_0px_1px_2px_rgba(0,_0,_0,_0.08),_0px_3px_5px_-4px_rgba(0,_0,_0,_0.08)] rounded-[99px] bg-white border-whitesmoke-600 border-solid border-[0.5px] flex flex-row items-center justify-center py-2 px-4 gap-2 z-[3] text-sm">
                <div className="w-7 relative h-[18px] overflow-hidden flex items-center justify-center">
                  <Image
                    className="w-full h-full object-cover absolute left-[0px] top-[8px] [transform:scale(1.199)]"
                    width={28}
                    height={18}
                    sizes="100vw"
                    alt=""
                    src="/assets/hero/Layer_1.svg"
                  />
                </div>
                <div className="relative tracking-[-0.03em] leading-[150%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:0px_1px_2px_rgba(0,_0,_0,_0.08)]">
                  Client Choice
                </div>
              </div>
            </div>
            <div className="w-[420px] shadow-[0px_0px_24px_4px_rgba(255,_255,_255,_0.8)_inset] rounded-3xl bg-white border-gainsboro-600 border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-center justify-start py-10 px-0 relative gap-[60px] font-inter">
              <div className="w-[420px] absolute !!m-[0 important] top-[0px] left-[0px] rounded-3xl h-[723px] overflow-hidden shrink-0 z-[0]">
                <Image
                  className="absolute top-[-326.3px] left-[-236.77px] w-[843.3px] h-[481.3px] hidden"
                  width={843.3}
                  height={481.3}
                  sizes="100vw"
                  alt=""
                  src="/assets/hero/Layer_1.svg"
                />
                <div className="absolute top-[-309.73px] left-[-120.21px] w-[615.8px] h-[409.8px] overflow-hidden flex items-center justify-center">
                  <Image
                    className="w-full h-full object-cover absolute left-[0px] top-[0px] [transform:scale(1.325)]"
                    width={615.8}
                    height={409.8}
                    sizes="100vw"
                    alt=""
                    src="/assets/hero/Layer_1.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-8 z-[1]">
                <div className="w-[413.3px] h-[180px] flex flex-col items-start justify-start py-0 px-2 box-border">
                  <div className="self-stretch shadow-[0px_1px_2px_rgba(255,_255,_255,_0.8)_inset] [backdrop-filter:blur(8px)] rounded-t-3xl rounded-b-none [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.3),_#fff)] flex flex-col items-start justify-start pt-6 px-5 pb-0 gap-5">
                    <div className="self-stretch flex flex-row items-center justify-center gap-2.5">
                      <div className="w-[26px] relative h-[26px] overflow-hidden flex items-center justify-center">
                        <Image
                          className="w-full h-full object-cover absolute left-[0px] top-[9px] [transform:scale(1.696)]"
                          width={26}
                          height={26}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                      <div className="flex-1 relative tracking-[-0.04em] leading-[150%] uppercase font-semibold">{`Enterprise `}</div>
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-gray-200">
                      For larger brands looking to supercharge their subscription program
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-center text-[40px]">
                      <div className="flex flex-row items-end justify-start gap-1">
                        <div className="relative tracking-[-0.03em] leading-[115%] font-semibold">
                          Custom Pricing
                        </div>
                        <div className="relative text-sm tracking-[-0.03em] leading-[175%] font-medium text-gray-200 hidden">
                          One time Fee
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[414.3px] relative border-lightgray border-solid border-t-[1px] box-border h-px" />
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 px-7 gap-5 text-base text-gray-200">
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          className="absolute h-[41.43%] w-full top-[29.17%] right-[18.39%] bottom-[29.4%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                          width={8.8}
                          height={5.8}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%]">
                      Every feature we offer in Pro plus
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          className="absolute h-[41.43%] w-full top-[29.17%] right-[18.39%] bottom-[29.4%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                          width={8.8}
                          height={5.8}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%] capitalize">
                      1:1 migration and onboarding
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          className="absolute h-[41.43%] w-full top-[29.17%] right-[18.39%] bottom-[29.4%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                          width={8.8}
                          height={5.8}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%] capitalize">
                      AI-powered cancellation
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          className="absolute h-[41.43%] w-full top-[29.17%] right-[18.39%] bottom-[29.4%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                          width={8.8}
                          height={5.8}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%]">
                      Custom development
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          className="absolute h-[41.43%] w-full top-[29.17%] right-[18.39%] bottom-[29.4%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                          width={8.8}
                          height={5.8}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%]">
                      Personalized growth planning
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          className="absolute h-[41.43%] w-full top-[29.17%] right-[18.39%] bottom-[29.4%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                          width={8.8}
                          height={5.8}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%]">
                      Early access to new features and tools
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          className="absolute h-[41.43%] w-full top-[29.17%] right-[18.39%] bottom-[29.4%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                          width={8.8}
                          height={5.8}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%]">
                      Integrations with top e-comm tools
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-8 gap-2 z-[2] text-5xl">
                <div className="self-stretch shadow-[0px_47px_13px_rgba(6,_16,_55,_0),_0px_30px_12px_rgba(6,_16,_55,_0.03),_0px_17px_10px_rgba(6,_16,_55,_0.12),_0px_8px_8px_rgba(6,_16,_55,_0.2),_0px_2px_4px_rgba(6,_16,_55,_0.23)] flex flex-col items-center justify-start gap-6">
                  <div className="w-[346.7px] hidden flex-col items-center justify-start gap-1">
                    <div className="relative tracking-[-0.03em] leading-[120%] font-semibold">
                      $3999
                    </div>
                    <div className="relative text-base tracking-[-0.03em] leading-[150%] font-medium text-gray-200">
                      {" "}
                      ~$3.00 per subscription
                    </div>
                  </div>
                  <div className="self-stretch shadow-[0px_0px_8px_4px_rgba(255,_255,_255,_0.16)_inset,_0px_-2px_0px_#000_inset,_0px_1px_1px_#000_inset,_0px_2px_1px_rgba(255,_255,_255,_0.25)_inset] rounded-[20px] [background:linear-gradient(88.67deg,_#1d1d1d,_#333_34.6%,_#3d3d3d_76.69%,_#1d1d1d)] h-[52px] flex flex-row items-center justify-center p-2 box-border gap-3 text-lg text-white font-plus-jakarta-sans">
                    <div className="hidden flex-row items-center justify-start gap-[5.8px]">
                      <Image
                        className="w-[35px] relative rounded-[11.67px] max-h-full overflow-hidden shrink-0 object-cover"
                        width={35}
                        height={35}
                        sizes="100vw"
                        alt=""
                        src="/assets/hero/Layer_1.svg"
                      />
                      <div className="w-[35px] relative [backdrop-filter:blur(5.83px)] rounded-[11.67px] bg-white border-gray-400 border-solid border-[0.7px] box-border h-[35px] overflow-hidden shrink-0 hidden">
                        <div className="absolute top-[calc(50%_-_12.76px)] left-[calc(50%_-_12.76px)] bg-gray-1500 w-[25.5px] h-[25.5px] overflow-hidden">
                          <Image
                            className="absolute h-[74.9%] w-full top-[12.51%] right-[16.65%] bottom-[12.59%] left-[16.68%] max-w-full overflow-hidden max-h-full"
                            width={17}
                            height={19.1}
                            sizes="100vw"
                            alt=""
                            src="/assets/hero/Layer_1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="shadow-[0px_2px_2px_rgba(0,_0,_0,_0.48)] flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.03em] font-medium">Get Started</div>
                    </div>
                  </div>
                </div>
                <div className="w-[349.3px] relative text-base tracking-[-0.03em] leading-[150%] text-gray-200 text-center hidden">
                  {" "}
                  ~$3.00 per subscription
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start z-[10]">
        <div className="w-[1280px] overflow-hidden flex flex-col items-center justify-start py-20 px-0 box-border gap-10">
          <div className="w-[600px] flex flex-col items-center justify-start gap-6">
            <div className="shadow-[0px_8px_8px_-4px_rgba(0,_0,_0,_0.12),_0px_3px_2px_-1px_rgba(0,_0,_0,_0.08)] rounded-[99px] bg-white border-gainsboro-400 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-center py-2 px-4">
              <div className="relative tracking-[-0.04em] leading-[130%]">Our Team</div>
            </div>
            <div className="flex flex-col items-center justify-start text-5xl text-gray-300 font-plus-jakarta-sans">
              <div className="flex flex-row items-start justify-center gap-1">
                <b className="relative tracking-[-0.02em] leading-[110%]">Mee the</b>
                <div className="w-12 relative shadow-[0px_8px_8px_-2px_rgba(11,_32,_103,_0.05),_0px_2px_4px_-1px_rgba(11,_32,_103,_0.14),_0px_14px_20px_-5px_rgba(0,_0,_0,_0.08),_0px_30px_30px_-6px_rgba(0,_0,_0,_0.08)] rounded-2xl [background:linear-gradient(205.35deg,_#12b2f9,_#514dfa)] h-12 overflow-hidden shrink-0">
                  <div className="absolute top-[12px] left-[12px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.2)] bg-gray-1500 w-6 h-6">
                    <Image
                      className="absolute h-[83.33%] w-full top-[8.33%] right-[4.17%] bottom-[8.33%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                      width={22}
                      height={20}
                      sizes="100vw"
                      alt=""
                      src="/assets/hero/Layer_1.svg"
                    />
                  </div>
                </div>
                <b className="relative tracking-[-0.02em] leading-[110%] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Experts
                </b>
              </div>
            </div>
            <div className="self-stretch relative text-lg tracking-[-0.04em] leading-[150%] text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
            </div>
          </div>
          <div className="self-stretch rounded-[48px] bg-white overflow-hidden flex flex-col items-start justify-start p-4 gap-8 text-2xl text-gray-300 font-plus-jakarta-sans">
            <div className="self-stretch flex flex-row items-center justify-start gap-4">
              <div className="flex-1 rounded-t-[999px] rounded-b-[200px] bg-whitesmoke-400 h-[450px] overflow-hidden flex flex-col items-center justify-between p-5 box-border gap-0">
                <Image
                  className="self-stretch relative rounded-[999px] max-w-full overflow-hidden max-h-full object-cover"
                  width={260}
                  height={260}
                  sizes="100vw"
                  alt=""
                  src="/assets/hero/Layer_1.svg"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-6">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch relative tracking-[-0.04em] leading-[150%] font-semibold">
                      Adam Fresner
                    </div>
                    <div className="self-stretch relative text-base tracking-[-0.04em] leading-[150%] text-gray-200">
                      CEO
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-3">
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10.29px)] left-[calc(50%_-_10.29px)] bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden">
                        <Image
                          className="absolute h-[87.38%] w-full top-[4.16%] right-[4.09%] bottom-[8.46%] left-[4.16%] max-w-full overflow-hidden max-h-full"
                          width={18.9}
                          height={18}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10.31px)] left-[calc(50%_-_10.31px)] bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden">
                        <Image
                          className="absolute top-[0.86px] left-[0.86px] w-full h-[18.9px]"
                          width={18.9}
                          height={18.9}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_9.77px)] left-[calc(50%_-_9.77px)] bg-gray-1500 w-[19.5px] h-[19.5px] overflow-hidden">
                        <Image
                          className="absolute h-[91.79%] w-full top-[4.18%] right-[20.59%] bottom-[4.03%] left-[25.05%] max-w-full overflow-hidden max-h-full"
                          width={10.6}
                          height={17.9}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-t-[999px] rounded-b-[200px] bg-whitesmoke-400 h-[450px] overflow-hidden flex flex-col items-center justify-between p-5 box-border gap-0">
                <Image
                  className="self-stretch relative rounded-[999px] max-w-full overflow-hidden max-h-full object-cover"
                  width={260}
                  height={260}
                  sizes="100vw"
                  alt=""
                  src="/assets/hero/Layer_1.svg"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-6">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch relative tracking-[-0.04em] leading-[150%] font-semibold">
                      Adam Fresner
                    </div>
                    <div className="self-stretch relative text-base tracking-[-0.04em] leading-[150%] text-gray-200">
                      CEO
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-3">
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10.29px)] left-[calc(50%_-_10.29px)] bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden">
                        <Image
                          className="absolute h-[87.38%] w-full top-[4.16%] right-[4.09%] bottom-[8.46%] left-[4.16%] max-w-full overflow-hidden max-h-full"
                          width={18.9}
                          height={18}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10.31px)] left-[calc(50%_-_10.31px)] bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden">
                        <Image
                          className="absolute top-[0.86px] left-[0.86px] w-full h-[18.9px]"
                          width={18.9}
                          height={18.9}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_9.77px)] left-[calc(50%_-_9.77px)] bg-gray-1500 w-[19.5px] h-[19.5px] overflow-hidden">
                        <Image
                          className="absolute h-[91.79%] w-full top-[4.18%] right-[20.59%] bottom-[4.03%] left-[25.05%] max-w-full overflow-hidden max-h-full"
                          width={10.6}
                          height={17.9}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-t-[999px] rounded-b-[200px] bg-whitesmoke-400 h-[450px] overflow-hidden flex flex-col items-center justify-between p-5 box-border gap-0">
                <Image
                  className="self-stretch relative rounded-[999px] max-w-full overflow-hidden max-h-full object-cover"
                  width={260}
                  height={260}
                  sizes="100vw"
                  alt=""
                  src="/assets/hero/Layer_1.svg"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-6">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch relative tracking-[-0.04em] leading-[150%] font-semibold">
                      Marcus Green
                    </div>
                    <div className="self-stretch relative text-base tracking-[-0.04em] leading-[150%] text-gray-200">
                      Data Scientist
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-3">
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10.29px)] left-[calc(50%_-_10.29px)] bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden">
                        <Image
                          className="absolute h-[87.38%] w-full top-[4.16%] right-[4.09%] bottom-[8.46%] left-[4.16%] max-w-full overflow-hidden max-h-full"
                          width={18.9}
                          height={18}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10.31px)] left-[calc(50%_-_10.31px)] bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden">
                        <Image
                          className="absolute top-[0.86px] left-[0.86px] w-full h-[18.9px]"
                          width={18.9}
                          height={18.9}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_9.77px)] left-[calc(50%_-_9.77px)] bg-gray-1500 w-[19.5px] h-[19.5px] overflow-hidden">
                        <Image
                          className="absolute h-[91.79%] w-full top-[4.18%] right-[20.59%] bottom-[4.03%] left-[25.05%] max-w-full overflow-hidden max-h-full"
                          width={10.6}
                          height={17.9}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-t-[999px] rounded-b-[200px] bg-whitesmoke-400 h-[450px] overflow-hidden flex flex-col items-center justify-between p-5 box-border gap-0">
                <Image
                  className="self-stretch relative rounded-[999px] max-w-full overflow-hidden max-h-full object-cover"
                  width={260}
                  height={260}
                  sizes="100vw"
                  alt=""
                  src="/assets/hero/Layer_1.svg"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-6">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch relative tracking-[-0.04em] leading-[150%] font-semibold">
                      Marcus Reed
                    </div>
                    <div className="self-stretch relative text-base tracking-[-0.04em] leading-[150%] text-gray-200">
                      Data Scientist
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-3">
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10.29px)] left-[calc(50%_-_10.29px)] bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden">
                        <Image
                          className="absolute h-[87.38%] w-full top-[4.16%] right-[4.09%] bottom-[8.46%] left-[4.16%] max-w-full overflow-hidden max-h-full"
                          width={18.9}
                          height={18}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10.31px)] left-[calc(50%_-_10.31px)] bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden">
                        <Image
                          className="absolute top-[0.86px] left-[0.86px] w-full h-[18.9px]"
                          width={18.9}
                          height={18.9}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_9.77px)] left-[calc(50%_-_9.77px)] bg-gray-1500 w-[19.5px] h-[19.5px] overflow-hidden">
                        <Image
                          className="absolute h-[91.79%] w-full top-[4.18%] right-[20.59%] bottom-[4.03%] left-[25.05%] max-w-full overflow-hidden max-h-full"
                          width={10.6}
                          height={17.9}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-4">
              <div className="flex-1 rounded-t-[999px] rounded-b-[200px] bg-whitesmoke-400 h-[450px] overflow-hidden flex flex-col items-center justify-between p-5 box-border gap-0">
                <Image
                  className="self-stretch relative rounded-[999px] max-w-full overflow-hidden max-h-full object-cover"
                  width={260}
                  height={260}
                  sizes="100vw"
                  alt=""
                  src="/assets/hero/Layer_1.svg"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-6">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch relative tracking-[-0.04em] leading-[150%] font-semibold">
                      Adam Fresner
                    </div>
                    <div className="self-stretch relative text-base tracking-[-0.04em] leading-[150%] text-gray-200">
                      CEO
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-3">
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10.29px)] left-[calc(50%_-_10.29px)] bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden">
                        <Image
                          className="absolute h-[87.38%] w-full top-[4.16%] right-[4.09%] bottom-[8.46%] left-[4.16%] max-w-full overflow-hidden max-h-full"
                          width={18.9}
                          height={18}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10.31px)] left-[calc(50%_-_10.31px)] bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden">
                        <Image
                          className="absolute top-[0.86px] left-[0.86px] w-full h-[18.9px]"
                          width={18.9}
                          height={18.9}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_9.77px)] left-[calc(50%_-_9.77px)] bg-gray-1500 w-[19.5px] h-[19.5px] overflow-hidden">
                        <Image
                          className="absolute h-[91.79%] w-full top-[4.18%] right-[20.59%] bottom-[4.03%] left-[25.05%] max-w-full overflow-hidden max-h-full"
                          width={10.6}
                          height={17.9}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-t-[999px] rounded-b-[200px] bg-whitesmoke-400 h-[450px] overflow-hidden flex flex-col items-center justify-between p-5 box-border gap-0">
                <Image
                  className="self-stretch relative rounded-[999px] max-w-full overflow-hidden max-h-full object-cover"
                  width={260}
                  height={260}
                  sizes="100vw"
                  alt=""
                  src="/assets/hero/Layer_1.svg"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-6">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch relative tracking-[-0.04em] leading-[150%] font-semibold">
                      Adam Fresner
                    </div>
                    <div className="self-stretch relative text-base tracking-[-0.04em] leading-[150%] text-gray-200">
                      CEO
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-3">
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10.29px)] left-[calc(50%_-_10.29px)] bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden">
                        <Image
                          className="absolute h-[87.38%] w-full top-[4.16%] right-[4.09%] bottom-[8.46%] left-[4.16%] max-w-full overflow-hidden max-h-full"
                          width={18.9}
                          height={18}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10.31px)] left-[calc(50%_-_10.31px)] bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden">
                        <Image
                          className="absolute top-[0.86px] left-[0.86px] w-full h-[18.9px]"
                          width={18.9}
                          height={18.9}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_9.77px)] left-[calc(50%_-_9.77px)] bg-gray-1500 w-[19.5px] h-[19.5px] overflow-hidden">
                        <Image
                          className="absolute h-[91.79%] w-full top-[4.18%] right-[20.59%] bottom-[4.03%] left-[25.05%] max-w-full overflow-hidden max-h-full"
                          width={10.6}
                          height={17.9}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-t-[999px] rounded-b-[200px] bg-whitesmoke-400 h-[450px] overflow-hidden flex flex-col items-center justify-between p-5 box-border gap-0">
                <Image
                  className="self-stretch relative rounded-[999px] max-w-full overflow-hidden max-h-full object-cover"
                  width={260}
                  height={260}
                  sizes="100vw"
                  alt=""
                  src="/assets/hero/Layer_1.svg"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-6">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch relative tracking-[-0.04em] leading-[150%] font-semibold">
                      Marcus Green
                    </div>
                    <div className="self-stretch relative text-base tracking-[-0.04em] leading-[150%] text-gray-200">
                      Data Scientist
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-3">
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10.29px)] left-[calc(50%_-_10.29px)] bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden">
                        <Image
                          className="absolute h-[87.38%] w-full top-[4.16%] right-[4.09%] bottom-[8.46%] left-[4.16%] max-w-full overflow-hidden max-h-full"
                          width={18.9}
                          height={18}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10.31px)] left-[calc(50%_-_10.31px)] bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden">
                        <Image
                          className="absolute top-[0.86px] left-[0.86px] w-full h-[18.9px]"
                          width={18.9}
                          height={18.9}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_9.77px)] left-[calc(50%_-_9.77px)] bg-gray-1500 w-[19.5px] h-[19.5px] overflow-hidden">
                        <Image
                          className="absolute h-[91.79%] w-full top-[4.18%] right-[20.59%] bottom-[4.03%] left-[25.05%] max-w-full overflow-hidden max-h-full"
                          width={10.6}
                          height={17.9}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-t-[999px] rounded-b-[200px] bg-whitesmoke-400 h-[450px] overflow-hidden flex flex-col items-center justify-between p-5 box-border gap-0">
                <Image
                  className="self-stretch relative rounded-[999px] max-w-full overflow-hidden max-h-full object-cover"
                  width={260}
                  height={260}
                  sizes="100vw"
                  alt=""
                  src="/assets/hero/Layer_1.svg"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-6">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch relative tracking-[-0.04em] leading-[150%] font-semibold">
                      Marcus Reed
                    </div>
                    <div className="self-stretch relative text-base tracking-[-0.04em] leading-[150%] text-gray-200">
                      Data Scientist
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-3">
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10.29px)] left-[calc(50%_-_10.29px)] bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden">
                        <Image
                          className="absolute h-[87.38%] w-full top-[4.16%] right-[4.09%] bottom-[8.46%] left-[4.16%] max-w-full overflow-hidden max-h-full"
                          width={18.9}
                          height={18}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_10.31px)] left-[calc(50%_-_10.31px)] bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden">
                        <Image
                          className="absolute top-[0.86px] left-[0.86px] w-full h-[18.9px]"
                          width={18.9}
                          height={18.9}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_9.77px)] left-[calc(50%_-_9.77px)] bg-gray-1500 w-[19.5px] h-[19.5px] overflow-hidden">
                        <Image
                          className="absolute h-[91.79%] w-full top-[4.18%] right-[20.59%] bottom-[4.03%] left-[25.05%] max-w-full overflow-hidden max-h-full"
                          width={10.6}
                          height={17.9}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start z-[11]">
        <div className="w-[1280px] overflow-hidden flex flex-col items-center justify-start py-20 px-0 box-border gap-[60px]">
          <div className="w-[780px] flex flex-col items-center justify-start gap-6">
            <div className="shadow-[0px_8px_8px_-4px_rgba(0,_0,_0,_0.12),_0px_3px_2px_-1px_rgba(0,_0,_0,_0.08)] rounded-[99px] bg-white border-gainsboro-400 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-center py-2 px-4">
              <div className="relative tracking-[-0.04em] leading-[130%]">Testimonials</div>
            </div>
            <div className="flex flex-col items-center justify-start gap-1 text-5xl text-gray-300 font-plus-jakarta-sans">
              <b className="w-[595.7px] relative tracking-[-0.02em] leading-[110%] inline-block">
                Merchants Love Apptics,
              </b>
              <div className="flex flex-row items-start justify-center gap-1">
                <b className="relative tracking-[-0.02em] leading-[110%]">and you will</b>
                <div className="w-[51.9px] relative rounded-2xl h-[51.9px] shrink-0 overflow-hidden flex items-center justify-center">
                  <Image
                    className="w-full h-full overflow-hidden shrink-0 object-cover absolute left-[0px] top-[26px] [transform:scale(1.875)]"
                    width={51.9}
                    height={51.9}
                    sizes="100vw"
                    alt=""
                    src="/assets/hero/Layer_1.svg"
                  />
                </div>
                <b className="relative tracking-[-0.02em] leading-[110%] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Love it to
                </b>
              </div>
            </div>
            <div className="w-[706.5px] relative text-lg tracking-[-0.04em] leading-[150%] text-gray-200 inline-block">
              Trusted by users for seamless subscriptions, smarter payments, and real results.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-5 text-left text-xl text-gray-300 font-plus-jakarta-sans">
            <div className="flex-1 flex flex-col items-start justify-start gap-5">
              <div className="self-stretch rounded-3xl bg-white flex flex-col items-start justify-start p-6 gap-6">
                <div className="self-stretch relative leading-[130%] font-semibold">
                  Increased Customer Retention by 40%!
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[150%] text-gray-200">
                  “Since implementing Apptics, my customer retention has skyrocketed. The analytics
                  they provide help me understand my customers better, allowing me to tailor my
                  offerings. It&apos;s been a game changer for my business&quot;
                </div>
                <div className="flex flex-row items-center justify-start gap-3 text-base">
                  <Image
                    className="w-[50px] relative rounded-[99px] max-h-full overflow-hidden shrink-0 object-cover"
                    width={50}
                    height={50}
                    sizes="100vw"
                    alt=""
                    src="/assets/hero/Layer_1.svg"
                  />
                  <div className="w-[140.5px] flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[150%] font-semibold">
                      Sophia K.
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-gray-200">
                      Online Clothing Retailer
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xl bg-white flex flex-col items-start justify-start p-6 gap-6">
                <div className="self-stretch relative leading-[130%] font-semibold">
                  Efficient Customer Support
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[150%] text-gray-200">
                  “I can&apos;t praise Apptics enough for their customer support. Whenever I had
                  questions or needed assistance, their team was there to help me promptly.
                  It&apos;s comforting to know I have such reliable support while running my
                  business&quot;
                </div>
                <div className="flex flex-row items-center justify-start gap-3 text-base">
                  <Image
                    className="w-[50px] relative rounded-[99px] max-h-full overflow-hidden shrink-0 object-cover"
                    width={50}
                    height={50}
                    sizes="100vw"
                    alt=""
                    src="/assets/hero/Layer_1.svg"
                  />
                  <div className="w-[140.5px] flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[150%] font-semibold">
                      Mark R.
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-gray-200">
                      Fitness Studio Owner
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xl bg-white flex flex-col items-start justify-start p-6 gap-6">
                <div className="self-stretch relative leading-[130%] font-semibold">
                  The Ultimate Scaling Solution for Brands
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[150%] text-gray-200">
                  “Apptics is hands down the best subscription management platform I&apos;ve used.
                  From payments to chargeback protection, upsells, and consulting, they handle
                  everything. My brand is scaling faster than I ever thought possible, and I
                  couldn&apos;t have done it without their team&quot;
                </div>
                <div className="flex flex-row items-center justify-start gap-3 text-base">
                  <Image
                    className="w-[50px] relative rounded-[99px] max-h-full overflow-hidden shrink-0 object-cover"
                    width={50}
                    height={50}
                    sizes="100vw"
                    alt=""
                    src="/assets/hero/Layer_1.svg"
                  />
                  <div className="w-[140.5px] flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[150%] font-semibold">
                      David L.
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-gray-200">
                      Restaurant Owner
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-5">
              <div className="self-stretch rounded-3xl bg-white flex flex-col items-start justify-start p-6 gap-6">
                <div className="self-stretch relative leading-[130%] font-semibold">
                  Increased Customer Engagement by 150%!
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[150%] text-gray-200">
                  “Since integrating with Apptics, the engagement on my platform has skyrocketed!
                  I&apos;ve seen a 150% increase in customer interactions, leading to more sales and
                  loyal customers. Their analytics help me understand my audience better&quot;
                </div>
                <div className="flex flex-row items-center justify-start gap-3 text-base">
                  <Image
                    className="w-[50px] relative rounded-[99px] max-h-full overflow-hidden shrink-0 object-cover"
                    width={50}
                    height={50}
                    sizes="100vw"
                    alt=""
                    src="/assets/hero/Layer_1.svg"
                  />
                  <div className="w-[140.5px] flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[150%] font-semibold">
                      Sophia K.
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-gray-200">
                      E-commerce Business Owner
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xl bg-white flex flex-col items-start justify-start p-6 gap-6">
                <div className="self-stretch relative leading-[130%] font-semibold">
                  Achieved 200% ROI in 6 Months!
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[150%] text-gray-200">
                  “With Apptics, my investment turned into a 200% ROI in just half a year! Their
                  data-driven approach allowed me to optimize my campaigns effectively, making every
                  dollar count. I highly recommend their services to any business looking to
                  grow&quot;
                </div>
                <div className="flex flex-row items-center justify-start gap-3 text-base">
                  <Image
                    className="w-[50px] relative rounded-[99px] max-h-full overflow-hidden shrink-0 object-cover"
                    width={50}
                    height={50}
                    sizes="100vw"
                    alt=""
                    src="/assets/hero/Layer_1.svg"
                  />
                  <div className="w-[140.5px] flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[150%] font-semibold">
                      Emma W.
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-gray-200">
                      Startup Founder
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xl bg-white flex flex-col items-start justify-start p-6 gap-6">
                <div className="self-stretch relative leading-[130%] font-semibold">
                  Enhanced Marketing Campaign Effectiveness by 120%!
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[150%] text-gray-200">
                  “Implementing Apptics into my marketing strategy has resulted in a 120% increase
                  in campaign effectiveness. Their tools allow me to target my audience precisely,
                  leading to higher conversion rates and successful promotions. I can&apos;t imagine
                  running my campaigns without them&quot;
                </div>
                <div className="flex flex-row items-center justify-start gap-3 text-base">
                  <Image
                    className="w-[50px] relative rounded-[99px] max-h-full overflow-hidden shrink-0 object-cover"
                    width={50}
                    height={50}
                    sizes="100vw"
                    alt=""
                    src="/assets/hero/Layer_1.svg"
                  />
                  <div className="w-[140.5px] flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[150%] font-semibold">
                      Thomas G.
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-gray-200">
                      Digital Marketing Specialist
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-5">
              <div className="self-stretch rounded-3xl bg-white flex flex-col items-start justify-start p-6 gap-6">
                <div className="self-stretch relative leading-[130%] font-semibold">
                  Reduced Churn Rate by 40%!
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[150%] text-gray-200">
                  “Thanks to Apptics, we&apos;ve drastically cut down our churn rate! In just a few
                  months, we achieved a 40% reduction by utilizing their retention strategies.
                  It&apos;s been a game-changer for our subscription service&quot;
                </div>
                <div className="flex flex-row items-center justify-start gap-3 text-base">
                  <Image
                    className="w-[50px] relative rounded-[99px] max-h-full overflow-hidden shrink-0 object-cover"
                    width={50}
                    height={50}
                    sizes="100vw"
                    alt=""
                    src="/assets/hero/Layer_1.svg"
                  />
                  <div className="w-[140.5px] flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[150%] font-semibold">
                      Michael T.
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-gray-200">
                      SaaS Product Manager
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xl bg-white flex flex-col items-start justify-start p-6 gap-6">
                <div className="self-stretch relative leading-[130%] font-semibold">
                  Unmatched Flexibility in Subscription
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[150%] text-gray-200">
                  “The flexibility Apptics offers in managing my subscription plans has been a
                  lifesaver. I can easily adjust pricing, create promotional offers, and analyze
                  performance metrics without hassle. It&apos;s incredibly empowering for my
                  business&quot;
                </div>
                <div className="flex flex-row items-center justify-start gap-3 text-base">
                  <Image
                    className="w-[50px] relative rounded-[99px] max-h-full overflow-hidden shrink-0 object-cover"
                    width={50}
                    height={50}
                    sizes="100vw"
                    alt=""
                    src="/assets/hero/Layer_1.svg"
                  />
                  <div className="w-[140.5px] flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[150%] font-semibold">
                      Emma W.
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-gray-200">
                      E-commerce Entrepreneur
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xl bg-white flex flex-col items-start justify-start p-6 gap-6">
                <div className="self-stretch relative leading-[130%] font-semibold">
                  Improved Analytics
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[150%] text-gray-200">
                  “The analytics provided by Apptics have transformed my understanding of customer
                  behavior. I can now tailor my offerings based on real-time data, resulting in
                  improved customer satisfaction and increased sales. It&apos;s a must-have for any
                  business&quot;
                </div>
                <div className="flex flex-row items-center justify-start gap-3 text-base">
                  <Image
                    className="w-[50px] relative rounded-[99px] max-h-full overflow-hidden shrink-0 object-cover"
                    width={50}
                    height={50}
                    sizes="100vw"
                    alt=""
                    src="/assets/hero/Layer_1.svg"
                  />
                  <div className="w-[140.5px] flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[150%] font-semibold">
                      Lucas M.
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-gray-200">
                      Retail Manager
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start relative gap-2.5 z-[12] text-gray-300">
        <div className="w-[1440px] absolute !!m-[0 important] bottom-[-0.05px] left-[0px] bg-white h-[124.3px] z-[0]" />
        <div className="self-stretch rounded-t-none rounded-b-[32px] bg-whitesmoke-400 flex flex-col items-center justify-start z-[1]">
          <div className="w-[1280px] flex flex-col items-center justify-start pt-20 px-0 pb-60 box-border gap-[59px]">
            <div className="w-[780px] flex flex-col items-center justify-start relative gap-6">
              <div className="shadow-[0px_8px_8px_-4px_rgba(0,_0,_0,_0.12),_0px_3px_2px_-1px_rgba(0,_0,_0,_0.08)] rounded-[99px] bg-white border-gainsboro-400 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-center py-2 px-4 z-[0]">
                <div className="relative tracking-[-0.04em] leading-[130%]">FAQs</div>
              </div>
              <b className="w-[644.3px] relative text-5xl tracking-[-0.02em] leading-[110%] inline-block font-plus-jakarta-sans z-[1]">
                <span className="whitespace-pre-wrap">{`Curated         `}</span>
                <span className="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Questions
                </span>
              </b>
              <div className="w-[490.9px] relative text-lg tracking-[-0.04em] leading-[150%] text-gray-1400 inline-block z-[2]">
                {" "}
                Book a call or reach out anytime, we’re here to help.
              </div>
              <div className="w-[52.4px] absolute !!m-[0 important] top-[64.28px] left-[344.78px] rounded-2xl h-[52.4px] shrink-0 overflow-hidden flex items-center justify-center z-[3]">
                <Image
                  className="w-full h-full overflow-hidden shrink-0 object-cover absolute left-[0px] top-[26px] [transform:scale(1.86)]"
                  width={52.4}
                  height={52.4}
                  sizes="100vw"
                  alt=""
                  src="/assets/hero/Layer_1.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-8 text-left">
              <div className="flex-1 flex flex-col items-start justify-start gap-4">
                <div className="self-stretch shadow-[0px_6px_4px_rgba(255,_255,_255,_0.36)_inset,_0px_2px_2px_-1px_rgba(11,_32,_103,_0.05),_0px_0px_30px_-4px_rgba(0,_0,_0,_0.03)] rounded-2xl bg-white border-white border-solid border-[1px] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14.5px]">
                  <div className="self-stretch flex flex-row items-center justify-center gap-2.5">
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium">
                      How do I sign up?
                    </div>
                    <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0">
                      <Image
                        className="absolute h-[58.33%] w-full top-[20.83%] right-[20.83%] bottom-[20.83%] left-[20.83%] max-w-full overflow-hidden max-h-full"
                        width={14}
                        height={14}
                        sizes="100vw"
                        alt=""
                        src="/assets/hero/Layer_1.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[540px] relative tracking-[-0.03em] leading-[150%] text-gray-700 hidden">
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_6px_4px_rgba(255,_255,_255,_0.36)_inset,_0px_2px_2px_-1px_rgba(11,_32,_103,_0.05),_0px_0px_30px_-4px_rgba(0,_0,_0,_0.03)] rounded-2xl bg-white border-white border-solid border-[1px] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14.5px]">
                  <div className="self-stretch flex flex-row items-center justify-center gap-2.5">
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium">
                      How much does Apptics cost?
                    </div>
                    <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0">
                      <Image
                        className="absolute h-[58.33%] w-full top-[20.83%] right-[20.83%] bottom-[20.83%] left-[20.83%] max-w-full overflow-hidden max-h-full"
                        width={14}
                        height={14}
                        sizes="100vw"
                        alt=""
                        src="/assets/hero/Layer_1.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[540px] relative tracking-[-0.03em] leading-[150%] text-gray-700 hidden">
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_6px_4px_rgba(255,_255,_255,_0.36)_inset,_0px_2px_2px_-1px_rgba(11,_32,_103,_0.05),_0px_0px_30px_-4px_rgba(0,_0,_0,_0.03)] rounded-2xl bg-white border-white border-solid border-[1px] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14.5px]">
                  <div className="self-stretch flex flex-row items-center justify-center gap-2.5">
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium">{`What verticals/niches are supported? `}</div>
                    <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0">
                      <Image
                        className="absolute h-[58.33%] w-full top-[20.83%] right-[20.83%] bottom-[20.83%] left-[20.83%] max-w-full overflow-hidden max-h-full"
                        width={14}
                        height={14}
                        sizes="100vw"
                        alt=""
                        src="/assets/hero/Layer_1.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[540px] relative tracking-[-0.03em] leading-[150%] text-gray-700 hidden">
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_6px_4px_rgba(255,_255,_255,_0.36)_inset,_0px_2px_2px_-1px_rgba(11,_32,_103,_0.05),_0px_0px_30px_-4px_rgba(0,_0,_0,_0.03)] rounded-2xl bg-white border-white border-solid border-[1px] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14.5px]">
                  <div className="self-stretch flex flex-row items-center justify-center gap-2.5">
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium">
                      How does Apptics work with my business?
                    </div>
                    <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0">
                      <Image
                        className="absolute h-[58.33%] w-full top-[20.83%] right-[20.83%] bottom-[20.83%] left-[20.83%] max-w-full overflow-hidden max-h-full"
                        width={14}
                        height={14}
                        sizes="100vw"
                        alt=""
                        src="/assets/hero/Layer_1.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[540px] relative tracking-[-0.03em] leading-[150%] text-gray-700 hidden">
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_6px_4px_rgba(255,_255,_255,_0.36)_inset,_0px_2px_2px_-1px_rgba(11,_32,_103,_0.05),_0px_0px_30px_-4px_rgba(0,_0,_0,_0.03)] rounded-2xl bg-white border-white border-solid border-[1px] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14.5px]">
                  <div className="self-stretch flex flex-row items-center justify-center gap-2.5">
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium">
                      What if i don’t like the designs or strategies
                    </div>
                    <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0">
                      <Image
                        className="absolute h-[58.33%] w-full top-[20.83%] right-[20.83%] bottom-[20.83%] left-[20.83%] max-w-full overflow-hidden max-h-full"
                        width={14}
                        height={14}
                        sizes="100vw"
                        alt=""
                        src="/assets/hero/Layer_1.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[540px] relative tracking-[-0.03em] leading-[150%] text-gray-700 hidden">
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_6px_4px_rgba(255,_255,_255,_0.36)_inset,_0px_2px_2px_-1px_rgba(11,_32,_103,_0.05),_0px_0px_30px_-4px_rgba(0,_0,_0,_0.03)] rounded-2xl bg-white border-white border-solid border-[1px] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14.5px]">
                  <div className="self-stretch flex flex-row items-center justify-center gap-2.5">
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium">
                      Can I see an example of the Apptics work?
                    </div>
                    <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0">
                      <Image
                        className="absolute h-[58.33%] w-full top-[20.83%] right-[20.83%] bottom-[20.83%] left-[20.83%] max-w-full overflow-hidden max-h-full"
                        width={14}
                        height={14}
                        sizes="100vw"
                        alt=""
                        src="/assets/hero/Layer_1.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[540px] relative tracking-[-0.03em] leading-[150%] text-gray-700 hidden">
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-4">
                <div className="self-stretch shadow-[0px_6px_4px_rgba(255,_255,_255,_0.36)_inset,_0px_2px_2px_-1px_rgba(11,_32,_103,_0.05),_0px_0px_30px_-4px_rgba(0,_0,_0,_0.03)] rounded-2xl bg-white border-white border-solid border-[1px] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14.5px]">
                  <div className="self-stretch flex flex-row items-center justify-center gap-2.5">
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium">{`What makes Apptics different? `}</div>
                    <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0">
                      <Image
                        className="absolute h-[58.33%] w-full top-[20.83%] right-[20.83%] bottom-[20.83%] left-[20.83%] max-w-full overflow-hidden max-h-full"
                        width={14}
                        height={14}
                        sizes="100vw"
                        alt=""
                        src="/assets/hero/Layer_1.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[540px] relative tracking-[-0.03em] leading-[150%] text-gray-700 hidden">
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_6px_4px_rgba(255,_255,_255,_0.36)_inset,_0px_2px_2px_-1px_rgba(11,_32,_103,_0.05),_0px_0px_30px_-4px_rgba(0,_0,_0,_0.03)] rounded-2xl bg-white border-white border-solid border-[1px] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14.5px]">
                  <div className="self-stretch flex flex-row items-center justify-center gap-2.5">
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium">
                      How long does it take to design a website?
                    </div>
                    <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0">
                      <Image
                        className="absolute h-[58.33%] w-full top-[20.83%] right-[20.83%] bottom-[20.83%] left-[20.83%] max-w-full overflow-hidden max-h-full"
                        width={14}
                        height={14}
                        sizes="100vw"
                        alt=""
                        src="/assets/hero/Layer_1.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[540px] relative tracking-[-0.03em] leading-[150%] text-gray-700 hidden">
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_6px_4px_rgba(255,_255,_255,_0.36)_inset,_0px_2px_2px_-1px_rgba(11,_32,_103,_0.05),_0px_0px_30px_-4px_rgba(0,_0,_0,_0.03)] rounded-2xl bg-white border-white border-solid border-[1px] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14.5px]">
                  <div className="self-stretch flex flex-row items-center justify-center gap-2.5">
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium">
                      Is Apptics compliant and secure?
                    </div>
                    <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0">
                      <Image
                        className="absolute h-[58.33%] w-full top-[20.83%] right-[20.83%] bottom-[20.83%] left-[20.83%] max-w-full overflow-hidden max-h-full"
                        width={14}
                        height={14}
                        sizes="100vw"
                        alt=""
                        src="/assets/hero/Layer_1.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[540px] relative tracking-[-0.03em] leading-[150%] text-gray-700 hidden">
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_6px_4px_rgba(255,_255,_255,_0.36)_inset,_0px_2px_2px_-1px_rgba(11,_32,_103,_0.05),_0px_0px_30px_-4px_rgba(0,_0,_0,_0.03)] rounded-2xl bg-white border-white border-solid border-[1px] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14.5px]">
                  <div className="self-stretch flex flex-row items-center justify-center gap-2.5">
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium">
                      What if my competitor is using Apptics?
                    </div>
                    <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0">
                      <Image
                        className="absolute h-[58.33%] w-full top-[20.83%] right-[20.83%] bottom-[20.83%] left-[20.83%] max-w-full overflow-hidden max-h-full"
                        width={14}
                        height={14}
                        sizes="100vw"
                        alt=""
                        src="/assets/hero/Layer_1.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[540px] relative tracking-[-0.03em] leading-[150%] text-gray-700 hidden">
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_6px_4px_rgba(255,_255,_255,_0.36)_inset,_0px_2px_2px_-1px_rgba(11,_32,_103,_0.05),_0px_0px_30px_-4px_rgba(0,_0,_0,_0.03)] rounded-2xl bg-white border-white border-solid border-[1px] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14.5px]">
                  <div className="self-stretch flex flex-row items-center justify-center gap-2.5">
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium">
                      I can do this myself, Why do I need Apptics?
                    </div>
                    <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0">
                      <Image
                        className="absolute h-[58.33%] w-full top-[20.83%] right-[20.83%] bottom-[20.83%] left-[20.83%] max-w-full overflow-hidden max-h-full"
                        width={14}
                        height={14}
                        sizes="100vw"
                        alt=""
                        src="/assets/hero/Layer_1.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[540px] relative tracking-[-0.03em] leading-[150%] text-gray-700 hidden">
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_6px_4px_rgba(255,_255,_255,_0.36)_inset,_0px_2px_2px_-1px_rgba(11,_32,_103,_0.05),_0px_0px_30px_-4px_rgba(0,_0,_0,_0.03)] rounded-2xl bg-white border-white border-solid border-[1px] box-border h-[74px] flex flex-col items-center justify-center p-6">
                  <div className="self-stretch flex flex-row items-center justify-center gap-2.5">
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%] font-medium">
                      Coundn’t find an answer you’re looking for?
                    </div>
                    <div className="shadow-[0px_6px_4px_rgba(255,_255,_255,_0.36)_inset,_0px_9.735769271850586px_9.74px_rgba(11,_32,_103,_0.05),_0px_1.3908241987228394px_2.78px_rgba(11,_32,_103,_0.14),_0px_36.24705123901367px_48.33px_rgba(0,_0,_0,_0.03)] rounded-2xl bg-white overflow-hidden flex flex-row items-center justify-center py-3 px-4 gap-[14.4px]">
                      <div className="relative tracking-[-0.03em] font-medium">Contact Us</div>
                      <div className="w-[18px] relative bg-gray-1500 h-[18px]">
                        <Image
                          className="absolute h-[91.67%] w-full top-[4.17%] right-[4.17%] bottom-[4.17%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                          width={16.5}
                          height={16.5}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch relative bg-white h-[1126px] z-[13] text-white font-plus-jakarta-sans">
        <div className="absolute top-[-137px] left-[calc(50%_-_600px)] shadow-[0px_0px_24px_6px_rgba(255,_255,_255,_0.2)_inset,_0px_177px_49px_rgba(24,_26,_104,_0),_0px_113px_45px_rgba(24,_26,_104,_0.02),_0px_64px_38px_rgba(24,_26,_104,_0.07),_0px_28px_28px_rgba(24,_26,_104,_0.11),_0px_7px_16px_rgba(24,_26,_104,_0.13)] rounded-[40px] [background:radial-gradient(50%_50%_at_50%_50%,_#12b2f9_20%,_#514dfa)] w-[1200px] h-[550px] overflow-hidden">
          <Image
            className="absolute top-[calc(50%_-_1045.94px)] left-[calc(50%_-_757.9px)] w-[1515.8px] h-[1515.8px] overflow-hidden opacity-[0.05]"
            width={1515.8}
            height={1515.8}
            sizes="100vw"
            alt=""
            src="/assets/hero/Layer_1.svg"
          />
          <div className="absolute top-[73.76px] left-[141.11px] rounded-[32px] w-[94.8px] h-[94.8px] overflow-hidden flex items-center justify-center">
            <Image
              className="w-full h-full overflow-hidden object-cover absolute left-[0px] top-[48px] [transform:scale(1.497)]"
              width={94.8}
              height={94.8}
              sizes="100vw"
              alt=""
              src="/assets/hero/Layer_1.svg"
            />
          </div>
          <div className="absolute top-[359.75px] left-[93.35px] rounded-[32px] w-[91.3px] h-[91.3px] overflow-hidden flex items-center justify-center">
            <Image
              className="w-full h-full overflow-hidden object-cover absolute left-[0px] top-[49px] [transform:scale(1.536)]"
              width={91.3}
              height={91.3}
              sizes="100vw"
              alt=""
              src="/assets/hero/Layer_1.svg"
            />
          </div>
          <div className="absolute top-[341.32px] left-[983.22px] rounded-[32px] w-[98.1px] h-[98.1px] overflow-hidden flex items-center justify-center">
            <Image
              className="w-full h-full overflow-hidden object-cover absolute left-[0px] top-[47px] [transform:scale(1.444)]"
              width={98.1}
              height={98.1}
              sizes="100vw"
              alt=""
              src="/assets/hero/Layer_1.svg"
            />
          </div>
          <div className="absolute top-[75.01px] left-[934.25px] rounded-[32px] w-[98.3px] h-[98.3px] overflow-hidden flex items-center justify-center">
            <Image
              className="w-full h-full object-cover absolute left-[0px] top-[47px] [transform:scale(1.441)]"
              width={98.3}
              height={98.3}
              sizes="100vw"
              alt=""
              src="/assets/hero/Layer_1.svg"
            />
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
                    src="/assets/hero/Layer_1.svg"
                  />
                </div>
                <b className="relative tracking-[-0.02em] leading-[110%]">Subscriptions</b>
              </div>
            </div>
            <div className="w-[625.8px] relative tracking-[-0.04em] leading-[150%] font-inter inline-block">
              Apptics is an all-in-one platform that helps online merchants manage subscriptions,
              optimize payments, and boost retention with smart analytics and seamless checkouts
            </div>
            <div className="w-[216px] relative shadow-[0px_88px_25px_rgba(0,_0,_0,_0),_0px_56px_23px_rgba(0,_0,_0,_0.03),_0px_32px_19px_rgba(0,_0,_0,_0.1),_0px_14px_14px_rgba(0,_0,_0,_0.17),_0px_4px_8px_rgba(0,_0,_0,_0.2)] h-16 text-left text-2xl">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_8px_4px_rgba(255,_255,_255,_0.16)_inset,_0px_-2px_0px_#000_inset,_0px_1px_1px_#000_inset,_0px_2px_1px_rgba(255,_255,_255,_0.25)_inset] rounded-3xl [background:linear-gradient(88.67deg,_#1d1d1d,_#333_34.6%,_#3d3d3d_76.69%,_#1d1d1d)] flex flex-row items-center justify-center p-2 gap-4">
                <Image
                  className="w-12 relative rounded-2xl max-h-full overflow-hidden shrink-0 object-cover"
                  width={48}
                  height={48}
                  sizes="100vw"
                  alt=""
                  src="/assets/hero/Layer_1.svg"
                />
                <div className="shadow-[0px_2px_2px_rgba(0,_0,_0,_0.48)] flex flex-row items-center justify-start py-0 pl-0 pr-4">
                  <div className="relative tracking-[-0.03em] font-medium">Book a Call</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[493px] left-[calc(50%_-_640px)] w-[1280px] flex flex-col items-center justify-start gap-[68px] text-gray-300 font-inter">
          <div className="self-stretch flex flex-col items-start justify-start gap-10">
            <div className="self-stretch flex flex-row items-center justify-between gap-0">
              <Image
                className="w-[156.3px] relative h-10 object-cover"
                width={156.3}
                height={40}
                sizes="100vw"
                alt=""
                src="/assets/hero/Layer_1.svg"
              />
              <div className="flex flex-row items-center justify-start gap-[22px]">
                <div className="relative tracking-[-0.04em] leading-[150%]">Social Media</div>
                <div className="flex flex-row items-center justify-start gap-2">
                  <Image
                    className="w-10 relative rounded-lg max-h-full overflow-hidden shrink-0"
                    width={40}
                    height={40}
                    sizes="100vw"
                    alt=""
                    src="/assets/hero/Layer_1.svg"
                  />
                  <Image
                    className="w-10 relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover"
                    width={40}
                    height={40}
                    sizes="100vw"
                    alt=""
                    src="/assets/hero/Layer_1.svg"
                  />
                  <div className="w-10 relative rounded-lg bg-white border-gainsboro-300 border-solid border-[1px] box-border h-10 overflow-hidden shrink-0">
                    <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] bg-gray-1500 w-5 h-5 overflow-hidden">
                      <Image
                        className="absolute h-[79%] w-full top-[8.33%] right-[8.17%] bottom-[12.67%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                        width={16.7}
                        height={15.8}
                        sizes="100vw"
                        alt=""
                        src="/assets/hero/Layer_1.svg"
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
                    src="/assets/hero/Layer_1.svg"
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
                  <div className="relative tracking-[-0.04em] leading-[150%]">Custom checkout</div>
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
          <div className="w-[1280px] h-[277.3px] flex flex-col items-center justify-between gap-0 text-left text-sm text-gray-200">
            <Image
              className="self-stretch relative max-w-full overflow-hidden h-[256.3px] shrink-0"
              width={1280}
              height={256.3}
              sizes="100vw"
              alt=""
              src="/assets/hero/Layer_1.svg"
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
    </div>
  );
};

export default DesktopV3;
