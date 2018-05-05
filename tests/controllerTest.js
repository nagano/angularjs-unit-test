/*
(Jasmine) describe
A test suite begins with a call to the global function `describe` with two
parameters: a string and a function.
The string is a name or title for a spec suite - usually what is being tested.
The function is a block of code that implements the suite.
 */
describe('Sample controller', function(){

  /*
  (Jasmine) beforeEach
  Function called once before each spec in the describe in which it is called.
  */

  /*
  (angular-mocks) module
  Registers a module configuration code.
  It collects the configuration information which will be used when the
  injector is created by inject.
   */
  beforeEach(module('app'));

  /*
  Create a variable to represent the $controller service, resposible for
  instantiating controller in your angularjs application.
   */
  var $controller;

  /*
  (angular-mocks) inject
  Since controllers are not available in the global scope, they need to be
  injected, using the inject function.
   */
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('sum function', function(){
    /*
    (Jasmine) it
    Defines a `spec` and receives a string and a function.
    The string is the title of the spec and the function is the spec, or test.
    A spec contains one or more expectations that test the state of the code.
    An expectation in Jasmine is an assertion that is either true or false.
    A spec with all true expectations is a passing spec. A
    spec with one or more false expectations is a failing spec.
     */
    it('should add two numbers', function(){
      var $scope = {};
      var controller = $controller('SampleController', { $scope: $scope });
      $scope.sum();
      expect($scope.result).toBe(5);
    });

    it('should fail', function(){
      var $scope = {};
      var controller = $controller('SampleController', { $scope: $scope });
      $scope.sum();
      expect($scope.result).toBe(6);
    });
  });

});
