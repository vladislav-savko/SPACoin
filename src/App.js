import './App.scss';
import { Route, Navigate, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout  from './components/Layout'
import React from 'react';
import CoinInfo from './components/CoinInfo';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path="/coin/:id" element={<CoinInfo />} />
          <Route path='*' element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
  );
}

export default App;