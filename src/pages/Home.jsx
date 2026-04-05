import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="home-hero">
        <h1>Smart Agriculture for Modern Farmers</h1>
        <p>
          Monitor your pomegranate orchards, prevent diseases,
          and optimize irrigation with modern technology.
        </p>
      </section>

      <section className="home-features">
        <div className="feature-card">
          <h3>Crop Advisory</h3>
          <p>
            Receive intelligent, AI-driven crop advice to maximize yield and
            improve farm productivity.
          </p>
        </div>

        <div className="feature-card">
          <h3>Market Prices</h3>
          <p>
            Get up-to-date market prices and trends to make informed decisions
            for your crops.
          </p>
        </div>

        

        <div className="feature-card">
          <h3>Fertilizer & Pest Management</h3>
          <p>
            Suggestions for appropriate fertilizers and pesticides based on
            crop needs, growth stage, and seasonal conditions.
          </p>
        </div>
      </section>

      <section className="home-cta">
        <button
          className="home-cta-button"
          onClick={() => navigate("/login")}
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Home;
