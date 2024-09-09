import img007 from "../assets/Project_cartoon_img4.webp";
import img008 from "../assets/Project_cartoon_img3.jpeg";
import img009 from "../assets/Project_cartoon_img8.jpeg";
import { Form } from "../Home/Main";
import { Footer } from "../Home/Main";
import { Bubbles } from "../Services/Main";

const Main2 = () => {
  return (
    <main>
      <Bubbles />
      <Main_comp />
      <Form />
      <Footer />
    </main>
  );
};

export default Main2;

function Main_comp() {
  return (
    <>
      <div className="display">
        <h1>About Us</h1>
        <blockquote>
          <p>We are professionals </p>
          <p>We are experts </p>
          <p> We are committed</p>
        </blockquote>
      </div>
      <div className="values">
        <section>
          <img src={img007} alt="" />

          <span>
            <h1>our vision</h1>
            <p>
              Our success is built on the dedication and expertise of our team.
              From developers to designers, project managers to IT consultants,
              every member of BalanceDrock Technologies plays a crucial role in
              delivering exceptional results.
            </p>
          </span>
        </section>
        <section>
          <img src={img008} alt="" />

          <span>
            <h1>our mission</h1>
            <p>
              Our mission is simple: to empower businesses through innovative
              technology solutions. By understanding your challenges and goals,
              we develop customized solutions that drive growth, efficiency, and
              success
            </p>
          </span>
        </section>
      </div>
      <article>
        <h1>About Us</h1>
        <p>
          Welcome to balanceDrock Technologies, where technology meets
          innovation. We are a premier software development company committed to
          delivering cutting-edge solutions that empower businesses in today’s
          fast-paced digital landscape. Our journey began with a simple goal: to
          help businesses harness the power of technology to achieve their full
          potential. With a team of seasoned professionals, we bring a wealth of
          knowledge and experience to every project. Our expertise spans custom
          software development, mobile and web applications, IT consulting, and
          cloud solutions. We pride ourselves on our ability to craft bespoke
          solutions that are not only technologically advanced but also aligned
          with our clients' unique needs and goals. At BalanceDrock
          Technologies, we believe that the best results come from strong
          partnerships.
          <img src={img009} alt="" />
          We work closely with our clients, understanding their challenges and
          aspirations, to develop solutions that truly make a difference. Our
          approach is collaborative, transparent, and client-focused, ensuring
          that we deliver value at every stage of the process. Innovation,
          quality, and reliability are the cornerstones of our work. We are
          dedicated to staying ahead of industry trends, constantly exploring
          new technologies and methodologies to provide our clients with the
          most advanced and effective solutions. Our commitment to excellence
          ensures that we deliver projects that are not only successful but also
          scalable and future-proof. Our vision is to be a global leader in
          software development, recognized for our ability to transform
          businesses through technology. We aim to create long-lasting
          partnerships with our clients, helping them navigate the complexities
          of the digital world and achieve sustainable growth.
        </p>
      </article>
      <article id="article2">
        <h1>Why balanceDrock technologies?</h1>
        <h1 id="stanz">
          At BalanceDrock, we are driven by 7 core values that define and impact
          the way we work.
        </h1>
        <br />
        <section>
          <h2>Expertise & Experience</h2>
          <p>
            Our team of highly skilled professionals brings years of experience
            across various industries, ensuring that we deliver top-notch
            solutions tailored to your specific needs.
          </p>
        </section>
        <section>
          <h2>Tailored Solutions</h2>

          <p>
            We understand that every business is unique. That’s why we offer
            customized software and IT solutions designed to address your
            specific challenges and objectives.
          </p>
        </section>
        <section>
          <h2>Innovative Approach</h2>

          <p>
            We stay ahead of the curve by leveraging the latest technologies and
            industry best practices. Our innovative solutions help you maintain
            a competitive edge in an ever-evolving digital landscape.
          </p>
        </section>
        <section>
          <h2>Client-Centric</h2>

          <p>
            Focus Your success is our priority. We take the time to understand
            your business, ensuring that our solutions align with your goals and
            deliver measurable results.
          </p>
        </section>
        <section>
          <h2>Quality Assurance </h2>

          <p>
            We adhere to rigorous quality standards, ensuring that every project
            is reliable, secure, and scalable. We don’t just meet
            expectations—we exceed them.
          </p>
        </section>
        <section>
          <h2>Transparent Communication</h2>

          <p>
            We believe in clear and open communication. From project planning to
            delivery, we keep you informed at every step, ensuring there are no
            surprises.
          </p>
        </section>
        <section>
          <h2>End-to-End Services</h2>

          <p>
            We offer comprehensive services, from initial consultation and
            strategy to development, deployment, and ongoing support, making us
            your one-stop shop for all your IT needs.
          </p>
        </section>
        <section>
          <h2>Long-Term Partnership </h2>

          <p>
            We’re not just a service provider; we’re a partner in your success.
            We build long-term relationships with our clients, providing ongoing
            support and adapting our solutions as your business grows.
          </p>
        </section>
      </article>
    </>
  );
}
