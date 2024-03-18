import AlignmentHelper from "./alignment-helper";

const FrameComponent2 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-end py-0 pr-0.5 pl-0 box-border max-w-full text-center text-23xl text-primary-100 font-sans">
      <div className="flex-1 overflow-hidden flex flex-col items-center justify-start pt-[101px] px-5 pb-[155px] box-border gap-[93px] max-w-full z-[2] mq825:gap-[46px_93px] mq825:pt-[43px] mq825:pb-[66px] mq825:box-border mq1125:pt-[66px] mq1125:pb-[101px] mq1125:box-border mq450:gap-[23px_93px]">
        <div className="w-[1200px] flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
          <h1 className="m-0 w-[997px] relative text-inherit leading-[50px] capitalize inline-block shrink-0 max-w-full font-inherit mq825:text-15xl mq825:leading-[40px] mq450:text-6xl mq450:leading-[30px]">
            <span>{`Our Amazing Benefits `}</span>
            <span className="font-sans font-normal">
              Helpful For Your Hiring
            </span>
          </h1>
        </div>
        <div className="w-[975px] hidden max-w-full" />
        <div className="w-[1200px] h-[544px] flex flex-row flex-wrap items-start justify-between relative max-w-full text-left text-5xl ">
          <AlignmentHelper
            eosIconsai="/eosiconsai.svg"
            prop="60%"
            costReduce="Cost Reduce"
            zeroOverheadInTheHiringPr="Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies"
          />
          <AlignmentHelper
            eosIconsai="/eosiconsai-1.svg"
            prop="50% Faster"
            costReduce="Recruitment by TAT"
            zeroOverheadInTheHiringPr="Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies"
            propLeft="428.2px"
            propTop="0px"
            propHeight="unset"
            propLineHeight="27px"
          />
          <div className="w-[343.7px] !m-[0] absolute top-[0px] left-[856.3px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border gap-[30.799999999999955px]">
            <div className="flex flex-row items-start justify-start py-0 pr-1 pl-[3.7000000000000455px]">
              <div className="h-[32.2px] flex flex-col items-start justify-start relative gap-[10px]">
                <img
                  className="w-[43px] h-[32.2px] relative"
                  alt=""
                  src="/vector-7.svg"
                />
                <img
                  className="w-[66.74%] h-[55.59%] absolute !m-[0] top-[21.43%] right-[14.65%] bottom-[22.98%] left-[18.6%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/vector-8.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
              <h3 className="m-0 self-stretch h-[66px] relative text-inherit inline-block font-inherit mq450:text-lgi">
                <p className="m-0">{`Highly Contextualized `}</p>
                <p className="m-0 font-sans font-normal">Interview</p>
              </h3>
              <div className="self-stretch relative text-base leading-[28px] font-poppins text-gray-500">
                Al models generate highly contextualized interviews for the
                candidates based on your Company profile, Job description and
                Candidate's CV.
              </div>
            </div>
          </div>
          <div className="w-[343.7px] !m-[0] absolute top-[308px] left-[0px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border gap-[24px]">
            <div className="flex flex-row items-start justify-start py-0 px-1.5">
              <div className="h-9 flex flex-row items-start justify-start relative gap-[10px]">
                <img className="h-9 w-9 relative" alt="" src="/vector-9.svg" />
                <img
                  className="h-[38.89%] w-[61.11%] absolute !m-[0] top-[41.67%] right-[27.78%] bottom-[19.44%] left-[11.11%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/vector-10.svg"
                />
                <img
                  className="h-[15.28%] w-[8.33%] absolute !m-[0] top-[70.83%] right-[13.89%] bottom-[13.89%] left-[77.78%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/vector-11.svg"
                />
                <img
                  className="h-[19.44%] w-[33.33%] absolute !m-[0] top-[0%] right-[38.89%] bottom-[80.56%] left-[27.78%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/vector-12.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
              <h3 className="m-0 self-stretch relative text-inherit leading-[27px] font-inherit mq450:text-lgi">
                <p className="m-0">{`Automated `}</p>
                <p className="m-0 font-sans font-normal">Scheduling</p>
              </h3>
              <div className="self-stretch relative text-base leading-[28px] font-poppins text-gray-500">{`Email & WhatsApp based communication for interview scheduling with automated reminders.`}</div>
            </div>
          </div>
          <AlignmentHelper
            eosIconsai="/eosiconsai-2.svg"
            prop="AI generated Interviews"
            costReduce="On what matters"
            zeroOverheadInTheHiringPr="0 manual interventions, completely seamless experience for the candidates."
            propLeft="428.2px"
            propTop="308px"
            propHeight="66px"
            propLineHeight="unset"
          />
          <AlignmentHelper
            eosIconsai="/fluenttasksapp20regular.svg"
            prop="in-built"
            costReduce="ATS"
            zeroOverheadInTheHiringPr={`To manage all of your candidates & Credo verified CVs. Integrations with other ATS coming soon.`}
            propLeft="856.3px"
            propTop="308px"
            propHeight="66px"
            propLineHeight="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
