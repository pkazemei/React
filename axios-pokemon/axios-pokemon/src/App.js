import React from 'react';
import PokemonAxios from './components/PokemonAxios'

function App() {
  return (
    <div className="App container">
      <h1>Axios Pokemon API</h1><br />
      <h3>Click below to get started</h3>
      <PokemonAxios></PokemonAxios>
    </div>
  );
}

export default App;