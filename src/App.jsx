import React, { useState } from "react";
import "./App.css";

function App() {
  // State to hold input field value
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  // Handle change dynamically
  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="form-container">
      <h1 className="title">React Form</h1>
      
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Enter your name" 
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Enter your email" 
          />
        </div>
      </form>

      <div className="output">
        <h3>Live Preview:</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
      </div>
    </div>
  );
}

export default App;
