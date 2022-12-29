var twoSum = function(nums, target) {
    const hashmap = {};
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
        console.log(diff);
      // If the difference is in the hashmap, return the indices.
      if (diff in hashmap) { // or, hashmap[diff] !== undefined
        return [hashmap[diff], i];
      }
  
      // Otherwise, add the current number to the hashmap.
      hashmap[nums[i]] = i;
    }
  
    return [];
}

const output = twoSum([2,7,11,15],9);
console.log(output);

const twoSum = function(nums, target) {
    const hash = {}; // Stores seen numbers: {seenNumber: indexItOccurred}
  
    for (let i = 0; i < nums.length; i++) { // loop through all numbers
      const n = nums[i]; // grab the current number `n`.
      if (hash[target - n] !== undefined) { // check if the number we need to add to `n` to reach our target has been seen:
        return [hash[target - n], i]; // grab the index of the seen number, and the index of the current number
      }
      hash[n] = i; // update our hash to include the. number we just saw along with its index.
    }
    return []; // If no numbers add up to equal the `target`, we can return an empty array
  }
  
  console.log(twoSum([1, 2, 3], 5)); // [1, 2]
  