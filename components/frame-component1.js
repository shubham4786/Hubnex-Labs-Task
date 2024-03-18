import Component1 from "./component1";

const FrameComponent1 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[213px] box-border max-w-full text-left text-23xl text-primary-100 font-garnett-semibold mq825:pb-[90px] mq825:box-border mq1125:pb-[138px] mq1125:box-border">
      <div className="w-[1198px] flex flex-col items-start justify-start gap-[86px] max-w-full mq825:gap-[21px_86px] mq1400:gap-[43px_86px]">
        <div className="w-[496px] flex flex-col items-start justify-start gap-[2px] max-w-full">
          <h1 className="m-0 self-stretch h-[59px] relative text-inherit inline-block font-inherit mq825:text-15xl mq450:text-6xl">
            <span>{`Customer `}</span>
            <span className="font-garnett-regular text-gray-600">
              Testimonials
            </span>
          </h1>
          <div className="relative text-lg font-poppins text-gray-600">
            What others has say About Us
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full text-lg text-black1 font-poppins">
          <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[287px] max-w-full">
            <Component1
              reworkHasBeenAGreatWayToM="“Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “"
              ellipse2="/ellipse-2@2x.png"
              theresaWebb="Theresa Webb"
              hRManagerAmazon="HR Manager, Amazon"
            />
            <Component1
              reworkHasBeenAGreatWayToM="“ Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, ““ Rework has been a great way to make the hiring process easier and faster.  Highly recommend! “"
              ellipse2="/ellipse-1@2x.png"
              theresaWebb="Ronald Richards"
              hRManagerAmazon="HR Manager, Google"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[287px] max-w-full">
            <Component1
              reworkHasBeenAGreatWayToM="“Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! ““ Rework has been a great way to make the hiring process easier and faster.  Highly recommend! “"
              ellipse2="/ellipse-1-1@2x.png"
              theresaWebb="Savannah Nguyen"
              hRManagerAmazon="HR Manager, Microsoft"
            />
            <Component1
              reworkHasBeenAGreatWayToM="“Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “"
              ellipse2="/ellipse-1-2@2x.png"
              theresaWebb="Ronald Richards"
              hRManagerAmazon="HR Manager, Google"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[287px] max-w-full">
            <Component1
              reworkHasBeenAGreatWayToM="“Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “"
              ellipse2="/ellipse-2-1@2x.png"
              theresaWebb="Theresa Webb"
              hRManagerAmazon="HR Manager, Amazon"
            />
            <Component1
              reworkHasBeenAGreatWayToM="“ Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, ““ Rework has been a great way to make the hiring process easier and faster.  Highly recommend! “"
              ellipse2="/ellipse-1-3@2x.png"
              theresaWebb="Ronald Richards"
              hRManagerAmazon="HR Manager, Google"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
