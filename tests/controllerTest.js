describe('SampleController', function(){

  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('sum', function(){
    it('should add two numbers', function(){
      var $scope = {};
      var controller = $controller('SampleController', { $scope: $scope });
      $scope.sum();
      expect($scope.result).toBe(5);
    });
  });

});
