function minimumAbsDifference(nums) {
    const n = nums.length / 2;
    const totalSum = nums.reduce((sum, num) => sum + num, 0);

    const dp = Array.from({ length: n + 1 }, () => Array(totalSum * 2 + 1).fill(false));
    dp[0][totalSum] = true;

    for (let i = 0; i < nums.length; i++) {
        for (let j = n; j >= 1; j--) {
            for (let k = 2 * totalSum; k >= nums[i]; k--) {
                dp[j][k] = dp[j][k] || dp[j - 1][k - nums[i]];
            }
        }
    }

    let minDiff = Infinity;
    for (let k = totalSum; k <= 2 * totalSum; k++) {
        if (dp[n][k]) {
            minDiff = Math.min(minDiff, Math.abs(totalSum - k));
        }
    }

    return minDiff;
}

function minimizeDifference(nums) {
    return minimumAbsDifference(nums);
}

module.exports = minimizeDifference;
