function minimizeDifference(nums) {
    const n = nums.length / 2;
    let sum = nums.reduce((a, b) => a + b, 0);
    let halfSum = sum / 2;
    let dp = Array.from({ length: n + 1 }, () => new Array(Math.floor(halfSum) + 1).fill(false));
    dp[0][0] = true;

    for (let num of nums) {
        for (let i = n; i > 0; i--) {
            for (let j = halfSum; j >= num; j--) {
                dp[i][j] = dp[i][j] || dp[i - 1][j - num];
            }
        }
    }

    for (let j = halfSum; j >= 0; j--) {
        if (dp[n][j]) {
            return Math.abs(sum - 2 * j);
        }
    }
}

module.exports = minimizeDifference;
