function minPartitionDifference(nums) {
    let totalSum = nums.reduce((sum, num) => sum + num, 0);
    let sums = new Set([0]);

    for (let num of nums) {
        let newSums = new Set(sums);
        for (let sum of sums) {
            newSums.add(sum + num);
        }
        sums = newSums;
    }

    let minDiff = Infinity;
    for (let sum of sums) {
        minDiff = Math.min(minDiff, Math.abs(totalSum - 2 * sum));
    }

    return minDiff;
}

// Example usage
console.log(minPartitionDifference([3, 9, 7, 3])); // Output: 2
console.log(minPartitionDifference([-36, 36])); // Output: 72
console.log(minPartitionDifference([2, -1, 0, 4, -2, -9])); // Output: 0
