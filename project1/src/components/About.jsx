import "./About.css";
function About() {
  return (
    <section>
      <div className="about">
        <div className="left">
          <h1>Who are we ?</h1>
        </div>
        <div className="right">
          <p>
            At our law firm, we are dedicated to providing top-notch legal
            services with integrity and professionalism. Our experienced
            attorneys specialize in personal injury, family law, corporate law,
            criminal defense, and real estate law. We prioritize our clients'
            needs, offering personalized and effective solutions for every legal <span className="light-text">challenge</span>
            <br />
            Founded on trust and excellence, we strive to make the legal process
            straightforward and stress-free. We are proud to be your trusted
            legal advisors, committed to achieving the best possible outcomes
            for you and your family. <br />
            Thank you for considering us. We look forward to serving you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
