var PokemonIndex = React.createClass({



  getInitialState: function () {
    return { allPokemon: PokemonStore.all() };
  },

  componentDidMount: function () {
    PokemonStore.addPokemonIndexChangeListener(this._onChange);
    ApiUtil.fetchAllPokemon();
  },

  componentWillUnmount: function () {
    PokemonStore.removePokemonIndexChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState ({ allPokemon: PokemonStore.all() });
  },

  render: function () {
      return(
        <ul className="pokemon-index">
          {
            this.state.allPokemon.map( function(pokemon) {
              return <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />;
            }
          )}
        </ul>
      );
  }


});
