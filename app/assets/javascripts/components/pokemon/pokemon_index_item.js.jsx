var PokemonIndexItem = React.createClass({

  mixins: [ReactRouter.History],

  handleClick: function (e) {
    e.preventDefault();
    this.showDetail(this.props.pokemon.id);
  },


  showDetail: function (id) {
    this.history.pushState(null, "pokemon/" + id, {});
  },

  render: function () {
    return(
      <li className="poke-list-item" onClick={this.handleClick}>
        <p>Name: {this.props.pokemon.name}</p>
        <p>Type: {this.props.pokemon.poke_type}</p>
      </li>
    );
  }

});
