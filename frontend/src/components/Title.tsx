interface Props {
  title: string;
  subTitle?: string;
}
const Title = ({ title, subTitle }: Props) => {
  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="text-shadow-sm text-center text-5xl font-bold text-accent-orange">
        {title}
      </h1>
      <h2 className="mx-10 mt-8 text-center text-3xl text-white lg:mx-28">
        {subTitle}
      </h2>
    </div>
  );
};

export default Title;
