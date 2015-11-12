(function (root) {

  var PokemonStore = window.PokemonStore = $.extend({}, EventEmitter.prototype);

  var _pokemon = [];
  var POKEMON_INDEX_CHANGE_EVENT = "CHANGE LIBRARY";

  PokemonStore.all = function () {
    if (typeof _pokemon === "undefined") {
      return [];
    }
    return _pokemon.slice();
  };

  var resetPokemon = function(newPokemon) {
    _pokemon = newPokemon;
  };

  PokemonStore.addPokemonIndexChangeListener = function (callback) {
    this.on(POKEMON_INDEX_CHANGE_EVENT, callback);
  };

  PokemonStore.removePokemonIndexChangeListener = function (callback) {
    this.removeListener(POKEMON_INDEX_CHANGE_EVENT, callback);
  };

  PokemonStore._onChange = function () {
    this.emit(POKEMON_INDEX_CHANGE_EVENT);
  };



  PokemonStore.dispatcherId = AppDispatcher.register(function (payload) {
    var store = this;
    switch (payload.actionType) {
      case PokemonConstants.POKEMON_RECEIVED:
        resetPokemon(payload.allPokemon);
        PokemonStore._onChange();
        break;
    }
  });

})(this);
