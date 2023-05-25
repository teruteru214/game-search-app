import React from "react";
import GameSearch from "./components/GameSearch";
import PokemonSearch from "./components/PokemonSearch";

const App: React.FC = () => {
  return (
    <div>
      <h1>ゲーム検索</h1>
      <PokemonSearch />
    </div>
  );
};

export default App;
