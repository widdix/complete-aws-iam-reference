'use strict';

(function() {

  var a = angular.module('app3', []);

  a.run(['$rootScope', function($rootScope) {
    $rootScope.copy2clipboard = function(val) {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val(val).select();
      document.execCommand("copy");
      $temp.remove();
    }
  }]);

})();
