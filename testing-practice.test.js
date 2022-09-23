import capitalize, {reverseString, calculator, CaesarCipher, analyzeArray} from "./testing-practice"


//Capitalize function testing

test('capitalize all lower case', () => {
    expect(capitalize('team')).toMatch(/Team/);
})

test('capitalize uppercase first letter', () => {
    expect(capitalize('Ball')).toMatch(/Ball/);
})

test('Doesn\'t change if first charact is not a letter', () => {
    expect(capitalize('.all')).toMatch(/.all/);
})

test('Works with weird characters', () => {
    expect(capitalize('p.d9s')).toMatch(/P.d9s/);
})

//ReverseString testing

test('Reverses normal string', () => {
    expect(reverseString('hello there')).toMatch(/ereht olleh/);
})

test('Reverses string with upper and lower case', () => {
    expect(reverseString('hEllO thERe')).toMatch(/eREht OllEh/);
})

test('Reverses string with special characters', () => {
    expect(reverseString('Hi! How are y.ou!')).toMatch(/!uo.y era woH !iH/);
})

// Calculator testing

test('add function works', () => {
    expect(calculator().add(3,4)).toBe(7);
})

test('subtract function works', () => {
    expect(calculator().subtract(3,4)).toBe(-1);
})

test('multiply function works', () => {
    expect(calculator().multiply(3,4)).toBe(12);
})

test('divide function works', () => {
    expect(calculator().divide(3,4)).toBeCloseTo(0.75);
})

// CaesarCipher testing

test('Normal Caesar test', () => {
    expect(CaesarCipher('hello there')).toMatch(/ifmmp uifsf/);
})

test('Caesar test with punctuation', () => {
    expect(CaesarCipher('hello, there!')).toMatch(/ifmmp, uifsf!/);
})

test('Caesar test with capitals', () => {
    expect(CaesarCipher('Hello, tHeRe!')).toMatch(/Ifmmp, uIfSf!/);
})

test('Wrapping z to a', () => {
    expect(CaesarCipher('Hello, zzztHeRe!')).toMatch(/Ifmmp, aaauIfSf!/);
})

//analyzeArray testing


test('Normal test of analyzeArray', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
})

test('Test of analyzeArray including a negative value', () => {
    expect(analyzeArray([1,8,3,4,-4,6])).toEqual({average: 3, min: -4, max: 8, length: 6});
})