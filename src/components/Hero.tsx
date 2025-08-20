import type { NextPage } from "next";
import Image from "next/image";
import MyLottieComponent from "./LottieComponent";

const Hero: NextPage = () => {
  return (
    <div className="w-full relative rounded-3xl overflow-hidden flex flex-col items-center justify-start pt-[140px] px-[70px] pb-0 box-border text-left text-lg text-white font-inter">
      <div className="w-[1150px] flex flex-col items-center justify-start gap-12">
        <div className="self-stretch flex flex-col items-center justify-start gap-6 text-center text-gray-200 font-plus-jakarta-sans">
          <div className="shadow-[0px_51px_14px_rgba(0,_0,_0,_0),_0px_33px_13px_rgba(0,_0,_0,_0.01),_0px_18px_11px_rgba(0,_0,_0,_0.03),_0px_8px_8px_rgba(0,_0,_0,_0.06),_0px_2px_5px_rgba(0,_0,_0,_0.07)] rounded-[60px] bg-white border-gainsboro border-solid border-[1px] flex flex-row items-center justify-start py-2 px-4 gap-2.5">
            <Image
              className="w-[22px] relative max-h-full"
              width={22}
              height={22}
              sizes="100vw"
              alt=""
              src="/assets/hero/Layer_1.svg"
            />
            <div className="relative tracking-[-0.02em] leading-[150%] capitalize">
              Built for shopify
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start text-[90px]">
            <b className="self-stretch relative tracking-[-0.01em] leading-[115%]">
              Turn Your Shoppers
            </b>
            <div className="flex flex-row items-center justify-center gap-1">
              <b className="relative tracking-[-0.03em] leading-[115%]">into</b>
              <div className="w-[101.1px] relative rounded-3xl h-[101.1px] shrink-0 overflow-hidden flex items-center justify-center">
                <Image
                  className="w-full h-full overflow-hidden shrink-0 object-cover absolute left-[0px] top-[26px] [transform:scale(1.416)]"
                  width={101.1}
                  height={101.1}
                  sizes="100vw"
                  alt=""
                  src="/assets/hero/Frame_2147226509.png"
                />
              </div>
              <b className="relative tracking-[-0.03em] leading-[115%] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Subscribers `}</b>
            </div>
          </div>
          <div className="w-[596.7px] relative text-2xl tracking-[-0.01em] leading-[150%] font-inter text-gray-100 whitespace-pre-wrap inline-block">
            Everything you need to create and grow your subscriptions all in one place!
          </div>
        </div>
        <div className="hidden flex-row items-start justify-start gap-4 text-xl">
          <div className="shadow-[0px_0px_9.6px_4.8px_rgba(255,_255,_255,_0.16)_inset,_0px_-2.4000000953674316px_0px_rgba(0,_0,_0,_0.1)_inset,_0px_1.2000000476837158px_1.2px_rgba(0,_0,_0,_0.1)_inset,_0px_2.4000000953674316px_1.2px_rgba(255,_255,_255,_0.25)_inset] rounded-3xl [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] overflow-hidden flex flex-row items-center justify-center py-[18px] px-6">
            <div className="shadow-[0px_2.4000000953674316px_2.4px_rgba(26,_60,_105,_0.24)] flex flex-row items-center justify-start gap-[14.4px]">
              <div className="relative tracking-[-0.03em] font-medium">Calculate My MRR</div>
              <Image
                className="w-[24.5px] relative max-h-full"
                width={24.5}
                height={24}
                sizes="100vw"
                alt=""
                src="/assets/hero/Group1000011035.svg"
              />
            </div>
          </div>
          <div className="w-[250px] shadow-[0px_0px_8px_4px_rgba(255,_255,_255,_0.16)_inset,_0px_-2px_0px_#000_inset,_0px_1px_1px_#000_inset,_0px_2px_1px_rgba(255,_255,_255,_0.25)_inset] rounded-[20px] [background:linear-gradient(88.67deg,_#1d1d1d,_#333_34.6%,_#3d3d3d_76.69%,_#1d1d1d)] overflow-hidden shrink-0 hidden flex-row items-center justify-center py-[18px] px-6 box-border">
            <div className="shadow-[0px_2.4000000953674316px_2.4px_rgba(26,_60,_105,_0.24)] flex flex-row items-center justify-start gap-[14.4px]">
              <div className="relative tracking-[-0.03em] font-medium">Book a Call</div>
              <Image
                className="w-[24.5px] relative max-h-full"
                width={24.5}
                height={24}
                sizes="100vw"
                alt=""
                src="/assets/hero/Group1000011035.svg"
              />
            </div>
          </div>
        </div>
        <div className="shadow-[0px_70.80000305175781px_19.2px_rgba(0,_0,_0,_0),_0px_45.60000228881836px_18px_rgba(0,_0,_0,_0.01),_0px_25.200000762939453px_15.6px_rgba(0,_0,_0,_0.05),_0px_10.800000190734863px_10.8px_rgba(0,_0,_0,_0.09),_0px_2.4000000953674316px_6px_rgba(0,_0,_0,_0.1)] h-[60px] flex flex-row items-start justify-start text-[19.2px]">
          <div className="shadow-[0px_0px_9.6px_4.8px_rgba(255,_255,_255,_0.16)_inset,_0px_-2.4000000953674316px_0px_#000_inset,_0px_1.2000000476837158px_1.2px_#000_inset,_0px_2.4000000953674316px_1.2px_rgba(255,_255,_255,_0.25)_inset] rounded-3xl [background:linear-gradient(88.67deg,_#1d1d1d,_#333_34.6%,_#3d3d3d_76.69%,_#1d1d1d)] h-[60px] overflow-hidden flex flex-row items-center justify-center py-[14.4px] px-[28.8px] box-border">
            <div className="[filter:drop-shadow(0px_2.4000000953674316px_2.4px_rgba(0,_0,_0,_0.48))] flex flex-row items-center justify-start gap-[14.4px]">
              <div className="relative tracking-[-0.03em] font-medium">Calculate My MRR</div>
              <Image
                className="w-[24.5px] relative max-h-full"
                width={24.5}
                height={24}
                sizes="100vw"
                alt=""
                src="/assets/hero/Group1000011035.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1250px] relative h-[580px] text-sm text-dimgray">
        <MyLottieComponent animationType="hero" width="w-full" height="h-full" />
      </div>
    </div>
  );
};

export default Hero;
