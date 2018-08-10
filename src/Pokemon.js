import gql from 'graphql-tag';
import React from 'react';
import { graphql } from 'react-apollo';

const PokemonUnwrapped = ({ pokemon }) => (
  <main>
    <h1>{pokemon.name}</h1>
    <p>Max HP: {pokemon.maxHP}</p>
  </main>
);

PokemonUnwrapped.defaultProps = {
  pokemon: {},
};

const wrapWithPokemon = graphql(gql`
query LoadPokemon($id: String) {
  pokemon(id: $id) {
    id
    maxHP
    name
  }  
}
`, {
  options: ({ match }) => ({ variables: { id: match.params.id } }),
  props: ({ data }) =>  ({ pokemon: data.pokemon }),
});

const Pokemon = wrapWithPokemon(PokemonUnwrapped);

export default Pokemon;
