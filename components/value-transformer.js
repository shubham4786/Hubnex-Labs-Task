import { useMemo } from "react";

const ValueTransformer = ({
  spacingManagerPlus,
  month,
  fiveBlack,
  propWidth,
  propMinWidth,
  propMinWidth1,
}) => {
  const dataComparisonStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const spacingManagerPlusStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const monthStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="flex-1 rounded-3xs bg-white shadow-[0px_20px_40px_rgba(118,_118,_118,_0.35)] overflow-hidden flex flex-col items-start justify-start pt-[34px] pb-[30px] pr-[34px] pl-[35px] box-border gap-[46px] min-w-[274px] max-w-full text-center text-4xl text-primary-100 font-space-grotesk mq825:pt-[22px] mq825:pb-5 mq825:box-border mq450:gap-[23px_46px]">
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-9 pl-[35px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[67px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[5px] mq450:flex-wrap">
              <div
                className="w-[11px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border"
                style={dataComparisonStyle}
              >
                <div
                  className="self-stretch relative font-medium inline-block min-w-[11px] mq450:text-lg"
                  style={spacingManagerPlusStyle}
                >
                  {spacingManagerPlus}
                </div>
              </div>
              <h3
                className="m-0 h-8 flex-1 relative text-inherit font-normal font-garnett-medium flex items-center justify-center min-w-[49px] mq450:text-lg"
                style={monthStyle}
              >
                {month}
              </h3>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-start [row-gap:20px] text-21xl text-gray-400 font-garnett-medium mq450:flex-wrap">
            <h1 className="m-0 h-14 w-[26px] relative text-inherit font-medium font-space-grotesk flex items-center justify-center shrink-0 min-w-[26px] mq825:text-13xl mq450:text-5xl">
              ₹
            </h1>
            <div className="h-14 flex-1 relative flex items-center justify-center min-w-[90px] mq825:text-13xl mq450:text-5xl">
              {fiveBlack}
            </div>
            <div className="h-[38px] w-[61px] relative text-base flex items-center justify-center shrink-0">
              /month
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[19px] text-lg font-garnett-medium">
        <div className="flex-1 flex flex-col items-center justify-center gap-[20px]">
          <div className="self-stretch relative leading-[28px]">
            Suitable for companies with 5-10 openings
          </div>
          <div className="self-stretch flex flex-col items-center justify-center gap-[10px] text-left text-base text-dimgray font-poppins">
            <div className="self-stretch h-6 flex flex-row items-start justify-center gap-[10px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
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
              <div className="flex-1 relative">Unlimited job postings</div>
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
              <div className="flex-1 relative">Dedicated account manager</div>
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
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
        <button className="cursor-pointer [border:none] py-4 px-5 bg-primary-100 flex-1 rounded-3xs shadow-[0px_20px_40px_rgba(92,_39,_192,_0.35)] flex flex-row items-start justify-center gap-[16px]">
          <div className="w-[103px] relative text-lg font-poppins text-white1 text-center flex items-end justify-center min-w-[103px] whitespace-nowrap">
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
    </div>
  );
};

export default ValueTransformer;
