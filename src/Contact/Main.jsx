import img010 from "../assets/Project_cartoon_img7.jpeg";
import { Bubbles } from "../Services/Main";

const Main3 = () => {
  return (
    <main>
      <Main_comp />
      <Bubbles />
    </main>
  );
};

export default Main3;

function Main_comp() {
  return (
    <>
      <div className="Banner">
        <div className="Banner_display">
          <h1>Contact Us</h1>
          <span>
            <a href="#">Home</a>
            <i className="fa-solid fa-circle"></i>
            <a href="#">Contact Us</a>
          </span>
        </div>
      </div>
      <div className="Contacts">
        <img src={img010} alt="" />
        <div className="contact_contents">
          <h2>Get in touch</h2>
          <h1>Contact Us</h1>

          <section>
            <p>
              <span>Phone: </span>
              <br />
              <a href="#">+91 85558 14440</a>
            </p>
            <p>
              <span>Email:</span> <br />
              <a href="#">info@balancedrock.com</a>
            </p>
            <p>
              <span>Address:</span> <br />
              <a href="#">
                Aduguru Apartment, 2nd floor 104, Tarnaka Street No 3,
                Hyderabad, Telengana, India - 500017
              </a>
            </p>
          </section>
        </div>
      </div>
      <form action="submit"></form>
    </>
  );
}
