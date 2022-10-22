import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Performances } from './components/Performances/Performances';
import Videos from "./components/Videos/Videos";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <main>
      <h1>Lubimovka</h1>
      <Performances />
      <Videos/>
      <Gallery/>
    </main>
  );
}

export default App;
