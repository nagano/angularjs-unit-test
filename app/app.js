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

app.service('sampleService', [function(){
    const self = this;

    this.multiply = function(){
        self.e = 5;
        self.f = 2;

        self.result = self.e * self.f;
    };
}]);

app.service('serviceSpyExample', [function(){
    const self = this;

    this.functionOne = function(){
        self.messageOne = 'one';
    };

    this.functionTwo = function(msg){
        self.messageTwo = msg;
    };

    this.functionThree = function(msg){
        self.functionOne();
        self.functionTwo(msg);
    }
}]);
