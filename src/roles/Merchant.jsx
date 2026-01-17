import "./Dashboard.css";

const Merchant = () => {
  return (
    <div className="dashboard">
      <h2>Merchant Dashboard</h2>

      <div className="card-grid">
        <div className="card">
          <h4>Market Prices</h4>
          <p>Daily crop prices from multiple markets.</p>
        </div>

        <div className="card">
          <h4>Buy Crops</h4>
          <p>Connect directly with farmers.</p>
        </div>

        <div className="card">
          <h4>Sell Crops</h4>
          <p>List crops for resale and export.</p>
        </div>

        <div className="card">
          <h4>Transaction History</h4>
          <p>View previous buying and selling records.</p>
        </div>
      </div>
    </div>
  );
};

export default Merchant;
