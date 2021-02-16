import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Layout from './hoc/Layout/Layout';
import AboutPage from './pages/AboutPage/AboutPage'
import PokemonPage from './pages/PokemonPage/PokemonPage'
import HomePage from './pages/HomePage/HomePage'
import PokemonsState from './context/pokemons/pokemonState';
import DetailState from './context/detail/detailState';

function App() {
  return (
    <DetailState>
      <PokemonsState>
        <Layout>
          <Switch>
            <Route path="/about" component={AboutPage} />
            <Route path="/pokemon/:name" component={PokemonPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Layout>
      </PokemonsState>
    </DetailState>
  );
}

export default App;
