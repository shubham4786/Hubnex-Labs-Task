const Component = ({ unsplashMpdLxiIg0P0 }) => {
  return (
    <div className="rounded-2xl bg-neutrals-white shadow-[0px_2px_20px_rgba(0,_0,_0,_0.13)] overflow-hidden flex flex-col items-end justify-start gap-[10px] max-w-full text-left text-4xl text-gray-300 font-garnett-medium">
      <img
        className="self-stretch h-[245px] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={unsplashMpdLxiIg0P0}
      />
      <div className="self-stretch flex flex-col items-end justify-start p-5 gap-[30px]">
        <h3 className="m-0 self-stretch relative text-inherit leading-[27px] font-normal font-inherit mq450:text-lg mq450:leading-[22px]">
          Rework has been a great way to make the hiring process easier and
          faster.
        </h3>
        <div className="self-stretch relative text-lg leading-[27px] font-poppins text-neutrals-300">
          “We've been able to save money and time, and the recruiters have been
          able to find the best employers leads. Highly recommend! “
        </div>
      </div>
    </div>
  );
};

export default Component;
