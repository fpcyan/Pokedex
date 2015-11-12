var PokemonDetail = React.createClass({
  getStateFromStore: function () {
    this.setState({ pokemon: PokemonStore.findById(parseInt(this.props.params.pokemonId)) });
  },

  componentWillMount: function () {
    this.getStateFromStore();
  },

  render: function () {
    return(
        <div className="detail">
          {this.state.pokemon.image_url}
        </div>
    );
  }
});
