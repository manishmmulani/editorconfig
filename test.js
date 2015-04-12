function() {
  $.extend(window, true, {
    domain.common.sessionManager: sessionManager
  });

  var sessionManager = function() {
    this.ssId = "default_ssid";
    this.myCustomValue = "test value. " + "What's up dude";
    this.myAnotherCustomValue = "hi";
    return {
      getSSId: function() {
        return this.ssId
      },
      updateSSId: function() {
        this.ssId = "new_ssid";
      }
    };
  };
}();
//hello world

//hi