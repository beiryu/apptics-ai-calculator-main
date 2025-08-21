import Image from "next/image";

const Comparison = () => {
  return (
    <>
      <div className="self-stretch rounded-[60px] flex flex-col items-center justify-start z-[5] text-left">
        <div className="w-[1200px] flex flex-col items-center justify-start py-20 px-0 box-border gap-[60px]">
          <div className="w-[548px] flex flex-col items-center justify-start relative gap-6 text-center">
            <div className="shadow-[0px_8px_8px_-4px_rgba(0,_0,_0,_0.12),_0px_3px_2px_-1px_rgba(0,_0,_0,_0.08)] rounded-[99px] bg-white border-gainsboro-400 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-center py-2 px-4 z-[0]">
              <div className="relative tracking-[-0.04em] leading-[130%]">Apptics vs Others</div>
            </div>
            <b className="self-stretch relative text-5xl tracking-[-0.02em] leading-[130%] font-plus-jakarta-sans z-[1] text-gray-300">
              <p className="m-0">Why  Apptics Beats</p>
              <p className="m-0">
                <span className="whitespace-pre-wrap">{`      `}</span>
                <span className="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap">
                  {" "}
                  Every Competitor
                </span>
              </p>
            </b>
            <div className="w-[56.7px] absolute !!m-[0 important] top-[130.29px] left-[41px] rounded-2xl h-[56.7px] shrink-0 overflow-hidden flex items-center justify-center z-[2]">
              <Image
                className="w-full h-full overflow-hidden shrink-0 object-cover absolute left-[0px] top-[26px] [transform:scale(1.744)]"
                width={56.7}
                height={56.7}
                sizes="100vw"
                alt=""
                src="/assets/comparison/Frame 2147227938.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-5 text-gray-300">
            <div className="w-[980px] rounded-[20px] bg-white overflow-hidden flex flex-row items-end justify-center p-4 box-border gap-4">
              <div className="flex-1 rounded-2xl border-whitesmoke-400 border-solid border-[1px] overflow-hidden flex flex-col items-start justify-start">
                <div className="self-stretch h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-6 box-border gap-4">
                  <div className="w-5 relative bg-gray-1500 h-5 hidden" />
                  <div className="relative tracking-[-0.01em] leading-[150%] capitalize font-medium hidden">
                    Customizable checkout
                  </div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-6 gap-4">
                  <div className="w-5 relative bg-gray-1500 h-5">
                    <Image
                      className="absolute h-[91.5%] w-full top-[4.17%] right-[4.33%] bottom-[4.33%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                      width={18.3}
                      height={18.3}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/shopping-cart1.svg"
                    />
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[150%] capitalize font-medium">
                    Customizable checkout
                  </div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-6 gap-4">
                  <div className="w-5 relative bg-gray-1500 h-5">
                    <Image
                      className="absolute h-[66.5%] w-full top-[16.67%] right-[4.33%] bottom-[16.83%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                      width={18.3}
                      height={13.3}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/credit-card2.svg"
                    />
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[150%] capitalize font-medium">
                    Custom subscription plans
                  </div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-6 gap-4">
                  <div className="w-5 relative bg-gray-1500 h-5 overflow-hidden shrink-0">
                    <Image
                      className="absolute h-[91.5%] w-full top-[4.17%] right-[4.33%] bottom-[4.33%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                      width={18.3}
                      height={18.3}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/refresh-cw.svg"
                    />
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[150%] capitalize font-medium">
                    Chargeback mitigation
                  </div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-6 gap-4">
                  <div className="w-5 relative bg-gray-1500 h-5 overflow-hidden shrink-0">
                    <Image
                      className="absolute h-3/4 w-full top-[12.5%] right-[8.17%] bottom-[12.5%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                      width={16.7}
                      height={15}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/arrows-split.svg"
                    />
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[150%] font-medium">{`MID management & Routing`}</div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-6 gap-4">
                  <div className="w-5 relative bg-gray-1500 h-5">
                    <Image
                      className="absolute h-[91.5%] w-full top-[4.17%] right-[4.33%] bottom-[4.33%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                      width={18.3}
                      height={18.3}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/currency-pound-circle.svg"
                    />
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                    Multi-currency support
                  </div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-6 gap-4">
                  <div className="w-5 relative bg-gray-1500 h-5 overflow-hidden shrink-0">
                    <Image
                      className="absolute h-[91.5%] w-full top-[4.17%] right-[4.33%] bottom-[4.33%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                      width={18.3}
                      height={18.3}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/sparkles-3.svg"
                    />
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                    Decline salvage AI
                  </div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-6 gap-4">
                  <div className="w-5 relative bg-gray-1500 h-5">
                    <Image
                      className="absolute h-[91.5%] w-full top-[4.17%] right-[16.83%] bottom-[4.33%] left-[16.67%] max-w-full overflow-hidden max-h-full"
                      width={13.3}
                      height={18.3}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/lock-3.svg"
                    />
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                    Fraud Prevention
                  </div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-6 gap-4">
                  <div className="w-5 relative bg-gray-1500 h-5">
                    <Image
                      className="absolute h-[91.5%] w-full top-[4.17%] right-[4.33%] bottom-[4.33%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                      width={18.3}
                      height={18.3}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/help-circle.svg"
                    />
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                    24/7 Dedicated Support
                  </div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-6 gap-4">
                  <div className="w-5 relative bg-gray-1500 h-5 overflow-hidden shrink-0">
                    <Image
                      className="absolute h-[91.5%] w-full top-[4.17%] right-[4.33%] bottom-[4.33%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                      width={18.3}
                      height={18.3}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/clock-hour-2.svg"
                    />
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                    Start Selling Within 24h
                  </div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-6 gap-4">
                  <div className="w-5 relative bg-gray-1500 h-5 overflow-hidden shrink-0">
                    <Image
                      className="absolute h-[91.5%] w-full top-[4.17%] right-[4.33%] bottom-[4.33%] left-[4.17%] max-w-full overflow-hidden max-h-full"
                      width={18.3}
                      height={18.3}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/discount-check.svg"
                    />
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                    Unmatched Approval Rates
                  </div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-6 gap-4">
                  <div className="w-5 relative bg-gray-1500 h-5">
                    <Image
                      className="absolute h-[83.5%] w-full top-[8.33%] right-[8.17%] bottom-[8.17%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                      width={16.7}
                      height={16.7}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/shopping-bag4.svg"
                    />
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[150%] font-medium">
                    Engineered For Scale
                  </div>
                </div>
              </div>
              <div className="w-[200px] rounded-2xl border-whitesmoke-400 border-solid border-[1px] box-border flex flex-col items-start justify-start">
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6">
                  <div className="relative tracking-[-0.01em] leading-[150%] capitalize font-medium">
                    Others
                  </div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6">
                  <div className="w-6 relative h-6 overflow-hidden shrink-0">
                    <Image
                      className="absolute h-[41.67%] w-full top-[29.17%] right-[18.75%] bottom-[29.17%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                      width={15}
                      height={10}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/check.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6">
                  <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0">
                    <Image
                      className="absolute h-3/6 w-full top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full"
                      width={12}
                      height={12}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/close.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6">
                  <div className="w-6 relative h-6 overflow-hidden shrink-0">
                    <Image
                      className="absolute h-[41.67%] w-full top-[29.17%] right-[18.75%] bottom-[29.17%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                      width={15}
                      height={10}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/check.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6">
                  <div className="w-6 relative h-6 overflow-hidden shrink-0">
                    <Image
                      className="absolute h-[41.67%] w-full top-[29.17%] right-[18.75%] bottom-[29.17%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                      width={15}
                      height={10}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/check.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6">
                  <div className="w-6 relative h-6 overflow-hidden shrink-0">
                    <Image
                      className="absolute h-[41.67%] w-full top-[29.17%] right-[18.75%] bottom-[29.17%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                      width={15}
                      height={10}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/check.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6 gap-4">
                  <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0 hidden" />
                  <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0">
                    <Image
                      className="absolute h-3/6 w-full top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full"
                      width={12}
                      height={12}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/close.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6">
                  <div className="w-6 relative h-6 overflow-hidden shrink-0">
                    <Image
                      className="absolute h-[41.67%] w-full top-[29.17%] right-[18.75%] bottom-[29.17%] left-[18.75%] max-w-full overflow-hidden max-h-full"
                      width={15}
                      height={10}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/check.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6 gap-4">
                  <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0 hidden" />
                  <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0">
                    <Image
                      className="absolute h-3/6 w-full top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full"
                      width={12}
                      height={12}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/close.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6 gap-4">
                  <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0 hidden" />
                  <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0">
                    <Image
                      className="absolute h-3/6 w-full top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full"
                      width={12}
                      height={12}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/close.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch border-whitesmoke-400 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6 gap-4">
                  <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0 hidden" />
                  <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0">
                    <Image
                      className="absolute h-3/6 w-full top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full"
                      width={12}
                      height={12}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/close.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6 box-border gap-4">
                  <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0 hidden" />
                  <div className="w-6 relative bg-gray-1500 h-6 overflow-hidden shrink-0">
                    <Image
                      className="absolute h-3/6 w-full top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full"
                      width={12}
                      height={12}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/close.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[200px] rounded-2xl [background:linear-gradient(178.19deg,_#12b2f9,_#514dfa)] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch border-gray-1000 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6">
                  <Image
                    width={77.1}
                    height={24}
                    sizes="100vw"
                    alt=""
                    src="/assets/comparison/asset 39.svg"
                  />
                </div>
                <div className="self-stretch border-gray-1000 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6">
                  <div className="w-12 relative h-12 top-[7px]">
                    <Image
                      width={100}
                      height={100}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/Frame 2147228169.png"
                    />
                  </div>
                </div>
                <div className="self-stretch border-gray-1000 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6">
                  <div className="w-12 relative h-12 top-[7px]">
                    <Image
                      width={100}
                      height={100}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/Frame 2147228169.png"
                    />
                  </div>
                </div>
                <div className="self-stretch border-gray-1000 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6">
                  <div className="w-12 relative h-12 top-[7px]">
                    <Image
                      width={100}
                      height={100}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/Frame 2147228169.png"
                    />
                  </div>
                </div>
                <div className="self-stretch border-gray-1000 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6">
                  <div className="w-12 relative h-12 top-[7px]">
                    <Image
                      width={100}
                      height={100}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/Frame 2147228169.png"
                    />
                  </div>
                </div>
                <div className="self-stretch border-gray-1000 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6">
                  <div className="w-12 relative h-12 top-[7px]">
                    <Image
                      width={100}
                      height={100}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/Frame 2147228169.png"
                    />
                  </div>
                </div>
                <div className="self-stretch border-gray-1000 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6">
                  <div className="w-12 relative h-12 top-[7px]">
                    <Image
                      width={100}
                      height={100}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/Frame 2147228169.png"
                    />
                  </div>
                </div>
                <div className="self-stretch border-gray-1000 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6">
                  <div className="w-12 relative h-12 top-[7px]">
                    <Image
                      width={100}
                      height={100}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/Frame 2147228169.png"
                    />
                  </div>
                </div>
                <div className="self-stretch border-gray-1000 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6">
                  <div className="w-12 relative h-12 top-[7px]">
                    <Image
                      width={100}
                      height={100}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/Frame 2147228169.png"
                    />
                  </div>
                </div>
                <div className="self-stretch border-gray-1000 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6">
                  <div className="w-12 relative h-12 top-[7px]">
                    <Image
                      width={100}
                      height={100}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/Frame 2147228169.png"
                    />
                  </div>
                </div>
                <div className="self-stretch border-gray-1000 border-solid border-b-[1px] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6">
                  <div className="w-12 relative h-12 top-[7px]">
                    <Image
                      width={100}
                      height={100}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/Frame 2147228169.png"
                    />
                  </div>
                </div>
                <div className="self-stretch h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-4 px-6 box-border">
                  <div className="w-12 relative h-12 top-[7px]">
                    <Image
                      width={100}
                      height={100}
                      sizes="100vw"
                      alt=""
                      src="/assets/comparison/Frame 2147228169.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[980px] relative shadow-[0px_2px_2px_rgba(0,_0,_0,_0.04),_0px_0px_14px_5px_rgba(255,_255,_255,_0.8)_inset] rounded-[20px] bg-white border-aliceblue-300 border-solid border-[1px] box-border h-[126px] overflow-hidden shrink-0 hidden text-2xl font-plus-jakarta-sans">
              <div className="absolute top-[39px] left-[145px] w-[363px] flex flex-col items-center justify-start">
                <div className="self-stretch relative tracking-[-0.02em] leading-[130%] font-semibold">
                  Get Started With Apptics, Acheive ROI Like Never Before
                </div>
              </div>
              <div className="absolute top-[45px] left-[669.29px] shadow-[0px_88px_25px_rgba(0,_0,_0,_0),_0px_56px_23px_rgba(0,_0,_0,_0.03),_0px_32px_19px_rgba(0,_0,_0,_0.1),_0px_14px_14px_rgba(0,_0,_0,_0.17),_0px_4px_8px_rgba(0,_0,_0,_0.2)] w-[165.4px] h-[50px] text-base text-white font-inter">
                <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_8px_4px_rgba(255,_255,_255,_0.16)_inset,_0px_-2px_0px_#000_inset,_0px_1px_1px_#000_inset,_0px_2px_1px_rgba(255,_255,_255,_0.25)_inset] rounded-[20px] [background:linear-gradient(88.67deg,_#1d1d1d,_#333_34.6%,_#3d3d3d_76.69%,_#1d1d1d)] h-[50px] overflow-hidden flex flex-row items-center justify-center py-3 px-6 box-border">
                  <div className="[filter:drop-shadow(0px_2px_2px_rgba(0,_0,_0,_0.48))] flex flex-row items-center justify-start gap-3">
                    <div className="relative tracking-[-0.03em] font-medium">Get Started</div>
                    <Image
                      className="w-[20.4px] relative max-h-full"
                      width={20.4}
                      height={20}
                      sizes="100vw"
                      alt=""
                      src="/assets/feature/Layer_1.svg"
                    />
                  </div>
                </div>
              </div>
              <Image
                className="absolute top-[-92.49px] left-[763.48px] w-[336.2px] h-[263.3px] object-cover"
                width={336.2}
                height={263.3}
                sizes="100vw"
                alt=""
                src="/assets/hero/Layer_1.svg"
              />
              <Image
                className="absolute top-[-90.21px] left-[223.43px] w-[336.2px] h-[261px] object-contain"
                width={336.2}
                height={261}
                sizes="100vw"
                alt=""
                src="/assets/hero/Layer_1.svg"
              />
            </div>
          </div>
          <div className="w-[980px] overflow-hidden flex flex-row items-start justify-center flex-wrap content-start gap-3 text-blueviolet">
            <div className="rounded-xl bg-white border-gainsboro-300 border-solid border-[1px] flex flex-row items-center justify-center py-2 px-3 gap-2">
              <Image
                className="w-[22px] relative max-h-full"
                width={22}
                height={22}
                sizes="100vw"
                alt=""
                src="/assets/comparison/Group.svg"
              />
              <div className="relative tracking-[-0.04em] leading-[150%] font-medium">
                Decline Salvage
              </div>
            </div>
            <div className="rounded-xl bg-white border-gainsboro-300 border-solid border-[1px] flex flex-row items-center justify-center py-2 px-3 gap-2 text-mediumseagreen-300">
              <Image
                className="w-[22px] relative max-h-full"
                width={22}
                height={22}
                sizes="100vw"
                alt=""
                src="/assets/comparison/Group (1).svg"
              />
              <div className="relative tracking-[-0.04em] leading-[150%] font-medium">
                Custom Webhook
              </div>
            </div>
            <div className="rounded-xl bg-white border-gainsboro-300 border-solid border-[1px] flex flex-row items-center justify-center py-2 px-3 gap-2 text-chocolate">
              <Image
                className="w-[22px] relative max-h-full"
                width={22}
                height={22}
                sizes="100vw"
                alt=""
                src="/assets/comparison/Group (2).svg"
              />
              <div className="relative tracking-[-0.04em] leading-[150%] font-medium">{`Affiliate tracking `}</div>
            </div>
            <div className="rounded-xl bg-white border-gainsboro-300 border-solid border-[1px] flex flex-row items-center justify-center py-2 px-3 gap-2 text-crimson">
              <Image
                className="w-[22px] relative max-h-full"
                width={22}
                height={22}
                sizes="100vw"
                alt=""
                src="/assets/comparison/Group (3).svg"
              />
              <div className="relative tracking-[-0.04em] leading-[150%] font-medium">
                Team activity log
              </div>
            </div>
            <div className="rounded-xl bg-white border-gainsboro-300 border-solid border-[1px] flex flex-row items-center justify-center py-2 px-3 gap-2 text-olivedrab">
              <Image
                className="w-[22px] relative max-h-full"
                width={22}
                height={22}
                sizes="100vw"
                alt=""
                src="/assets/comparison/Group (4).svg"
              />
              <div className="relative tracking-[-0.04em] leading-[150%] font-medium">{`IP & Geo blocking`}</div>
            </div>
            <div className="rounded-xl bg-white border-gainsboro-300 border-solid border-[1px] flex flex-row items-center justify-center py-2 px-3 gap-2 text-royalblue">
              <Image
                className="w-[22px] relative max-h-full"
                width={22}
                height={22}
                sizes="100vw"
                alt=""
                src="/assets/comparison/Group (5).svg"
              />
              <div className="relative tracking-[-0.04em] leading-[150%] font-medium">{`Smart tax handling `}</div>
            </div>
            <div className="rounded-xl bg-white border-gainsboro-300 border-solid border-[1px] flex flex-row items-center justify-center py-2 px-3 gap-2 text-fuchsia">
              <Image
                className="w-[22px] relative max-h-full"
                width={22}
                height={22}
                sizes="100vw"
                alt=""
                src="/assets/comparison/Group (6).svg"
              />
              <div className="relative tracking-[-0.04em] leading-[150%] font-medium">
                Plan A/B testing
              </div>
            </div>
            <div className="rounded-xl bg-white border-gainsboro-300 border-solid border-[1px] flex flex-row items-center justify-center py-2 px-3 gap-2 text-royalblue">
              <Image
                className="w-[22px] relative max-h-full"
                width={22}
                height={22}
                sizes="100vw"
                alt=""
                src="/assets/comparison/Group (7).svg"
              />
              <div className="relative tracking-[-0.04em] leading-[150%] font-medium">
                Subscription Billing
              </div>
            </div>
            <div className="rounded-xl bg-white border-gainsboro-300 border-solid border-[1px] flex flex-row items-center justify-center py-2 px-3 gap-2">
              <Image
                className="w-[22px] relative max-h-full"
                width={22}
                height={22}
                sizes="100vw"
                alt=""
                src="/assets/comparison/Group (8).svg"
              />
              <div className="relative tracking-[-0.04em] leading-[150%] font-medium">
                PCI Tokenization
              </div>
            </div>
            <div className="rounded-xl bg-white border-gainsboro-300 border-solid border-[1px] flex flex-row items-center justify-center py-2 px-3 gap-2 text-deepskyblue-200">
              <Image
                className="w-[22px] relative max-h-full"
                width={22}
                height={22}
                sizes="100vw"
                alt=""
                src="/assets/comparison/Group (9).svg"
              />
              <div className="relative tracking-[-0.04em] leading-[150%] font-medium">
                One click checkout solution
              </div>
            </div>
            <div className="rounded-xl bg-white border-gainsboro-300 border-solid border-[1px] flex flex-row items-center justify-center py-2 px-3 gap-2 text-chocolate">
              <Image
                className="w-[22px] relative max-h-full"
                width={22}
                height={22}
                sizes="100vw"
                alt=""
                src="/assets/comparison/Group (10).svg"
              />
              <div className="relative tracking-[-0.04em] leading-[150%]">Dispute prevention</div>
            </div>
            <div className="rounded-xl bg-white border-gainsboro-300 border-solid border-[1px] flex flex-row items-center justify-center py-2 px-3 gap-2 text-crimson">
              <div className="w-[22px] relative bg-gray-1500 h-[22px] overflow-hidden shrink-0">
                <Image
                  className="absolute h-[83.18%] w-full top-[8.33%] right-[8.48%] bottom-[8.48%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                  width={18.3}
                  height={18.3}
                  sizes="100vw"
                  alt=""
                  src="/assets/comparison/smile.svg"
                />
              </div>
              <div className="relative tracking-[-0.04em] leading-[150%] font-medium">
                User Behaviour scoring
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comparison;
