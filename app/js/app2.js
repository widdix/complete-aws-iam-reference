'use strict';

(function() {

  var a = angular.module('app2', []);

  /*
   * Controller
   */

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




})();
