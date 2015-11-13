var ToyIndexItem = React.createClass({

  mixins: [ReactRouter.History],

  _handleClick: function(e) {
    e.preventDefault();
    this.history.pushState(null,
      "/pokemon/" +
      this.props.toy.pokemon_id +
      "/toys/" +
      this.props.toy.id
    );
  },

  render: function () {

    return(
      <div onClick={this._handleClick}>
        <div>Name: {this.props.toy.name}</div>
        <div>Happiness: {this.props.toy.happiness}</div>
        <div>Price: {this.props.toy.price}</div>
      </div>
    );
  }
});
