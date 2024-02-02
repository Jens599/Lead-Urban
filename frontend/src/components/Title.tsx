interface Props {
  title: string;
  subTitle?: string;
}
const Title = ({ title, subTitle }: Props) => {
  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="w-[21ch] text-center text-2xl font-bold text-accent-orange text-shadow-sm md:w-fit md:text-5xl">
        {title}
      </h1>
      <h2 className="mx-10 mt-8 text-center text-3xl text-white lg:mx-28">
        {subTitle}
      </h2>
    </div>
  );
};

export default Title;
