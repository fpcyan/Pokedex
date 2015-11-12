(function (root) {

  var PokemonStore = window.PokemonStore = $.extend({}, EventEmitter.prototype);

  var _pokemon = [];
  var POKEMON_INDEX_CHANGE_EVENT = "CHANGE LIBRARY";
  var POKEMON_DETAIL_CHANGE_EVENT = "CHANGE ONE POKEMON";
  PokemonStore.all = function () {
    if (typeof _pokemon === "undefined") {
      return [];
    }
    return _pokemon.slice();
  };

  var resetPokemon = function(newPokemon) {
    _pokemon = newPokemon;
  };

  var changeOnePokemon = function(changedPokemon) {
    for (var i = 0; i < _pokemon.length; i++) {
      if (_pokemon[i].id === changedPokemon.id) {
        _pokemon[i] = changedPokemon;
        break;
      }
    }
  };

  PokemonStore.addPokemonIndexChangeListener = function (callback) {
    this.on(POKEMON_INDEX_CHANGE_EVENT, callback);
  };

  PokemonStore.removePokemonIndexChangeListener = function (callback) {
    this.removeListener(POKEMON_INDEX_CHANGE_EVENT, callback);
  };

  PokemonStore.addPokemonDetailChangeListener = function (callback) {
    this.on(POKEMON_DETAIL_CHANGE_EVENT, callback);
  };
  PokemonStore.removePokemonDetailChangeListener = function (callback) {
    this.removeListener(POKEMON_DETAIL_CHANGE_EVENT, callback);
  };
  PokemonStore._onChange = function (changeEvent) {
    this.emit(changeEvent);
  };


  PokemonStore.dispatcherId = AppDispatcher.register(function (payload) {
    var store = this;
    switch (payload.actionType) {
      case PokemonConstants.POKEMON_RECEIVED:
        resetPokemon(payload.allPokemon);
        PokemonStore._onChange(POKEMON_INDEX_CHANGE_EVENT);
        break;
      case PokemonConstants.ONE_POKEMON_RECEIVED:
        changeOnePokemon(payload.pokemon);
        PokemonStore._onChange(POKEMON_DETAIL_CHANGE_EVENT);
        break;
    }
  });

  PokemonStore.findById = function (pokemonId) {

    var targetPokemon = PokemonStore.all().filter( function (pokemon) {
      return pokemonId === pokemon.id;
    });
    return targetPokemon[0];
  };

})(this);
