var PokemonIndexItem = React.createClass({

  render: function () {
    return(
      <li className="poke-list-item">
        {this.props.pokemon.name}
        {this.props.pokemon.poke_type}
      </li>
    );
  }

});
