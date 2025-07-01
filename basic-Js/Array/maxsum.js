//! Maximum subarray sum.

//* How to find Sub array
 
let arr = [5,6,3,2,45,7,8,9]

function subArr(arr) {
     
    let max = -Infinity;
    for (let st = 0; st < arr.length; st++)
    {
        let maxsumans = 0;
        for (let end = st; end < arr.length; end++){

            maxsumans += arr[end]
            max = Math.max(max, maxsumans)            
        }
    }
    return max;
    // console.log(max);
}
 console.log(subArr(arr));
