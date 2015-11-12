var Index = React.createClass ({

  render: function () {
    return (
      <div className="pokemon-wrapper">
        <div className="pokemon-index">
          <PokemonIndex />
        </div>
        {this.props.children}
      </div>
    );
  }
});
