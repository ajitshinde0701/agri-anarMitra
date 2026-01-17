import "./Dashboard.css";

const FertilizerStore = () => {
  return (
    <div className="dashboard">
      <h2>Fertilizer Store Dashboard</h2>

      <div className="card-grid">
        <div className="card">
          <h4>Inventory</h4>
          <p>Manage fertilizer and pesticide stock.</p>
        </div>

        <div className="card">
          <h4>Orders</h4>
          <p>View and process farmer orders.</p>
        </div>

        <div className="card">
          <h4>Crop-Based Suggestions</h4>
          <p>Recommend fertilizers based on crop type.</p>
        </div>

        <div className="card">
          <h4>Sales Reports</h4>
          <p>Monthly and yearly sales analysis.</p>
        </div>
      </div>
    </div>
  );
};

export default FertilizerStore;
