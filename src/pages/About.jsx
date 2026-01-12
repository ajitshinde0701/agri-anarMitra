import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About AnarMitra</h1>
        <p>
          Empowering farmers with smart technology to improve productivity,
          sustainability, and profitability.
        </p>
      </section>
      <section className="about-content">
        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            To revolutionize agriculture by providing intelligent, data-driven
            solutions that help farmers make better decisions and achieve
            higher yields with minimal risk.
          </p>
        </div>

        <div className="about-card">
          <h3>What We Do</h3>
          <p>
            AnarMitra provides crop advisory, weather alerts, market price
            insights, and fertilizer recommendations specifically designed for
            modern farmers.
          </p>
        </div>

        <div className="about-card">
          <h3>Why Choose Us</h3>
          <p>
            We combine agriculture expertise with modern technology to deliver
            reliable, easy-to-use tools that support farmers at every stage of
            crop growth.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
