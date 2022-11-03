const filterBiggestNumbers = require("./filterBiggest");

// Exercise 5
test("Will throw if the first parameter is not an array", () => {
    expect(() => filterBiggestNumbers({})).toThrowError();
});

test("Will return correct output for reasonable input", () => {
  // ✅ Create a test array
  const testArray = [1, 2, 4, 10, 0, 7];
  // ✅ Capture your results
  const got = filterBiggestNumbers(testArray, 10);
  // ✅ Create an array for all of the expected values
  const want = [4, 10];
  // ✅ Create an array for all of the reject values
  const rejects = [1, 2, 0, 7];
  // ✅ Iterate over last two arrays to confirm that the result array has/doesn't have those values
  want.forEach((value) => expect(got).toContain(value));
  rejects.forEach((value) => expect(got).not.toContain(value));
});

test("Will throw if the second argument is not a number", () => {
    expect(() => filterBiggestNumbers([], "")).toThrowError();
});

test("Will work if the second number not an integer", () => {
    const testArray = [ 5, 11, 2, 17];
    const got = filterBiggestNumbers(testInput, 3);
    const want = [5, 17];
    const rejects = [11, 2];

    want.forEach((value) => expect(got).toContain(value));
    rejects.forEach((value) => expect(got).not.toContain(value));
});

test("Will work if the min is a negative number", () => {
    const testInput = [-8, -2, 1, -1];
    const got = filterBiggestNumbers(testInput, -3);
    const want = [-2, 1, -1];
    const rejects = [-8];

    want.forEach((value) => expect(got).toContain(value));
    rejects.forEach((value) => expect(got).not.toContain(value));
});