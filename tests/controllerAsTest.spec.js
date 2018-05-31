describe('Sample controllerAs', function(){
    beforeEach(module('app'));

    var $controller;
    var $scope = {};

    beforeEach(inject(function($injector){
        $controller = $injector.get('$controller');
        $controller('SampleControllerAs as sampleCtrl', {$scope: $scope});
    }));

    describe('Subtract function', function(){
        it('should subtract variables c and d', function(){
            $scope.sampleCtrl.subtract();
            expect($scope.sampleCtrl.result).toBe(7);
        });
    });
});
