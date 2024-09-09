import Navbar from "../Home/nav-bar";
import Main3 from "./Main";
import "../style-sheets/Contact_page.css";
import { Form } from "../Home/Main";
import { Footer } from "../Home/Main";

const Contact = () => {
  return (
    <div className="container">
      <Navbar />
      <Main3 />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
