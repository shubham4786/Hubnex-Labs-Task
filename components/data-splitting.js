import Component from "./component";

const DataSplitting = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[84px] pr-[22px] pl-5 box-border max-w-full text-left text-23xl text-primary-100 font-garnett-semibold mq825:pb-[55px] mq825:box-border">
      <div className="w-[1192px] flex flex-col items-end justify-start gap-[43px] max-w-full mq825:gap-[21px_43px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[52px] max-w-full mq825:gap-[26px_52px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
            <h1 className="m-0 h-[59px] w-[341px] relative text-inherit capitalize inline-block max-w-full font-inherit mq825:text-15xl mq450:text-6xl">
              <span>{`Success `}</span>
              <span className="font-garnett-regular">Stories</span>
            </h1>
          </div>
          <div className="self-stretch grid flex-row items-start justify-start gap-[20px] max-w-full grid-cols-[repeat(3,_minmax(288px,_1fr))] text-4xl text-gray-300 font-garnett-medium mq825:grid-cols-[minmax(288px,_1fr)] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(288px,_499px))]">
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0@2x.png" />
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0-1@2x.png" />
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0-2@2x.png" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px]">
          <div className="w-32 flex flex-row items-start justify-start gap-[13px]">
            <div className="h-2 w-[34px] relative rounded-8xs bg-primary-100 overflow-hidden shrink-0" />
            <div className="h-2 flex-1 relative rounded-8xs bg-primary-300 overflow-hidden" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSplitting;
