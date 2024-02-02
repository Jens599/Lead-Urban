import { FaArrowRight } from "react-icons/fa";

interface Props {
  img: string;
  title: string;
  body: string;
  link: string;
}

const LandingCards = ({ img, body, title, link }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="grid h-[554px] w-[380px] overflow-hidden rounded-3xl bg-primary-light-blue text-white lg:w-11/12 lg:grid-cols-5 lg:grid-rows-4 ">
        <div className="row-span-3 flex flex-col lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-5 lg:px-8 lg:py-8">
          <div className="flex grow flex-col justify-between px-4 py-6">
            <div className="space-y-2">
              <div className="w-[24ch] text-2xl font-bold lg:text-5xl">
                {title}
              </div>
              <div className="w-[38ch] font-semibold lg:text-3xl">{body}</div>
            </div>
            <div className="flex items-center gap-2 font-semibold lg:text-3xl">
              {link}
              <div className="">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-2 mt-4 overflow-hidden lg:col-start-4 lg:col-end-6 lg:row-start-1 lg:row-end-5 lg:mt-0">
          <img src={img} className="size-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default LandingCards;
