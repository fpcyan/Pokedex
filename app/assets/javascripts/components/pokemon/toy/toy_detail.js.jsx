var ToyDetail = React.createClass({

  getInitialState: function () {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    var toy;
    var toyId = this.props.params.toyId;
    var pokemon = PokemonStore.findById(parseInt(this.props.params.pokemonId));
    if (pokemon && pokemon.toys) {
      toy = pokemon.toys.filter( function (toy) {
        return toy.id === parseInt(toyId);
      })[0];
    }
    return { toy: toy };
  },

  componentDidMount: function () {
    PokemonStore.addPokemonDetailChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    PokemonStore.removePokemonDetailChangeListener(this._onChange);
  },

  componentWillReceiveProps: function(newProps) {
    this.forceUpdate();
  },

  _onChange: function() {
    this.setState(this.getStateFromStore);
  },

  render: function() {
    var toyDetail;
    if (this.state.toy) {
      toyDetail = (
        <div className="detail">
          <div><img src={this.state.toy.image_url} alt={this.state.toy.name}></img></div>
          <div>Happiness: {this.state.toy.happiness}</div>
          <div>Toy Id: {this.state.toy.id}</div>
          <div>Name: {this.state.toy.name}</div>
          <div>Pokemon Id: {this.state.toy.pokemon_id}</div>
          <div>Price: {this.state.toy.price}</div>
        </div>
      );
    }
    return(
      <div>
        {toyDetail}
      </div>
    );
  }
});
