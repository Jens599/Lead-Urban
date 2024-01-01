interface Props {
  title: string;
  subTitle?: string;
}
const Title = ({ title, subTitle }: Props) => {
  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="text-accent-orange text-5xl font-bold text-center">{title}</h1>
      <h2 className="text-white text-3xl text-center mx-10 lg:mx-28 mt-8">{subTitle}</h2>
    </div>
  );
};

export default Title;

