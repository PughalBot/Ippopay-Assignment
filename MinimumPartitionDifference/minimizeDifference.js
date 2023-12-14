function lowerBound(nums, key){
    let left =0;
    let right = nums.length-1;
    let ans=nums.length-1;
    while (left <= right) {
            let mid = left + (right - left) / 2;
            let midValue = nums[mid];

            if (midValue >= key) {
               ans=mid;
               right=mid-1;
            } else {
               left=mid+1;
            }
    }
    return nums[ans];
}
function minimumDifference(nums){
    var one = {};
    var two = {};

        let n=nums.length/2;
        let sum = nums.reduce((acc, num) => acc + num, 0);

        for(let i=0;i<(1<<n);i++){
            let s1=0;
            let s2=0;
            let l1=0;
            let l2=0;
            for(let j=0;j<n;j++){
                if((i&(1<<j))>=1){
                s1+=nums[j];
                s2+=nums[j+n];
                l1++;
                l2++;
                }
            }
            let fi = [];
            let se = [];
           fi.push(s1);
           se.push(s2);
           one[l1]=fi;
           two[l2]=se;
         
        }
        for(var e in two){
            arr = two[e];
            arr.sort();
            two[e]=arr;
        }
     let ans=Infinity;
        for(var e in one){
             let nfi=one[e];
             let nse=two[n-e];
             for(var m in nfi){
                 let lb=lowerBound(nse,(sum-2*m)/2);
                 ans=Math.min(ans,sum-2*(m+lb));
             }
        }
        if(isNaN(ans))
        return 0;
        else
        return Math.abs(ans);
}

module.exports = minimumDifference;
