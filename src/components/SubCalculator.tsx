"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const AppticsLogo = () => (
  <svg width="24" height="24" viewBox="12 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.1)" />
      </filter>
      <linearGradient
        id="paint0_linear_1_119"
        x1="21.9883"
        y1="6.28991"
        x2="6.70913"
        y2="31.3727"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#12B2F9" />
        <stop offset="1" stopColor="#514DFA" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1_119"
        x1="25.6584"
        y1="8.80369"
        x2="24.5086"
        y2="19.7434"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#D3D5D8" />
      </linearGradient>
    </defs>
    <g filter="url(#shadow)">
      <path
        d="M13.6724 8.04663C14.1343 3.65255 18.0708 0.464846 22.4648 0.926682L30.421 1.76291C34.8151 2.22475 38.0028 6.16124 37.541 10.5553L36.7047 18.5115C36.2429 22.9056 32.3064 26.0933 27.9123 25.6314L19.9562 24.7952C15.5621 24.3334 12.3744 20.3969 12.8362 16.0028L13.6724 8.04663Z"
        fill="url(#paint0_linear_1_119)"
      />
      <path
        d="M20.9665 16.3442C18.5754 16.0928 17.263 14.1082 17.4886 11.9616C17.7142 9.81536 19.4105 8.14701 21.8017 8.39833C22.5699 8.47907 23.1999 8.85541 23.7133 9.32193L23.7777 8.70986L25.2574 8.86539L25.0883 10.4744C24.9877 11.4317 23.8441 11.6546 23.2913 11.057L23.2394 10.9966C22.7091 10.3244 22.1904 9.93483 21.6466 9.87768C20.1646 9.7219 19.1181 10.6926 18.9683 12.1171C18.8186 13.542 19.6404 14.7087 21.122 14.8644C21.4032 14.8939 21.7552 14.8088 22.17 14.5902C22.579 14.3742 22.9914 14.0586 23.369 13.7158C23.7982 13.3236 24.1958 12.8981 24.5581 12.4434L24.6772 12.2895C24.8011 12.1301 24.9291 11.9739 25.061 11.821C25.3895 11.4382 25.7408 11.0756 26.113 10.7352C26.5425 10.3457 27.0586 9.94184 27.6182 9.64684C28.171 9.35487 28.8282 9.13685 29.5156 9.20909C31.9067 9.46041 33.2187 11.4449 32.9931 13.5912C32.7675 15.7374 31.0716 17.4062 28.6804 17.1549C27.9122 17.0742 27.2822 16.6978 26.7683 16.2313L26.3785 19.94L24.8987 19.7844L25.3934 15.0784C25.4972 14.0903 26.7133 13.8845 27.2427 14.5562L27.3417 14.6789C27.8376 15.2761 28.3257 15.6215 28.836 15.6752C30.3171 15.8308 31.3641 14.8601 31.5138 13.4357C31.6635 12.0112 30.8417 10.8446 29.3601 10.6884C29.0789 10.6588 28.727 10.744 28.312 10.9631C27.9032 11.1785 27.4907 11.4951 27.1131 11.8379C26.6839 12.23 26.2863 12.6553 25.924 13.1099L25.7229 13.3693C25.3105 13.887 24.8579 14.3712 24.3692 14.8176C23.9396 15.207 23.4235 15.6109 22.8639 15.9059C22.3107 16.1979 21.6534 16.4163 20.9665 16.3442Z"
        fill="url(#paint1_linear_1_119)"
      />
    </g>
  </svg>
);

