import Image from "next/image";

const Faqs = () => {
  return (
    <>
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
    </>
  );
};

export default Faqs;
