import Blog from "../elements/Blog";
import Header from "../elements/Header";
import Info from "../elements/Info";
import Subscribe from "../elements/Subscribe";

const Home = () => {
  return (
    <section className="overflow-x-hidden">
      <Header/>
      <Info/>
      <Blog/>
      <Subscribe/>
    </section>
  );
};

export default Home;
