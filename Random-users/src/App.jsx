// import { useState } from 'react'
import { useEffect, useState } from 'react';
import './App.css'
import { dataRequest } from './lib/backend.js'
import { Link, Routes, Route } from 'react-router-dom';
import DataTable from './components/DataTable.jsx';
import Userdetails from './components/Userdetails.jsx';
import Random from './components/Random.jsx';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const jsonString = await dataRequest();
      const userDataArray = jsonString?.data?.data;
      console.log(userDataArray)
      setData(userDataArray);
    }
    dataFetch();
  }, []);

  return (
    <div style={{ color: 'white' }}>
      <h1>Fetched Data</h1>
      <Routes>
        <Route path="/" element={
          <DataTable data={data} />
        } />

        {/* 💡 New Route for User Details */}
        <Route
          path="/user/:id"
          element={<Userdetails />}
        />

        <Route
          path="/random"
          element={<Random />}
        />
      </Routes>
    </div>
  )
}

export default App
