const sumInputsEqualZero = (nums) => {
    let sum = 0;
    let maxNumAfterComma = 0;

    for (const num of nums) {
        if (typeof num !== 'number' || Number.isNaN(num)) {
            throw new Error('provide number');
        }

        const parts = num.toString().split('.');


        if (parts[1]) {
            maxNumAfterComma = Math.max(maxNumAfterComma, parts[1].length);
        }
    }

    const x = 10 ** maxNumAfterComma;
    // console.log(x);

    for (const num of nums) {
        sum += Math.round(num * x);
    }

    return sum === 0;
};

const nums = [1, 2, 3]; // false
const nums2 = [1, 2, 'dfdf']; // error
const nums3 = [1, 2, -3]; // true
const nums4 = [0.1, 0.2, -0.3]; // true
const nums5 = [1.001, 2.002, -3.003]; // true
const nums6 = [1.0000001, 2.0000002, -3.0000003]; // true

console.log('result', sumInputsEqualZero(nums));
// console.log('result2', sumInputsEqualZero(nums2));
console.log('result3', sumInputsEqualZero(nums3));
console.log('result4', sumInputsEqualZero(nums4));
console.log('result5', sumInputsEqualZero(nums5));
console.log('result6', sumInputsEqualZero(nums6));
