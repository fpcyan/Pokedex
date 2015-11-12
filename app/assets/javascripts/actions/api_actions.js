ApiActions = window.ApiActions = {};

ApiActions.receiveAllPokemons = function (allPokemon) {
  AppDispatcher.dispatch({actionType: PokemonConstants.POKEMON_RECEIVED, allPokemon: allPokemon});
};
