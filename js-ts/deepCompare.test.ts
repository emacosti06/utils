import deepCompare from "./deepCompare";

describe('deepCompare', () => {
    it('should return false if both objects are same', () => {
        const obj1 = { a: 1, b: { c: 3 } };
        const obj2 = { a: 1, b: { c: 3 } };

        expect(deepCompare(obj1, obj2)).toBe(false);
    });

    it('should return true if both objects has different structure', () => {
        const obj1 = { a: 1, b: { c: 3 } };
        const obj2 = { a: 1, b: { c: 3 }, d: 4 };

        expect(deepCompare(obj1, obj2)).toBe(true);
    });

    it('should return true if both objects are different', () => {
        const obj1 = { a: 1, b: { c: 3 } };
        const obj2 = { a: 1, b: { c: 2 } };

        expect(deepCompare(obj1, obj2)).toBe(true);
    });
})
