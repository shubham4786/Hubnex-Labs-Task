const ValueAggregator = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[68px] box-border max-w-full text-left text-lg text-gray-400 font-poppins mq1125:pb-11 mq1125:box-border mq450:pb-[29px] mq450:box-border">
      <div className="flex-1 bg-white overflow-hidden flex flex-row items-end justify-center pt-[81px] px-[120px] pb-[110px] box-border gap-[40px] max-w-full mq825:gap-[40px_20px] mq825:pt-[53px] mq825:px-[60px] mq825:pb-[71px] mq825:box-border mq1125:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[94px] min-w-[502px] max-w-full mq825:gap-[47px_94px] mq825:min-w-full mq450:gap-[23px_94px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
            <h1 className="m-0 self-stretch h-[118px] relative text-23xl text-primary-100 flex items-center font-garnett-semibold mq825:text-15xl mq450:text-6xl">
              <span>
                <span>{`Discover the Future of `}</span>
                <span className="font-garnett-regular">Talent Assessment!</span>
              </span>
            </h1>
            <div className="self-stretch relative">
              <p className="m-0">Facing challenges in traditional hiring?</p>
              <p className="m-0">
                Uncover the costs, pitfalls, and the game-changing role of
                Generative AI in recruitment.
              </p>
            </div>
            <div className="self-stretch relative">
              <p className="m-0">
                <b>🔍 Inside this Whitepaper:</b>
              </p>
              <ul className="m-0 text-inherit pl-6">
                <li className="mb-0">
                  <span className="font-poppins">{`Manual vs. Machine-based hiring: Costs & Challenges.`}</span>
                </li>
                <li className="mb-0">
                  <span className="font-poppins">
                    The truth about "Interview as a Service."
                  </span>
                </li>
                <li>
                  <span className="font-poppins">
                    Generative AI: The simple explanation. Optimize Your Hiring
                    Process Today!
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[21px] px-14 bg-primary-100 rounded-xl shadow-[0px_8px_18px_rgba(174,_93,_255,_0.46)] flex flex-row items-start justify-start box-border max-w-full hover:bg-darkorchid mq825:pl-7 mq825:pr-7 mq825:box-border">
            <div className="relative text-5xl leading-[28px] font-medium font-poppins text-snow text-left mq450:text-lgi mq450:leading-[22px]">
              Download Now for Smarter Recruitment
            </div>
          </button>
        </div>
        <div className="h-[563px] w-[387px] relative rounded-xl flex items-center justify-center">
          <img
            className="h-full w-full max-w-full object-contain absolute left-[-9px] top-[10px] [transform:scale(1.049)] mq1125:flex-1"
            loading="lazy"
            alt=""
            src="/rectangle-39394@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default ValueAggregator;
