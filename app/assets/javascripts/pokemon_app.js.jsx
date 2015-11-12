$(document).on("ready", function () {

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;

  React.render(
    <Router>
      <Route path="/" component={Index} />
    </Router>,
    document.getElementById("pokedex")
  );
});
