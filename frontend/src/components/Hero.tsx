import bg from "../assets/transformation-4707710.jpg";
import hero from "../assets/WhatsApp Image 2023-12-30 at 12.39.10_69049ec7.jpg";

const Hero = () => {
  return (
    <div className=" h-dvh">
      <div className="relative h-4/5 rounded-b-[5rem] shadow-2xl shadow-black">
        <img
          src={bg}
          className="absolute inset-0 h-full w-full rounded-b-[5rem] object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="h-full w-3/5 py-44 text-center lg:w-3/5 lg:py-20 xl:w-2/5">
            <p className="text-accent-orange pb-10 text-4xl font-bold drop-shadow-xl lg:text-7xl">
              Explore your business ideas into a real digital form.
            </p>
            <p className="p-4 text-xl font-semibold text-white lg:text-3xl">
              We serve you with all type of web solutions.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 m-auto translate-y-[90%] lg:w-3/5 lg:translate-y-2/3">
          <img src={hero} className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