const SubCalculator: NextPage = () => {
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

  // State for calculator inputs
  const [customerCount, setCustomerCount] = useState<number>(5000);
  const [averageOrderValue, setAverageOrderValue] = useState<number>(50);
  const [profitMargin, setProfitMargin] = useState<number>(10);
  const [subscriptionValue, setSubscriptionValue] = useState<number>(60);

  // State for calculator results
  const [results, setResults] = useState({
    withApptics: {
      year1: 0,
      year2: 0,
      year3: 0,
      year4: 0,
      passiveIncome: 0,
      incomePerCustomer: 0,
    },
    withoutApptics: {
      year1: 0,
      year2: 0,
      year3: 0,
      year4: 0,
      passiveIncome: 0,
      incomePerCustomer: 0,
    },
  });

  // Calculate results based on inputs
  const calculateResults = useCallback(() => {
    // Base revenue calculation
    const baseRevenue = customerCount * averageOrderValue * (profitMargin / 100) * 12;

    // Determine growth rate based on AOV tier
    const growthRate = averageOrderValue >= 46 ? 384.51 : 274.67;

    // Adjust growth rate based on subscription value relative to $30 baseline
    const subscriptionMultiplier = subscriptionValue / 30;
    const adjustedGrowthRate = growthRate * subscriptionMultiplier;

    // Calculate results with Apptics
    const year1WithApptics = baseRevenue + adjustedGrowthRate * customerCount;
    const year2WithApptics = year1WithApptics * 2.363;
    const year3WithApptics = year2WithApptics * 1.2;
    const year4WithApptics = year3WithApptics * 1.101;

    // Calculate passive income (subscription retention)
    const passiveIncomeMultiplier = averageOrderValue >= 46 ? 0.12 : 0.08;
    const passiveIncome = subscriptionValue * customerCount * passiveIncomeMultiplier * 12;

    // Calculate income per customer acquired
    const incomePerCustomer =
      (year1WithApptics + year2WithApptics + year3WithApptics + year4WithApptics) / customerCount;

    // Calculate results without Apptics (standard growth)
    const standardGrowth = 0.05; // 5% standard growth rate
    const year1WithoutApptics = baseRevenue;
    const year2WithoutApptics = year1WithoutApptics * (1 + standardGrowth);
    const year3WithoutApptics = year2WithoutApptics * (1 + standardGrowth);
    const year4WithoutApptics = year3WithoutApptics * (1 + standardGrowth);

    setResults({
      withApptics: {
        year1: Math.round(year1WithApptics),
        year2: Math.round(year2WithApptics),
        year3: Math.round(year3WithApptics),
        year4: Math.round(year4WithApptics),
        passiveIncome: Math.round(passiveIncome),
        incomePerCustomer: Math.round(incomePerCustomer),
      },
      withoutApptics: {
        year1: Math.round(year1WithoutApptics),
        year2: Math.round(year2WithoutApptics),
        year3: Math.round(year3WithoutApptics),
        year4: Math.round(year4WithoutApptics),
        passiveIncome: 0, // No passive income without Apptics
        incomePerCustomer: Math.round(year1WithoutApptics / customerCount),
      },
    });
  }, [customerCount, averageOrderValue, profitMargin, subscriptionValue]);

  // Calculate results when inputs change
  useEffect(() => {
    calculateResults();
  }, [customerCount, averageOrderValue, profitMargin, subscriptionValue, calculateResults]);

  // Handle slider mouse and touch events for dragging
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Update slider position - now working with range 0-1000
  const updateSliderPosition = (clientX: number, slider: HTMLDivElement) => {
    const rect = slider.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(1, x / width));
    const value = Math.round(percentage * 1000); // Range from 0 to 1000
    setSubscriptionValue(value);
  };

  // Handle slider change on click
  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = e.currentTarget;
    updateSliderPosition(e.clientX, slider);
  };

  // Handle slider mouse/touch down for drag start
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  // Handle touch start
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent scrolling when touching the slider
    setIsDragging(true);

    const touch = e.touches[0];
    const slider = e.currentTarget;
    if (touch && slider) {
      updateSliderPosition(touch.clientX, slider);
    }
  };

  // Handle slider mouse move for dragging
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;

      const slider = document.querySelector(".slider-track") as HTMLDivElement;
      if (slider) {
        updateSliderPosition(e.clientX, slider);
      }
    },
    [isDragging]
  );

  // Handle touch move
  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;

      e.preventDefault(); // Prevent scrolling during slider interaction
      const touch = e.touches[0];
      const slider = document.querySelector(".slider-track") as HTMLDivElement;
      if (slider && touch) {
        updateSliderPosition(touch.clientX, slider);
      }
    },
    [isDragging]
  );

  // Handle slider mouse/touch up for drag end
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add and remove event listeners for dragging
  useEffect(() => {
    // Mouse events
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    // Touch events
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      // Remove mouse events
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);

      // Remove touch events
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return (
    <div className="w-full relative min-h-[522px] ">
      <div className="self-stretch rounded-[60px] flex flex-col items-center justify-start z-[8]">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-start py-20 px-4 box-border gap-[60px]">
          <div className="w-full max-w-[780px] flex flex-col items-center justify-start relative gap-6">
            <div className="shadow-[0px_8px_8px_-4px_rgba(0,_0,_0,_0.12),_0px_3px_2px_-1px_rgba(0,_0,_0,_0.08)] rounded-[99px] bg-white border-gainsboro-400 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-center py-2 px-4 z-[0]">
              <div className="relative tracking-[-0.04em] leading-[130%]">Calculator ROI</div>
            </div>
            {isMobile ? (
              <b className="w-full relative text-[28px] tracking-[-0.02em] leading-[130%] capitalize inline-block font-plus-jakarta-sans z-[1] text-center text-gray-300">
                <p className="m-0">{`Calculate how Apptics `}</p>
                <p className="m-0">{`could transform `}</p>
                <p className="m-0">
                  <span className="whitespace-pre-wrap">{`        `}</span>
                  <span className="text-transparent !bg-clip-text [background:linear-gradient(90.31deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    your business
                  </span>
                </p>
              </b>
            ) : (
              <b className="w-[644.3px] relative text-[44px] tracking-[-0.02em] leading-[130%] capitalize inline-block font-plus-jakarta-sans z-[1] text-center text-gray-300">
                <p className="m-0">Calculate how Apptics could</p>
                <p className="m-0">
                  <span className="whitespace-pre-wrap">{` transform         `}</span>
                  <span className="text-transparent !bg-clip-text [background:linear-gradient(90.31deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    your business
                  </span>
                </p>
              </b>
            )}
            {isMobile ? (
              <div className="w-[56.2px] absolute !!m-[0 important] top-[130px] left-[150px] rounded-2xl h-[56.2px] shrink-0 overflow-hidden flex items-center justify-center z-[2]">
                <Image
                  className="w-full h-full overflow-hidden shrink-0 object-cover absolute left-[0px] top-[26px] [transform:scale(1.757)]"
                  width={56.2}
                  height={56.2}
                  sizes="100vw"
                  alt=""
                  src="/assets/calculator/Frame 2147227937.svg"
                />
              </div>
            ) : (
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
            )}
          </div>
          <div className="max-w-[1050px] shadow-[0px_0px_8px_4px_rgba(255,_255,_255,_0.69)_inset,_0px_0px_24px_8px_rgba(255,_255,_255,_0.8)_inset] rounded-[32px] overflow-hidden mx-auto px-4 py-6 w-full flex flex-col items-start gap-4 lg:gap-6 relative text-left">
            <div className="rounded-[32px] max-w-[1020px] overflow-hidden mx-auto w-full flex flex-col lg:flex-row items-start gap-4 lg:gap-6 relative text-left">
              <div className="w-full lg:w-[400px] h-auto lg:h-[532px] shadow-[0px_6px_4px_rgba(0,_0,_0,_0.08),_0px_0px_12px_5px_rgba(255,_255,_255,_0.5)_inset] rounded-[20px] bg-white border-aliceblue-300 border-solid border-[1px] box-border overflow-hidden flex flex-col items-start justify-start p-5 z-[3]">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-6">
                  <div className="self-stretch flex flex-row items-center justify-start gap-4">
                    <div className="w-[42px] relative rounded-xl h-[42px] shrink-0 flex items-center justify-center">
                      <div className="w-[42px] relative rounded-xl h-[42px] shrink-0 flex items-center justify-center">
                        <div className="rounded-xl w-full h-full relative flex items-center justify-center shadow-lg">
                          <Image
                            className="w-5 h-5 object-contain transform-[scale(1.3)]"
                            width={20}
                            height={20}
                            sizes="100vw"
                            alt="Calculator icon"
                            src="/assets/calculator/bold.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative tracking-[-0.02em] leading-[110%] font-semibold text-gray-300 text-xl">
                      ROI Calculator
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-4 text-sm text-gray-200">
                    <div className="self-stretch rounded-xl flex flex-col items-start justify-start gap-2">
                      <div className="self-stretch relative tracking-[-0.01em] leading-[110%] capitalize">
                        Customer per month
                      </div>
                      <div className="self-stretch shadow-[0px_8px_4px_-3px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-gainsboro-200 border-solid border-[0.5px] overflow-hidden flex flex-row items-center justify-between p-3.5 gap-0 text-center text-base text-gray-300 ">
                        <input
                          type="text"
                          className="relative tracking-[-0.02em] leading-[110%] font-semibold bg-transparent border-none outline-none w-full"
                          value={customerCount.toLocaleString()}
                          onChange={(e) => {
                            const value = parseInt(e.target.value.replace(/,/g, ""));
                            if (!isNaN(value)) {
                              setCustomerCount(value);
                            } else {
                              setCustomerCount(0);
                            }
                          }}
                        />
                        <div className="w-5 relative h-5">
                          <Image
                            className="absolute h-[91.5%] w-full top-[4.17%] right-[4.33%] bottom-[4.33%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                            width={18.3}
                            height={18.3}
                            sizes="100vw"
                            alt=""
                            src="/assets/calculator/shopping-cart1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-xl flex flex-col items-start justify-start gap-2 ">
                      <div className="self-stretch relative tracking-[-0.01em] leading-[110%] capitalize">
                        Average oder value
                      </div>
                      <div className="self-stretch shadow-[0px_8px_4px_-3px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-gainsboro-200 border-solid border-[0.5px] overflow-hidden flex flex-row items-center justify-between p-3.5 gap-0 text-center text-base text-gray-300">
                        <div className="relative tracking-[-0.02em] leading-[110%] font-semibold flex items-center">
                          <div className="relative flex items-center w-full">
                            <span className="mr-0">$</span>
                            <input
                              type="text"
                              className="bg-transparent border-none outline-none pl-0 w-full"
                              value={averageOrderValue.toLocaleString()}
                              onChange={(e) => {
                                const value = parseInt(e.target.value.replace(/,/g, ""));
                                if (!isNaN(value)) {
                                  setAverageOrderValue(value);
                                } else {
                                  setAverageOrderValue(0);
                                }
                              }}
                            />
                          </div>
                        </div>
                        <div className="w-5 relative h-5">
                          <Image
                            className="absolute h-[91.5%] w-full top-[4.17%] right-[4.33%] bottom-[4.33%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                            width={18.3}
                            height={18.3}
                            sizes="100vw"
                            alt=""
                            src="/assets/calculator/currency-dollar-circle.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-xl flex flex-col items-start justify-start gap-2 ">
                      <div className="self-stretch relative tracking-[-0.01em] leading-[110%] capitalize">
                        Profit margin (%)
                      </div>
                      <div className="self-stretch shadow-[0px_8px_4px_-3px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-gainsboro-200 border-solid border-[0.5px] overflow-hidden flex flex-row items-center justify-between p-3.5 gap-0 text-center text-base text-gray-300">
                        <div className="relative tracking-[-0.02em] leading-[110%] font-semibold flex items-center">
                          <div className="relative flex items-center">
                            <input
                              type="text"
                              className="bg-transparent border-none outline-none w-auto pr-0 -mr-2"
                              style={{
                                width: `${profitMargin.toString().length * 0.6 + 0.5}em`,
                              }}
                              value={profitMargin}
                              onChange={(e) => {
                                const value = parseInt(e.target.value);
                                if (!isNaN(value)) {
                                  setProfitMargin(value);
                                } else {
                                  setProfitMargin(0);
                                }
                              }}
                            />
                            <span className="text-base ml-0">%</span>
                          </div>
                        </div>
                        <div className="w-5 relative h-5 overflow-hidden shrink-0">
                          <Image
                            className="absolute h-[91.5%] w-full top-[4.17%] right-[4.33%] bottom-[4.33%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                            width={18.3}
                            height={18.3}
                            sizes="100vw"
                            alt=""
                            src="/assets/calculator/discount.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch shadow-[0px_8px_4px_-3px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-gainsboro-200 border-solid border-[0.5px] box-border h-[154px] flex flex-col items-center justify-between p-3.5 gap-0 text-base text-gray-300">
                      <div className="self-stretch relative tracking-[-0.02em] leading-[110%] capitalize font-semibold">
                        Monthly subscription value
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-4 text-xl ">
                        <div className="self-stretch rounded-xl border-gainsboro-100 border-solid border-[1px] overflow-visible flex flex-row items-center justify-between py-3 px-6 gap-0">
                          <div className="relative tracking-[-0.02em] leading-[110%] font-semibold flex items-center w-full">
                            <div className="flex items-center w-full">
                              <span>$</span>
                              <input
                                type="text"
                                className="bg-transparent border-none outline-none w-full"
                                value={subscriptionValue.toLocaleString()}
                                onChange={(e) => {
                                  const value = parseInt(e.target.value.replace(/,/g, ""));
                                  if (!isNaN(value)) {
                                    if (value >= 0 && value <= 1000) {
                                      setSubscriptionValue(value);
                                    } else {
                                      setSubscriptionValue(1000);
                                    }
                                  } else {
                                    setSubscriptionValue(0);
                                  }
                                }}
                              />
                            </div>
                          </div>
                          <div className="w-6 relative h-6 overflow-hidden shrink-0">
                            <Image
                              className="absolute h-[91.67%] w-full top-[4.17%] right-[4.17%] bottom-[4.17%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                              width={22}
                              height={22}
                              sizes="100vw"
                              alt=""
                              src="/assets/calculator/discount-check.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch h-2 flex flex-col items-start justify-start relative gap-2.5">
                          <div
                            className="self-stretch relative shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08)_inset] rounded-[99px] bg-whitesmoke-200 h-2 overflow-hidden shrink-0 z-[0] cursor-pointer slider-track"
                            onClick={handleSliderChange}
                            onMouseDown={handleMouseDown}
                            onTouchStart={handleTouchStart}
                          >
                            <div
                              className="absolute top-[calc(50%_-_4px)] left-[0px] [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] h-2"
                              style={{
                                width: `${(subscriptionValue / 1000) * 100}%`,
                              }}
                            />
                          </div>
                          <div
                            className="w-3.5 absolute !!m-[0 important] top-[calc(50%_-_8px)] shadow-[-1px_1px_2px_rgba(0,_0,_0,_0.2)] rounded-[50%] bg-white border-whitesmoke-100 border-solid border-[0.5px] box-border h-3.5 z-[1] cursor-grab active:cursor-grabbing"
                            style={{
                              left: `calc(${(subscriptionValue / 1000) * 100}% - ${
                                subscriptionValue === 1000 ? "10px" : "1.75px"
                              })`,
                            }}
                            onMouseDown={handleMouseDown}
                            onTouchStart={handleTouchStart}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex-1 flex flex-col items-stretch justify-between gap-4 lg:gap-8.5 text-lg h-auto lg:h-[532px] z-[3]">
                <div className="w-full lg:h-[330px] h-[420px] shadow-[0px_6px_4px_rgba(0,_0,_0,_0.08),_0px_0px_12px_5px_rgba(255,_255,_255,_0.5)_inset] rounded-[20px] bg-white border-aliceblue-300 border-solid border-[1px] overflow-hidden flex flex-col items-center justify-start p-4 lg:p-5 gap-3 lg:gap-4">
                  <div className="self-stretch flex flex-row items-center justify-start gap-1 text-left text-xl">
                    <div className="relative tracking-[-0.02em] leading-[110%] font-semibold text-gray-300">
                      Your Business with
                    </div>
                    <div className="flex items-center justify-center w-6 h-6">
                      <AppticsLogo />
                    </div>
                    <div className="relative tracking-[-0.02em] leading-[110%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Apptics
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col lg:flex-row items-start justify-start gap-3 text-sm text-gray-200 ">
                    <div className="w-full lg:w-[320px] flex flex-col items-center justify-center gap-3">
                      <div className="self-stretch flex flex-row items-center justify-start gap-3">
                        <div className="flex-1 shadow-[0px_6px_4px_-2px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-white border-solid border-[1.5px] flex flex-col items-start justify-start p-4 gap-2 min-w-0">
                          <div className="self-stretch flex flex-row items-center justify-center gap-1.5">
                            <div className="w-4 relative h-4">
                              <Image
                                className="absolute h-[91.88%] w-full top-[4.17%] right-[8.54%] bottom-[3.96%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                                width={13.3}
                                height={14.7}
                                sizes="100vw"
                                alt=""
                                src="/assets/calculator/calendar.svg"
                              />
                            </div>
                            <div className="flex-1 relative tracking-[-0.02em] leading-[110%] font-medium">
                              Year 01
                            </div>
                          </div>
                          <div className="relative text-lg tracking-[-0.02em] leading-[110%] font-semibold font-plus-jakarta-sans text-gray-300 overflow-hidden text-ellipsis whitespace-nowrap w-full min-w-0">
                            ${results.withApptics.year1.toLocaleString()}
                          </div>
                        </div>
                        <div className="flex-1 shadow-[0px_6px_4px_-2px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-white border-solid border-[1.5px] flex flex-col items-start justify-start p-4 gap-2 min-w-0">
                          <div className="self-stretch flex flex-row items-center justify-center gap-1.5">
                            <div className="w-4 relative h-4">
                              <Image
                                className="absolute h-[91.88%] w-full top-[4.17%] right-[8.54%] bottom-[3.96%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                                width={13.3}
                                height={14.7}
                                sizes="100vw"
                                alt=""
                                src="/assets/calculator/calendar.svg"
                              />
                            </div>
                            <div className="flex-1 relative tracking-[-0.02em] leading-[110%] font-medium">
                              Year 02
                            </div>
                          </div>
                          <div className="relative text-lg tracking-[-0.02em] leading-[110%] font-semibold font-plus-jakarta-sans text-gray-300 overflow-hidden text-ellipsis whitespace-nowrap w-full min-w-0">
                            ${results.withApptics.year2.toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-3">
                        <div className="flex-1 shadow-[0px_6px_4px_-2px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-white border-solid border-[1.5px] flex flex-col items-start justify-start p-4 gap-2 min-w-0">
                          <div className="self-stretch flex flex-row items-center justify-center gap-1.5">
                            <div className="w-4 relative h-4">
                              <Image
                                className="absolute h-[91.88%] w-full top-[4.17%] right-[8.54%] bottom-[3.96%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                                width={13.3}
                                height={14.7}
                                sizes="100vw"
                                alt=""
                                src="/assets/calculator/calendar.svg"
                              />
                            </div>
                            <div className="flex-1 relative tracking-[-0.02em] leading-[110%] font-medium">
                              Year 03
                            </div>
                          </div>
                          <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-lg text-gray-300 font-plus-jakarta-sans">
                            <div className="relative tracking-[-0.02em] leading-[110%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-full min-w-0">
                              ${results.withApptics.year3.toLocaleString()}
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 shadow-[0px_6px_4px_-2px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-white border-solid border-[1.5px] flex flex-col items-start justify-start p-4 gap-2 min-w-0">
                          <div className="self-stretch flex flex-row items-center justify-center gap-1.5">
                            <div className="w-4 relative h-4">
                              <Image
                                className="absolute h-[91.88%] w-full top-[4.17%] right-[8.54%] bottom-[3.96%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                                width={13.3}
                                height={14.7}
                                sizes="100vw"
                                alt=""
                                src="/assets/calculator/calendar.svg"
                              />
                            </div>
                            <div className="flex-1 relative tracking-[-0.02em] leading-[110%] font-medium">
                              Year 04
                            </div>
                          </div>
                          <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-lg text-gray-300 font-plus-jakarta-sans">
                            <div className="relative tracking-[-0.02em] leading-[110%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-full min-w-0">
                              ${results.withApptics.year4.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:flex-1 flex flex-col items-center justify-center gap-3">
                      <div className="self-stretch shadow-[0px_6px_4px_-2px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-white border-solid border-[1.5px] flex flex-col items-start justify-start p-4 gap-2 min-w-0">
                        <div className="self-stretch flex flex-row items-center justify-center gap-2">
                          <div className="w-4 relative h-4">
                            <Image
                              className="absolute h-[66.88%] w-full top-[16.67%] right-[3.96%] bottom-[16.46%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                              width={14.7}
                              height={10.7}
                              sizes="100vw"
                              alt=""
                              src="/assets/calculator/note4.svg"
                            />
                          </div>
                          <div className="flex-1 relative tracking-[-0.02em] leading-[110%]">
                            Passive Subscriber Income
                          </div>
                        </div>
                        <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-lg text-gray-300 font-plus-jakarta-sans">
                          <div className="relative tracking-[-0.02em] leading-[110%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-full min-w-0">
                            ${results.withApptics.passiveIncome.toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch shadow-[0px_6px_4px_-2px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-white border-solid border-[1.5px] flex flex-col items-start justify-start p-4 gap-2 min-w-0">
                        <div className="self-stretch flex flex-row items-center justify-center gap-2">
                          <div className="w-4 relative h-4">
                            <Image
                              className="absolute h-[91.88%] w-full top-[4.17%] right-[3.96%] bottom-[3.96%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                              width={14.7}
                              height={14.7}
                              sizes="100vw"
                              alt=""
                              src="/assets/calculator/currency-dollar-circle.svg"
                            />
                          </div>
                          <div className="flex-1 relative tracking-[-0.02em] leading-[110%] overflow-hidden text-ellipsis whitespace-nowrap">
                            Income per customer Acquired
                          </div>
                        </div>
                        <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-lg text-gray-300 font-plus-jakarta-sans">
                          <div className="relative tracking-[-0.02em] leading-[110%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-full min-w-0">
                            ${results.withApptics.incomePerCustomer.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full shadow-[0px_6px_4px_rgba(0,_0,_0,_0.08),_0px_0px_12px_5px_rgba(255,_255,_255,_0.5)_inset] rounded-[20px] bg-white border-aliceblue-300 border-solid border-[1px] flex flex-col items-center justify-center p-4 lg:p-5 gap-3 lg:gap-4">
                  <div className="self-stretch relative tracking-[-0.02em] leading-[110%] font-semibold text-xl text-gray-300">
                    Without Apptics
                  </div>
                  <div className="self-stretch flex-1 flex flex-col lg:flex-row items-start justify-start gap-3 text-sm text-gray-200 ">
                    <div className="w-full lg:w-[300px] flex flex-col items-center justify-center gap-3">
                      <div className="self-stretch flex flex-row items-center justify-start gap-3">
                        <div className="flex-1 rounded-xl bg-white border-gainsboro-200 border-solid border-[1px] flex flex-col items-start justify-start p-4 gap-2 min-w-0">
                          <div className="self-stretch relative tracking-[-0.02em] leading-[110%]">
                            Year 01
                          </div>
                          <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-lg text-gray-300 font-plus-jakarta-sans">
                            <div className="relative tracking-[-0.02em] leading-[110%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-full min-w-0">
                              ${results.withoutApptics.year1.toLocaleString()}
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 rounded-xl bg-white border-gainsboro-200 border-solid border-[1px] flex flex-col items-start justify-start p-4 gap-2 min-w-0">
                          <div className="self-stretch relative tracking-[-0.02em] leading-[110%]">
                            Year 02
                          </div>
                          <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-lg text-gray-300 font-plus-jakarta-sans">
                            <div className="relative tracking-[-0.02em] leading-[110%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-full min-w-0">
                              ${results.withoutApptics.year2.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-3">
                        <div className="flex-1 rounded-xl bg-white border-gainsboro-200 border-solid border-[1px] flex flex-col items-start justify-start p-4 gap-2 min-w-0">
                          <div className="self-stretch relative tracking-[-0.02em] leading-[110%]">
                            Year 03
                          </div>
                          <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-lg text-gray-300 font-plus-jakarta-sans">
                            <div className="relative tracking-[-0.02em] leading-[110%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-full min-w-0">
                              ${results.withoutApptics.year3.toLocaleString()}
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 rounded-xl bg-white border-gainsboro-200 border-solid border-[1px] flex flex-col items-start justify-start p-4 gap-2 min-w-0">
                          <div className="self-stretch relative tracking-[-0.02em] leading-[110%]">
                            Year 04
                          </div>
                          <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-lg text-gray-300 font-plus-jakarta-sans">
                            <div className="relative tracking-[-0.02em] leading-[110%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-full min-w-0">
                              ${results.withoutApptics.year4.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:flex-1 flex flex-col items-center justify-center gap-3">
                      <div className="self-stretch rounded-xl bg-white border-gainsboro-200 border-solid border-[1px] flex flex-col items-start justify-start p-4 gap-2 min-w-0">
                        <div className="self-stretch relative tracking-[-0.02em] leading-[110%]">
                          Passive Subscriber Income
                        </div>
                        <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-lg text-gray-300 font-plus-jakarta-sans">
                          <div className="relative tracking-[-0.02em] leading-[110%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-full min-w-0">
                            ${results.withoutApptics.passiveIncome.toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-xl bg-white border-gainsboro-200 border-solid border-[1px] flex flex-col items-start justify-start p-4 gap-2 min-w-0">
                        <div className="self-stretch relative tracking-[-0.02em] leading-[110%]">
                          Income per customer Acquired
                        </div>
                        <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-lg text-gray-300 font-plus-jakarta-sans">
                          <div className="relative tracking-[-0.02em] leading-[110%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-full min-w-0">
                            ${results.withoutApptics.incomePerCustomer.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Call to action section from Calculator component */}
            {!isMobile && (
              <div className="w-full max-w-[1020px] mx-auto shadow-[0px_8px_10px_-4px_rgba(0,_0,_0,_0.08),_0px_0px_12px_5px_rgba(255,_255,_255,_0.5)_inset] rounded-[20px] bg-white border-aliceblue-300 border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[26px] px-[30px] relative gap-[60px] z-[4] text-lg">
                <div className="w-[336.2px] absolute !!m-[0 important] right-0 h-[261px] overflow-hidden flex items-center justify-center z-[0]">
                  <Image
                    className="w-full h-full object-cover absolute left-[80px] top-[0px] [transform:scale(0.5)]"
                    width={336.2}
                    height={261}
                    sizes="100vw"
                    alt=""
                    src="/assets/calculator/Mask group (1).svg"
                  />
                </div>
                <div className="w-[464px] flex flex-col items-center justify-start gap-2 z-[1] text-gray-300">
                  <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                    Get Started With Apptics, Acheive ROI Like Never Before
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.02em] leading-[110%] text-gray-200">
                    Automate sales, boost retention, and unlock recurring revenue
                  </div>
                </div>
                <div className="w-[162.4px] rounded-full relative shadow-[0px_88px_25px_rgba(0,_0,_0,_0),_0px_56px_23px_rgba(0,_0,_0,_0.03),_0px_32px_19px_rgba(0,_0,_0,_0.1),_0px_14px_14px_rgba(0,_0,_0,_0.17),_0px_4px_8px_rgba(0,_0,_0,_0.2)] h-[50px] z-[2] text-base text-white">
                  <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_8px_4px_rgba(255,_255,_255,_0.16)_inset,_0px_-2px_0px_#000_inset,_0px_1px_1px_#000_inset,_0px_2px_1px_rgba(255,_255,_255,_0.25)_inset] rounded-[20px] [background:linear-gradient(88.67deg,_#1d1d1d,_#333_34.6%,_#3d3d3d_76.69%,_#1d1d1d)] h-[50px] overflow-hidden flex flex-row items-center justify-center py-3 px-6 box-border">
                    <div className="[filter:drop-shadow(0px_2px_2px_rgba(0,_0,_0,_0.48))] flex flex-row items-center justify-start gap-3">
                      <div className="relative tracking-[-0.03em] font-medium whitespace-nowrap">
                        Get Started
                      </div>
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
                  className="[transform:scale(0.5)] w-[336.2px] absolute !!m-[0 important] left-[-82.16px] h-[261px] object-cover z-[3]"
                  width={336.2}
                  height={261}
                  sizes="100vw"
                  alt=""
                  src="/assets/calculator/Mask group.svg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCalculator;
