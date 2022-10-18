import React from 'react';
import './App.scss';
import { Performances } from './components/Performances/Performances';
import { Pieces } from './components/Pieces/Pieces';
import Videos from "./components/Videos/Videos";

function App() {
  return (
    <main>
      <h1>Lubimovka</h1>
        <Videos/>
      <Performances />
      <Pieces />
    </main>
  );
}

export default App;
