const sumInputsEqualZero = (nums) => {
    let sum = 0;

    for (const num of nums) {
        if (typeof num !== 'number' || Number.isNaN(num)) {
            throw new Error('provide number');
        }

        sum += Math.round(num * 100); // keep in mind that ita money and usually we have 2 digits after comma
    }

    // const sumWithTwoDigitsAfterComma = sum.toFixed(2);  // lol, made a tiny hack :)
    // return +sumWithTwoDigitsAfterComma === 0;

    return sum === 0;
};

const nums = [1, 2, 3]; // false
const nums2 = [1, 2, 'dfdf']; // error
const nums3 = [1, 2, -3]; // true
const nums4 = [0.1, 0.2, -0.3]; // true

console.log('result', sumInputsEqualZero(nums));
// console.log('result2', sumInputsEqualZero(nums2));
console.log('result3', sumInputsEqualZero(nums3));
console.log('result4', sumInputsEqualZero(nums4));
