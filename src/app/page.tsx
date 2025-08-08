"use client"
import React, { useState, useEffect } from 'react';
import { CustomersIcon, DollarIcon, ChartIcon, SubscriptionIcon , RoiIcon, AppticsIcon, IncomeIcon, GrowthIcon, MoneyIcon, ArrowRightIcon} from '../icons';

const App = () => {
  const [customers, setCustomers] = useState(5000);
  const [aov, setAOV] = useState(50);
  const [profitMargin, setProfitMargin] = useState(20);
  const [subscription, setSubscription] = useState(60);

  // State for text inputs
  const [customersInput, setCustomersInput] = useState(customers.toLocaleString());
  const [aovInput, setAovInput] = useState(aov.toLocaleString());
  const [profitMarginInput, setProfitMarginInput] = useState(profitMargin.toLocaleString());
  const [subscriptionInput, setSubscriptionInput] = useState(subscription.toLocaleString());

  useEffect(() => { setCustomersInput(customers.toLocaleString()); }, [customers]);
  useEffect(() => { setAovInput(aov.toLocaleString()); }, [aov]);
  useEffect(() => { setProfitMarginInput(profitMargin.toLocaleString()); }, [profitMargin]);
  useEffect(() => { setSubscriptionInput(subscription.toLocaleString()); }, [subscription]);

  // Handle input change with comma formatting and real-time slider update
  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>, valueSetter: React.Dispatch<React.SetStateAction<number>>, min: number, max: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove all non-numeric characters except commas
    const value = e.target.value.replace(/[^\d,]/g, '');
    setter(value);
    
    // Update slider value in real-time
    const numericValue = parseInt(value.replace(/,/g, ''), 10);
    if (!isNaN(numericValue) && numericValue >= min && numericValue <= max) {
      valueSetter(numericValue);
    }
  };

  // Handle input blur with validation and formatting
  const handleInputBlur = (
    value: string,
    valueSetter: React.Dispatch<React.SetStateAction<number>>,
    inputSetter: React.Dispatch<React.SetStateAction<string>>,
    min: number,
    max: number
  ) => () => {
    // Remove commas and convert to number
    const numericValue = parseInt(value.replace(/,/g, ''), 10);
    if (isNaN(numericValue) || numericValue < min) {
      valueSetter(min);
      inputSetter(min.toLocaleString());
    } else if (numericValue > max) {
      valueSetter(max);
      inputSetter(max.toLocaleString());
    } else {
      valueSetter(numericValue);
      inputSetter(numericValue.toLocaleString());
    }
  };

  // Slider percentage calculations
  const customersPercentage = ((customers - 250) / (50000 - 250)) * 100;
  const aovPercentage = ((aov - 5) / (500 - 5)) * 100;
  const profitMarginPercentage = profitMargin;
  const subscriptionPercentage = ((subscription - 10) / (100 - 10)) * 100;

  // Base Calculation Logic
  const monthlyRevenue = customers * aov * (profitMargin / 100);
  const annualRevenue = monthlyRevenue * 12;

  // Enhancement Multipliers
  const isHighTier = aov >= 46;
  const growthRate = isHighTier ? 384.51 : 274.67;
  const passiveRatio = isHighTier ? 1.17525 : 0.839806;
  const BASE_SUBSCRIPTION = 30;
  const subscriptionFactor = subscription / BASE_SUBSCRIPTION;


  // Calculate Enhanced Growth (With Apptics)
  const year1 = Math.round(customers * growthRate * subscriptionFactor);
  const year2 = Math.round(year1 * 2.363);
  const year3 = Math.round(year2 * 1.2);
  const year4 = Math.round(year3 * 1.101);
  const year5 = Math.round(year4 * 1.1485);
  const year6 = Math.round(year5 * 1.16);

  // Calculate Passive Income  
  const maxSubscriptionRevenue = customers * subscription * 12;  
  const passive = maxSubscriptionRevenue * passiveRatio;
  const incomePerCustomer = Math.round((year1 / (customers * 12)) * 10);

  // Calculate Standard Growth (Without Apptics)
  const normalAnnual = Math.round(annualRevenue);
  const normalIncomePerCustomer = Math.round((normalAnnual / (customers * 12)) );


  // Calculate meter percentage for visual representation (10m max)
  const maxPassive = 10000000; // 10m max for better visual representation
  const meterPercentage = Math.min((passive / maxPassive) * 100, 100);

  // AOV Tier display
  // const aovTier = isHighTier ? "High(≥$46)" : "Low(<$46)";
  // const currentExample = `${customers} × ${aov} × ${profitMargin}% × 12 = ${annualRevenue.toLocaleString()}`;

  return (
    <div className="bg-white text-[#1E1E1E]  max-w-[1140px] mx-auto font-sans border border-[#1818180D] rounded-[15px] p-2  shadow-[0px_1px_2px_0px_rgba(10,10,10,0.05)]"> 
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Controls Panel */}
        <div className="p-4 rounded-[10px]  border border-[#1818180D] lg:col-span-4 bg-[#FAFAFA]">
          <h2 className="text-[#1E1E1E] text-[16px] font-medium mb-6 flex items-center gap-2 ">
            <span className="text-[#1E1E1E]">    <RoiIcon style={{width: '30', height: '100%', border: '1px solid #EEE', borderRadius:'6.667px'}} /></span>
            Calculate ROI
          </h2> 
          
          <div className="space-y-6">
            <div>
              <label className="block text-[14px] text-[#1E1E1E99]   font-medium  mb-2">
                Customers per month
              </label>
              <div className="bg-white flex items-center justify-between gap-2 text-[14px] border border-[#0A0A0A1A] rounded-lg p-2 font-medium mt-1 mb-3 h-[44px]">
                   <input type="text" value={customersInput} onChange={handleInputChange(setCustomersInput, setCustomers, 250, 50000)} onBlur={handleInputBlur(customersInput, setCustomers, setCustomersInput, 250, 50000)} className="flex-grow bg-transparent font-medium focus:outline-none" />
                    <CustomersIcon style={{width: '18', height: '100%'}} /></div>
              <div className="flex items-center gap-3">
                <input 
                  type="range" 
                  min="250" 
                  max="50000" 
                  value={customers} 
                  onChange={e => setCustomers(+e.target.value)} 
                  className="flex-1 h-[6px] mt-[8px] bg-blue-200 rounded-lg appearance-none cursor-pointer slider-custom"
                  style={{
                    background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${customersPercentage}%, #F0F0F0 ${customersPercentage}%, #F0F0F0 100%)`
                  }}
                />
            
              </div>
             
            </div>

            <div>
            <label className="block text-[14px] text-[#1E1E1E99]  font-medium  mb-2">
                Average Order Value
              </label>
              <div className="bg-white flex items-center justify-between gap-2 text-[14px] border border-[#0A0A0A1A] rounded-lg p-2 font-medium mt-1 mb-3 h-[44px]">
               <span className="font-semibold text-gray-400">$</span><input type="text" value={aovInput} onChange={handleInputChange(setAovInput, setAOV, 5, 500)} onBlur={handleInputBlur(aovInput, setAOV, setAovInput, 5, 500)} className="flex-grow bg-transparent font-medium focus:outline-none" />
                <DollarIcon style={{width: '18', height: '100%'}} />

              </div>
              <div className="flex items-center gap-3">
                <input 
                  type="range" 
                  min="5" 
                  max="500" 
                  value={aov} 
                  onChange={e => setAOV(+e.target.value)} 
                  className="flex-1 h-[6px] mt-[8px] bg-green-200 rounded-lg appearance-none cursor-pointer slider-custom"
                  style={{
                    background: `linear-gradient(to right, #10B981 0%, #10B981 ${aovPercentage}%, #F0F0F0 ${aovPercentage}%, #F0F0F0 100%)`
                  }}
                />
            
              </div>
            
            </div>

            <div>
            <label className="block text-[14px] text-[#1E1E1E99]   font-medium  mb-2">
                Profit Margin
              </label>
              <div className="bg-white flex items-center justify-between gap-2 text-[14px] border border-[#0A0A0A1A] rounded-lg p-2 font-medium mt-1 mb-3 h-[44px]">
              <span className="font-semibold text-gray-400">%</span><input type="text" value={profitMarginInput} onChange={handleInputChange(setProfitMarginInput, setProfitMargin, 0, 100)} onBlur={handleInputBlur(profitMarginInput, setProfitMargin, setProfitMarginInput, 0, 100)} className="flex-grow bg-transparent font-medium focus:outline-none" />
                <ChartIcon style={{width: '14', height: '100%'}} />
                </div>
              <div className="flex items-center gap-3">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={profitMargin} 
                  onChange={e => setProfitMargin(+e.target.value)} 
                  className="flex-1 h-[6px] mt-[8px] bg-orange-200 rounded-lg appearance-none cursor-pointer slider-custom"
                  style={{
                    background: `linear-gradient(to right, #F97316 0%, #F97316 ${profitMarginPercentage}%, #F0F0F0 ${profitMarginPercentage}%, #F0F0F0 100%)`
                  }}
                />
            
              </div>
             
            </div>

            <div>
            <label className="block text-[14px] text-[#1E1E1E99]   font-medium  mb-2">
                Monthly Subscription Value
              </label>
              <div className="bg-white flex items-center justify-between gap-2 text-[14px] border border-[#0A0A0A1A] rounded-lg p-2 font-medium mt-1 mb-3 h-[44px]">
               <span className="font-semibold text-gray-400">$</span><input type="text" value={subscriptionInput} onChange={handleInputChange(setSubscriptionInput, setSubscription, 10, 100)} onBlur={handleInputBlur(subscriptionInput, setSubscription, setSubscriptionInput, 10, 100)} className="flex-grow bg-transparent font-medium focus:outline-none" />
                <SubscriptionIcon style={{width: '18', height: '100%'}} />
                </div>
              <div className="flex items-center gap-3">
                <input 
                  type="range" 
                  min="10" 
                  max="100" 
                  step="5"
                  value={subscription} 
                  onChange={e => setSubscription(+e.target.value)} 
                  className="flex-1 h-[6px] mt-[8px] bg-purple-200 rounded-lg appearance-none cursor-pointer slider-custom"
                  style={{
                    background: `linear-gradient(to right, #8B5CF6 0%, #8B5CF6 ${subscriptionPercentage}%, #F0F0F0 ${subscriptionPercentage}%, #F0F0F0 100%)`
                  }}
                />
               
              </div>
              
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-8  ">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            {/* Without Apptics */}
            <div>
              <div className="without-apptics-container bg-[#FAFAFA] p-4 rounded-xl  border border-[#1818180D]">
              <div className="without-apptics-header flex items-center justify-between font-medium">
                <h3 className="text-[16px] text-gray-800 mb-4">Without Apptics</h3>
                <p className="text-right mb-3 text-[14px] text-[#1E1E1E99]">No Growth Scenario</p>
              </div>  
              <div className="without-apptics-content ">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 justify-start mb-2">
                <div className="year-block flex items-center justify-start gap-2 text-[14px]">
                 <p className='text-[#1E1E1E99]   font-medium '>Year 01</p> <span className="shadow-sm h-[32px] bg-[#fff] font-medium border border-[#0A0A0A1A] rounded-lg  opacity-90 px-2 py-1 text-center w-[110px]">${normalAnnual.toLocaleString()}</span>
                </div>
                  <div className="year-block flex items-center justify-start gap-2 text-[14px]">
                  <p className='text-[#1E1E1E99]  font-medium '>Year 02</p> <span className="shadow-sm h-[32px] bg-[#fff] font-medium border border-[#0A0A0A1A] rounded-lg  opacity-90 px-2 py-1 text-center w-[110px]">${normalAnnual.toLocaleString()}</span>
                  </div>
                  <div className="year-block flex items-center justify-start gap-2 text-[14px]">
                 <p className='text-[#1E1E1E99]   font-medium '>Year 03</p> <span className="shadow-sm h-[32px] bg-[#fff] font-medium border border-[#0A0A0A1A] rounded-lg  opacity-90 px-2 py-1 text-center w-[110px]">${normalAnnual.toLocaleString()}</span>
                </div>
                <div className="year-block flex items-center justify-start gap-2 text-[14px]">
                 <p className='text-[#1E1E1E99]  font-medium '>Year 04</p> <span className=" shadow-sm h-[32px] bg-[#fff] font-medium border border-[#0A0A0A1A] rounded-lg opacity-90 px-2 py-1 text-center w-[110px]">${normalAnnual.toLocaleString()}</span>

          


                </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-start">
                <div className="year-block flex items-center justify-start gap-2 text-[14px]">
                 <p className='text-[#1E1E1E99] font-medium flex-shrink-0'>Passive Subscriber Income</p> <span className="bg-white font-medium w-full justify-center flex items-center gap-2  border border-[#0A0A0A1A] rounded-lg px-2 py-1  shadow-sm h-[32px] flex-1">$0.00

                 </span>
                </div>
                  <div className="year-block flex items-center justify-start gap-2 text-[14px]">
                  <p className='text-[#1E1E1E99] font-medium flex-shrink-0'> Income per customer acquired</p> <span className="bg-white font-medium w-full justify-center flex items-center gap-2  border border-[#0A0A0A1A] rounded-lg px-2 py-1  shadow-sm h-[32px] flex-1">${normalIncomePerCustomer}</span>
                  </div>
         
         
                </div>
              </div>            
              </div> 
            </div>

            {/* With Apptics */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              <div className='with-apptics-left p-4 lg:p-0'>
              <h3 className="text-[16px] font-medium text-gray-800 mb-1 pl-4 flex items-center gap-2">
                With the Power of 
                <span className="       text-xs font-bold"> <AppticsIcon style={{width: '30', height: '100%'}} /></span>
                Apptics
              </h3>
              
              {/* Dynamic Half-Circle Meter */}
              <div className="relative dynamic-meter pl-[20px]">
                <div className=" mx-auto relative">
                  <svg className="mx-auto" viewBox="0 0 190 99" preserveAspectRatio="none">
                    {/* Background arc */} 
                    <path
                      d="M 14 90 A 80 75 0 0 1 175 90"
                      fill="none"
                      stroke="#B7D6FE"
                      strokeWidth="15"
                      strokeLinecap="round"
                      
                    />
                    {/* Gradient definition */}
                    <defs>
                      <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="50%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                    {/* Progress arc */}
                    <path
                      d="M 14 90 A 80 75 0 0 1 175 90"
                      fill="none"
                      stroke="url(#arcGradient)"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeDasharray={`${(meterPercentage/100) * 251.33} 251.33`}
                      className="transition-all duration-500 ease-out"
                    />
                  </svg>
                  
                  {/* Center content */}
                  <div className="absolute bottom-0 inset-16 flex flex-col items-center justify-center">
                    <div className="text-center w-full flex flex-col items-center justify-center gap-2">
                      <div className="text-xs text-center"><MoneyIcon style={{width: '24', height: '100%', margin: '0 auto'}} /></div>
                      <div className="text-[14px] font-medium text-[#1E1E1E99]">Passive Subscriber Income</div>
                   
                      <div className="bg-white text-[14px] font-medium w-[130px] justify-center flex items-center gap-2  border border-[#0A0A0A1A] rounded-lg px-2 py-1  shadow-sm h-[32px] mx- auto  ">
                        ${Math.round(passive).toLocaleString()}
                      </div>

                    
                    </div>
                  </div>
                </div>
              </div>

              <div className="chart-bottom">
              <div className="flex items-center justify-between gap-2 text-[14px] font-medium text-[#1E1E1E99] mt-4">
              <span className='flex items-center gap-2 lg:ml-5'> <IncomeIcon style={{width: '28', height: '100%'}} /> Income per customer acquired:  </span>
              
              <span className="bg-white text-[14px] font-medium w-[80px] justify-center flex items-center gap-2  border border-[#0A0A0A1A] rounded-lg px-2 py-1 text-[#1E1E1E]  shadow-sm h-[32px] mx- auto ">${incomePerCustomer}</span>
                      </div>
              </div>
              </div>
              <div className='with-apptics-right'>
     {/* Growth projections */}
     <div className="bg-[#FAFAFA] p-4 rounded-xl border border-[#1818180D]">
                <div className="text-[16px] font-medium text-gray-800 mb-4">Unmatched Year On Year Growth</div>
 
                <div className="grid grid-cols-2   gap-x-6 gap-y-2 text-[14px] font-medium">
                 
                    <div className="flex  text-left  flex flex-col items-start gap-2">
                      <span className="text-[#1E1E1E99]">Year 01</span>
                      <div className="bg-white font-medium w-full justify-center flex items-center gap-2  border border-[#0A0A0A1A] rounded-lg px-2 py-1  shadow-sm h-[32px]"> 
                        <GrowthIcon style={{width: '16', height: '100%'}} /> <span className='text-[#1E1E1E]'>${year1.toLocaleString()}
                          </span>
                          </div>
                    </div>
                    <div className="flex  text-left  flex flex-col items-start gap-2">
                      <span className="text-[#1E1E1E99]">Year 02</span>
                      <div className="bg-white font-medium w-full justify-center flex items-center gap-2  border border-[#0A0A0A1A] rounded-lg px-2 py-1  shadow-sm h-[32px]">${year2.toLocaleString()}</div>
                    </div>
                    <div className="flex  text-left  flex flex-col items-start gap-2">
                      <span className="text-[#1E1E1E99]">Year 03</span>
                      <div className="bg-white font-medium w-full justify-center flex items-center gap-2  border border-[#0A0A0A1A] rounded-lg px-2 py-1  shadow-sm h-[32px]">${year3.toLocaleString()}</div>
                    </div>
                    <div className="flex  text-left  flex flex-col items-start gap-2">
                      <span className="text-[#1E1E1E99]">Year 04</span>
                      <div className="bg-white font-medium w-full justify-center flex items-center gap-2  border border-[#0A0A0A1A] rounded-lg px-2 py-1  shadow-sm h-[32px]">${year4.toLocaleString()}</div>
                    </div>
                    <div className="flex  text-left  flex flex-col items-start gap-2">
                      <span className="text-[#1E1E1E99]">Year 05</span>
                      <div className="bg-white font-medium w-full justify-center flex items-center gap-2  border border-[#0A0A0A1A] rounded-lg px-2 py-1  shadow-sm h-[32px]">${year5.toLocaleString()}</div>
                    </div>
                    <div className="flex  text-left  flex flex-col items-start gap-2">
                      <span className="text-[#1E1E1E99]">Year 06</span>
                      <div className="bg-white font-medium w-full justify-center flex items-center gap-2  border border-[#0A0A0A1A] rounded-lg px-2 py-1  shadow-sm h-[32px]">${year6.toLocaleString()}</div>
                    </div>
                 
                
                </div>
              </div>
              </div>

         

         
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[#FAFAFA]  border border-[#1818180D] p-6 rounded-xl lg:text-center flex flex-col lg:flex-row lg:items-center justify-between mt-4">
            <div className="cta-left text-left">
            <h4 className="font-medium text-[16px] mb-1 flex  items-center   justify-center gap-2">
              <span><AppticsIcon style={{width: '26', height: '100%'}} /></span>
              Get Started With Apptics, Acheive ROI Like Never Before
            </h4>
            <p className="text-[16px] text-[#1E1E1E99] mb-0">
              Automate sales, boost retention, and unlock recurring revenue
            </p>
              </div>
           <div className="cta-right mt-4 lg:mt-0">
            <button className="text-white px-[14px] w-full h-[40px] flex items-center justify-center lg:w-auto cursor-pointer py-3 rounded-[10px] text-[14px] font-normal hover:bg-gray-800 transition-colors group" style={{ 
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.15) 100%), #1E1E1E',
              boxShadow: 'inset 0px 8px 4px rgba(255, 255, 255, 0.15)'
            }}>
            Book A Strategy Call <ArrowRightIcon className="group-hover:text-white transition-colors" style={{width: '6', height: '100%', marginLeft: '10'}} />
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;