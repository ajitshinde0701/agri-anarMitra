import "./Dashboard.css";

const Advisor = () => {
  return (
    <div className="dashboard">
      <h2>Advisor Dashboard</h2>

      <div className="card-grid">
        <div className="card">
          <h4>Farmer Queries</h4>
          <p>Answer questions raised by farmers.</p>
        </div>

        <div className="card">
          <h4>Crop Analysis</h4>
          <p>Analyze crop health and growth patterns.</p>
        </div>

        <div className="card">
          <h4>Expert Recommendations</h4>
          <p>Provide expert farming solutions.</p>
        </div>

        <div className="card">
          <h4>Reports</h4>
          <p>View advisory performance and feedback.</p>
        </div>
      </div>
    </div>
  );
};

export default Advisor;
