import React from 'react';
import Box from './components/Box';
import NavBar from './components/NavBar';

export  default function App() {
  return (
    <div className="bg-light" style={{height: '100vh'}}>
      <NavBar/>
      <Box/>
    </div>
  );
}