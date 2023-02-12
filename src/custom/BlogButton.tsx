type Props = {
    text: string;
  };
  
  const BlogButton = ({ text }: Props) => {
    return (
    <button className="bg-Brown text-black font-medium w-32 h-10 text-sm rounded-md items-center flex justify-center">{text}</button>
    )
  };
  
  export default BlogButton;
  