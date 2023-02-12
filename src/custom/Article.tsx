import BlogButton from "./BlogButton";

type Props = {
  image: any;
  heading: string;
  content: string;
  comment:string;
  date:any;
};

const Article = ({ image, heading, content, comment, date }: Props) => {
  return (
    <section className="relative w-72 lg:flex">
      <img src={image} alt="interior decoration" className="w-12/12 lg:w-72" />
      <article className=" absolute left-28 lg:left-52 top-6 py-2 lg:h-48 h-52 lg:w-72 w-56 rounded-md bg-Header flex flex-col items-center justify-center ">
        <h1 className="font-bold text-lg pb-2">{heading}</h1>
        <p className="lg:text-xs font-light pb-2">{content}</p>
        <p className="font-light text-sm">Comments:{comment}</p>
        <h6 className=" py-2 font-light text-sm">Date:{date}</h6>
        <BlogButton text="Read More"/>
      </article>
    </section>
  );
};

export default Article;
