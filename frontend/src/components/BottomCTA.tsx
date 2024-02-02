const BottomCTA = () => {
  return (
    <>
      <div className="wave-pattern w-fill h-16 bg-primary-light-blue"></div>
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-primary-light-blue py-24">
        <p className="text-center text-3xl font-black text-white text-shadow-sm">
          Start building today
        </p>
        <p className="text-center font-medium text-primary-blue">
          Sign up now and you'll be up and running on DigitalOcean in just
          minutes.
        </p>
        <div className="flex cursor-pointer items-center justify-center rounded-2xl bg-primary-blue px-8 py-4 shadow-md shadow-black ">
          <p className="font-semibold text-white text-shadow-accent lg:text-xl">
            Getting Started
          </p>
        </div>
      </div>
    </>
  );
};

export default BottomCTA;
