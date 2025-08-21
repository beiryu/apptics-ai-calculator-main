import Image from "next/image";

const CaseStudies = () => {
  return (
    <>
      <div className="self-stretch flex flex-col items-center justify-start z-[7]">
        <div className="w-[1280px] flex flex-col items-center justify-start py-20 px-0 box-border gap-[60px]">
          <div className="flex flex-col items-center justify-start relative gap-6">
            <div className="shadow-[0px_8px_8px_-4px_rgba(0,_0,_0,_0.12),_0px_3px_2px_-1px_rgba(0,_0,_0,_0.08)] rounded-[99px] bg-white border-gainsboro-400 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-center py-2 px-4 z-[0]">
              <div className="relative tracking-[-0.04em] leading-[130%]">Case studies</div>
            </div>
            <b className="w-[644.3px] relative text-[44px] tracking-[-0.02em] leading-[110%] capitalize inline-block font-plus-jakarta-sans z-[1] text-gray-300">
              <span className="whitespace-pre-wrap">{`See the real         `}</span>
              <span className="text-transparent !bg-clip-text [background:linear-gradient(90.18deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`results `}</span>
            </b>
            <div className="w-24 absolute !!m-[0 important] top-[calc(50%_-_37.5px)] left-[328.2px] h-24 overflow-hidden shrink-0 z-[2]">
              <Image
                className="absolute top-[7px] w-full h-full overflow-hidden max-w-full max-h-full"
                width={24}
                height={24}
                sizes="100vw"
                alt=""
                src="/assets/case-studies/Frame 2147227937.svg"
              />
            </div>
            <div className="w-[434.6px] relative text-lg tracking-[-0.04em] leading-[150%] inline-block z-[3]">
              Explore inspiring stories and testimonials from brands that have leveled up with
              Apptics
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[30px] text-gray-300">
            <div className="flex-1 rounded-2xl flex flex-col items-start justify-start gap-4">
              <div className="self-stretch rounded-xl bg-white overflow-hidden flex flex-col items-start justify-start">
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-4 px-4 pb-2">
                  <div className="self-stretch flex flex-row items-center justify-between gap-0">
                    <div className="flex flex-col items-start justify-center">
                      <div className="relative tracking-[-0.04em] leading-[150%] font-medium">
                        Johne Dohe
                      </div>
                      <div className="relative text-sm tracking-[-0.04em] leading-[150%] text-gray-800">{`Founder & CEO`}</div>
                    </div>
                    <Image
                      className="w-[117px] relative h-[18px] overflow-hidden shrink-0"
                      width={117}
                      height={18}
                      sizes="100vw"
                      alt=""
                      src="/assets/case-studies/Frame.svg"
                    />
                  </div>
                </div>
                <Image
                  className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                  width={406.7}
                  height={420}
                  sizes="100vw"
                  alt=""
                  src="/assets/case-studies/Frame 79.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-4 text-left text-xl">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative tracking-[-0.02em] leading-[140%]">
                    Increased Subscription by 30 % after integrating Apptics to Shapley website
                  </div>
                </div>
                <div className="self-stretch relative border-gray-300 border-solid border-t-[1px] box-border h-px opacity-[0.15]" />
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start text-center text-2xl">
                  <div className="flex-1 [backdrop-filter:blur(12px)] rounded-lg overflow-hidden flex flex-col items-start justify-center">
                    <div className="relative tracking-[-0.01em] leading-[150%] font-semibold">
                      $80,678
                    </div>
                    <div className="relative text-sm tracking-[-0.04em] leading-[150%] text-gray-200">
                      Additional revenue
                    </div>
                  </div>
                  <div className="flex-1 [backdrop-filter:blur(12px)] rounded-lg overflow-hidden flex flex-col items-start justify-center">
                    <div className="relative tracking-[-0.01em] leading-[150%] font-semibold">
                      1000+
                    </div>
                    <div className="relative text-sm tracking-[-0.04em] leading-[150%] text-gray-800">
                      Additional revenue
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-[20px] [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] overflow-hidden flex flex-row items-center justify-center py-4 px-6 text-base text-white">
                  <div className="flex flex-row items-center justify-start gap-[14.4px]">
                    <div className="relative tracking-[-0.03em] capitalize font-medium">
                      Read Full case study
                    </div>
                    <div className="w-6 relative bg-gray-1500 h-6">
                      <Image
                        className="absolute h-[58.33%] w-full top-[20.83%] right-[20.83%] bottom-[20.83%] left-[20.83%] max-w-full overflow-hidden max-h-full"
                        width={14}
                        height={14}
                        sizes="100vw"
                        alt=""
                        src="/assets/case-studies/arrow-right.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-2xl flex flex-col items-start justify-start gap-4">
              <div className="self-stretch rounded-xl bg-white overflow-hidden flex flex-col items-start justify-start">
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-4 px-4 pb-2">
                  <div className="self-stretch flex flex-row items-center justify-between gap-0">
                    <div className="flex flex-col items-start justify-center">
                      <div className="relative tracking-[-0.04em] leading-[150%] font-medium">
                        Jane Smith
                      </div>
                      <div className="relative text-sm tracking-[-0.04em] leading-[150%] text-gray-800">
                        Chief Marketing Officer
                      </div>
                    </div>
                    <Image
                      className="w-[53.8px] relative h-6 overflow-hidden shrink-0"
                      width={53.8}
                      height={24}
                      sizes="100vw"
                      alt=""
                      src="/assets/case-studies/Frame (1).svg"
                    />
                  </div>
                </div>
                <Image
                  className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                  width={406.7}
                  height={420}
                  sizes="100vw"
                  alt=""
                  src="/assets/case-studies/Frame 197.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-4 text-left text-xl">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative tracking-[-0.02em] leading-[140%]">
                    Boosted customer engagement by 40 % through targeted email campaigns
                  </div>
                </div>
                <div className="self-stretch relative border-gray-300 border-solid border-t-[1px] box-border h-px opacity-[0.15]" />
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start text-center text-2xl">
                  <div className="flex-1 [backdrop-filter:blur(12px)] rounded-lg overflow-hidden flex flex-col items-start justify-center">
                    <div className="relative tracking-[-0.01em] leading-[150%] font-semibold">
                      $120,450
                    </div>
                    <div className="relative text-sm tracking-[-0.04em] leading-[150%] text-gray-200">
                      New customer acquisitions
                    </div>
                  </div>
                  <div className="flex-1 [backdrop-filter:blur(12px)] rounded-lg overflow-hidden flex flex-col items-start justify-center">
                    <div className="relative tracking-[-0.01em] leading-[150%] font-semibold">
                      1500+
                    </div>
                    <div className="relative text-sm tracking-[-0.04em] leading-[150%] text-gray-800">
                      New customer acquisitions
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-[20px] [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] overflow-hidden flex flex-row items-center justify-center py-4 px-6 text-base text-white">
                  <div className="flex flex-row items-center justify-start gap-[14.4px]">
                    <div className="relative tracking-[-0.03em] capitalize font-medium">
                      Read Full case study
                    </div>
                    <div className="w-6 relative bg-gray-1500 h-6">
                      <Image
                        className="absolute h-[58.33%] w-full top-[20.83%] right-[20.83%] bottom-[20.83%] left-[20.83%] max-w-full overflow-hidden max-h-full"
                        width={14}
                        height={14}
                        sizes="100vw"
                        alt=""
                        src="/assets/case-studies/arrow-right.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-2xl flex flex-col items-start justify-start gap-4">
              <div className="self-stretch rounded-xl bg-white overflow-hidden flex flex-col items-start justify-start">
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-4 px-4 pb-2">
                  <div className="self-stretch flex flex-row items-center justify-between gap-0">
                    <div className="flex flex-col items-start justify-center">
                      <div className="relative tracking-[-0.04em] leading-[150%] font-medium">
                        Robert Lee
                      </div>
                      <div className="relative text-sm tracking-[-0.04em] leading-[150%] text-gray-800">
                        Product Manager
                      </div>
                    </div>
                    <Image
                      className="w-[41px] relative h-5 overflow-hidden shrink-0"
                      width={41}
                      height={20}
                      sizes="100vw"
                      alt=""
                      src="/assets/case-studies/Frame (2).svg"
                    />
                  </div>
                </div>
                <Image
                  className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                  width={406.7}
                  height={420}
                  sizes="100vw"
                  alt=""
                  src="/assets/case-studies/Frame 197 (1).png"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-4 text-left text-xl">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative tracking-[-0.02em] leading-[140%]">
                    Launched a new feature that increased user retention by 25 %
                  </div>
                </div>
                <div className="self-stretch relative border-gray-300 border-solid border-t-[1px] box-border h-px opacity-[0.15]" />
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start text-center text-2xl">
                  <div className="flex-1 [backdrop-filter:blur(12px)] rounded-lg overflow-hidden flex flex-col items-start justify-center">
                    <div className="relative tracking-[-0.01em] leading-[150%] font-semibold">
                      $200,000
                    </div>
                    <div className="relative text-sm tracking-[-0.04em] leading-[150%] text-gray-200">
                      Annual recurring revenue
                    </div>
                  </div>
                  <div className="flex-1 [backdrop-filter:blur(12px)] rounded-lg overflow-hidden flex flex-col items-start justify-center">
                    <div className="relative tracking-[-0.01em] leading-[150%] font-semibold">
                      2000+
                    </div>
                    <div className="relative text-sm tracking-[-0.04em] leading-[150%] text-gray-800">
                      Annual recurring revenue
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-[20px] [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] overflow-hidden flex flex-row items-center justify-center py-4 px-6 text-base text-white">
                  <div className="flex flex-row items-center justify-start gap-[14.4px]">
                    <div className="relative tracking-[-0.03em] capitalize font-medium">
                      Read Full case study
                    </div>
                    <div className="w-6 relative bg-gray-1500 h-6">
                      <Image
                        className="absolute h-[58.33%] w-full top-[20.83%] right-[20.83%] bottom-[20.83%] left-[20.83%] max-w-full overflow-hidden max-h-full"
                        width={14}
                        height={14}
                        sizes="100vw"
                        alt=""
                        src="/assets/case-studies/arrow-right.svg"
                      />
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

export default CaseStudies;