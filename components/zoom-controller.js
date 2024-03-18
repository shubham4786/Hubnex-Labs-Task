import Steps from "./steps";

const ZoomController = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[67px] pr-0 pl-0.5 box-border max-w-full text-center text-19xl text-primary-100 font-sans font-semibold mq1125:pb-11 mq1125:box-border mq450:pb-[29px] mq450:box-border">
      <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[25px] w-[25px] absolute !m-[0] top-[105px] left-[505px]"
          alt=""
          src="/vector-13.svg"
        />
        <div className="flex-1 bg-white overflow-hidden flex flex-col items-center justify-start py-[95px] px-5 box-border gap-[114px] max-w-full z-[1] mq825:gap-[57px_114px] mq825:pt-[62px] mq825:pb-[62px] mq825:box-border mq450:gap-[28px_114px] mq450:pt-10 mq450:pb-10 mq450:box-border">
          <div className="w-[1198px] flex flex-row items-start justify-center max-w-full">
            <h1 className="m-0 w-[658px] relative text-inherit leading-[50px] capitalize inline-block shrink-0 max-w-full font-inherit mq825:text-11xl mq825:leading-[40px] mq450:text-4xl mq450:leading-[30px]">
              <span>{`How Our System `}</span>
              <span className="font-sans font-normal ">Operates</span>
            </h1>
          </div>
          <div className="w-[1198px] flex flex-col items-start justify-start gap-[89px] max-w-full text-left text-3xl text-black1 font-poppins mq825:gap-[22px_89px] mq1400:gap-[44px_89px]">
            <div className="self-stretch rounded-lg overflow-hidden flex flex-row flex-wrap items-center justify-center max-w-full [row-gap:20px]">
              <Steps
                uploadDocuments="Upload Documents"
                shortlistTheMostQualified="Shortlist the most qualified candidate and upload their details for the top companies"
                frame48095633="/frame-48095633.svg"
              />
              <div className="flex-1 bg-primary-300 flex flex-col items-center justify-between pt-[30px] pb-[60px] pr-0 pl-[30px] box-border relative min-w-[299px] min-h-[282px] max-w-full text-black font-sans font-semibold">
                <h3 className="m-0 w-[339.3px] relative text-inherit leading-[28px] font-inherit inline-block whitespace-nowrap max-w-full mq450:text-lg mq450:leading-[22px]  ">
                  Sign Up
                </h3>
                <div className="w-[339.3px] h-[100px] relative text-lg font-poppins font-normal text-dimgray inline-block shrink-0 max-w-full">
                  Follow the link below to sign up and get access of the current
                  job postings
                </div>
                <div className="w-[84px] h-[84px] absolute !m-[0] right-[-0.4px] bottom-[0px] rounded-tl-3xs rounded-tr-none rounded-b-none shrink-0 z-[1] flex items-center justify-center ">
                  <img
                    className="w-full h-full overflow-hidden shrink-0 z-[1] object-contain absolute left-[0px] top-[-4px] [transform:scale(1.333)]"
                    loading="lazy"
                    alt=""
                    src="/mingcuteuseraddline.svg"
                  />
                </div>
              </div>
              <Steps
                uploadDocuments="Get Rewards"
                shortlistTheMostQualified="As soon as the candidate gets selected you get your benefits"
                frame48095633="/frame-48095633-1.svg"
                propMinHeight="80px"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-8 px-5">
              <button className="cursor-pointer py-4 px-7 bg-white w-[164px] rounded-3xs shadow-[0px_8px_40px_rgba(0,_0,_0,_0.22)] box-border flex flex-row items-start justify-start gap-[16px] border-[2px] border-solid border-primary-100">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZoomController;
