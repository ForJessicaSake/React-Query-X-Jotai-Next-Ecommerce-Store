type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
  <button className="bg-btn text-white font-light w-32 h-10 text-sm rounded-md items-center flex justify-center">{text}</button>
  )
};

export default Button;
