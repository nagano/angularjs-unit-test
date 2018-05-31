describe('Service test using spies', function(){
    beforeEach(module('app'));

    var serviceSpyExample;

    beforeEach(inject(function(_serviceSpyExample_){
        serviceSpyExample = _serviceSpyExample_;
    }));

    describe('A test using spy', function(){
        it('should use a simple spy to check if a function has been called', function(){
            spyOn(serviceSpyExample, 'functionOne').and.callThrough();
            spyOn(serviceSpyExample, 'functionTwo').and.callThrough();

            const msg = 'message for function two';

            serviceSpyExample.functionThree(msg);

            expect(serviceSpyExample.functionOne).toHaveBeenCalled();
            expect(serviceSpyExample.functionTwo).toHaveBeenCalledWith(msg);
            expect(serviceSpyExample.messageOne).toBe('one');
            expect(serviceSpyExample.messageTwo).toBe('message for function two');
        });
    });
});
