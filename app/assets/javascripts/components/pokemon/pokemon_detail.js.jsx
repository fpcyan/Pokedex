var PokemonDetail = React.createClass({

  getStateFromStore: function () {
    return { pokemon: PokemonStore.findById(parseInt(this.props.params.pokemonId)) };
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentDidMount: function () {
    ApiUtil.fetchPokemonById(this.props.params.pokemonId);
    PokemonStore.addPokemonDetailChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    PokemonStore.removePokemonDetailChangeListener(this._onChange);
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchPokemonById(newProps.params.pokemonId);
  },

  render: function () {
    var pokeDetails;
    var pokeToys;
    if (this.state.pokemon) {
      if (this.state.pokemon.toys) {
        pokeToys = <ToysIndex toys={this.state.pokemon.toys} />;
      }
      pokeDetails = (
        <div>
          <div className="detail">
            <img src={this.state.pokemon.image_url} alt={this.state.pokemon.name}></img>
            <p className="detail-id">ID: {this.state.pokemon.id}</p>
            <p className="detail-attack">Attack: {this.state.pokemon.attack}</p>
            <p className="detail-defense">Defense: {this.state.pokemon.defense}</p>
            <p className="detail-moves">Moves: {this.state.pokemon.moves}</p>
          </div>
          <h2>Toys: </h2>
          {pokeToys}
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
