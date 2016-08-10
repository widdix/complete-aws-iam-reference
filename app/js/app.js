'use strict';

(function() {

  var a = angular.module('app', ['ngRoute']);

  /*
   * Controller
   */
  a.controller('List', ['$log', '$scope', '$http', '$routeParams', function($log, $scope, $http, $routeParams) {
    $scope.action = "";
    if ($routeParams.service) {
      $scope.action = $routeParams.service + ':';
    }
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
        var s = row.description.toLowerCase().trim();
        return (s.indexOf(q) !== -1);
      } else {
        return true;
      }
    }

    function containsResource(row) {
      var q = $scope.resource.toLowerCase().trim();
      if (q.length > 0) {
        for (var i = 0; i < row.resources.length; i++) {
          var s = row.resources[i].toLowerCase().trim();
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
          var s = row.conditions[i].toLowerCase().trim();
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

  a.controller('ConditionsList', ['$log', '$scope', '$http', function($log, $scope, $http) {
    $scope.key = "";
    $scope.description = "";
    $scope.rows = [
      {"key": "aws:CurrentTime", "description": "To check for date/time conditions.", "doc": "http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Conditions_Date"},
      {"key": "aws:EpochTime", "description": "To check for date/time conditions using a date in epoch or UNIX time.", "doc": "http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Conditions_Date"},
      {"key": "aws:TokenIssueTime", "description": "To check the date/time that temporary security credentials were issued. This key is only present in requests that are signed using temporary security credentials.", "doc": "http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Conditions_Date"},
      {"key": "aws:MultiFactorAuthPresent", "description": "To check whether multi-factor authentication (MFA) was used to validate the security credentials making the current request. If MFA was not used, this key is not present.", "doc": "http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Conditions_Boolean"},
      {"key": "aws:MultiFactorAuthAge", "description": "To check how long ago (in seconds) the MFA-validated security credentials making the request were issued using multi-factor authentication (MFA). If MFA was not used, this key is not present.", "doc": "http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Conditions_Numeric"},
      {"key": "aws:PrincipalType", "description": "To check the type of principal (user, account, federated user, etc.) for the current request.", "doc": "http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Conditions_String"},
      {"key": "aws:Referer", "description": "To check who referred the client browser to the address the request is being sent to. It is only supported by some services, such as Amazon S3, as a service that can be directly addressed by a web browser. The value comes from the referer header in the HTTPS request made to AWS.", "doc": "http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Conditions_String"},
      {"key": "aws:SecureTransport", "description": "To check whether the request was sent using SSL.", "doc": "http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Conditions_Boolean"},
      {"key": "aws:SourceArn", "description": "To check the source of the request, using the Amazon Resource Name (ARN) of the source. (This value is available for only some services.)", "doc": "http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Conditions_String"},
      {"key": "aws:SourceIp", "description": "To check the requester's IP address.", "doc": "http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Conditions_IPAddress"},
      {"key": "aws:SourceVpc", "description": "To restrict access to a specific VPC. (This value is available for only some services.)", "doc": "http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Conditions_String"},
      {"key": "aws:SourceVpce", "description": "To restrict access to a specific VPC endpoint.", "doc": "http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Conditions_String"},
      {"key": "aws:UserAgent", "description": "To check the requester's client application.", "doc": "http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Conditions_String"},
      {"key": "aws:userid", "description": "To check the requester's user ID.", "doc": "http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Conditions_String"},
      {"key": "aws:username", "description": "To check the requester's user name.", "doc": "http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Conditions_String"},
    ];

    function containsKey(row) {
      var q = $scope.key.toLowerCase().trim();
      if (q.length > 0) {
        var s = row.key.toLowerCase().trim();
        return (s.indexOf(q) !== -1);
      } else {
        return true;
      }
    }

    function containsDescription(row) {
      var q = $scope.description.toLowerCase().trim();
      if (q.length > 0) {
        var s = row.description.toLowerCase().trim();
        return (s.indexOf(q) !== -1);
      } else {
        return true;
      }
    }

    $scope.search = function(row) {
      return (containsKey(row) && containsDescription(row));
    };

    $scope.sort = function(row) {
      return row.key;
    };

  }]);


  /*
   * Pages
   */
  a.controller('PageReferenceController', ['$log', function($log) {

  }]);

  /*
   * Config
   */
  a.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partial/reference.html',
        controller: 'PageReferenceController',
        section: 'reference'
      })
      .when('/:service', {
        templateUrl: '/partial/reference.html',
        controller: 'PageReferenceController',
        section: 'reference'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  a.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.section = 'reference';
    $rootScope.copy2clipboard = function(val) {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val(val).select();
      document.execCommand("copy");
      $temp.remove();
    }
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
      if (current.$$route) {
        $rootScope.section = current.$$route.section;
      }
    });
  }]);

})();
