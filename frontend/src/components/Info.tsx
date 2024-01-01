import InfoCard from "./InfoCard";

interface Props {
  contents: {
    icon: JSX.Element;
    title: string;
    body: string;
  }[];
}

const Info = ({ contents }: Props) => {
  return (
    <div className="grid w-full grid-cols-1 content-start items-start justify-start gap-10 px-10 xl:grid-cols-2">
      {contents.map((content, index) => (
        <InfoCard
          key={index}
          icon={content.icon}
          title={content.title}
          body={content.body}
          last={
            contents.length % 2 != 0 && contents.length - 1 == index
              ? true
              : false
          }
        />
      ))}
    </div>
  );
};

export default Info;
