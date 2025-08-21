import Image from "next/image";

const Pricing = () => {
  return (
    <>
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
                src="/assets/pricing/Frame 2147227937.svg"
              />
            </div>
          </div>
          <div className="w-[1280px] flex flex-row items-start justify-center gap-10 text-left text-lg text-gray-300 font-plus-jakarta-sans">
            <div className="w-[420px] shadow-[0px_0px_24px_4px_rgba(255,_255,_255,_0.8)_inset] rounded-3xl bg-white border-gainsboro-600 border-solid border-[1px] box-border flex flex-col items-center justify-start py-10 px-0 relative gap-[60px]">
              {/* <div className="w-[420px] absolute !!m-[0 important] top-[0px] left-[0px] rounded-3xl h-[723px] overflow-hidden shrink-0 z-[0]">
                <Image
                  className="w-full h-full object-cover absolute [transform:scale(1)]"
                  width={674.3}
                  height={468}
                  sizes="100vw"
                  alt=""
                  src="/assets/pricing/Group 2085663297.svg"
                />
              </div> */}
              <div className="self-stretch flex flex-col items-start justify-start gap-8 z-[1] font-inter">
                <div className="self-stretch h-[180px] flex flex-col items-start justify-start py-0 px-2 box-border">
                  <div className="self-stretch shadow-[0px_1px_2px_rgba(255,_255,_255,_0.8)_inset] [backdrop-filter:blur(8px)] rounded-t-3xl rounded-b-none [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.3),_#fff)] flex flex-col items-start justify-start pt-6 px-5 pb-0 gap-5">
                    <div className="self-stretch flex flex-row items-center justify-center gap-2">
                      {/* <div className="w-[26px] relative h-[26px] overflow-hidden flex items-center justify-center">
                        <Image
                          className="w-full h-full object-cover absolute left-[0px] top-[0px] [transform:scale(1.696)]"
                          width={26}
                          height={26}
                          sizes="100vw"
                          alt=""
                          src="/assets/pricing/Layer_2.svg"
                        />
                      </div> */}
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
                      <div className="flex items-center justify-center absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          width={12}
                          height={12}
                          sizes="100vw"
                          alt=""
                          src="/assets/pricing/check.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%] capitalize">
                      1:1 migration and onboarding
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="flex items-center justify-center absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          width={12}
                          height={12}
                          sizes="100vw"
                          alt=""
                          src="/assets/pricing/check.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%]">
                      Subscription management tools
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="flex items-center justify-center absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          width={12}
                          height={12}
                          sizes="100vw"
                          alt=""
                          src="/assets/pricing/check.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%]">
                      Advanced A/B testing capabilities
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="flex items-center justify-center absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          width={12}
                          height={12}
                          sizes="100vw"
                          alt=""
                          src="/assets/pricing/check.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%]">
                      AI-powered cancellation
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="flex items-center justify-center absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          width={12}
                          height={12}
                          sizes="100vw"
                          alt=""
                          src="/assets/pricing/check.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%]">
                      Churn prevention features
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="flex items-center justify-center absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          width={12}
                          height={12}
                          sizes="100vw"
                          alt=""
                          src="/assets/pricing/check.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%]">
                      Branded digital punch card
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="flex justify-center items-center absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          width={12}
                          height={12}
                          sizes="100vw"
                          alt=""
                          src="/assets/pricing/check.svg"
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
                      src="/assets/pricing/check.svg"
                    />
                    <Image
                      className="w-[34px] relative rounded-[96.17px] max-h-full overflow-hidden shrink-0 object-cover z-[2]"
                      width={34}
                      height={34}
                      sizes="100vw"
                      alt=""
                      src="/assets/pricing/portrait-positive-handsome-blond-man-with-beard-moustache-standing-with-crossed-hands-white-shirt-with-slight-smile-confident-expression 1.png"
                    />
                    <div className="relative tracking-[-0.03em] font-medium [text-shadow:0px_2px_1px_rgba(0,_0,_0,_0.15)] z-[3]">
                      Book a 20-min Call
                    </div>
                  </div>
                </div>
              </div>
              <div className="!!m-[0 important] absolute top-[-17px] right-[23.67px] shadow-[0px_10px_24px_rgba(0,_0,_0,_0.1),_0px_1px_2px_rgba(0,_0,_0,_0.08),_0px_3px_5px_-4px_rgba(0,_0,_0,_0.08)] rounded-[99px] bg-white border-whitesmoke-600 border-solid border-[0.5px] flex flex-row items-center justify-center py-2 px-4 gap-2 z-[3] text-sm">
                <div className="w-7 relative h-[18px] flex items-center justify-center">
                  <Image
                    className="w-full h-full object-cover absolute left-[0px] top-[8px] [transform:scale(1.199)] z-50"
                    width={28}
                    height={18}
                    sizes="100vw"
                    alt=""
                    src="/assets/pricing/Frame 2147228255.svg"
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
                  src="/assets/pricing/check.svg"
                />
                <div className="absolute top-[-309.73px] left-[-120.21px] w-[615.8px] h-[409.8px] overflow-hidden flex items-center justify-center"></div>
              </div>
              <div className="flex flex-col items-start justify-start gap-8 z-[1]">
                <div className="w-[413.3px] h-[180px] flex flex-col items-start justify-start py-0 px-2 box-border">
                  <div className="self-stretch shadow-[0px_1px_2px_rgba(255,_255,_255,_0.8)_inset] [backdrop-filter:blur(8px)] rounded-t-3xl rounded-b-none [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.3),_#fff)] flex flex-col items-start justify-start pt-6 px-5 pb-0 gap-5">
                    <div className="self-stretch flex flex-row items-center justify-center gap-2.5">
                      {/* <div className="w-[26px] relative h-[26px] overflow-hidden flex items-center justify-center">
                        <Image
                          className="w-full h-full object-cover absolute left-[0px] top-[9px] [transform:scale(1.696)]"
                          width={26}
                          height={26}
                          sizes="100vw"
                          alt=""
                          src="/assets/pricing/Layer_1.svg"
                        />
                      </div> */}
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
                      <div className="absolute flex items-center justify-center top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          width={12}
                          height={12}
                          sizes="100vw"
                          alt=""
                          src="/assets/pricing/check.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%]">
                      Every feature we offer in Pro plus
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="flex items-center justify-center absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          width={12}
                          height={12}
                          sizes="100vw"
                          alt=""
                          src="/assets/pricing/check.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%] capitalize">
                      1:1 migration and onboarding
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="flex items-center justify-center absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          width={12}
                          height={12}
                          sizes="100vw"
                          alt=""
                          src="/assets/pricing/check.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%] capitalize">
                      AI-powered cancellation
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="flex items-center justify-center absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          width={12}
                          height={12}
                          sizes="100vw"
                          alt=""
                          src="/assets/pricing/check.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%]">
                      Custom development
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="flex items-center justify-center absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          width={12}
                          height={12}
                          sizes="100vw"
                          alt=""
                          src="/assets/pricing/check.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%]">
                      Personalized growth planning
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="flex items-center justify-center absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          width={12}
                          height={12}
                          sizes="100vw"
                          alt=""
                          src="/assets/pricing/check.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 relative tracking-[-0.03em] leading-[150%]">
                      Early access to new features and tools
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-3">
                    <div className="w-[22px] relative shadow-[0px_9px_6px_-2px_rgba(21,_24,_72,_0.12),_0px_2px_2px_rgba(21,_24,_72,_0.08),_0px_2px_2px_rgba(255,_255,_255,_0.2)_inset,_0px_1px_2px_rgba(255,_255,_255,_0.25)_inset] rounded-[99px] [background:linear-gradient(225.01deg,_#474747,_#000)] h-[22px] overflow-hidden shrink-0">
                      <div className="flex items-center justify-center absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] [filter:drop-shadow(0px_1px_1px_#fff_inset)_drop-shadow(0px_2px_1.5px_rgba(0,_0,_0,_0.16))] w-3.5 h-3.5">
                        <Image
                          width={12}
                          height={12}
                          sizes="100vw"
                          alt=""
                          src="/assets/pricing/check.svg"
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
                    <div className="relative tracking-[-0.03em] font-medium">Get Started</div>
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
    </>
  );
};

export default Pricing;
