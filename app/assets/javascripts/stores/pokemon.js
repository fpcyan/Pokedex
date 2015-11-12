(function (root) {

  var PokemonStore = window.PokemonStore = $.extend({}, EventEmitter.prototype);

  var _pokemon = [];

  PokemonStore.all = function () {
    if (typeof _pokemon === "undefined") {
      return [];
    }
    return _pokemon.slice();
  };

  var resetPokemon = function(newPokemon) {
    _pokemon = newPokemon;
  };

  PokemonStore.dispatcherId = AppDispatcher.register(function (payload) {

    switch (payload.actionType) {
      case PokemonConstants.POKEMON_RECEIVED:
        resetPokemon(payload.allPokemon);
        break;
    }
  });

})(this);
