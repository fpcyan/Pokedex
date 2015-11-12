ApiActions = window.ApiActions = {};

ApiActions.receiveAllPokemon = function (allPokemon) {
  AppDispatcher.dispatch({actionType: PokemonConstants.POKEMON_RECEIVED, allPokemon: allPokemon});
};
