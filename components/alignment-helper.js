import { useMemo } from "react";

const AlignmentHelper = ({
  eosIconsai,
  prop,
  costReduce,
  zeroOverheadInTheHiringPr,
  propLeft,
  propTop,
  propHeight,
  propLineHeight,
}) => {
  const alignmentHelperStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const costReduceStyle = useMemo(() => {
    return {
      height: propHeight,
      lineHeight: propLineHeight,
    };
  }, [propHeight, propLineHeight]);

  return (
    <div
      className="w-[343.7px] !m-[0] absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[18px] text-left text-5xl text-primary-100 font-sans "
      style={alignmentHelperStyle}
    >
      <img
        className="w-[50px] h-[50px] relative overflow-hidden shrink-0"
        alt=""
        src={eosIconsai}
      />
      <h3
        className="m-0 self-stretch h-[66px] relative text-inherit inline-block font-inherit mq450:text-lgi"
        style={costReduceStyle}
      >
        <p className="m-0">{prop}</p>
        <p className="m-0 font-sans font-normal">{costReduce}</p>
      </h3>
      <div className="self-stretch relative text-base leading-[28px] font-poppins text-gray-500">
        {zeroOverheadInTheHiringPr}
      </div>
    </div>
  );
};

export default AlignmentHelper;
