import gql from 'graphql-tag';
import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

const PokemonListUnwrapped = ({ pokemon }) => (
  <ul>
    {pokemon.map(({ id, name }) => (
      <li key={id}>
        <Link to={`/pokemon/${id}`}>
          {name}
        </Link>
      </li>
    ))}
  </ul>
);

PokemonListUnwrapped.defaultProps = {
  pokemon: [],
};

const wrapWithPokemon = graphql(gql`
query LoadPokemonList {
  pokemons(first: 25) {
    id
    name
  }  
}
`, {
  props: ({ data }) =>  ({ pokemon: data.pokemons }),
});

const PokemonList = wrapWithPokemon(PokemonListUnwrapped);

export default PokemonList;
