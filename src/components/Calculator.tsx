import Image from "next/image";

const Calculator = () => {
  return (
    <>
      <div className="self-stretch rounded-[60px] flex flex-col items-center justify-start z-[8]">
        <div className="w-[1200px] flex flex-col items-center justify-start py-20 px-0 box-border gap-[60px]">
          <div className="w-[780px] flex flex-col items-center justify-start relative gap-6">
            <div className="shadow-[0px_8px_8px_-4px_rgba(0,_0,_0,_0.12),_0px_3px_2px_-1px_rgba(0,_0,_0,_0.08)] rounded-[99px] bg-white border-gainsboro-400 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-center py-2 px-4 z-[0]">
              <div className="relative tracking-[-0.04em] leading-[130%]">{`Calculator ROI `}</div>
            </div>
            <b className="w-[644.3px] relative text-[44px] tracking-[-0.02em] leading-[130%] capitalize inline-block font-plus-jakarta-sans z-[1] text-gray-300">
              <p className="m-0">Calculate how Apptics could</p>
              <p className="m-0">
                <span className="whitespace-pre-wrap">{` transform         `}</span>
                <span className="text-transparent !bg-clip-text [background:linear-gradient(90.31deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  your business
                </span>
              </p>
            </b>
            <div className="w-[56.2px] absolute !!m-[0 important] top-[118.92px] left-[330.24px] rounded-2xl h-[56.2px] shrink-0 overflow-hidden flex items-center justify-center z-[2]">
              <Image
                className="w-full h-full overflow-hidden shrink-0 object-cover absolute left-[0px] top-[26px] [transform:scale(1.757)]"
                width={56.2}
                height={56.2}
                sizes="100vw"
                alt=""
                src="/assets/calculator/Frame 2147227937.svg"
              />
            </div>
          </div>
          <div className="shadow-[0px_0px_8px_4px_rgba(255,_255,_255,_0.69)_inset,_0px_0px_24px_8px_rgba(255,_255,_255,_0.8)_inset] rounded-[32px] bg-white border-white border-solid border-[1px] overflow-hidden flex flex-col items-start justify-start p-5 relative gap-2.5 text-left text-xl text-gray-300 font-plus-jakarta-sans">
            <div className="w-[972.6px] absolute !!m-[0 important] bottom-[-269.98px] left-[330.17px] h-[440.1px] opacity-[0.1] overflow-hidden flex items-center justify-center z-[0]">
              <Image
                className="w-full h-full object-cover absolute left-[0px] top-[0px] [transform:scale(1.275)]"
                width={972.6}
                height={440.1}
                sizes="100vw"
                alt=""
                src="/assets/hero/Layer_1.svg"
              />
            </div>
            <div className="w-[962.9px] absolute !!m-[0 important] top-[208.84px] left-[-546.96px] h-[747.7px] overflow-hidden flex items-center justify-center z-[1]">
              <Image
                className="w-full h-full object-cover absolute left-[75px] top-[0px] [transform:scale(1.131)]"
                width={962.9}
                height={747.7}
                sizes="100vw"
                alt=""
                src="/assets/calculator/Group 2085663289.svg"
              />
            </div>
            <div className="w-[962.9px] absolute !!m-[0 important] top-[-231.16px] left-[767.07px] h-[747.7px] overflow-hidden flex items-center justify-center z-[2]">
              <Image
                className="w-full h-full object-cover absolute left-[0px] top-[30px] [transform:scale(1.081)]"
                width={962.9}
                height={747.7}
                sizes="100vw"
                alt=""
                src="/assets/calculator/Group 2085663290.svg"
              />
            </div>
            <div className="w-[1020px] rounded-2xl flex flex-row items-start justify-center gap-2.5 z-[3]">
              <div className="w-[400px] shadow-[0px_6px_4px_rgba(0,_0,_0,_0.08),_0px_0px_12px_5px_rgba(255,_255,_255,_0.5)_inset] rounded-[20px] bg-white border-aliceblue-300 border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-center p-5">
                <div className="self-stretch flex flex-col items-start justify-start gap-6">
                  <div className="self-stretch flex flex-row items-center justify-start gap-4">
                    <div className="w-[42px] relative rounded-xl h-[42px] shrink-0 overflow-hidden flex items-center justify-center">
                      <Image
                        className="w-full h-full overflow-hidden shrink-0 object-cover absolute left-[0px] top-[6px] [transform:scale(1.381)]"
                        width={42}
                        height={42}
                        sizes="100vw"
                        alt=""
                        src="/assets/hero/Layer_1.svg"
                      />
                    </div>
                    <div className="relative leading-[110%] font-semibold">ROI Calculator</div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-4 text-sm text-gray-200">
                    <div className="self-stretch rounded-xl flex flex-col items-start justify-start gap-2">
                      <div className="self-stretch relative tracking-[-0.01em] leading-[110%] capitalize">
                        Customer per month
                      </div>
                      <div className="self-stretch shadow-[0px_8px_4px_-3px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-gainsboro-500 border-solid border-[0.5px] overflow-hidden flex flex-row items-center justify-between p-3.5 gap-0 text-center text-base text-gray-300 font-inter">
                        <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                          5,000
                        </div>
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
                      </div>
                    </div>
                    <div className="self-stretch rounded-xl flex flex-col items-start justify-start gap-2 font-inter">
                      <div className="self-stretch relative tracking-[-0.01em] leading-[110%] capitalize">
                        Average oder value
                      </div>
                      <div className="self-stretch shadow-[0px_8px_4px_-3px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-gainsboro-500 border-solid border-[0.5px] overflow-hidden flex flex-row items-center justify-between p-3.5 gap-0 text-center text-base text-gray-300">
                        <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                          $50
                        </div>
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
                      </div>
                    </div>
                    <div className="self-stretch rounded-xl flex flex-col items-start justify-start gap-2 font-inter">
                      <div className="self-stretch relative tracking-[-0.01em] leading-[110%] capitalize">
                        Profit margin (%)
                      </div>
                      <div className="self-stretch shadow-[0px_8px_4px_-3px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-gainsboro-500 border-solid border-[0.5px] overflow-hidden flex flex-row items-center justify-between p-3.5 gap-0 text-center text-base text-gray-300">
                        <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                          10%
                        </div>
                        <div className="w-5 relative bg-gray-1500 h-5 overflow-hidden shrink-0">
                          <Image
                            className="absolute h-[91.5%] w-full top-[4.17%] right-[4.33%] bottom-[4.33%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                            width={18.3}
                            height={18.3}
                            sizes="100vw"
                            alt=""
                            src="/assets/hero/Layer_1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch shadow-[0px_8px_4px_-3px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-gainsboro-500 border-solid border-[0.5px] box-border h-[154px] flex flex-col items-center justify-between p-3.5 gap-0 text-base text-gray-300">
                      <div className="self-stretch relative tracking-[-0.02em] leading-[110%] capitalize font-semibold">
                        Monthly subscription value
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-4 text-xl font-inter">
                        <div className="self-stretch rounded-xl border-gainsboro-300 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-between py-3 px-6 gap-0">
                          <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                            $60
                          </div>
                          <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0">
                            <Image
                              className="absolute h-[91.67%] w-full top-[4.17%] right-[4.17%] bottom-[4.17%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                              width={22}
                              height={22}
                              sizes="100vw"
                              alt=""
                              src="/assets/hero/Layer_1.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch h-2 flex flex-col items-start justify-start relative gap-2.5">
                          <div className="self-stretch relative shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08)_inset] rounded-[99px] bg-whitesmoke-400 h-2 overflow-hidden shrink-0 z-[0]">
                            <div className="absolute top-[calc(50%_-_4px)] left-[0px] [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] w-[61.6px] h-2" />
                          </div>
                          <div className="w-3.5 absolute !!m-[0 important] top-[calc(50%_-_7px)] left-[53px] shadow-[-1px_1px_2px_rgba(0,_0,_0,_0.2)] rounded-[50%] bg-white border-whitesmoke-200 border-solid border-[0.5px] box-border h-3.5 z-[1]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-2.5 text-lg">
                <div className="self-stretch flex-1 shadow-[0px_6px_4px_rgba(0,_0,_0,_0.08),_0px_0px_12px_5px_rgba(255,_255,_255,_0.5)_inset] rounded-[20px] bg-white border-aliceblue-300 border-solid border-[1px] overflow-hidden flex flex-col items-center justify-center p-5 gap-4">
                  <div className="self-stretch flex flex-row items-center justify-start gap-0.5">
                    <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                      Your Business with
                    </div>
                    <div className="flex flex-row items-center justify-start gap-0.5">
                      <div className="w-[26.4px] relative rounded-lg h-[26.4px] shrink-0 overflow-hidden flex items-center justify-center">
                        <Image
                          className="w-full h-full overflow-hidden shrink-0 object-cover absolute left-[0px] top-[13px] [transform:scale(1.848)]"
                          width={26.4}
                          height={26.4}
                          sizes="100vw"
                          alt=""
                          src="/assets/hero/Layer_1.svg"
                        />
                      </div>
                      <div className="relative tracking-[-0.02em] leading-[110%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Apptics
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-3 text-sm text-gray-200 font-inter">
                    <div className="w-[260px] flex flex-col items-center justify-center gap-3">
                      <div className="self-stretch flex flex-row items-center justify-start gap-3">
                        <div className="flex-1 shadow-[0px_6px_4px_-2px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-white border-solid border-[1.5px] flex flex-col items-start justify-start p-4 gap-2">
                          <div className="self-stretch flex flex-row items-center justify-center gap-1.5">
                            <div className="w-4 relative bg-gray-1500 h-4">
                              <Image
                                className="absolute h-[91.88%] w-full top-[4.17%] right-[8.54%] bottom-[3.96%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                                width={13.3}
                                height={14.7}
                                sizes="100vw"
                                alt=""
                                src="/assets/hero/Layer_1.svg"
                              />
                            </div>
                            <div className="flex-1 relative tracking-[-0.02em] leading-[110%] font-medium">
                              Year 01
                            </div>
                          </div>
                          <div className="relative text-lg tracking-[-0.02em] leading-[110%] font-semibold font-plus-jakarta-sans text-gray-300 text-center">
                            $40,800
                          </div>
                        </div>
                        <div className="flex-1 shadow-[0px_6px_4px_-2px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-white border-solid border-[1.5px] flex flex-col items-start justify-start p-4 gap-2">
                          <div className="self-stretch flex flex-row items-center justify-center gap-1.5">
                            <div className="w-4 relative bg-gray-1500 h-4">
                              <Image
                                className="absolute h-[91.88%] w-full top-[4.17%] right-[8.54%] bottom-[3.96%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                                width={13.3}
                                height={14.7}
                                sizes="100vw"
                                alt=""
                                src="/assets/hero/Layer_1.svg"
                              />
                            </div>
                            <div className="flex-1 relative tracking-[-0.02em] leading-[110%] font-medium">
                              Year 02
                            </div>
                          </div>
                          <div className="relative text-lg tracking-[-0.02em] leading-[110%] font-semibold font-plus-jakarta-sans text-gray-300 text-center">
                            $96,345
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-3">
                        <div className="flex-1 shadow-[0px_6px_4px_-2px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-white border-solid border-[1.5px] flex flex-col items-start justify-start p-4 gap-2">
                          <div className="self-stretch flex flex-row items-center justify-center gap-1.5">
                            <div className="w-4 relative bg-gray-1500 h-4">
                              <Image
                                className="absolute h-[91.88%] w-full top-[4.17%] right-[8.54%] bottom-[3.96%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                                width={13.3}
                                height={14.7}
                                sizes="100vw"
                                alt=""
                                src="/assets/hero/Layer_1.svg"
                              />
                            </div>
                            <div className="flex-1 relative tracking-[-0.02em] leading-[110%] font-medium">
                              Year 03
                            </div>
                          </div>
                          <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-center text-lg text-gray-300 font-plus-jakarta-sans">
                            <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                              $1115,789
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 shadow-[0px_6px_4px_-2px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-white border-solid border-[1.5px] flex flex-col items-start justify-start p-4 gap-2">
                          <div className="self-stretch flex flex-row items-center justify-center gap-1.5">
                            <div className="w-4 relative bg-gray-1500 h-4">
                              <Image
                                className="absolute h-[91.88%] w-full top-[4.17%] right-[8.54%] bottom-[3.96%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                                width={13.3}
                                height={14.7}
                                sizes="100vw"
                                alt=""
                                src="/assets/hero/Layer_1.svg"
                              />
                            </div>
                            <div className="flex-1 relative tracking-[-0.02em] leading-[110%] font-medium">
                              Year 04
                            </div>
                          </div>
                          <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-center text-lg text-gray-300 font-plus-jakarta-sans">
                            <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                              $148,890
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center gap-3">
                      <div className="self-stretch shadow-[0px_6px_4px_-2px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-white border-solid border-[1.5px] flex flex-col items-start justify-start p-4 gap-2">
                        <div className="self-stretch flex flex-row items-center justify-center gap-2">
                          <div className="w-4 relative bg-gray-1500 h-4">
                            <Image
                              className="absolute h-[66.88%] w-full top-[16.67%] right-[3.96%] bottom-[16.46%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                              width={14.7}
                              height={10.7}
                              sizes="100vw"
                              alt=""
                              src="/assets/hero/Layer_1.svg"
                            />
                          </div>
                          <div className="flex-1 relative tracking-[-0.02em] leading-[110%]">
                            Passive Subscriber Income
                          </div>
                        </div>
                        <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-center text-lg text-gray-300 font-plus-jakarta-sans">
                          <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                            $40,800
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch shadow-[0px_6px_4px_-2px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-white border-solid border-[1.5px] flex flex-col items-start justify-start p-4 gap-2">
                        <div className="self-stretch flex flex-row items-center justify-center gap-2">
                          <div className="w-4 relative bg-gray-1500 h-4">
                            <Image
                              className="absolute h-[91.88%] w-full top-[4.17%] right-[3.96%] bottom-[3.96%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                              width={14.7}
                              height={14.7}
                              sizes="100vw"
                              alt=""
                              src="/assets/hero/Layer_1.svg"
                            />
                          </div>
                          <div className="flex-1 relative tracking-[-0.02em] leading-[110%]">
                            Income per customer Acquired
                          </div>
                        </div>
                        <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-center text-lg text-gray-300 font-plus-jakarta-sans">
                          <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                            $96,345
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 shadow-[0px_6px_4px_rgba(0,_0,_0,_0.08),_0px_0px_12px_5px_rgba(255,_255,_255,_0.5)_inset] rounded-[20px] bg-white border-aliceblue-300 border-solid border-[1px] flex flex-col items-center justify-center p-5 gap-4">
                  <div className="self-stretch relative tracking-[-0.02em] leading-[110%] font-semibold">
                    Without Apptics
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-3 text-sm text-gray-200 font-inter">
                    <div className="w-[260px] flex flex-col items-center justify-center gap-3">
                      <div className="self-stretch flex flex-row items-center justify-start gap-3">
                        <div className="flex-1 rounded-xl bg-white border-gainsboro-500 border-solid border-[1px] flex flex-col items-start justify-start p-4 gap-2">
                          <div className="self-stretch relative tracking-[-0.02em] leading-[110%]">
                            Year 01
                          </div>
                          <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-center text-lg text-gray-300 font-plus-jakarta-sans">
                            <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                              $5,800
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 rounded-xl bg-white border-gainsboro-500 border-solid border-[1px] flex flex-col items-start justify-start p-4 gap-2">
                          <div className="self-stretch relative tracking-[-0.02em] leading-[110%]">
                            Year 02
                          </div>
                          <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-center text-lg text-gray-300 font-plus-jakarta-sans">
                            <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                              $5,800
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-3">
                        <div className="flex-1 rounded-xl bg-white border-gainsboro-500 border-solid border-[1px] flex flex-col items-start justify-start p-4 gap-2">
                          <div className="self-stretch relative tracking-[-0.02em] leading-[110%]">
                            Year 03
                          </div>
                          <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-center text-lg text-gray-300 font-plus-jakarta-sans">
                            <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                              $5,800
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 rounded-xl bg-white border-gainsboro-500 border-solid border-[1px] flex flex-col items-start justify-start p-4 gap-2">
                          <div className="self-stretch relative tracking-[-0.02em] leading-[110%]">
                            Year 04
                          </div>
                          <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-center text-lg text-gray-300 font-plus-jakarta-sans">
                            <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                              $5,800
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center gap-3">
                      <div className="self-stretch rounded-xl bg-white border-gainsboro-500 border-solid border-[1px] flex flex-col items-start justify-start p-4 gap-2">
                        <div className="self-stretch relative tracking-[-0.02em] leading-[110%]">
                          Passive Subscriber Income
                        </div>
                        <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-center text-lg text-gray-300 font-plus-jakarta-sans">
                          <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                            $0
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-xl bg-white border-gainsboro-500 border-solid border-[1px] flex flex-col items-start justify-start p-4 gap-2">
                        <div className="self-stretch relative tracking-[-0.02em] leading-[110%]">
                          Income per customer Acquired
                        </div>
                        <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-center text-lg text-gray-300 font-plus-jakarta-sans">
                          <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                            $5.00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1020px] shadow-[0px_8px_10px_-4px_rgba(0,_0,_0,_0.08),_0px_0px_12px_5px_rgba(255,_255,_255,_0.5)_inset] rounded-[20px] bg-white border-aliceblue-300 border-solid border-[1px] box-border h-[126px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[26px] px-[30px] relative gap-[60px] z-[4] text-lg">
              <div className="w-[336.2px] absolute !!m-[0 important] left-[765px] h-[261px] overflow-hidden flex items-center justify-center z-[0]">
                <Image
                  className="w-full h-full object-cover absolute left-[0px] top-[0px] [transform:scale(0.5)]"
                  width={10}
                  height={10}
                  sizes="100vw"
                  alt=""
                  src="/assets/calculator/Mask group (1).svg"
                />
              </div>
              <div className="w-[464px] flex flex-col items-center justify-start gap-2 z-[1]">
                <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                  Get Started With Apptics, Acheive ROI Like Never Before
                </div>
                <div className="self-stretch relative text-base tracking-[-0.02em] leading-[110%] text-gray-200">
                  Automate sales, boost retention, and unlock recurring revenue
                </div>
              </div>
              <div className="w-[165.4px] rounded-full relative shadow-[0px_88px_25px_rgba(0,_0,_0,_0),_0px_56px_23px_rgba(0,_0,_0,_0.03),_0px_32px_19px_rgba(0,_0,_0,_0.1),_0px_14px_14px_rgba(0,_0,_0,_0.17),_0px_4px_8px_rgba(0,_0,_0,_0.2)] h-[50px] z-[2] text-base text-white font-inter">
                <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_8px_4px_rgba(255,_255,_255,_0.16)_inset,_0px_-2px_0px_#000_inset,_0px_1px_1px_#000_inset,_0px_2px_1px_rgba(255,_255,_255,_0.25)_inset] rounded-[20px] [background:linear-gradient(88.67deg,_#1d1d1d,_#333_34.6%,_#3d3d3d_76.69%,_#1d1d1d)] h-[50px] overflow-hidden flex flex-row items-center justify-center py-3 px-6 box-border">
                  <div className="[filter:drop-shadow(0px_2px_2px_rgba(0,_0,_0,_0.48))] flex flex-row items-center justify-start gap-3">
                    <div className="relative tracking-[-0.03em] font-medium">Get Started</div>
                    <Image
                      className="w-[20.4px] relative max-h-full"
                      width={20.4}
                      height={20}
                      sizes="100vw"
                      alt=""
                      src="/assets/calculator/Group 1000011035.svg"
                    />
                  </div>
                </div>
              </div>
              <Image
                className="[transform:scale(0.5)] w-[336.2px] absolute !!m-[0 important] left-[-97.16px] h-[261px] object-cover z-[3]"
                width={336.2}
                height={261}
                sizes="100vw"
                alt=""
                src="/assets/calculator/Mask group.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;