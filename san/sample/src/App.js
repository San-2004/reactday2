import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    gender: 'Male',
    languages: {
      python: false,
      c: false,
      cpp: false,
      java: false,
    },
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        languages: {
          ...prev.languages,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div>
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <h6>Programming Languages Known</h6>
          {['python', 'c', 'cpp', 'java'].map((lang) => (
            <div key={lang}>
              <input
                type="checkbox"
                name={lang}
                checked={formData.languages[lang]}
                onChange={handleChange}
              />
              <label>{lang.charAt(0).toUpperCase() + lang.slice(1)}</label>
            </div>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          <div>Name: {submittedData.name}</div>
          <div>Email: {submittedData.email}</div>
          <div>Address: {submittedData.address}</div>
          <div>Gender: {submittedData.gender}</div>
          <div>Programming Languages Known:</div>
          <ul>
            {Object.entries(submittedData.languages).map(
              ([key, value]) => value && <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
