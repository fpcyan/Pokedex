( function (root) {

  var ApiUtil = window.ApiUtil = window.ApiUtil || {};

  ApiUtil.fetchAllPokemon = function () {
    $.ajax({
      url: "api/pokemon",
      type: "get",
      dataType: "json",
      success: function (data) {
        ApiActions.receiveAllPokemon(data);
      }
    });
  };

  ApiUtil.fetchPokemonById = function (id) {
    $.ajax({
      url: "api/pokemon/" + id,
      type: "get",
      dataType: "json",
      success: function (data) {
        ApiActions.receiveSinglePokemon(data);
      }
    });
  };

})(this);
