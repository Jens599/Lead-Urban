import urbanImage from "@/assets/3786385_78786.svg";

const ProductCTA = () => {
  return (
    <>
      <div>
        <div className="container relative h-96 overflow-hidden">
          <img
            src={urbanImage}
            className="h-full w-full rounded-3xl border-2 border-primary-blue bg-primary-light-blue object-cover sm:object-[75%] md:object-bottom"
          />
          <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center space-y-16 bg-background-purple/25 text-white">
            <div className="flex flex-col items-center space-y-6">
              <h3 className="text-2xl font-bold text-accent-orange text-shadow-lg md:text-4xl">
                Start building today
              </h3>
              <p className="w-[28ch] text-center font-semibold text-shadow-sm md:w-[40ch] md:text-xl">
                Sign up now and you'll be up and running on DigitalOcean in just
                minutes.
              </p>
            </div>
            <button className="rounded-full border-2 border-accent-orange/75 bg-primary-blue px-6 py-1 hover:border-accent-orange md:px-12 md:py-2 md:text-xl">
              Sign up to get started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCTA;
