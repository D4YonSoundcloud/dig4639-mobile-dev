import { Sum } from "./MyMath.js";
import { AddList } from "./MyMath.js";
import { DivideBy } from "./MyMath.js";
import { ContainsString } from "./MyMath.js";
import { ReSortedNumbers } from "./MyMath.js";
import { Adder } from "./MyMath.js";

describe("Sum", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(Sum(1, 2)).toBe(3);
  });
  it("whether undefined is returned on invalid type", () => {
    expect(Sum(1, "Test")).toBeUndefined();
  });
});

describe("AddList", () => {
  let numElem = 1000;
  let input = [];
  let result = 0;
  let element = 0
  for(var j = 0; j < 10; j++) {
    for(var i = 0; i < numElem; i++) {
      elem = Math.random()*1000;
      result += elem;
      input.push(elem)
    }
    expect(Addlist(input)).toBe(result)
  }
  test("adds numbers in array", () => {
    expect(AddList(input)).toBe(result);
  });
  input = [15,3,4,5];
  result = [27];
  test("adds numbers in array", () => {
    let input = [];
    expect(AddList(input)).toBeUndefined();
  });
  test("adds numbers in array", () => {
    let input = [undefined,0,2,3];
    expect(AddList(input)).toBeUndefined();
  });
  test("adds numbers in array", () => {
    let input = 100;
    expect(AddList(input)).toBeUndefined();
  });
});

// ICE

// Examples for Null
test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

// Examples for zero
test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
