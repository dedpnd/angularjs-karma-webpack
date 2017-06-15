describe("Application myApp >>", function() {

    beforeEach(module('myApp'));

    describe("service >>", function() {
        it("should do the sum", inject(function(Calc) {
            expect(Calc.sum(3, 4)).toBe(7);
        }));
    });
});