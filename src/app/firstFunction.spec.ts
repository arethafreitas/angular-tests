import { addition } from "./firstFunction";

describe("Test Addition", () => {
  xit("testing addition function", () => {
    expect(addition(10, 20)).toBe(30);
  });
});

describe("String Matcher Test", () => {
  it('Testing string, "toBe" for matcher ===', () => {
    let firstString = "Hello World!";
    expect(firstString).toBe("Hello World!");
  });

  it('Testing string, "toEqual" for matcher ==', () => {
    let firstString = "Hello World!";
    expect(firstString).toEqual("Hello World!");
  });

  it('Testing string, "not.toEqual" for matcher ==', () => {
    let firstString = "Hello World!";
    expect(firstString).not.toBe("Hello World! 2");
  });

  it('Testing string, "not.toEqual" for matcher ==', () => {
    let firstString = "Hello World!";
    expect(firstString).not.toEqual("Hello World! 2");
  });

  it('Testing string, "toContain" checks santander present in string', () => {
    let firstString = "Hello World! Welcome to Santander Project!";
    expect(firstString).toContain("Santander");
  });

  it('Testing string, "toMatch" matcher is regular expression', () => {
    var message = "This 4th lane of Underworld!";

    expect(message).toMatch(/\d+/); /* expecting numbers */
    expect(message).toMatch("Underworld");
  });
});


it('should test "toEqual" matcher', () => {
  let numberA = {
    val: 10
  };

  let numberB = {
    val: 10
  };

  expect(numberA).toEqual(numberB);
});


it('should test "toBe" matcher', () => {
  let numberA = {
    val: 10
  };

  let numberB = {
    val: 10
  };

  expect(numberA).toEqual(numberB);
});

it('Testing string, "not.toEqual" for matcher ==', () => {
  let firstString = "Hello World!";
  expect(firstString).not.toEqual("Hello World! 2");
});

describe('Array Test', ()=> {
  it('Testing Array using "toEqual", arrays should be equal', () => {
    let numbers = [1,2,3];
    expect(numbers).toEqual([1,2,3]);
  })

  it('Testing Array using "toContain", arrays should be equal', () => {
    let strings = ['abc', 'def', 'ghi'];
    expect(strings).toContain('ghi');
  })

})
