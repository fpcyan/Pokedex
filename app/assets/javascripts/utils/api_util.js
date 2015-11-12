( function (root) {

  var ApiUtil = window.ApiUtil = window.ApiUtil || {};

  ApiUtil.fetchAllPokemon = function () {
    $.ajax({
      url: 'api/pokemon',
      type: "get",
      dataType: "json",
      success: function (data) {
        ApiActions.receiveAllPokemon(data);
      }
    });
  };

})(this);
