/*

import React from 'react';
import './App.css';
import Root from './router/root';
function App() {
  return (
    <div>
      <p>App</p>
      <Root />
    </div>
  );
}

export default App;

*/

import React, { useEffect, useState } from 'react';
import TutorialsList from './TutorialsList';
import axios from 'axios';
const Tutorial = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get('http://localhost:8080/users')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { header: 'First Name', accessorKey: 'first_name' },
    { header: 'Last Name', accessorKey: 'last_name' },
    { header: 'E-mail', accessorKey: 'email' },
    { header: 'Gender', accessorKey: 'gender' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TutorialsList data={data} columns={columns} />
    </div>
  );
};

export default Tutorial;
