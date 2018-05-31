var app = angular.module("app", []);

app.controller("SampleController", ['$scope', function($scope) {
  $scope.message = "Hello, AngularJS";

  $scope.sum = function() {
    $scope.a = 1;
    $scope.b = 4;

    $scope.result = $scope.a + $scope.b;
  };
}]);

app.controller("SampleControllerAs", ['$scope', function($scope) {
    const self = this;

    this.subtract = function(){
        self.c = 10;
        self.d = 3;

        self.result = self.c - self.d;
    };
}]);

app.directive('sampleDirective', [function(){
  return {
    restrict: 'E',
    replace: true,
    template: '<p>Hello, {{ name }}</p>',
    scope: {
      name: '@'
    }
  }
}]);
