describe('Sample directive', function(){
  var $compile,
      $rootScope;

  // Load the module that contains the directive.
  beforeEach(module('app'));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('should greet a name', function(){
    // Compile a piece of HTML containing the directive.
    var element = $compile("<sample-directive name='world'></sample-directive>")($rootScope);
    // Fire all the watches, so the scope expression {{name}} will be evaluated.
    $rootScope.$digest();
    // Check that the compiled element contains the templated content.
    expect(element.html()).toContain("Hello, world");
  });
});
