/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

// ----- ME -----

function insertionSort(nums) {
  for (i = 1; i < nums.length; i++) {

    if (nums[i] < nums[i - 1]) {
      let temp = nums[i];

      for (s = i - 1; s >= 0; s--) {
        if (temp < nums[s]) {
          nums[s + 1] = nums[s]; //
          nums[s] = temp;
        }
      }
    }
  }
  return nums;
}


// unit tests
// do not modify the below code
test("insertion sort", function() {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]; // 5, 10, 3 // 5, 3, 10
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
