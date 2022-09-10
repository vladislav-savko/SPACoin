import './App.scss';
import { Route, Navigate, Routes } from 'react-router-dom'
import React from 'react';

import Index from './pages/index'
import Coin from './pages/coin';
import Layout  from './layout'


function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Index />} >
            <Route path='/page/:number' element={<Index />} />
          </Route>
          <Route path="/coin/:id" element={<Coin />} />
          <Route path='*' element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
  );
}

export default App;