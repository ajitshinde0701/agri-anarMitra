import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      {/* HERO SECTION */}
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>
          Comprehensive digital solutions designed to support farmers, merchants,
          and agriculture consultants at every stage.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="services-grid">
        <div className="service-card">
          <h3>Selling Services</h3>
          <p>
            Enable farmers and merchants to sell agricultural products directly
            through the platform, ensuring transparency and fair pricing.
          </p>
        </div>

        <div className="service-card">
          <h3>Fertilizer & Pesticide</h3>
          <p>
            Get crop-specific fertilizer and pesticide recommendations based on
            soil health, crop stage, and seasonal requirements.
          </p>
        </div>

        <div className="service-card">
          <h3>Consultant Services</h3>
          <p>
            Connect with certified agriculture consultants for expert guidance,
            disease management, and productivity improvement.
          </p>
        </div>

        <div className="service-card">
          <h3>Merchant Services</h3>
          <p>
            A dedicated interface for merchants to manage inventory, pricing,
            and connect directly with farmers.
          </p>
        </div>

        <div className="service-card">
          <h3>Disease Detection</h3>
          <p>
            AI-powered disease detection by analyzing crop images to identify
            early-stage infections and preventive actions.
          </p>
        </div>

        <div className="service-card">
          <h3>Marketplace & Prices</h3>
          <p>
            Access real-time market prices, demand trends, and trade opportunities
            to maximize profitability.
          </p>
        </div>

      </section>
    </div>
  );
};

export default Services;
