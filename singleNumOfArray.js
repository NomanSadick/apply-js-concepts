// var singleNumber = function(nums) {
//     nums.sort();
//     for (var i = 0; i < nums.length; i += 2) {
//         if (nums[i] != nums[i + 1]) {
//             return nums[i];
//         }
//     }
// };

const singleNumber = function(nums) {

    if (nums.length === 1) {
        return nums[0]
    }

    let result = 0;

    nums.forEach(element => {
        result = result ^ element
    });

    return result;

 };

const output = singleNumber([1, 2, 2]);
console.log(output);