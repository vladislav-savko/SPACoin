import './App.scss';
import { Route, Navigate, Routes } from 'react-router-dom'
import React from 'react';

import Index from './pages/index'
import CoinInfo from './pages/coinInfo';
import Layout  from './layout'


function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Index />} />
          {/* <Route path="/coin/:id" element={<CoinInfo />} />
          <Route path='*' element={<Navigate replace to="/" />} /> */}
        </Route>
      </Routes>
  );
}

export default App;