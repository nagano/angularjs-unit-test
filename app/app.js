var app = angular.module("app", []);

app.controller("SampleController", function($scope) {
  $scope.message = "Hello, AngularJS";

  $scope.sum = function() {
    $scope.a = 1;
    $scope.b = 4;

    $scope.result = $scope.a + $scope.b;
  };
});
