import Blog from "../elements/Blog";
import Collection from "../elements/Collection";
import Header from "../elements/Header";
import Info from "../elements/Info";
import Subscribe from "../elements/Subscribe";

const Home = () => {
  return (
    <section className="overflow-x-hidden">
      <Header/>
      <Info/>
      <Collection/>
      <Blog/>
      <Subscribe/>
    </section>
  );
};

export default Home;
