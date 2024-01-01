interface Props {
  size?: number;
}

const Spacer = ({ size }: Props) => {
  let styles = "w-full bg-back h-16";
  switch (size) {
    case 1:
      styles = "w-full bg-back h-24";
      break;
    case 2:
      styles = "w-full bg-back h-32";
      break;
    case 3:
      styles = "w-full bg-back h-40";
      break;
    case 4:
      styles = "w-full bg-back h-48";
      break;

    default:
      break;
  }
  return <div className={styles}></div>;
};

export default Spacer;
