import Article from "../custom/Article";
import snug from "../assets/Images/snug.svg";
import snug2 from "../assets/Images/snug2.svg";

const Blog: React.FC = () => {
  return (
    <article className="py-6 lg:flex hidden flex-col text-center">
      <h1 className="text-2xl font-bold py-10">Latest Blog</h1>
      <section className="flex lg:flex-row flex-col justify-between lg:px-14 px-6 w-10/12">
        <section>
          <Article
            image={snug2}
            heading="Living Room"
            content="How your living room should look like.."
            comment="2"
            date="11/01/12"
          />
        </section>
        <section className="lg:mt-0 mt-20">
          <Article
            image={snug}
            heading="Dining Room"
            content="How your dining room should look like.."
            comment="2"
            date="11/01/12"
          />
        </section>
      </section>
    </article>
  );
};

export default Blog;
