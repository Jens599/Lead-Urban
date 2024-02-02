import { TiTick } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  icon: JSX.Element;
  title: string;
  subtitle?: string;
  Premium?: boolean;
  list: string[];
  link: string;
}

const ProductCard = ({ icon, title, subtitle, Premium, list, link }: Props) => {
  return (
    <>
      <div className="max-w-80">
        <div className="min-h-96 rounded-3xl border-4 border-black/60 bg-primary-light-blue flex-col flex">
          <div className="mt-6 h-1/3 border-b-2 border-dashed pb-2 ">
            <div className="mx-4 mb-2">
              <div className="grid grid-cols-4 gap-2 text-white">
                <div className="drop-shadow-lg">{icon}</div>
                <div className="col-span-3">
                  <h1 className="text-xl font-bold">{title}</h1>
                  <p className=" ">{subtitle}</p>
                </div>
                {Premium ? (
                  <p className="col-span-4 mt-2 flex items-center justify-center rounded-3xl bg-primary-blue py-2">
                    Premium available
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="container my-4 flex h-min flex-col gap-4 grow justify-between">
            <div className="flex items-center font-light text-white">
              <div className="my-4 flex flex-col gap-4">
                {list.map((item) => (
                  <div className="flex items-center font-light text-white">
                    {subtitle && <TiTick color="lime" size="2rem" />}
                    <p className="max-w-[27ch]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <a href={link} className="flex items-center gap-2 font-semibold">
              Get Started <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
