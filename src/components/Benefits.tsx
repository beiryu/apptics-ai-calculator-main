import Image from "next/image";
import Lottie from "lottie-react";
// Import animation data
import bento1Animation from "../assets/lottie/bento animation 1 (1).json";
import bento2Animation from "../assets/lottie/bento animation 2 (1).json";
import bento3Animation from "../assets/lottie/bento animation 3 (3).json";
import growthAnimation from "../assets/lottie/more growth1 (1).json";

const Benefits = () => {
  return (
    <>
      <div className="self-stretch flex flex-row items-start justify-center z-[4]">
        <div className="w-[1280px] flex flex-col items-center justify-start py-20 px-0 box-border gap-[60px]">
          <div className="w-[780px] flex flex-col items-center justify-start relative gap-6">
            <div className="shadow-[0px_8px_8px_-4px_rgba(0,_0,_0,_0.12),_0px_3px_2px_-1px_rgba(0,_0,_0,_0.08)] rounded-[99px] bg-white border-gainsboro-400 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-center py-2 px-4 z-[0]">
              <div className="relative tracking-[-0.04em] leading-[130%]">Benefits</div>
            </div>
            <b className="w-[644.3px] relative text-5xl tracking-[-0.02em] leading-[110%] inline-block font-plus-jakarta-sans z-[1] text-gray-300">
              <span className="whitespace-pre-wrap">{`Built to Help You         `}</span>
              <span className="text-transparent !bg-clip-text [background:linear-gradient(90.55deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Grow
              </span>
            </b>
            <div className="w-[527.9px] relative text-lg tracking-[-0.04em] leading-[150%] text-gray-200 inline-block z-[2]">
              Sick of payment issues, billing errors, and chargebacks? We handle all the backend
              work payments, disputes, data, and retention.
            </div>
            <div className="w-[51.8px] !!m-[0 important] absolute top-[61.17px] left-[488px] rounded-2xl h-[51.8px] shrink-0 overflow-hidden flex items-center justify-center z-[3]">
              <Image
                className="w-full h-full overflow-hidden shrink-0 object-cover absolute left-[0px] top-[26px] [transform:scale(1.878)]"
                width={51.8}
                height={51.8}
                sizes="100vw"
                alt=""
                src="/assets/benefits/Frame 2147227937.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-5 text-left text-sm text-gray-300">
            <div className="flex-1 flex flex-col items-start justify-start gap-5 text-dimgray">
              <div className="self-stretch rounded-2xl bg-white border-white border-solid border-[0.8px] box-border h-[460px] overflow-hidden shrink-0 flex flex-col items-start justify-end">
                <div className="self-stretch flex-1 relative overflow-hidden">
                  <Lottie
                    animationData={bento2Animation}
                    loop={true}
                    autoplay={true}
                    className="w-full h-auto min-h-full object-cover"
                    style={{
                      aspectRatio: "auto",
                      objectFit: "cover",
                      minWidth: "100%",
                    }}
                  />
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-0 px-5 pb-5 gap-2 text-xl text-gray-300">
                  <div className="self-stretch relative tracking-[-0.01em] leading-[150%] font-semibold">
                    Predictable, Recurring Revenue
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[140%] text-gray-200">
                    Turn one-time buyers into loyal subscribers. we help you to build steady income
                    with minimal effort
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-2xl bg-white h-[460px] overflow-hidden shrink-0 flex flex-col items-center justify-end text-darkslategray-100">
                <div className="w-[390px] flex-1 relative overflow-hidden hidden">
                  <Image
                    className="absolute top-[calc(50%_-_217.5px)] left-[calc(50%_-_217.5px)] w-[435px] h-[435px]"
                    width={435}
                    height={435}
                    sizes="100vw"
                    alt=""
                    src="/assets/hero/Layer_1.svg"
                  />
                  <div className="absolute top-[calc(50%_-_121px)] left-[calc(50%_-_120px)] shadow-[0px_8px_20px_-8px_rgba(34,_68,_113,_0.25),_0px_12px_14px_-3px_rgba(29,_36,_51,_0.08),_0px_2px_2px_rgba(29,_36,_51,_0.08)] rounded-xl bg-white border-whitesmoke-500 border-solid border-[1px] box-border w-60 overflow-hidden flex flex-col items-start justify-start py-[15px] px-[11px] gap-4">
                    <div className="self-stretch flex flex-row items-center justify-between gap-0">
                      <div className="flex flex-row items-start justify-start gap-2">
                        <div className="w-5 relative bg-gray-1500 h-5">
                          <Image
                            className="absolute h-[91.5%] w-full top-[4.17%] right-[4.33%] bottom-[4.33%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                            width={18.3}
                            height={18.3}
                            sizes="100vw"
                            alt=""
                            src="/assets/hero/Layer_1.svg"
                          />
                        </div>
                        <div className="relative tracking-[-0.01em] leading-[140%] font-medium">
                          Your cart
                        </div>
                      </div>
                      <div className="relative tracking-[-0.01em] leading-[140%] text-gray-200">
                        2 Items
                      </div>
                    </div>
                    <Image
                      className="w-[212.1px] relative h-0"
                      width={212.1}
                      height={1}
                      sizes="100vw"
                      alt=""
                      src="/assets/hero/Layer_1.svg"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-3 text-xs">
                      <div className="self-stretch flex flex-row items-center justify-between gap-0">
                        <div className="flex flex-row items-center justify-start gap-2">
                          <Image
                            className="w-11 relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover"
                            width={44}
                            height={44}
                            sizes="100vw"
                            alt=""
                            src="/assets/hero/Layer_1.svg"
                          />
                          <div className="w-[83px] flex flex-col items-start justify-start gap-1">
                            <div className="self-stretch relative tracking-[-0.01em] leading-[120%]">
                              Black T-shirt
                            </div>
                            <div className="rounded-[99px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center py-0.5 px-1.5 text-[10px] text-gray-200">
                              <div className="relative tracking-[-0.01em] leading-[120%]">XL</div>
                            </div>
                          </div>
                        </div>
                        <div className="relative tracking-[-0.01em] leading-[120%] text-gray-200">
                          $60.49
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-between gap-0">
                        <div className="flex flex-row items-center justify-start gap-2">
                          <Image
                            className="w-11 relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover"
                            width={44}
                            height={44}
                            sizes="100vw"
                            alt=""
                            src="/assets/hero/Layer_1.svg"
                          />
                          <div className="w-[97px] flex flex-col items-start justify-start gap-1">
                            <div className="self-stretch relative tracking-[-0.01em] leading-[120%]">
                              White Hoodie
                            </div>
                            <div className="w-6 rounded-[99px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center py-0.5 px-1.5 box-border text-[10px] text-gray-200">
                              <div className="relative tracking-[-0.01em] leading-[120%]">M</div>
                            </div>
                          </div>
                        </div>
                        <div className="relative tracking-[-0.01em] leading-[120%] text-gray-200">
                          $75.99
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg bg-gray-100 border-gainsboro-100 border-dashed border-[1px] box-border h-11 overflow-hidden shrink-0 flex flex-row items-center justify-between py-0 px-4 gap-0 text-[10px]">
                      <div className="w-[137.1px] relative tracking-[-0.01em] leading-[140%] font-medium inline-block shrink-0">
                        Add 1 more item to your cart for FREE SHIPPING!
                      </div>
                      <div className="w-[22px] relative shadow-[0px_20.77777671813965px_6.11px_rgba(39,_41,_73,_0),_0px_13.44444465637207px_4.89px_rgba(39,_41,_73,_0.01),_0px_7.3333330154418945px_4.89px_rgba(39,_41,_73,_0.05),_0px_3.6666665077209473px_3.67px_rgba(39,_41,_73,_0.09),_0px_1.2222222089767456px_1.22px_rgba(39,_41,_73,_0.1)] rounded-[121px] [background:linear-gradient(180deg,_#fff,_#ebebeb)] h-[22px] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_7.33px)] left-[calc(50%_-_7.33px)] bg-gray-1500 w-[14.7px] h-[14.7px] overflow-hidden">
                          <Image
                            className="absolute h-[66.67%] w-full top-[16.63%] right-[16.7%] bottom-[16.7%] left-[16.63%] max-w-full overflow-hidden max-h-full"
                            width={9.8}
                            height={9.8}
                            sizes="100vw"
                            alt=""
                            src="/assets/hero/Layer_1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[-102.5px] left-[-97.17px] w-[589.4px] h-[521.2px] overflow-hidden flex items-center justify-center">
                    <Image
                      className="w-full h-full object-cover absolute left-[0px] top-[0px] [transform:scale(1.17)]"
                      width={589.4}
                      height={521.2}
                      sizes="100vw"
                      alt=""
                      src="/assets/hero/Layer_1.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex-1 relative overflow-hidden">
                  <Image
                    className="absolute top-[calc(50%_-_218px)] left-[calc(50%_-_217.15px)] w-[435px] h-[435px] hidden"
                    width={435}
                    height={435}
                    sizes="100vw"
                    alt=""
                    src="/assets/hero/Layer_1.svg"
                  />
                  <Image
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-105 w-[521.8px] h-[521.8px]"
                    width={521.8}
                    height={521.8}
                    sizes="100vw"
                    alt=""
                    src="/assets/benefits/Group 2085663268.svg"
                  />
                  {/* Vector overlay */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                    <Image
                      src="/assets/features/Vector 1194223260.svg"
                      alt=""
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_130.5px)] left-[calc(50%_-_119.65px)] shadow-[0px_8px_20px_-8px_rgba(34,_68,_113,_0.25),_0px_12px_14px_-3px_rgba(29,_36,_51,_0.08),_0px_2px_2px_rgba(29,_36,_51,_0.08)] rounded-xl bg-white border-whitesmoke-500 border-solid border-[1px] box-border w-60 overflow-hidden flex flex-col items-start justify-start py-[15px] px-[11px] gap-6">
                    <div className="self-stretch flex flex-col items-start justify-start gap-4">
                      <div className="self-stretch flex flex-row items-center justify-between gap-0">
                        <div className="flex flex-row items-start justify-start gap-2">
                          <div className="w-5 relative bg-gray-1500 h-5">
                            <Image
                              className="absolute h-[91.5%] w-full top-[4.17%] right-[4.33%] bottom-[4.33%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                              width={18.3}
                              height={18.3}
                              sizes="100vw"
                              alt=""
                              src="/assets/benefits/shopping-cart1 (1).svg"
                            />
                          </div>
                          <div className="relative tracking-[-0.01em] leading-[140%] font-medium">
                            Your cart
                          </div>
                        </div>
                        <div className="relative tracking-[-0.01em] leading-[140%] text-gray-200">
                          2 Items
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-4 text-xs">
                      <div className="self-stretch flex flex-row items-center justify-between gap-0">
                        <div className="flex flex-row items-center justify-start gap-2">
                          <Image
                            className="w-11 bg-whitesmoke-200 relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover"
                            width={44}
                            height={44}
                            sizes="100vw"
                            alt=""
                            src="/assets/benefits/18086 1.png"
                          />
                          <div className="w-[83px] flex flex-col items-start justify-start gap-1">
                            <div className="self-stretch relative tracking-[-0.01em] leading-[120%]">
                              Black T-shirt
                            </div>
                            <div className="rounded-[99px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center py-0.5 px-1.5 text-[10px] text-gray-200">
                              <div className="relative tracking-[-0.01em] leading-[120%]">XL</div>
                            </div>
                          </div>
                        </div>
                        <div className="relative tracking-[-0.01em] leading-[120%] text-gray-200">
                          $60.49
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-between gap-0">
                        <div className="flex flex-row items-center justify-start gap-2">
                          <Image
                            className="bg-whitesmoke-200 w-11 relative rounded-lg max-h-full overflow-hidden shrink-0 object-cover"
                            width={44}
                            height={44}
                            sizes="100vw"
                            alt=""
                            src="/assets/benefits/Frame 2147227994.png"
                          />
                          <div className="w-[97px] flex flex-col items-start justify-start gap-1">
                            <div className="self-stretch relative tracking-[-0.01em] leading-[120%]">
                              White Hoodie
                            </div>
                            <div className="w-6 rounded-[99px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center py-0.5 px-1.5 box-border text-[10px] text-gray-200">
                              <div className="relative tracking-[-0.01em] leading-[120%]">M</div>
                            </div>
                          </div>
                        </div>
                        <div className="relative tracking-[-0.01em] leading-[120%] text-gray-200">
                          $75.99
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg bg-gray-100 border-gainsboro-100 border-dashed border-[1px] box-border h-[50px] overflow-hidden shrink-0 flex flex-row items-center justify-between py-0 px-4 gap-0 text-[10px]">
                        <div className="w-[137.1px] relative tracking-[-0.01em] leading-[140%] font-medium inline-block shrink-0">
                          Add 1 more item to your cart for FREE SHIPPING!
                        </div>
                        <div className="w-[22px] relative shadow-[0px_20.77777671813965px_6.11px_rgba(39,_41,_73,_0),_0px_13.44444465637207px_4.89px_rgba(39,_41,_73,_0.01),_0px_7.3333330154418945px_4.89px_rgba(39,_41,_73,_0.05),_0px_3.6666665077209473px_3.67px_rgba(39,_41,_73,_0.09),_0px_1.2222222089767456px_1.22px_rgba(39,_41,_73,_0.1)] rounded-[121px] [background:linear-gradient(180deg,_#fff,_#ebebeb)] h-[22px] overflow-hidden shrink-0 flex items-center justify-center">
                          <div className="bg-gray-1500 w-[14.7px] h-[14.7px] overflow-hidden flex items-center justify-center">
                            <Image
                              className="w-[14.7px] h-[14.7px] overflow-hidden shrink-0 object-cover"
                              width={14.7}
                              height={14.7}
                              sizes="100vw"
                              alt=""
                              src="/assets/benefits/plus.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-0 px-5 pb-5 gap-2 text-xl text-gray-300">
                  <div className="self-stretch relative tracking-[-0.01em] leading-[150%] font-semibold">
                    2X Your Average Order Value
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[140%] text-gray-200">
                    Our custom checkout flows are optimized to convert more visitors and increase
                    average order value through smart upsells.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-5">
              <div className="self-stretch rounded-2xl bg-white h-[300px] flex flex-col items-start justify-end text-black">
                <div className="self-stretch flex-1 relative overflow-hidden">
                  <div className="absolute top-[58px] left-[48.36px] w-[316.6px] h-[124.8px]">
                    <div className="absolute top-[31.4px] left-[0px] shadow-[0px_12px_0px_rgba(255,_255,_255,_0.6)_inset] rounded-[76.76px] [background:linear-gradient(180deg,_#28db89,_#24b271)] w-[15.5px] h-[48.1px]" />
                    <div className="absolute top-[34.89px] left-[316.61px] shadow-[0px_12px_0px_rgba(255,_255,_255,_0.6)_inset] rounded-[76.76px] [background:linear-gradient(180deg,_#28db89,_#24b271)] w-[15.5px] h-[51.2px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
                    <div className="absolute top-[34.89px] left-[21.51px] shadow-[0px_12px_0px_rgba(255,_255,_255,_0.6)_inset] rounded-[76.76px] [background:linear-gradient(180deg,_#28db89,_#24b271)] w-[15.5px] h-[41.1px]" />
                    <div className="absolute top-[49.62px] left-[295.1px] shadow-[0px_12px_0px_rgba(255,_255,_255,_0.6)_inset] rounded-[76.76px] [background:linear-gradient(180deg,_#28db89,_#24b271)] w-[15.5px] h-[32.6px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
                    <div className="absolute top-[20.93px] left-[43.01px] shadow-[0px_12px_0px_rgba(255,_255,_255,_0.6)_inset] rounded-[76.76px] [background:linear-gradient(180deg,_#28db89,_#24b271)] w-[15.5px] h-[69px]" />
                    <div className="absolute top-[27.14px] left-[273.6px] shadow-[0px_12px_0px_rgba(255,_255,_255,_0.6)_inset] rounded-[76.76px] [background:linear-gradient(180deg,_#28db89,_#24b271)] w-[15.5px] h-[69px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
                    <div className="absolute top-[3.1px] left-[64.52px] shadow-[0px_12px_0px_rgba(255,_255,_255,_0.6)_inset] rounded-[76.76px] [background:linear-gradient(180deg,_#28db89,_#24b271)] w-[15.5px] h-[83.7px]" />
                    <div className="absolute top-[10.08px] left-[86.03px] shadow-[0px_12px_0px_rgba(255,_255,_255,_0.6)_inset] rounded-[76.76px] [background:linear-gradient(180deg,_#28db89,_#24b271)] w-[15.5px] h-[65.9px]" />
                    <div className="absolute top-[3.1px] left-[107.54px] shadow-[0px_12px_0px_rgba(255,_255,_255,_0.6)_inset] rounded-[76.76px] [background:linear-gradient(180deg,_#28db89,_#24b271)] w-[15.5px] h-[79.1px]" />
                    <div className="absolute top-[27.14px] left-[129.04px] shadow-[0px_12px_0px_rgba(255,_255,_255,_0.6)_inset] rounded-[76.76px] [background:linear-gradient(180deg,_#28db89,_#24b271)] w-[15.5px] h-[67.5px]" />
                    <div className="absolute top-[46.52px] left-[150.55px] shadow-[0px_12px_0px_rgba(255,_255,_255,_0.6)_inset] rounded-[76.76px] [background:linear-gradient(180deg,_#28db89,_#24b271)] w-[15.5px] h-[57.4px]" />
                    <div className="absolute top-[27.14px] left-[172.06px] shadow-[0px_12px_0px_rgba(255,_255,_255,_0.6)_inset] rounded-[76.76px] [background:linear-gradient(180deg,_#28db89,_#24b271)] w-[15.5px] h-[84.5px]" />
                    <div className="absolute top-[10.08px] left-[193.57px] shadow-[0px_12px_0px_rgba(255,_255,_255,_0.6)_inset] rounded-[76.76px] [background:linear-gradient(180deg,_#28db89,_#24b271)] w-[15.5px] h-[95.4px]" />
                    <div className="absolute top-[37.22px] left-[215.07px] shadow-[0px_12px_0px_rgba(255,_255,_255,_0.6)_inset] rounded-[76.76px] [background:linear-gradient(180deg,_#28db89,_#24b271)] w-[15.5px] h-[87.6px]" />
                    <div className="absolute top-[0px] left-[236.58px] shadow-[0px_12px_0px_rgba(255,_255,_255,_0.6)_inset] rounded-[76.76px] [background:linear-gradient(180deg,_#28db89,_#24b271)] w-[15.5px] h-[105.4px]" />
                  </div>
                  <div className="absolute top-[20px] right-[325.94px] rounded-xl border-whitesmoke-800 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-start py-2 px-3 gap-2">
                    <div className="w-[7.4px] relative h-[7.4px] overflow-hidden flex items-center justify-center">
                      <Image
                        className="w-full h-full object-cover absolute left-[0px] top-[0px] [transform:scale(2.624)]"
                        width={7.4}
                        height={7.4}
                        sizes="100vw"
                        alt=""
                        src="/assets/benefits/Group 2085663285.svg"
                      />
                    </div>
                    <div className="relative tracking-[-0.01em]">Live</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-5 pb-5 gap-2 text-xl text-gray-300">
                  <div className="self-stretch relative tracking-[-0.01em] leading-[150%] font-semibold">
                    Real-Time Revenue Insights
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[140%] text-gray-200">
                    Track performance, revenue growth in one simple dashboard.
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xl bg-white h-[300px] overflow-hidden shrink-0 flex flex-col items-center justify-end text-lg">
                <div className="self-stretch flex-1 relative overflow-hidden flex items-center justify-center">
                  <Lottie
                    animationData={growthAnimation}
                    loop={true}
                    autoplay={true}
                    className="w-full h-auto min-h-full object-cover"
                    style={{
                      aspectRatio: "auto",
                      objectFit: "cover",
                      minWidth: "100%",
                    }}
                  />
                  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                    <Image
                      src="/assets/features/Vector 1194223260 (1).svg"
                      alt=""
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-5 pb-5 gap-2">
                  <div className="self-stretch relative tracking-[-0.01em] leading-[150%] font-semibold">
                    Less Busywork, More Growth
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[140%] text-gray-200">
                    We automate billing, renewals, and decline recovery so you can focus on scaling
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xl bg-white h-[300px] overflow-hidden shrink-0 flex flex-col items-center justify-end text-xl relative">
                <div className="self-stretch flex-1 relative overflow-hidden">
                  <Lottie
                    animationData={bento3Animation}
                    loop={true}
                    autoplay={true}
                    className="w-full h-full"
                  />
                  {/* SVG Overlay only over the animation */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                    <Image
                      src="/assets/features/Vector 1194223260.svg"
                      alt=""
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-5 pb-5 gap-2">
                  <div className="self-stretch relative tracking-[-0.01em] leading-[150%] font-semibold">
                    Fast Setup, No Headaches
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[140%] text-gray-200">
                    Get launched in days, not months. We handle integration and setup so you can
                    start earning
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-start gap-5 text-xs">
              <div className="self-stretch rounded-2xl bg-white h-[460px] overflow-hidden shrink-0 flex flex-col items-center justify-between">
                <div className="self-stretch flex-1 relative overflow-hidden flex items-center justify-center">
                  <Lottie
                    animationData={bento1Animation}
                    loop={true}
                    autoplay={true}
                    className="w-full h-auto min-h-full object-cover"
                    style={{
                      aspectRatio: "auto",
                      objectFit: "cover",
                      minWidth: "100%",
                    }}
                  />
                  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                    <Image
                      src="/assets/features/Vector 1194223260.svg"
                      alt=""
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-0 px-5 pb-5 gap-2 text-xl">
                  <div className="self-stretch relative tracking-[-0.01em] leading-[150%] font-semibold">
                    Fewer Failed Payments
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[140%] text-gray-200">
                    We recovers failed transactions automatically with smart retries and updates,
                    helping you keep more revenue
                  </div>
                </div>
              </div>
              <div className="self-stretch relative rounded-3xl bg-white h-[460px] overflow-hidden shrink-0 text-base">
                <div className="absolute top-0 left-0 w-full h-[310px] overflow-hidden flex items-center justify-center z-0">
                  <Image
                    className="w-full h-full object-cover scale-110"
                    width={659.9}
                    height={525.2}
                    sizes="100vw"
                    alt=""
                    src="/assets/benefits/Group 2085663289.svg"
                  />
                </div>
                <div className="absolute bottom-[0px] left-[0px] w-[390px] flex flex-col items-start justify-start p-5 box-border gap-4 z-10">
                  <div className="self-stretch relative text-2xl tracking-[-0.02em] leading-[130%] capitalize font-semibold">
                    Enhance Profits from your Shopify via Memberships
                  </div>
                  <div className="self-stretch relative tracking-[-0.01em] leading-[140%] text-gray-200 whitespace-pre-wrap">{`Our platform is built for highly driven and focused entrepreneurs who want to achieve conversion &  retention rates which will shoot their profits to the moon.`}</div>
                  <div className="w-[191px] relative rounded-full shadow-[0px_14px_14px_rgba(0,_0,_0,_0.17),_0px_4px_8px_rgba(0,_0,_0,_0.2)] h-[50px] text-white">
                    <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_8px_4px_rgba(255,_255,_255,_0.16)_inset,_0px_-2px_0px_#000_inset,_0px_1px_1px_#000_inset,_0px_2px_1px_rgba(255,_255,_255,_0.25)_inset] rounded-[20px] [background:linear-gradient(88.67deg,_#1d1d1d,_#333_34.6%,_#3d3d3d_76.69%,_#1d1d1d)] h-[50px] overflow-hidden flex flex-row items-center justify-center py-3 px-6 box-border">
                      <div className="flex flex-row items-center justify-start gap-3">
                        <div className="relative tracking-[-0.03em] font-medium">
                          Book a call now
                        </div>
                        <div className="w-[18px] relative bg-gray-1500 h-[18px]">
                          <Image
                            className="absolute h-[91.67%] w-full top-[4.17%] right-[8.33%] bottom-[4.17%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                            width={15}
                            height={16.5}
                            sizes="100vw"
                            alt=""
                            src="/assets/benefits/calendar.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[25px] left-[20px] rounded-[99px] bg-gray-1200 border-gray-1100 border-solid border-[0.6px] box-border w-[58px] h-[58px] overflow-hidden z-10">
                  <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_15px)] bg-gray-1500 w-[30px] h-[30px] overflow-hidden">
                    <Image
                      className="absolute h-[91.67%] w-full top-[4.17%] right-[8.33%] bottom-[4.17%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                      width={25}
                      height={27.5}
                      sizes="100vw"
                      alt=""
                      src="/assets/benefits/zap.svg"
                    />
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

export default Benefits;
