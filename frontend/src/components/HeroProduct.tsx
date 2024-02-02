const HeroProduct = () => {
  return (
    <div
      className={`relative h-[616px] bg-[url('@/assets/2151065698.jpg')] bg-bottom`}
    >
      {/* Tint the image to a blue color */}
      <div className="absolute inset-0 bg-background-purple opacity-50"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        {/* Centered Title */}
        <h1 className="mb-4 text-center text-2xl font-bold md:w-[30ch] lg:text-6xl">
          Virtual machines anyone can set up in seconds
        </h1>

        {/* Centered Content */}
        <p className="mb-6 text-center text-lg md:w-[45ch] lg:text-xl">
          Get dependable uptime with our 99.99% SLA, simple security tools, and
          predictable monthly pricing with DigitalOcean's virtual machines,
          called Droplets.
        </p>

        {/* Get Started Button */}
        <button className="rounded-full bg-white px-6 py-2 font-semibold text-blue-500 shadow-2xl shadow-white transition duration-300 hover:bg-blue-500 hover:text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroProduct;
