/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/


// number = 3001, placeholder = 0
// returns 1
function getDigit(number, placeholder) {
  const string = number.toString();

  return string[string.length - 1 - placeholder] || 0;
}


// Retrieves the number of placeholders in the longest value
function getLongestNumber(array) {
  let longestNumber = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].toString().length > longestNumber) {
      longestNumber = array[i].toString().length;
    }
  }
  return longestNumber;
}



function radixSort(array) {
  // Find longest number
  const longestNumber = getLongestNumber(array);
  // Create how many buckets you need
  // An array of 10 arrays
  const buckets = new Array(10).fill().map(() => []);

  // For-loop for how many iterations you need to do, based on the longest number
  for (let i = 0; i < longestNumber; i++) {
    // While loop
    // Enqueue the numbers into their buckets
    while (array.length) {
      const current = array.shift();
      buckets[getDigit(current, i)].push(current);
    }
    // For-loop for each bucket 
    // Dequeue all of the results
    for (let j = 0; j < 10; j++) {
      while (buckets[j].length) {
        array.push(buckets[j].shift());
      }
    }
  }

  return array;
}

// unit tests
// do not modify the below code
describe("radix sort", function() {
  it("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
