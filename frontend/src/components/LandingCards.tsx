import { FaArrowRight } from "react-icons/fa";

interface Props {
  img: string;
  title: string;
  body: string;
  link: string;
}

const LandingCards = ({ img, body, title, link }: Props) => {
  return (
    <div className="mx-6 grid grid-cols-5 grid-rows-5 overflow-hidden rounded-3xl bg-primary-blue text-white shadow-2xl shadow-black lg:mx-48 lg:h-96">
      <h1 className="order-1 col-span-5 pl-8 pr-8 pt-6 text-3xl font-bold text-accent-orange lg:col-span-3">
        {title}
      </h1>
      <div className="order-2 col-span-5 row-span-3 pl-8 pr-8 pt-6 text-xl lg:order-3 lg:col-span-3">
        <p className="line-clamp-[7]">{body}</p>
      </div>
      <div className="order-3 col-span-5 flex items-center gap-3 pb-6 pl-8 pr-8 pt-6 text-xl lg:order-4 lg:col-span-3">
        <div className="line-clamp-1">{link}</div>
        <FaArrowRight />
      </div>
      <div className="order-4 col-span-5 flex bg-red-300 lg:order-2 lg:col-span-2 lg:row-span-5">
        <img src={img} className="object-cover" />
      </div>
    </div>
  );
};

export default LandingCards;
