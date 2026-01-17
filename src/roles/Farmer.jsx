import "./Dashboard.css";

const Farmer = () => {
  return (
    <div className="dashboard">
      {/* <h2>Farmer Dashboard</h2> */}

      <div className="card-grid">
        <div className="card">
          <h4>Crop Advisory</h4>
          <p>AI-based recommendations for better yield.</p>
        </div>

        <div className="card">
          <h4>Weather Alerts</h4>
          <p>Real-time weather updates for your farm.</p>
        </div>

        <div className="card">
          <h4>Irrigation Schedule</h4>
          <p>Smart irrigation planning based on soil data.</p>
        </div>

        <div className="card">
          <h4>Disease Detection</h4>
          <p>Early warnings for crop diseases.</p>
        </div>
      </div>
    </div>
  );
};

export default Farmer;
