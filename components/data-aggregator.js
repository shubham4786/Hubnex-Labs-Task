import ValueTransformer from "./value-transformer";

const DataAggregator = () => {
  return (
    <section className="w-[1340px] flex flex-col items-start justify-start pt-0 pb-[89px] pr-0 pl-5 box-border gap-[67px] max-w-full text-left text-23xl text-primary-100 font-garnett-semibold mq825:gap-[33px_67px] mq1125:pb-[58px] mq1125:box-border mq450:gap-[17px_67px] mq450:pb-[38px] mq450:box-border">
      <div className="w-[1201px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <h1 className="m-0 w-[875px] relative text-inherit leading-[50px] capitalize inline-block max-w-full font-inherit mq825:text-15xl mq825:leading-[40px] mq450:text-6xl mq450:leading-[30px]">
          <span>{`Choose Your Simple, `}</span>
          <span className="font-garnett-regular">Transparent Pricing</span>
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[218px] max-w-full text-center text-4xl font-space-grotesk mq825:gap-[218px_54px] mq450:gap-[218px_27px] mq1400:flex-wrap mq1400:gap-[218px_109px] mq1400:justify-center">
        <div className="w-[1197px] flex flex-row items-start justify-center gap-[49.5px] shrink-0 [debug_commit:1cbd860] mq825:gap-[49.5px_25px] mq1125:flex-wrap">
          <ValueTransformer
            spacingManagerPlus="1"
            month="Month"
            fiveBlack="199.00"
          />
          <div className="flex-1 rounded-3xs bg-primary-100 shadow-[0px_20px_40px_rgba(118,_118,_118,_0.35)] overflow-hidden flex flex-col items-end justify-start pt-0 px-[34px] pb-[30px] box-border gap-[46px] min-w-[274px] max-w-full text-white mq450:gap-[23px_46px]">
            <div className="mr-[-34.5px] w-[296px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-row items-start justify-end">
                <div className="h-[66px] w-[238px] relative">
                  <div className="absolute top-[34px] left-[0px] w-[109px] flex flex-row items-start justify-start gap-[6px]">
                    <div className="w-3.5 flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                      <div className="self-stretch relative font-medium inline-block min-w-[14px] mq450:text-lg">
                        3
                      </div>
                    </div>
                    <h3 className="m-0 h-8 flex-1 relative text-inherit font-normal font-garnett-medium flex items-center justify-center mq450:text-lg">
                      Months
                    </h3>
                  </div>
                  <button className="cursor-pointer [border:none] py-2 px-[18.5px] bg-goldenrod absolute top-[0px] left-[106px] rounded-t-none rounded-br-none rounded-bl-8xs w-[132px] flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-darkgoldenrod">
                    <div className="flex-1 relative text-sm font-garnett-medium text-gray-400 text-center">
                      Most Popular
                    </div>
                  </button>
                </div>
              </div>
              <div className="w-[225px] flex flex-row items-end justify-start text-21xl font-garnett-medium">
                <h1 className="m-0 h-14 w-[26px] relative text-inherit font-medium font-space-grotesk flex items-center justify-center shrink-0 min-w-[26px] mq825:text-13xl mq450:text-5xl">
                  ₹
                </h1>
                <div className="h-14 flex-1 relative flex items-center justify-center mq825:text-13xl mq450:text-5xl">
                  149.00
                </div>
                <div className="h-[38px] w-[61px] relative text-base flex items-center justify-center shrink-0">
                  /month
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end pt-0 px-px pb-[19px] text-lg font-garnett-medium">
              <div className="flex-1 flex flex-col items-center justify-center gap-[20px]">
                <div className="self-stretch relative leading-[28px]">
                  Suitable for companies with 5-10 openings
                </div>
                <div className="self-stretch flex flex-col items-center justify-center gap-[10px] text-left text-base text-primary-300 font-poppins">
                  <div className="self-stretch h-6 flex flex-row items-start justify-center gap-[10px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/icons.svg"
                    />
                    <div className="flex-1 relative">
                      10 interview-ready candidates
                    </div>
                  </div>
                  <div className="self-stretch h-6 flex flex-row items-start justify-center gap-[10px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/icons.svg"
                    />
                    <div className="flex-1 relative">
                      Unlimited job postings
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center gap-[10px] mq450:flex-wrap">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/icons.svg"
                    />
                    <div className="flex-1 relative inline-block min-w-[170px]">
                      Receive pre-vetted profiles within 48 hours
                    </div>
                  </div>
                  <div className="self-stretch h-6 flex flex-row items-start justify-center gap-[10px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/icons-3.svg"
                    />
                    <div className="flex-1 relative">
                      Dedicated account manager
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center gap-[10px] mq450:flex-wrap">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/icons-3.svg"
                    />
                    <div className="flex-1 relative inline-block min-w-[159px]">
                      Assistance with interview scheduling
                    </div>
                  </div>
                  <div className="self-stretch h-6 flex flex-row items-start justify-center gap-[10px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/icons-3.svg"
                    />
                    <div className="flex-1 relative">Custom reports</div>
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-4 px-5 bg-white self-stretch rounded-3xs shadow-[0px_20px_40px_rgba(92,_39,_192,_0.35)] flex flex-row items-start justify-center gap-[16px]">
              <div className="w-[104px] relative text-lg font-medium font-poppins text-primary-100 text-center flex items-end justify-center min-w-[104px] whitespace-nowrap">
                Get Started
              </div>
              <div className="h-3.5 w-px overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                <img
                  className="h-0 w-[18px] relative z-[1]"
                  alt=""
                  src="/vector.svg"
                />
                <img
                  className="h-3.5 w-[7px] relative z-[2] ml-[-5px]"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </button>
          </div>
          <ValueTransformer
            spacingManagerPlus="6"
            month="Months"
            fiveBlack="169.00"
            propWidth="15px"
            propMinWidth="15px"
            propMinWidth1="58px"
          />
        </div>
        <div className="w-[247px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border text-left text-9xl font-poppins">
          <div className="self-stretch h-[78px] rounded-3xs bg-primary-300 overflow-hidden shrink-0 flex flex-row items-start justify-start py-3.5 pr-[74px] pl-[75px] box-border [debug_commit:1cbd860]">
            <h2 className="m-0 self-stretch flex-1 relative text-inherit leading-[50px] capitalize font-semibold font-inherit mq450:text-3xl mq450:leading-[40px]">
              Step-3
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAggregator;
