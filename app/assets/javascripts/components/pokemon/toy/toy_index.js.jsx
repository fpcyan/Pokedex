var ToysIndex = React.createClass({
  getInitialState: function () {
    return { toys: this.props.toys };
  },

  render: function () {
    var toyList;
    if (this.state.toys) {
      toyList = (
        this.state.toys.map(function (toy) {
          return <li key={toy.id} className="toy-list-item"><ToyIndexItem toy={toy}/></li>;
        })
      );
    } else {
      toyList = <h3> Not loaded~ </h3>;
    }

    return(
      <div className="toy-list">
        {toyList}
      </div>
    );
  }
});
