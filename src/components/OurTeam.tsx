import Image from "next/image";

const OurTeam = () => {
  return (
    <>
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
                  <Image
                    className="absolute h-[73.33%] w-full top-[17.33%] right-[10.17%] bottom-[8.33%] left-[0.17%] max-w-full overflow-hidden max-h-full"
                    width={22}
                    height={20}
                    sizes="100vw"
                    alt=""
                    src="/assets/our-team/users.svg"
                  />
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
                  src="/assets/our-team/photo_2025-07-28_12-09-34 1.png"
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
                          src="/assets/our-team/linkedin.svg"
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
                          src="/assets/our-team/instagram.svg"
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
                          src="/assets/our-team/facebook.svg"
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
                  src="/assets/our-team/photo_2025-07-28_12-09-35 2.png"
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
                          src="/assets/our-team/linkedin.svg"
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
                          src="/assets/our-team/instagram.svg"
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
                          src="/assets/our-team/facebook.svg"
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
                  src="/assets/our-team/image 1530.png"
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
                          src="/assets/our-team/linkedin.svg"
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
                          src="/assets/our-team/instagram.svg"
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
                          src="/assets/our-team/facebook.svg"
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
                  src="/assets/our-team/image 1532.png"
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
                          src="/assets/our-team/linkedin.svg"
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
                          src="/assets/our-team/instagram.svg"
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
                          src="/assets/our-team/facebook.svg"
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
                  src="/assets/our-team/image 1531.png"
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
                          src="/assets/our-team/linkedin.svg"
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
                          src="/assets/our-team/instagram.svg"
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
                          src="/assets/our-team/facebook.svg"
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
                  src="/assets/our-team/image 1529.png"
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
                          src="/assets/our-team/linkedin.svg"
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
                          src="/assets/our-team/instagram.svg"
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
                          src="/assets/our-team/facebook.svg"
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
                  src="/assets/our-team/photo_2025-07-28_12-09-35 1.png"
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
                          src="/assets/our-team/linkedin.svg"
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
                          src="/assets/our-team/instagram.svg"
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
                          src="/assets/our-team/facebook.svg"
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
                  src="/assets/our-team/image 1532.png"
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
                          src="/assets/our-team/linkedin.svg"
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
                          src="/assets/our-team/instagram.svg"
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
                          src="/assets/our-team/facebook.svg"
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

export default OurTeam;
