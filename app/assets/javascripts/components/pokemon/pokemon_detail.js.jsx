var PokemonDetail = React.createClass({
  getInitialState: function () {
    return this.getStateFromStore(this.props.params.pokemonId);
  },

  getStateFromStore: function (pokemonId) {
    return { pokemon: PokemonStore.findById(parseInt(pokemonId)) };
  },

  componentWillMount: function () {
    this.getStateFromStore(this.props.params.pokemonId);
  },

  componentDidMount: function () {
    ApiUtil.fetchPokemonById(this.props.params.pokemonId);
    PokemonStore.addPokemonDetailChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(this.getStateFromStore(this.props.params.pokemonId));
  },


  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchPokemonById(newProps.params.pokemonId);
  },


  render: function () {
    var pokeDetails;
    if (this.state.pokemon) {
      debugger
      pokeDetails = (
        <div>
          <div className="detail-id">ID: {this.state.pokemon.id}</div>
          <div className="detail-attack">Attack: {this.state.pokemon.attack}</div>
          <div className="detail-defense">Defense: {this.state.pokemon.defense}</div>
          <div className="detail-image"><img src={this.state.pokemon.image_url} alt={this.state.pokemon.name}></img></div>
          <div className="detail-moves">
            Moves:
            {this.state.pokemon.moves.map( function (move) {
              return <li key={move}>{move}</li>;
            })}
          </div>
        </div>
      );
    }
    return(
        <div className="detail">
          {pokeDetails}
        </div>
    );
  }
});
