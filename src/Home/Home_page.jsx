import Navbar from "./nav-bar";
import "../style-sheets/Home_page.css";
import Main from "./Main";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
};

export default Home;
