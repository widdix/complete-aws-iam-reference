'use strict';

(function() {

  var a = angular.module('app', ['ngRoute']);

  /*
   * Controller
   */
  a.controller('List', ['$log', '$scope', '$http', function($log, $scope, $http) {
    $scope.action = "";
    $scope.description = "";
    $scope.resource = "";
    $scope.condition = "";
    $scope.rows = [];

    $http.get('/data/rows.json')
      .success(function (data) {
        $scope.rows = data;
      })
      .error(function(data, status, headers, config) {
        $log.error('data', data);
        $log.error('status', status);
        $log.error('headers', headers);
        $log.error('config', config);
        alert('can not load data');
      });

    function containsAction(row) {
      var q = $scope.action.toLowerCase().trim();
      if (q.length > 0) {
        if (q.indexOf(":") !== -1) {
          var qService = q.split(":")[0];
          var qAction = q.split(":")[1];
          return (row.service.toLowerCase() === qService && row.action.toLowerCase().indexOf(qAction) !== -1);
        } else {
          var s = row.service + ":" + row.action;
          return (s.toLowerCase().indexOf(q) !== -1);
        }
      } else {
        return true;
      }
    }

    function containsDescription(row) {
      var q = $scope.description.toLowerCase().trim();
      if (q.length > 0) {
        var s = row.description.toLowerCase();
        return (s.indexOf(q) !== -1);
      } else {
        return true;
      }
    }

    function containsResource(row) {
      var q = $scope.resource.toLowerCase().trim();
      if (q.length > 0) {
        for (var i = 0; i < row.resources.length; i++) {
          var s = row.resources[i].toLowerCase();
          if (s.indexOf(q) !== -1) {
            return true;
          }
        }
        return false;
      } else {
        return true;
      }
    }

    function containsCondition(row) {
      var q = $scope.condition.toLowerCase().trim();
      if (q.length > 0) {
        for (var i = 0; i < row.conditions.length; i++) {
          var s = row.conditions[i].toLowerCase();
          if (s.indexOf(q) !== -1) {
            return true;
          }
        }
        return false;
      } else {
        return true;
      }
    }

    $scope.search = function(row) {
      return (containsAction(row) && containsDescription(row) && containsResource(row) && containsCondition(row));
    };

    $scope.sort = function(row) {
      return row.service + ":" + row.action;
    };
  }]);

  /*
   * Pages
   */
  a.controller('PageAboutController', ['$log', function($log) {
    
  }]);

  a.controller('PageReferenceController', ['$log', function($log) {

  }]);

  a.config(function($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: './partial/about.html',
        controller: 'PageAboutController',
        section: 'about'
      })
      .when('/reference', {
        templateUrl: './partial/reference.html',
        controller: 'PageReferenceController',
        section: 'reference'
      })
      .otherwise({
        redirectTo: '/reference'
      });
  });

  a.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.section = 'reference';
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
      if (current.$$route) {
        $rootScope.section = current.$$route.section;
      }
    });
  }]);

})();
