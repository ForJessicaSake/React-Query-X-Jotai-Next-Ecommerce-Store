import Store from "../elements/Store";
import Header from "../elements/Header";
import Info from "../elements/Info";
import Subscribe from "../elements/Subscribe";

const Home = () => {
  console.log(process.env.REACT_APP_SECOND_API_KEY)

  return (
    <section className="overflow-x-hidden">
      <h1>Welcome to {process.env.REACT_APP_API_KEY}</h1>
      <Header/>
      <Info/>
      <Store/>
      <Subscribe/>
    </section>
  );
};

export default Home;
