import { Link } from "react-router-dom";
import img_001 from "../assets/work1_img.png";
import "../fontawesome-free-6.5.2-web/css/all.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link href="#">
          <img src={img_001} />
        </Link>

        <div className="main-linkholder">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service" id="services">
            Services <i className="fa-solid fa-caret-down"></i>
            <div className="dropdown_links">
              <p>
                <i className="fa-solid fa-tv"></i>
                <Link href="#">Web Application Development</Link>
              </p>{" "}
              <p>
                <i className="fa-solid fa-mobile-phone"></i>

                <Link href="#">Mobile Development</Link>
              </p>
              <p>
                <i className="fa-solid fa-pie-chart"></i>
                <Link href="#">Digital Marketing</Link>
              </p>
              <p>
                <i className="fa-solid fa-thumbs-up"></i>
                <Link href="#">QA & Test Automation</Link>
              </p>
              <p>
                <i className="fa-solid fa-pencil"></i>
                <Link href="#">UI/UX Design</Link>
              </p>
            </div>
          </Link>
          <Link to="/contact">Contact</Link>
        </div>
        <i className="fa-solid fa-bars">
          <div className="main-linkholder Mobile_links">
            <div className="Links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/service" id="services">
                Services <i className="fa-solid fa-caret-down"></i>
                <div className="dropdown_links">
                  <p>
                    <i className="fa-solid fa-tv"></i>
                    <Link href="#">Web Application Development</Link>
                  </p>{" "}
                  <p>
                    <i className="fa-solid fa-mobile-phone"></i>

                    <Link href="#">Mobile Development</Link>
                  </p>
                  <p>
                    <i className="fa-solid fa-pie-chart"></i>
                    <Link href="#">Digital Marketing</Link>
                  </p>
                  <p>
                    <i className="fa-solid fa-thumbs-up"></i>
                    <Link href="#">QA & Test Automation</Link>
                  </p>
                  <p>
                    <i className="fa-solid fa-pencil"></i>
                    <Link href="#">UI/UX Design</Link>
                  </p>
                </div>
              </Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </i>

        <div className="number">
          <Link href="#">
            <p>Call Us: +91 85558 14440</p>
            <i className="fa-solid fa-phone"></i>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
