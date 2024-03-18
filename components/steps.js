import { useMemo } from "react";

const Steps = ({
  uploadDocuments,
  shortlistTheMostQualified,
  frame48095633,
  propMinHeight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div className="flex-1 bg-white1 flex flex-col items-center justify-between pt-8 pb-[60px] pr-[0.30000000000001137px] pl-[30px] box-border relative min-w-[299px] min-h-[282px] max-w-full text-left text-3xl text-black1 font-poppins">
      <h3 className="m-0 w-[339.3px] relative text-inherit leading-[29px] font-sans  font-inherit inline-block max-w-full mq450:text-lg mq450:leading-[23px]">
        {uploadDocuments}
      </h3>
      <div
        className="self-stretch flex flex-col items-center justify-start pt-0 px-3.5 pb-[19px] text-lg text-dimgray"
        style={frameDivStyle}
      >
        <div className="self-stretch flex flex-col items-center justify-center">
          <div className="self-stretch relative font-normal">
            {shortlistTheMostQualified}
          </div>
        </div>
      </div>
      <div className="w-[84px] h-[84px] absolute !m-[0] top-[0px] right-[0.3px] rounded-t-none rounded-br-none rounded-bl-3xs flex items-center justify-center z-[2]">
        <img
          className="w-full h-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.333)]"
          loading="lazy"
          alt=""
          src={frame48095633}
        />
      </div>
    </div>
  );
};

export default Steps;
