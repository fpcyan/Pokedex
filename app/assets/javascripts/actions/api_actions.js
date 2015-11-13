ApiActions = window.ApiActions = {};

ApiActions.receiveAllPokemon = function (allPokemon) {
  AppDispatcher.dispatch({actionType: PokemonConstants.POKEMON_RECEIVED, allPokemon: allPokemon});
};

ApiActions.receiveSinglePokemon = function (onePokemon) {
  AppDispatcher.dispatch({actionType: PokemonConstants.ONE_POKEMON_RECEIVED, pokemon: onePokemon});
};

ApiActions.receiveSingleToy = function (oneToy) {
  AppDispatcher.dispatch({actionType: ToyConstants.ONE_TOY_RECEIVED, toy: oneToy});
};
