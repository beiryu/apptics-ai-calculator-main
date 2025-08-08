"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const Frame2147228222: NextPage = () => {
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
      incomePerCustomer: 0
    },
    withoutApptics: {
      year1: 0,
      year2: 0,
      year3: 0,
      year4: 0,
      passiveIncome: 0,
      incomePerCustomer: 0
    }
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
    const incomePerCustomer = (year1WithApptics + year2WithApptics + year3WithApptics + year4WithApptics) / customerCount;
    
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
        incomePerCustomer: Math.round(incomePerCustomer)
      },
      withoutApptics: {
        year1: Math.round(year1WithoutApptics),
        year2: Math.round(year2WithoutApptics),
        year3: Math.round(year3WithoutApptics),
        year4: Math.round(year4WithoutApptics),
        passiveIncome: 0, // No passive income without Apptics
        incomePerCustomer: Math.round(year1WithoutApptics / customerCount)
      }
    });
  }, [customerCount, averageOrderValue, profitMargin, subscriptionValue]);
  
  // Calculate results when inputs change
  useEffect(() => {
    calculateResults();
  }, [customerCount, averageOrderValue, profitMargin, subscriptionValue, calculateResults]);
  
  // Handle slider mouse events for dragging
  const [isDragging, setIsDragging] = useState<boolean>(false);
  
  // Update slider position - now working with range 0-10000
  const updateSliderPosition = (clientX: number, slider: HTMLDivElement) => {
    const rect = slider.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(1, x / width));
    const value = Math.round(percentage * 10000); // Range from 0 to 10000
    setSubscriptionValue(value);
  };
  
  // Handle slider change on click
  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = e.currentTarget;
    updateSliderPosition(e.clientX, slider);
  };
  
  // Handle slider mouse down for drag start
  const handleMouseDown = () => {
    setIsDragging(true);
  };
  
  // Handle slider mouse move for dragging
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    
    const slider = document.querySelector('.slider-track') as HTMLDivElement;
    if (slider) {
      updateSliderPosition(e.clientX, slider);
    }
  }, [isDragging]);
  
  // Handle slider mouse up for drag end
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);
  
  // Add and remove event listeners for dragging
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);
  
  return (
    <div className="w-full relative min-h-[522px] text-left text-xl text-gray-300 font-plus-jakarta-sans">
      <div className="mx-auto px-4 py-6 rounded-2xl max-w-6xl w-full flex flex-col lg:flex-row items-start gap-4 lg:gap-6">
        <div className="w-full lg:w-[400px] h-auto lg:h-[532px] shadow-[0px_6px_4px_rgba(0,_0,_0,_0.08),_0px_0px_12px_5px_rgba(255,_255,_255,_0.5)_inset] rounded-[20px] bg-white border-aliceblue border-solid border-[1px] box-border overflow-hidden flex flex-col items-start justify-start p-5">
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
                      src="/bold.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                RIO Calculator
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
                      const value = parseInt(e.target.value.replace(/,/g, ''));
                      if (!isNaN(value)) {
                        setCustomerCount(value);
                      } else {
                        setCustomerCount(0);
                      }
                    }}
                  />
                  <div className="w-5 relative bg-gray-400 h-5">
                    <Image
                      className="absolute h-[91.5%] w-full top-[4.17%] right-[4.33%] bottom-[4.33%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                      width={18.3}
                      height={18.3}
                      sizes="100vw"
                      alt=""
                      src="shopping-cart1.svg"
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
                    <div className="relative flex items-center">
                      <span className="mr-0">$</span>
                      <input
                        type="text"
                        className="bg-transparent border-none outline-none pl-0"
                        style={{ width: `${averageOrderValue.toLocaleString().length * 0.6 + 0.5}em` }}
                        value={averageOrderValue.toLocaleString()}
                        onChange={(e) => {
                          const value = parseInt(e.target.value.replace(/,/g, ''));
                          if (!isNaN(value)) {
                            setAverageOrderValue(value);
                          } else {
                            setAverageOrderValue(0);
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-5 relative bg-gray-400 h-5">
                    <Image
                      className="absolute h-[91.5%] w-full top-[4.17%] right-[4.33%] bottom-[4.33%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                      width={18.3}
                      height={18.3}
                      sizes="100vw"
                      alt=""
                      src="currency-dollar-circle.svg"
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
                        style={{ width: `${profitMargin.toString().length * 0.6 + 0.5}em` }}
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
                  <div className="w-5 relative bg-gray-400 h-5 overflow-hidden shrink-0">
                    <Image
                      className="absolute h-[91.5%] w-full top-[4.17%] right-[4.33%] bottom-[4.33%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                      width={18.3}
                      height={18.3}
                      sizes="100vw"
                      alt=""
                      src="discount.svg"
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
                              const value = parseInt(e.target.value.replace(/,/g, ''));
                             if (!isNaN(value)) {
                                if(value >= 0 && value <= 10000) {
                                  setSubscriptionValue(value);
                                }
                             } else {
                               setSubscriptionValue(0);
                             }
                            }}
                        />
                      </div>
                    </div>
                    <div className="w-6 relative bg-gray-400 h-6 overflow-hidden shrink-0">
                      <Image
                        className="absolute h-[91.67%] w-full top-[4.17%] right-[4.17%] bottom-[4.17%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                        width={22}
                        height={22}
                        sizes="100vw"
                        alt=""
                        src="discount-check.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-2 flex flex-col items-start justify-start relative gap-2.5">
                    <div 
                      className="self-stretch relative shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08)_inset] rounded-[99px] bg-whitesmoke-200 h-2 overflow-hidden shrink-0 z-[0] cursor-pointer slider-track" 
                      onClick={handleSliderChange}
                      onMouseDown={handleMouseDown}
                    >
                      <div 
                        className="absolute top-[calc(50%_-_4px)] left-[0px] [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] h-2" 
                        style={{ width: `${(subscriptionValue / 10000) * 100}%` }}
                      />
                    </div>
                    <div 
                      className="w-3.5 absolute !!m-[0 important] top-[calc(50%_-_8px)] shadow-[-1px_1px_2px_rgba(0,_0,_0,_0.2)] rounded-[50%] bg-white border-whitesmoke-100 border-solid border-[0.5px] box-border h-3.5 z-[1] cursor-grab active:cursor-grabbing" 
                      style={{ left: `calc(${(subscriptionValue / 10000) * 100}% - ${subscriptionValue === 10000 ? '10px' : '1.75px'})` }}
                      onMouseDown={handleMouseDown}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex-1 flex flex-col items-stretch justify-between gap-4 lg:gap-8.5 text-lg h-auto lg:h-[532px]">
          <div className="w-full lg:h-[330px] h-[420px] shadow-[0px_6px_4px_rgba(0,_0,_0,_0.08),_0px_0px_12px_5px_rgba(255,_255,_255,_0.5)_inset] rounded-[20px] bg-white border-aliceblue border-solid border-[1px] overflow-hidden flex flex-col items-center justify-start p-4 lg:p-5 gap-3 lg:gap-4">
            <div className="self-stretch flex flex-row items-center justify-start gap-0.5">
              <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                Your Business with
              </div>
              <div className="w-[26.4px] relative rounded-lg h-[26.4px] shrink-0 flex items-center justify-center">
                <Image
                  className="w-full h-full shrink-0 object-cover absolute left-[0px] top-[13px] [transform:scale(1.848)]"
                  width={26.4}
                  height={26.4}
                  sizes="100vw"
                  alt=""
                  src="logo.svg"
                />
              </div>
              <div className="relative tracking-[-0.02em] leading-[110%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Apptics
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-col lg:flex-row items-start justify-start gap-3 text-sm text-gray-200 ">
              <div className="w-full lg:w-[260px] flex flex-col items-center justify-center gap-3">
                <div className="self-stretch flex flex-row items-center justify-start gap-3">
                  <div className="flex-1 shadow-[0px_6px_4px_-2px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-white border-solid border-[1.5px] flex flex-col items-start justify-start p-4 gap-2">
                    <div className="self-stretch flex flex-row items-center justify-center gap-1.5">
                      <div className="w-4 relative bg-gray-400 h-4">
                        <Image
                          className="absolute h-[91.88%] w-full top-[4.17%] right-[8.54%] bottom-[3.96%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                          width={13.3}
                          height={14.7}
                          sizes="100vw"
                          alt=""
                          src="calendar.svg"
                        />
                      </div>
                      <div className="flex-1 relative tracking-[-0.02em] leading-[110%] font-medium">
                        Year 01
                      </div>
                    </div>
                    <div className="relative text-lg tracking-[-0.02em] leading-[110%] font-semibold font-plus-jakarta-sans text-gray-300 text-center">
                      ${results.withApptics.year1.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex-1 shadow-[0px_6px_4px_-2px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-white border-solid border-[1.5px] flex flex-col items-start justify-start p-4 gap-2">
                    <div className="self-stretch flex flex-row items-center justify-center gap-1.5">
                      <div className="w-4 relative bg-gray-400 h-4">
                        <Image
                          className="absolute h-[91.88%] w-full top-[4.17%] right-[8.54%] bottom-[3.96%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                          width={13.3}
                          height={14.7}
                          sizes="100vw"
                          alt=""
                          src="calendar.svg"
                        />
                      </div>
                      <div className="flex-1 relative tracking-[-0.02em] leading-[110%] font-medium">
                        Year 02
                      </div>
                    </div>
                    <div className="relative text-lg tracking-[-0.02em] leading-[110%] font-semibold font-plus-jakarta-sans text-gray-300 text-center">
                      ${results.withApptics.year2.toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-3">
                  <div className="flex-1 shadow-[0px_6px_4px_-2px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-white border-solid border-[1.5px] flex flex-col items-start justify-start p-4 gap-2">
                    <div className="self-stretch flex flex-row items-center justify-center gap-1.5">
                      <div className="w-4 relative bg-gray-400 h-4">
                        <Image
                          className="absolute h-[91.88%] w-full top-[4.17%] right-[8.54%] bottom-[3.96%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                          width={13.3}
                          height={14.7}
                          sizes="100vw"
                          alt=""
                          src="calendar.svg"
                        />
                      </div>
                      <div className="flex-1 relative tracking-[-0.02em] leading-[110%] font-medium">
                        Year 03
                      </div>
                    </div>
                    <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-center text-lg text-gray-300 font-plus-jakarta-sans">
                      <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                        ${results.withApptics.year3.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 shadow-[0px_6px_4px_-2px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-white border-solid border-[1.5px] flex flex-col items-start justify-start p-4 gap-2">
                    <div className="self-stretch flex flex-row items-center justify-center gap-1.5">
                      <div className="w-4 relative bg-gray-400 h-4">
                        <Image
                          className="absolute h-[91.88%] w-full top-[4.17%] right-[8.54%] bottom-[3.96%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                          width={13.3}
                          height={14.7}
                          sizes="100vw"
                          alt=""
                          src="calendar.svg"
                        />
                      </div>
                      <div className="flex-1 relative tracking-[-0.02em] leading-[110%] font-medium">
                        Year 04
                      </div>
                    </div>
                    <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-center text-lg text-gray-300 font-plus-jakarta-sans">
                      <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                        ${results.withApptics.year4.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:flex-1 flex flex-col items-center justify-center gap-3">
                <div className="self-stretch shadow-[0px_6px_4px_-2px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-white border-solid border-[1.5px] flex flex-col items-start justify-start p-4 gap-2">
                  <div className="self-stretch flex flex-row items-center justify-center gap-2">
                    <div className="w-4 relative bg-gray-400 h-4">
                      <Image
                        className="absolute h-[66.88%] w-full top-[16.67%] right-[3.96%] bottom-[16.46%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                        width={14.7}
                        height={10.7}
                        sizes="100vw"
                        alt=""
                        src="note4.svg"
                      />
                    </div>
                    <div className="flex-1 relative tracking-[-0.02em] leading-[110%]">
                      Passive Subscriber Income
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-center text-lg text-gray-300 font-plus-jakarta-sans">
                    <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                      ${results.withApptics.passiveIncome.toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_6px_4px_-2px_rgba(35,_40,_51,_0.02),_0px_1px_2px_-0.4px_rgba(35,_40,_51,_0.08)] rounded-xl bg-gray-100 border-white border-solid border-[1.5px] flex flex-col items-start justify-start p-4 gap-2">
                  <div className="self-stretch flex flex-row items-center justify-center gap-2">
                    <div className="w-4 relative bg-gray-400 h-4">
                      <Image
                        className="absolute h-[91.88%] w-full top-[4.17%] right-[3.96%] bottom-[3.96%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                        width={14.7}
                        height={14.7}
                        sizes="100vw"
                        alt=""
                        src="currency-dollar-circle.svg"
                      />
                    </div>
                    <div className="flex-1 relative tracking-[-0.02em] leading-[110%]">
                      Income per customer Acquired
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-center text-lg text-gray-300 font-plus-jakarta-sans">
                    <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                      ${results.withApptics.incomePerCustomer.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full shadow-[0px_6px_4px_rgba(0,_0,_0,_0.08),_0px_0px_12px_5px_rgba(255,_255,_255,_0.5)_inset] rounded-[20px] bg-white border-aliceblue border-solid border-[1px] flex flex-col items-center justify-center p-4 lg:p-5 gap-3 lg:gap-4">
            <div className="self-stretch relative tracking-[-0.02em] leading-[110%] font-semibold">
              Without Apptics
            </div>
            <div className="self-stretch flex-1 flex flex-col lg:flex-row items-start justify-start gap-3 text-sm text-gray-200 ">
              <div className="w-full lg:w-[260px] flex flex-col items-center justify-center gap-3">
                <div className="self-stretch flex flex-row items-center justify-start gap-3">
                  <div className="flex-1 rounded-xl bg-white border-gainsboro-200 border-solid border-[1px] flex flex-col items-start justify-start p-4 gap-2">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[110%]">
                      Year 01
                    </div>
                    <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-center text-lg text-gray-300 font-plus-jakarta-sans">
                      <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                        ${results.withoutApptics.year1.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-xl bg-white border-gainsboro-200 border-solid border-[1px] flex flex-col items-start justify-start p-4 gap-2">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[110%]">
                      Year 02
                    </div>
                    <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-center text-lg text-gray-300 font-plus-jakarta-sans">
                      <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                        ${results.withoutApptics.year1.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-3">
                  <div className="flex-1 rounded-xl bg-white border-gainsboro-200 border-solid border-[1px] flex flex-col items-start justify-start p-4 gap-2">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[110%]">
                      Year 03
                    </div>
                    <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-center text-lg text-gray-300 font-plus-jakarta-sans">
                      <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                        ${results.withoutApptics.year1.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-xl bg-white border-gainsboro-200 border-solid border-[1px] flex flex-col items-start justify-start p-4 gap-2">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[110%]">
                      Year 04
                    </div>
                    <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-center text-lg text-gray-300 font-plus-jakarta-sans">
                      <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                        ${results.withoutApptics.year1.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:flex-1 flex flex-col items-center justify-center gap-3">
                <div className="self-stretch rounded-xl bg-white border-gainsboro-200 border-solid border-[1px] flex flex-col items-start justify-start p-4 gap-2">
                  <div className="self-stretch relative tracking-[-0.02em] leading-[110%]">
                    Passive Subscriber Income
                  </div>
                  <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-center text-lg text-gray-300 font-plus-jakarta-sans">
                    <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                      ${results.withoutApptics.passiveIncome.toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-xl bg-white border-gainsboro-200 border-solid border-[1px] flex flex-col items-start justify-start p-4 gap-2">
                  <div className="self-stretch relative tracking-[-0.02em] leading-[110%]">
                    Income per customer Acquired
                  </div>
                  <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-start text-center text-lg text-gray-300 font-plus-jakarta-sans">
                    <div className="relative tracking-[-0.02em] leading-[110%] font-semibold">
                      ${results.withoutApptics.incomePerCustomer.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame2147228222;
