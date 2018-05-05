var app = angular.module("app", []);

app.controller("SampleController", function($scope) {
  $scope.message = "Hello, AngularJS";

  $scope.add = function(a, b){
    $scope.result = a + b;
  }
});
