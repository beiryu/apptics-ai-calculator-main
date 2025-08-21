import Image from "next/image";

const Testimonials = () => {
  return (
    <>
      <div className="self-stretch flex flex-col items-center justify-start z-[11]">
        <div className="w-[1280px] overflow-hidden flex flex-col items-center justify-start py-20 px-0 box-border gap-[60px]">
          <div className="w-[780px] flex flex-col items-center justify-start gap-6">
            <div className="shadow-[0px_8px_8px_-4px_rgba(0,_0,_0,_0.12),_0px_3px_2px_-1px_rgba(0,_0,_0,_0.08)] rounded-[99px] bg-white border-gainsboro-400 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-center py-2 px-4">
              <div className="relative tracking-[-0.04em] leading-[130%]">Testimonials</div>
            </div>
            <div className="flex flex-col items-center justify-start gap-1 text-5xl text-gray-300 font-plus-jakarta-sans">
              <b className="w-[595.7px] relative tracking-[-0.02em] leading-[110%] inline-block">
                Merchants Love Apptics,
              </b>
              <div className="flex flex-row items-start justify-center gap-1">
                <b className="relative tracking-[-0.02em] leading-[110%]">and you will</b>
                <div className="w-[51.9px] relative rounded-2xl h-[51.9px] shrink-0 overflow-hidden flex items-center justify-center">
                  <Image
                    className="w-full h-full overflow-hidden shrink-0 object-cover absolute left-[0px] top-[26px] [transform:scale(1.875)]"
                    width={51.9}
                    height={51.9}
                    sizes="100vw"
                    alt=""
                    src="/assets/testimonials/Frame 2147227937.svg"
                  />
                </div>
                <b className="relative tracking-[-0.02em] leading-[110%] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#12b2f9,_#514dfa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Love it to
                </b>
              </div>
            </div>
            <div className="w-[706.5px] relative text-lg tracking-[-0.04em] leading-[150%] text-gray-200 inline-block">
              Trusted by users for seamless subscriptions, smarter payments, and real results.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-5 text-left text-xl text-gray-300 font-plus-jakarta-sans">
            <div className="flex-1 flex flex-col items-start justify-start gap-5">
              <div className="self-stretch rounded-3xl bg-white flex flex-col items-start justify-start p-6 gap-6">
                <div className="self-stretch relative leading-[130%] font-semibold">
                  Increased Customer Retention by 40%!
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[150%] text-gray-200">
                  “Since implementing Apptics, my customer retention has skyrocketed. The analytics
                  they provide help me understand my customers better, allowing me to tailor my
                  offerings. It&apos;s been a game changer for my business&quot;
                </div>
                <div className="flex flex-row items-center justify-start gap-3 text-base">
                  <Image
                    className="w-[50px] relative rounded-[99px] max-h-full overflow-hidden shrink-0 object-cover"
                    width={50}
                    height={50}
                    sizes="100vw"
                    alt=""
                    src="/assets/testimonials/Frame 2147228191.png"
                  />
                  <div className="w-[140.5px] flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[150%] font-semibold">
                      Sophia K.
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-gray-200">
                      Online Clothing Retailer
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xl bg-white flex flex-col items-start justify-start p-6 gap-6">
                <div className="self-stretch relative leading-[130%] font-semibold">
                  Efficient Customer Support
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[150%] text-gray-200">
                  “I can&apos;t praise Apptics enough for their customer support. Whenever I had
                  questions or needed assistance, their team was there to help me promptly.
                  It&apos;s comforting to know I have such reliable support while running my
                  business&quot;
                </div>
                <div className="flex flex-row items-center justify-start gap-3 text-base">
                  <Image
                    className="w-[50px] relative rounded-[99px] max-h-full overflow-hidden shrink-0 object-cover"
                    width={50}
                    height={50}
                    sizes="100vw"
                    alt=""
                    src="/assets/testimonials/Frame 2147228191 (1).png"
                  />
                  <div className="w-[140.5px] flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[150%] font-semibold">
                      Mark R.
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-gray-200">
                      Fitness Studio Owner
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xl bg-white flex flex-col items-start justify-start p-6 gap-6">
                <div className="self-stretch relative leading-[130%] font-semibold">
                  The Ultimate Scaling Solution for Brands
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[150%] text-gray-200">
                  “Apptics is hands down the best subscription management platform I&apos;ve used.
                  From payments to chargeback protection, upsells, and consulting, they handle
                  everything. My brand is scaling faster than I ever thought possible, and I
                  couldn&apos;t have done it without their team&quot;
                </div>
                <div className="flex flex-row items-center justify-start gap-3 text-base">
                  <Image
                    className="w-[50px] relative rounded-[99px] max-h-full overflow-hidden shrink-0 object-cover"
                    width={50}
                    height={50}
                    sizes="100vw"
                    alt=""
                    src="/assets/testimonials/Frame 2147228191 (2).png"
                  />
                  <div className="w-[140.5px] flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[150%] font-semibold">
                      David L.
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-gray-200">
                      Restaurant Owner
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-5">
              <div className="self-stretch rounded-3xl bg-white flex flex-col items-start justify-start p-6 gap-6">
                <div className="self-stretch relative leading-[130%] font-semibold">
                  Increased Customer Engagement by 150%!
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[150%] text-gray-200">
                  “Since integrating with Apptics, the engagement on my platform has skyrocketed!
                  I&apos;ve seen a 150% increase in customer interactions, leading to more sales and
                  loyal customers. Their analytics help me understand my audience better&quot;
                </div>
                <div className="flex flex-row items-center justify-start gap-3 text-base">
                  <Image
                    className="w-[50px] relative rounded-[99px] max-h-full overflow-hidden shrink-0 object-cover"
                    width={50}
                    height={50}
                    sizes="100vw"
                    alt=""
                    src="/assets/testimonials/Frame 2147228191 (3).png"
                  />
                  <div className="w-[140.5px] flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[150%] font-semibold">
                      Sophia K.
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-gray-200">
                      E-commerce Business Owner
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xl bg-white flex flex-col items-start justify-start p-6 gap-6">
                <div className="self-stretch relative leading-[130%] font-semibold">
                  Achieved 200% ROI in 6 Months!
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[150%] text-gray-200">
                  “With Apptics, my investment turned into a 200% ROI in just half a year! Their
                  data-driven approach allowed me to optimize my campaigns effectively, making every
                  dollar count. I highly recommend their services to any business looking to
                  grow&quot;
                </div>
                <div className="flex flex-row items-center justify-start gap-3 text-base">
                  <Image
                    className="w-[50px] relative rounded-[99px] max-h-full overflow-hidden shrink-0 object-cover"
                    width={50}
                    height={50}
                    sizes="100vw"
                    alt=""
                    src="/assets/testimonials/Frame 2147228191 (4).png"
                  />
                  <div className="w-[140.5px] flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[150%] font-semibold">
                      Emma W.
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-gray-200">
                      Startup Founder
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xl bg-white flex flex-col items-start justify-start p-6 gap-6">
                <div className="self-stretch relative leading-[130%] font-semibold">
                  Enhanced Marketing Campaign Effectiveness by 120%!
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[150%] text-gray-200">
                  “Implementing Apptics into my marketing strategy has resulted in a 120% increase
                  in campaign effectiveness. Their tools allow me to target my audience precisely,
                  leading to higher conversion rates and successful promotions. I can&apos;t imagine
                  running my campaigns without them&quot;
                </div>
                <div className="flex flex-row items-center justify-start gap-3 text-base">
                  <Image
                    className="w-[50px] relative rounded-[99px] max-h-full overflow-hidden shrink-0 object-cover"
                    width={50}
                    height={50}
                    sizes="100vw"
                    alt=""
                    src="/assets/testimonials/Frame 2147228191 (5).png"
                  />
                  <div className="w-[140.5px] flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[150%] font-semibold">
                      Thomas G.
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-gray-200">
                      Digital Marketing Specialist
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-5">
              <div className="self-stretch rounded-3xl bg-white flex flex-col items-start justify-start p-6 gap-6">
                <div className="self-stretch relative leading-[130%] font-semibold">
                  Reduced Churn Rate by 40%!
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[150%] text-gray-200">
                  “Thanks to Apptics, we&apos;ve drastically cut down our churn rate! In just a few
                  months, we achieved a 40% reduction by utilizing their retention strategies.
                  It&apos;s been a game-changer for our subscription service&quot;
                </div>
                <div className="flex flex-row items-center justify-start gap-3 text-base">
                  <Image
                    className="w-[50px] relative rounded-[99px] max-h-full overflow-hidden shrink-0 object-cover"
                    width={50}
                    height={50}
                    sizes="100vw"
                    alt=""
                    src="/assets/testimonials/Frame 2147228191 (6).png"
                  />
                  <div className="w-[140.5px] flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[150%] font-semibold">
                      Michael T.
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-gray-200">
                      SaaS Product Manager
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xl bg-white flex flex-col items-start justify-start p-6 gap-6">
                <div className="self-stretch relative leading-[130%] font-semibold">
                  Unmatched Flexibility in Subscription
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[150%] text-gray-200">
                  “The flexibility Apptics offers in managing my subscription plans has been a
                  lifesaver. I can easily adjust pricing, create promotional offers, and analyze
                  performance metrics without hassle. It&apos;s incredibly empowering for my
                  business&quot;
                </div>
                <div className="flex flex-row items-center justify-start gap-3 text-base">
                  <Image
                    className="w-[50px] relative rounded-[99px] max-h-full overflow-hidden shrink-0 object-cover"
                    width={50}
                    height={50}
                    sizes="100vw"
                    alt=""
                    src="/assets/testimonials/Frame 2147228191 (7).png"
                  />
                  <div className="w-[140.5px] flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[150%] font-semibold">
                      Emma W.
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-gray-200">
                      E-commerce Entrepreneur
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xl bg-white flex flex-col items-start justify-start p-6 gap-6">
                <div className="self-stretch relative leading-[130%] font-semibold">
                  Improved Analytics
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[150%] text-gray-200">
                  “The analytics provided by Apptics have transformed my understanding of customer
                  behavior. I can now tailor my offerings based on real-time data, resulting in
                  improved customer satisfaction and increased sales. It&apos;s a must-have for any
                  business&quot;
                </div>
                <div className="flex flex-row items-center justify-start gap-3 text-base">
                  <Image
                    className="w-[50px] relative rounded-[99px] max-h-full overflow-hidden shrink-0 object-cover"
                    width={50}
                    height={50}
                    sizes="100vw"
                    alt=""
                    src="/assets/testimonials/Frame 2147228191 (8).png"
                  />
                  <div className="w-[140.5px] flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[150%] font-semibold">
                      Lucas M.
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.02em] leading-[150%] text-gray-200">
                      Retail Manager
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

export default Testimonials;
