import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  body: string;
  last?: boolean;
}

const InfoCard = ({ icon, title, body, last }: Props) => {
  return (
    <div
      className={`flex flex-col items-center justify-center 2xl:mx-10 ${
        last ? "xl:col-span-2" : null
      }`}
    >
      <div className="w-min-96 m-2 grid h-[28rem] w-[40] grid-cols-3 grid-rows-3 rounded-2xl bg-primary-light-blue p-3 text-white shadow-2xl shadow-black lg:h-60 xl:h-52">
        <div className="col-span-3 mt-4 flex items-center justify-center lg:col-span-1 lg:row-span-3">
          {icon}
        </div>
        <div className="col-span-3 flex items-center justify-center px-4 text-2xl font-semibold text-accent-orange lg:col-span-2 lg:justify-start">
          {title}
        </div>
        <div className="col-span-3 flex items-start justify-start px-4 lg:col-span-2 lg:row-span-2 ">
          {body}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
