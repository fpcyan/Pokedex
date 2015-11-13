(function (root) {

  var ToyStore = window.ToyStore = $.extend( {}, EventEmitter.prototype);

  var _toy = [];
  var TOY_CHANGE_EVENT = "add toys";

  ToyStore.retrieve = function() {
    return [_toy].slice()[0];
  };

  ToyStore.addToyChangeListener = function (callback) {
    this.on(TOY_CHANGE_EVENT, callback);
  };

  ToyStore.removeToyChangeListener = function (callback) {
    this.removeListener(TOY_CHANGE_EVENT, callback);
  };

  ToyStore._onChanged = function(changeEvent) {
    this.emit(changeEvent);
  };

  ToyStore.dispatcherId = AppDispatcher.register( function(payload) {

    switch (payload.actionType) {
      case ToyConstants.ONE_TOY_RECEIVED:
        _toy = payload.toy;
        ToyStore.emit(TOY_CHANGE_EVENT);
    }
  });



})(this);
