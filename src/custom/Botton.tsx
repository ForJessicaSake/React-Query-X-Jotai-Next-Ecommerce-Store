type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
  <button className="bg-btn text-white font-light w-28 h-9 text-sm rounded-md items-center flex justify-center">{text}</button>
  )
};

export default Button;
