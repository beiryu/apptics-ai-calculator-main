import Image from "next/image";
import { useState, useEffect } from "react";

const TeamMember = ({
  image,
  name,
  position,
}: {
  image: string;
  name: string;
  position: string;
}) => {
  return (
    <div className="flex-1 min-w-[300px] rounded-t-[999px] rounded-b-[500px] bg-whitesmoke-400 h-[450px] overflow-hidden flex flex-col items-center justify-between p-5 box-border gap-0">
      <div className="w-[260px] h-[260px] rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-gray-100">
        <Image
          className="w-full h-full object-cover"
          width={260}
          height={260}
          sizes="100vw"
          alt={name}
          src={image}
        />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-6">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch relative tracking-[-0.04em] leading-[150%] font-semibold">
            {name}
          </div>
          <div className="self-stretch relative text-base tracking-[-0.04em] leading-[150%] text-gray-200">
            {position}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-3">
          <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
            <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
              <Image
                className="w-full h-full object-contain"
                width={18.9}
                height={18}
                sizes="100vw"
                alt=""
                src="/assets/our-team/linkedin.svg"
              />
            </div>
          </div>
          <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
            <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
              <Image
                className="w-full h-full object-contain"
                width={18.9}
                height={18.9}
                sizes="100vw"
                alt=""
                src="/assets/our-team/instagram.svg"
              />
            </div>
          </div>
          <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
            <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
              <Image
                className="w-full h-full object-contain"
                width={18.9}
                height={18.9}
                sizes="100vw"
                alt=""
                src="/assets/our-team/facebook.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurTeam = () => {
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

  const MobileVersion = () => {
    // Данные о команде
    const teamMembers = [
      {
        name: "Adam Fresner",
        position: "CEO",
        image: "/assets/our-team/image 1531.png",
      },
      {
        name: "Adam Fresner",
        position: "CEO",
        image: "/assets/our-team/photo_2025-07-28_12-09-35 2.png",
      },
      {
        name: "Marcus Green",
        position: "Data Scientist",
        image: "/assets/our-team/image 1530.png",
      },
      {
        name: "Marcus Reed",
        position: "Data Scientist",
        image: "/assets/our-team/image 1532.png",
      },
    ];

    return (
      <>
        <div className="self-stretch flex flex-col items-center justify-start z-[10]">
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-12 px-0 gap-12">
            <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 gap-5">
              <div className="shadow-[0px_8px_8px_-4px_rgba(0,_0,_0,_0.12),_0px_3px_2px_-1px_rgba(0,_0,_0,_0.08)] rounded-[99px] bg-white border-gainsboro-400 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-center py-2 px-4">
                <div className="relative tracking-[-0.04em] leading-[130%]">Our Team</div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start text-[28px] text-gray-300 font-plus-jakarta-sans">
                <div className="flex flex-row items-start justify-center gap-1">
                  <b className="relative tracking-[-0.02em] leading-[110%]">Meet the</b>
                  <div className="w-[34.6px] relative shadow-[0px_8px_8px_-2px_rgba(11,_32,_103,_0.05),_0px_2px_4px_-1px_rgba(11,_32,_103,_0.14),_0px_14px_20px_-5px_rgba(0,_0,_0,_0.08),_0px_30px_30px_-6px_rgba(0,_0,_0,_0.08)] rounded-[10.67px] [background:linear-gradient(205.35deg,_#12b2f9,_#514dfa)] h-[34.6px] overflow-hidden shrink-0">
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
              <div className="self-stretch relative text-sm tracking-[-0.04em] leading-[150%] text-gray-200">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `}</div>
            </div>
            <div className="self-stretch rounded-3xl bg-white overflow-hidden flex flex-col items-start justify-start py-6 px-4 gap-8 text-2xl text-gray-300 font-plus-jakarta-sans">
              <div className="self-stretch flex flex-row items-center justify-start gap-4 overflow-x-auto pb-4">
                {teamMembers.map((member, index) => (
                  <TeamMember
                    key={index}
                    name={member.name}
                    position={member.position}
                    image={member.image}
                  />
                ))}
              </div>
              <div className="self-stretch flex flex-row items-center justify-center gap-1.5">
                <div className="w-2 relative rounded-[50%] bg-whitesmoke-400 h-2" />
                <div className="w-2 relative rounded-[50%] bg-gray-200 h-2" />
                <div className="w-2 relative rounded-[50%] bg-whitesmoke-400 h-2" />
                <div className="w-2 relative rounded-[50%] bg-whitesmoke-400 h-2" />
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
        <div className="self-stretch flex flex-col items-center justify-start z-[10]">
          <div className="w-[1280px] overflow-hidden flex flex-col items-center justify-start py-20 px-0 box-border gap-10">
            <div className="w-[600px] flex flex-col items-center justify-start gap-6">
              <div className="shadow-[0px_8px_8px_-4px_rgba(0,_0,_0,_0.12),_0px_3px_2px_-1px_rgba(0,_0,_0,_0.08)] rounded-[99px] bg-white border-gainsboro-400 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-center py-2 px-4">
                <div className="relative tracking-[-0.04em] leading-[130%]">Our Team</div>
              </div>
              <div className="flex flex-col items-center justify-start text-5xl text-gray-300 font-plus-jakarta-sans">
                <div className="flex flex-row items-start justify-center gap-1">
                  <b className="relative tracking-[-0.02em] leading-[110%]">Meet the</b>
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
                <div className="flex-1 rounded-t-[999px] rounded-b-[500px] bg-whitesmoke-400 h-[450px] overflow-hidden flex flex-col items-center justify-between p-5 box-border gap-0">
                  <div className="w-[260px] h-[260px] rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-gray-100">
                    <Image
                      className="w-full h-full object-cover"
                      width={260}
                      height={260}
                      sizes="100vw"
                      alt=""
                      src="/assets/our-team/image 1531.png"
                    />
                  </div>
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
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/linkedin.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18.9}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/instagram.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18.9}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/facebook.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-t-[999px] rounded-b-[500px] bg-whitesmoke-400 h-[450px] overflow-hidden flex flex-col items-center justify-between p-5 box-border gap-0">
                  <div className="w-[260px] h-[260px] rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-gray-100">
                    <Image
                      className="w-full h-full object-cover"
                      width={260}
                      height={260}
                      sizes="100vw"
                      alt=""
                      src="/assets/our-team/photo_2025-07-28_12-09-35 2.png"
                    />
                  </div>
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
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/linkedin.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18.9}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/instagram.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18.9}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/facebook.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-t-[999px] rounded-b-[500px] bg-whitesmoke-400 h-[450px] overflow-hidden flex flex-col items-center justify-between p-5 box-border gap-0">
                  <div className="w-[260px] h-[260px] rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-gray-100">
                    <Image
                      className="w-full h-full object-cover"
                      width={260}
                      height={260}
                      sizes="100vw"
                      alt=""
                      src="/assets/our-team/image 1530.png"
                    />
                  </div>
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
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/linkedin.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18.9}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/instagram.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18.9}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/facebook.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-t-[999px] rounded-b-[500px] bg-whitesmoke-400 h-[450px] overflow-hidden flex flex-col items-center justify-between p-5 box-border gap-0">
                  <div className="w-[260px] h-[260px] rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-gray-100">
                    <Image
                      className="w-full h-full object-cover"
                      width={260}
                      height={260}
                      sizes="100vw"
                      alt=""
                      src="/assets/our-team/image 1532.png"
                    />
                  </div>
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
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/linkedin.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18.9}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/instagram.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18.9}
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
                <div className="flex-1 rounded-t-[999px] rounded-b-[500px] bg-whitesmoke-400 h-[450px] overflow-hidden flex flex-col items-center justify-between p-5 box-border gap-0">
                  <div className="w-[260px] h-[260px] rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-gray-100">
                    <Image
                      className="w-full h-full object-cover"
                      width={260}
                      height={260}
                      sizes="100vw"
                      alt=""
                      src="/assets/our-team/image 1531.png"
                    />
                  </div>
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
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/linkedin.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18.9}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/instagram.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18.9}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/facebook.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-t-[999px] rounded-b-[500px] bg-whitesmoke-400 h-[450px] overflow-hidden flex flex-col items-center justify-between p-5 box-border gap-0">
                  <div className="w-[260px] h-[260px] rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-gray-100">
                    <Image
                      className="w-full h-full object-cover"
                      width={260}
                      height={260}
                      sizes="100vw"
                      alt=""
                      src="/assets/our-team/image 1529.png"
                    />
                  </div>
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
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/linkedin.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18.9}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/instagram.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18.9}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/facebook.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-t-[999px] rounded-b-[500px] bg-whitesmoke-400 h-[450px] overflow-hidden flex flex-col items-center justify-between p-5 box-border gap-0">
                  <div className="w-[260px] h-[260px] rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-gray-100">
                    <Image
                      className="w-full h-full object-cover"
                      width={260}
                      height={260}
                      sizes="100vw"
                      alt=""
                      src="/assets/our-team/photo_2025-07-28_12-09-35 1.png"
                    />
                  </div>
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
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/linkedin.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18.9}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/instagram.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18.9}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/facebook.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-t-[999px] rounded-b-[500px] bg-whitesmoke-400 h-[450px] overflow-hidden flex flex-col items-center justify-between p-5 box-border gap-0">
                  <div className="w-[260px] h-[260px] rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-gray-100">
                    <Image
                      className="w-full h-full object-cover"
                      width={260}
                      height={260}
                      sizes="100vw"
                      alt=""
                      src="/assets/our-team/image 1532.png"
                    />
                  </div>
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
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/linkedin.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18.9}
                            sizes="100vw"
                            alt=""
                            src="/assets/our-team/instagram.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[38px] relative shadow-[0px_6.333333969116211px_4.75px_-1.58px_rgba(0,_0,_0,_0.08),_0px_2.171428680419922px_0.87px_#fff_inset,_0px_1.5833334922790527px_1.58px_-0.79px_rgba(0,_0,_0,_0.25)] rounded-[12.67px] bg-whitesmoke-200 border-gainsboro-700 border-solid border-[0.5px] box-border h-[38px] overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="bg-gray-1500 w-[20.6px] h-[20.6px] overflow-hidden flex items-center justify-center">
                          <Image
                            className="w-full h-full object-contain"
                            width={18.9}
                            height={18.9}
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
  return <>{isMobile ? <MobileVersion /> : <DesktopVersion />}</>;
};

export default OurTeam;
