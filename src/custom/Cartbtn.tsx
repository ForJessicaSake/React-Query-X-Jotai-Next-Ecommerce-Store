type Props = {
    text: string;
  };
  
  const CartButton = ({ text }: Props) => {
    return (
    <button className="bg-btn text-white font-light w-32 h-10 text-xs rounded-md items-center flex justify-center">{text}</button>
    )
  };
  
  export default CartButton;
  