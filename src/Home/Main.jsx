import { useTypewriter, Cursor } from "react-simple-typewriter";
import img002 from "../assets/01.png";
import img003 from "../assets/02.png";
import img004 from "../assets/Project_cartoon_img5.jpeg";
import img005 from "../assets/Project_cartoon_img2.jpeg";
import { Bubbles } from "../Services/Main";

function Main() {
  // const { text } = useTypewriter({
  //   words: ["INNOVATE", "TRANSFORM"],
  //   loop: {},
  //   typeSpeed: 120,
  //   delaySpeed: 80,
  // });
  return (
    <>
      <main>
        <Bubbles />
        <Comp1 />
        <About />
        <Offers />
        <Form />
        <Footer />
      </main>
    </>
  );
}

export default Main;

function Comp1() {
  return (
    <>
      <div className="typewriter">
        <h1>
          Build to <br />
          <span>INNOVATE</span>
          {/* <span>
            <Cursor cursorStyle="<" />
          </span> */}
        </h1>
        <p>Do you Know what it takes to grow your business? Do you want to?</p>

        <a href="#">contact today</a>
      </div>

      <div className="shadow_box">
        <div id="vision">
          <img src={img002} alt="" />
          <section>
            <h2>our vision</h2>
            <p>
              Leading the digital with innovative IT solutions that empower
              businesses and enhance lives globally
            </p>
          </section>
        </div>
        <div id="mission">
          <img src={img003} alt="" />
          <section>
            <h2>our mission</h2>
            <p>
              To provide cutting edge IT solutions that drive efficiency,
              innovation, and growth for our clients.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

function About() {
  window.addEventListener("scroll", () => {
    document
      .querySelector(".img004_holder")
      .classList.toggle("window-scroll", window.scrollY >= 900);
  });
  return (
    <div className="about_preview">
      <div className="fancy_context">
        <div className="img004_holder">
          <img src={img004} alt="" id="cartoon1" />
        </div>
        <article>
          <h2>About us</h2>

          <h1>How we Built</h1>
          <p>
            Welcome to Balancedrock Technologies, where innovation meets
            excellence in software development. Founded on the principles of
            quality, creativity, and customer satisfaction, we are a team of
            passionate developers, designers, and strategists committed to
            delivering cutting-edge solutions tailored to your business needs,
            we believe that technology is the backbone of modern business. Our
            team comprises skilled professionals with diverse expertise in
            software development, web design, mobile app development, and IT
            consulting. With years of experience across various industries, we
            bring a wealth of knowledge and a unique perspective to every
            project we undertake.
          </p>

          <a href="#">read more...</a>
        </article>
      </div>

      <div className="services_preview">
        <h2>About us</h2>

        <h1>How we Built</h1>
        <br />
        <br />
        <div className="render_boxes">
          <div className="render">
            <span>
              <p>
                Web application <br /> development
              </p>
            </span>
          </div>
          <div className="render">
            <span>
              <p>
                QA & Test <br /> automation
              </p>
            </span>
          </div>
          <div className="render">
            <span>
              <p>Mobile development</p>
            </span>
          </div>
          <div className="render">
            <span>
              <p>UI/UX Design</p>
            </span>
          </div>
          <div className="render">
            <span>
              <p>digital marketing</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Offers() {
  return (
    <div className="offers">
      <h2>About us</h2>

      <h1>How we Built</h1>
      <div className="History">
        <div className="History_img">
          <img src={img005} alt="" />
        </div>

        <div className="History_contents">
          <div className="History_box">
            <i className="fa-solid fa-pie-chart"></i>
            <span>
              <h1>Balancedrock</h1>
              <p>
                At Balancedrock Technologies, our journey began with a shared
                vision: to harness the power of technology to solve real-world
                problems.
              </p>
            </span>
          </div>
          <div className="History_box">
            <i className="fa-solid fa-pie-chart"></i>
            <span>
              <h1>Balancedrock</h1>
              <p>
                What started as a small group of passionate IT professionals has
                grown into a leading company, delivering innovative solutions
                across industries
              </p>
            </span>
          </div>
          <div className="History_box">
            <i className="fa-solid fa-pie-chart"></i>
            <span>
              <h1>Balancedrock</h1>
              <p>
                Our success is built on the dedication and expertise of our
                team. From developers to designers, project managers to IT
                consultants, every member of Balancedrock Technologies plays a
                crucial role in delivering exceptional results.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Form() {
  return (
    <div className="form">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d536.5846907805495!2d78.53393662599039!3d17.425715437771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99637ad480f7%3A0x6a86aec9d3a24870!2sTara%20Tycoon%2C%20Street%20No.%202%2C%20Shri%20Mitra%20Ramana%20Classic%20Enclave%2C%20Krishna%20Giri%20Enclave%2C%20Tarnaka%2C%20Secunderabad%2C%20Telangana%20500017%2C%20India!5e0!3m2!1sen!2sng!4v1724874660008!5m2!1sen!2sng"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <section>
        <h1>Get free quotation</h1>
        <p>We Build your vision into reality</p>
        <form action=" https://formspree.io/f/mldrzqey" method="POST">
          <label htmlFor="text">Name</label>
          <input type="text" placeholder="Your Name*" />
          <br />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Your email*" />
          <label htmlFor="Phone">Phone</label>
          <input type="number" placeholder="Your number" />
          <label htmlFor="text">Project details</label>
          <textarea
            name="message"
            id="message"
            placeholder="Your message*"
          ></textarea>

          <button type="submit">send message</button>
        </form>
      </section>
    </div>
  );
}

export function Footer() {
  return (
    <div className="footer">
      <div className="foot_contents">
        <section id="About_section">
          <h1>About</h1>
          <br />
          <br />

          <p>
            At Balancedrock technologies, we believe in our performance and our
            client's credentials to gain the trust of new customers.
          </p>
        </section>
        <section>
          <h1>Quick links</h1>
          <br />
          <br />

          <div className="linkholder">
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">contact us</a>
            <a href="#">Services</a>
          </div>
        </section>
        <section id="address_section">
          <div id="address">
            <i className="fa-solid fa-location"></i>
            <span>
              <h1>Balancedrock technologies limited</h1>
              <p>
                Aduguru Apartment, 2nd floor 104, Tarnaka Street No 3,
                Hyderabad, Telengana, India - 500017
              </p>
            </span>
          </div>
          <br />
          <br />
          <div id="address">
            <i className="fa-solid fa-message"></i>
            <span>
              <h1>+91 85558 14440</h1>
              <p>info@Balancedrock.net</p>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
