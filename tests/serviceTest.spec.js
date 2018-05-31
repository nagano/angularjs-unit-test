describe('Sample service', function(){
    beforeEach(module('app'));

    var sampleService;

    beforeEach(inject(function(_sampleService_){
        sampleService = _sampleService_;
    }));

    describe('Multiply function', function(){
        it('should multiply the variables e and f', function(){
            sampleService.multiply();
            expect(sampleService.result).toBe(10);
        });
    });
});
