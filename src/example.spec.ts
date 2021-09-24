function addNum(num1, num2) {
    return num1 + num2;
}

describe('addNumber', () => {
    it('adds two number', () => {
        expect(addNum(4, 5)).toEqual(9);
        expect('Ariel').toEqual('Ariel');
    });
});
