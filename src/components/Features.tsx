import Image from "next/image";

const Features = () => {
  return (
    <>
      <div className="self-stretch flex flex-col items-center justify-start z-[3]">
        <div className="w-[1280px] flex flex-col items-center justify-start py-20 px-0 box-border gap-[60px]">
          <div className="w-[1026px] flex flex-col items-center justify-start relative gap-6">
            <div className="shadow-[0px_8px_8px_-4px_rgba(0,_0,_0,_0.12),_0px_3px_2px_-1px_rgba(0,_0,_0,_0.08)] rounded-[99px] bg-white border-gainsboro-400 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-center py-2 px-4 z-[0]">
              <div className="relative tracking-[-0.04em] leading-[130%]">Features</div>
            </div>
            <b className="self-stretch relative text-5xl tracking-[-0.02em] leading-[110%] font-plus-jakarta-sans z-[1] text-gray-300">
              <span className="whitespace-pre-wrap">{`Transform Your eCom Store into a Subscription         `}</span>
              <span className="text-transparent !bg-clip-text [background:linear-gradient(91.1deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Powerhouse
              </span>
            </b>
            <div className="w-[722.8px] relative text-lg tracking-[-0.01em] leading-[150%] text-gray-200 inline-block z-[2]">
              Everything you need to build and scale subscriptions – all in one platform.
            </div>
            <div className="w-[54.2px] !!m-[0 important] absolute top-[115.57px] left-[493.91px] rounded-2xl h-[54.2px] shrink-0 overflow-hidden flex items-center justify-center z-[3]">
              <Image
                className="w-full h-full overflow-hidden shrink-0 object-cover absolute left-[0px] top-[26px] [transform:scale(1.81)]"
                width={54.2}
                height={54.2}
                sizes="100vw"
                alt=""
                src="/assets/features/Frame 2147227937.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-5 text-left text-xl text-gray-300 font-plus-jakarta-sans">
            <div className="flex-1 shadow-[0px_24px_35px_-12px_rgba(27,_40,_66,_0.05),_0px_3px_1px_rgba(255,_255,_255,_0.25)_inset] rounded-2xl bg-gray-100 border-white border-solid border-[0.8px] box-border h-[420px] overflow-hidden flex flex-col items-start justify-end">
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start p-6 gap-1">
                <div className="self-stretch relative leading-[150%] font-semibold">{`Create & Manage Subscriptions`}</div>
                <div className="self-stretch relative text-base tracking-[-0.02em] leading-[140%] font-inter text-gray-200">
                  Create and manage subscription programs that increase your revenue, without any
                  hassle
                </div>
              </div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start py-3.5 px-6 text-center text-base font-inter">
                <div className="self-stretch flex flex-col items-end justify-start gap-2">
                  <div className="self-stretch shadow-[0px_6px_4px_rgba(255,_255,_255,_0.36)_inset,_0px_2px_2px_-1px_rgba(11,_32,_103,_0.05),_0px_0px_30px_-4px_rgba(0,_0,_0,_0.03)] rounded-2xl bg-gray-1600 border-whitesmoke-300 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-start p-3 relative gap-[14.5px]">
                    <Image
                      className="bg-whitesmoke-200 rounded-full p-4 w-[55px] relative max-h-full overflow-hidden shrink-0 z-[0]"
                      width={55}
                      height={55}
                      sizes="100vw"
                      alt=""
                      src="/assets/features/Layer_1.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-[1.9px] z-[1]">
                      <div className="relative tracking-[-0.01em] font-medium">Shopify</div>
                      <div className="relative text-sm tracking-[-0.01em] font-medium text-gray-200">
                        New Subscriber - $39.99
                      </div>
                    </div>
                    <div className="!!m-[0 important] absolute top-[0px] right-[0.3px] overflow-hidden flex flex-row items-center justify-center p-3 z-[2] text-xs text-gray-200">
                      <div className="relative tracking-[-0.01em]">1m ago</div>
                    </div>
                  </div>
                  <div className="self-stretch shadow-[0px_6px_4px_rgba(255,_255,_255,_0.36)_inset,_0px_2px_2px_-1px_rgba(11,_32,_103,_0.05),_0px_0px_30px_-4px_rgba(0,_0,_0,_0.03)] rounded-2xl bg-gray-1600 border-whitesmoke-300 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-start p-3 relative gap-[14.5px]">
                    <Image
                      className="bg-whitesmoke-200 rounded-full p-4 w-[55px] relative max-h-full overflow-hidden shrink-0 z-[0]"
                      width={55}
                      height={55}
                      sizes="100vw"
                      alt=""
                      src="/assets/hero/Layer_1.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-[1.9px] z-[1]">
                      <div className="relative tracking-[-0.01em] font-medium">Shopify</div>
                      <div className="relative text-sm tracking-[-0.01em] font-medium text-gray-200">
                        New Subscriber - $49.99
                      </div>
                    </div>
                    <div className="!!m-[0 important] absolute top-[0px] right-[0.3px] overflow-hidden flex flex-row items-center justify-center p-3 z-[2] text-xs text-gray-200">
                      <div className="relative tracking-[-0.01em]">1m ago</div>
                    </div>
                  </div>
                  <div className="self-stretch shadow-[0px_6px_4px_rgba(255,_255,_255,_0.36)_inset,_0px_2px_2px_-1px_rgba(11,_32,_103,_0.05),_0px_0px_30px_-4px_rgba(0,_0,_0,_0.03)] rounded-2xl bg-gray-1600 border-whitesmoke-300 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-start p-3 relative gap-[14.5px]">
                    <Image
                      className="bg-whitesmoke-200 rounded-full p-4 w-[55px] relative max-h-full overflow-hidden shrink-0 z-[0]"
                      width={55}
                      height={55}
                      sizes="100vw"
                      alt=""
                      src="/assets/hero/Layer_1.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-[1.9px] z-[1]">
                      <div className="relative tracking-[-0.01em] font-medium">Shopify</div>
                      <div className="relative text-sm tracking-[-0.01em] font-medium text-gray-200">
                        New Subscriber - $39.99
                      </div>
                    </div>
                    <div className="!!m-[0 important] absolute top-[0px] right-[0.3px] overflow-hidden flex flex-row items-center justify-center p-3 z-[2] text-xs text-gray-200">
                      <div className="relative tracking-[-0.01em]">1m ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 shadow-[0px_24px_35px_-12px_rgba(27,_40,_66,_0.05),_0px_3px_1px_rgba(255,_255,_255,_0.25)_inset] rounded-2xl bg-gray-100 border-white border-solid border-[0.8px] box-border h-[420px] overflow-hidden flex flex-col items-start justify-end">
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start p-6 gap-1">
                <div className="self-stretch relative leading-[150%] font-semibold">{` Build Custom Checkouts & Upsells`}</div>
                <div className="self-stretch relative text-base tracking-[-0.02em] leading-[140%] font-inter text-gray-200">
                  Convert more visitors with smart checkouts, built-in upsells, and flexible payment
                  options.
                </div>
              </div>
              <div className="self-stretch flex-1 relative overflow-hidden text-[11px] text-darkslategray-100 font-inter">
                <div className="absolute top-[10px] left-[calc(50%_-_149.98px)] rounded-xl [background:linear-gradient(180deg,_#ebebeb,_rgba(255,_255,_255,_0))] border-white border-solid border-[1px] box-border w-[300px] flex flex-col items-start justify-start p-4 gap-3">
                  <div className="self-stretch shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1)] rounded-lg bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start p-2 gap-4">
                    <div className="self-stretch flex flex-row items-center justify-between gap-0">
                      <div className="flex flex-row items-center justify-start gap-2">
                        <div className="w-3.5 relative bg-gray-1500 h-3.5">
                          <Image
                            className="absolute h-[91.43%] w-full top-[4.17%] right-[4.4%] bottom-[4.4%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                            width={12.8}
                            height={12.8}
                            sizes="100vw"
                            alt=""
                            src="/assets/features/shopping-cart1.svg"
                          />
                        </div>
                        <div className="relative tracking-[-0.01em] leading-[120%] font-medium">
                          Your cart
                        </div>
                      </div>
                      <div className="relative tracking-[-0.01em] leading-[140%] text-gray-200">
                        3 Items
                      </div>
                    </div>
                    <Image
                      className="w-[295px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                      width={295}
                      height={1}
                      sizes="100vw"
                      alt=""
                      src="/assets/features/38991.png"
                    />
                  </div>
                  <div className="self-stretch shadow-[0px_0px_6.04px_0.75px_rgba(33,_36,_80,_0.04),_0px_18.8679256439209px_11.32px_-2.26px_rgba(33,_36,_80,_0.05),_0px_6.037735939025879px_7.55px_-3.02px_rgba(33,_36,_80,_0.09),_0px_2.264151096343994px_4.53px_-1.51px_rgba(33,_36,_80,_0.1)] rounded-[6.04px] bg-gray-100 border-whitesmoke-400 border-solid border-[0.4px] overflow-hidden flex flex-row items-center justify-start p-1.5 gap-4 text-gray-300">
                    <Image
                      className="w-[68px] relative rounded-[3.4px] max-h-full overflow-hidden shrink-0 object-cover"
                      width={68}
                      height={68}
                      sizes="100vw"
                      alt=""
                      src="/assets/features/38991.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[9.1px]">
                      <div className="self-stretch flex flex-col items-center justify-start">
                        <div className="self-stretch relative tracking-[-0.01em] leading-[130%] capitalize">
                          <p className="m-0">{`Add one more item for `}</p>
                          <p className="m-0">
                            <b className="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                              free shipping!
                            </b>
                          </p>
                        </div>
                      </div>
                      <div className="self-stretch rounded-[9.06px] bg-gray-300 flex flex-row items-center justify-center py-1.5 px-[9.1px] text-[9.06px] text-white">
                        <div className="relative tracking-[-0.01em] leading-[130%] capitalize font-medium">
                          Add to cart
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-[7.2px] border-gainsboro-700 border-dashed border-[0.9px] flex flex-row items-center justify-start p-1.5 gap-4">
                    <div className="w-[68px] relative rounded-[4.05px] bg-whitesmoke-700 h-[68px] overflow-hidden shrink-0" />
                    <div className="w-[109px] flex flex-col items-start justify-start gap-[9.9px]">
                      <div className="self-stretch relative rounded-[14.4px] bg-whitesmoke-700 h-1.5" />
                      <div className="w-16 relative rounded-[14.4px] bg-whitesmoke-700 h-1.5" />
                    </div>
                  </div>
                  <div className="self-stretch rounded-[7.2px] border-gainsboro-700 border-dashed border-[0.9px] flex flex-row items-center justify-start p-1.5 gap-4">
                    <div className="w-[68px] relative rounded-[4.05px] bg-whitesmoke-700 h-[68px] overflow-hidden shrink-0" />
                    <div className="w-[109px] flex flex-col items-start justify-start gap-[9.9px]">
                      <div className="self-stretch relative rounded-[14.4px] bg-whitesmoke-700 h-1.5" />
                      <div className="w-16 relative rounded-[14.4px] bg-whitesmoke-700 h-1.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 shadow-[0px_24px_35px_-12px_rgba(27,_40,_66,_0.05),_0px_3px_1px_rgba(255,_255,_255,_0.25)_inset] rounded-2xl bg-gray-100 border-white border-solid border-[0.8px] box-border h-[420px] overflow-hidden flex flex-col items-start justify-end">
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start p-6 gap-1">
                <div className="self-stretch relative leading-[150%] font-semibold">{`Analyze Revenue & Projections`}</div>
                <div className="self-stretch relative text-base tracking-[-0.02em] leading-[140%] font-inter text-gray-200">
                  See real-time revenue insights and forecasts to make smarter business decision
                </div>
              </div>
              <div className="w-[386.7px] relative bg-gray-100 h-[297px] overflow-hidden shrink-0 text-center text-[10px] text-gray-200">
                <Image
                  className="absolute top-[0px] left-[-16.53px] w-0 h-0"
                  width={1}
                  height={1}
                  sizes="100vw"
                  alt=""
                  src="/assets/hero/Layer_1.svg"
                />
                <div className="absolute top-[124.68px] left-[-16.53px] [background:linear-gradient(180deg,_rgba(225,_226,_229,_0),_#f0f2f5)] w-[418.9px] h-[129.3px]" />
                <div className="absolute top-[17px] left-[calc(50%_-_165.02px)] h-[237px] flex flex-row items-end justify-center gap-1.5 text-gray-1300">
                  <div className="w-[50px] flex flex-col items-start justify-start gap-0.5">
                    <div className="self-stretch shadow-[0px_0px_4px_2px_rgba(255,_255,_255,_0.24)_inset] rounded-lg bg-darkslategray-200 border-aliceblue-400 border-solid border-[0.6px] box-border h-[26px] overflow-hidden shrink-0 flex flex-row items-center justify-center">
                      <div className="relative leading-[150%] font-medium">$86K</div>
                    </div>
                    <Image
                      className="w-full relative rounded-t-lg rounded-b-none max-w-full overflow-hidden h-[104px] shrink-0 object-cover"
                      width={50}
                      height={104}
                      sizes="100vw"
                      alt=""
                      src="/assets/features/Frame 2147228157.png"
                    />
                  </div>
                  <div className="w-[50px] flex flex-col items-start justify-start gap-0.5">
                    <div className="self-stretch shadow-[0px_0px_4px_2px_rgba(255,_255,_255,_0.24)_inset] rounded-lg bg-darkslategray-200 border-aliceblue-400 border-solid border-[0.6px] box-border h-[26px] overflow-hidden shrink-0 flex flex-row items-center justify-center">
                      <div className="relative leading-[150%] font-medium">$60K</div>
                    </div>
                    <Image
                      className="w-full relative rounded-t-lg rounded-b-none max-w-full overflow-hidden h-[75px] shrink-0 object-cover"
                      width={50}
                      height={75}
                      sizes="100vw"
                      alt=""
                      src="/assets/features/Frame 2147228157 (1).png"
                    />
                  </div>
                  <div className="w-[50px] flex flex-col items-start justify-start gap-0.5">
                    <div className="self-stretch shadow-[0px_0px_4px_2px_rgba(255,_255,_255,_0.24)_inset] rounded-lg bg-darkslategray-200 border-aliceblue-400 border-solid border-[0.6px] box-border h-[26px] overflow-hidden shrink-0 flex flex-row items-center justify-center">
                      <div className="relative leading-[150%] font-medium">$82K</div>
                    </div>
                    <Image
                      className="w-full relative rounded-t-lg rounded-b-none max-w-full overflow-hidden h-[103px] shrink-0 object-cover"
                      width={50}
                      height={103}
                      sizes="100vw"
                      alt=""
                      src="/assets/features/Frame 2147228157 (2).png"
                    />
                  </div>
                  <div className="w-[50px] flex flex-col items-start justify-start gap-0.5">
                    <div className="self-stretch shadow-[0px_0px_4px_2px_rgba(255,_255,_255,_0.24)_inset] rounded-lg bg-darkslategray-200 border-aliceblue-400 border-solid border-[0.6px] box-border h-[26px] overflow-hidden shrink-0 flex flex-row items-center justify-center">
                      <div className="relative leading-[150%] font-medium">$132K</div>
                    </div>
                    <Image
                      className="w-full relative rounded-t-lg rounded-b-none max-w-full overflow-hidden h-[134px] shrink-0 object-cover"
                      width={50}
                      height={134}
                      sizes="100vw"
                      alt=""
                      src="/assets/features/Frame 2147228157 (3).png"
                    />
                  </div>
                  <div className="w-[50px] flex flex-col items-start justify-start gap-1">
                    <div className="self-stretch shadow-[0px_0px_4px_2px_rgba(255,_255,_255,_0.24)_inset] rounded-lg bg-darkslategray-200 border-aliceblue-400 border-solid border-[0.6px] box-border h-[26px] overflow-hidden shrink-0 flex flex-row items-center justify-center">
                      <div className="relative leading-[150%] font-medium">$210K</div>
                    </div>
                    <Image
                      className="w-full relative rounded-t-lg rounded-b-none max-w-full overflow-hidden h-[164px] shrink-0 object-cover"
                      width={50}
                      height={164}
                      sizes="100vw"
                      alt=""
                      src="/assets/features/Frame 2147228157 (4).png"
                    />
                  </div>
                  <div className="w-[50px] flex flex-col items-start justify-start gap-1">
                    <div className="self-stretch shadow-[0px_2px_4px_2px_rgba(255,_255,_255,_0.32)_inset] rounded-lg [background:linear-gradient(165.85deg,_#12b2f9,_#514dfa)] border-aliceblue-400 border-solid border-[0.6px] box-border h-[26px] overflow-hidden shrink-0 flex flex-row items-center justify-center">
                      <div className="relative leading-[150%] font-medium">$450K</div>
                    </div>
                    <Image
                      className="w-full relative rounded-t-lg rounded-b-none max-w-full overflow-hidden h-[207px] shrink-0 object-cover"
                      width={50}
                      height={207}
                      sizes="100vw"
                      alt=""
                      src="/assets/features/Frame 2147228157 (5).png"
                    />
                  </div>
                </div>
                <div className="absolute top-[262.6px] left-[33.33px] flex flex-row items-center justify-start gap-1">
                  <div className="w-[50px] flex flex-col items-center justify-center">
                    <div className="self-stretch relative tracking-[-0.04em] leading-[150%]">
                      JAN
                    </div>
                  </div>
                  <div className="w-[50px] flex flex-col items-center justify-center">
                    <div className="self-stretch relative tracking-[-0.04em] leading-[150%]">
                      FEB
                    </div>
                  </div>
                  <div className="w-[50px] flex flex-col items-center justify-center">
                    <div className="self-stretch relative tracking-[-0.04em] leading-[150%]">
                      MAR
                    </div>
                  </div>
                  <div className="w-[50px] flex flex-col items-center justify-center">
                    <div className="self-stretch relative tracking-[-0.04em] leading-[150%]">
                      APR
                    </div>
                  </div>
                  <div className="w-[50px] flex flex-col items-center justify-center">
                    <div className="self-stretch relative tracking-[-0.04em] leading-[150%]">
                      MAY
                    </div>
                  </div>
                  <div className="w-[50px] flex flex-col items-center justify-center">
                    <div className="self-stretch relative tracking-[-0.04em] leading-[150%]">
                      JUN
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[4.83px] w-[229px] overflow-hidden flex flex-col items-end justify-start py-4 px-6 box-border text-left text-xs">
                  <div className="self-stretch relative leading-[150%]">Revenue Forecasts</div>
                  <div className="self-stretch relative text-base leading-[150%] font-semibold text-gray-300">
                    $1,256,345.00
                  </div>
                  <div className="self-stretch relative text-[10px] leading-[150%] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    +35% from last year
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

export default Features;
