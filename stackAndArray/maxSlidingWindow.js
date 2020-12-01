
/**
 * 
 * @param {*} arr 
 * @param {*} k 
 */
function maxSlidingWindow(arr, k) {
    let len = arr.length;
    let dequeue = [];
    let res = [];
    for(let i = 0; i < len; i++) {
        while(dequeue.length && arr[dequeue[dequeue.length - 1]] < arr[i]) {
            dequeue.pop();
        }

        dequeue.push(i);

        while(dequeue.length && dequeue[0] <= i - k) {
            dequeue.shift();
        }
        
        if (i >= k - 1) {
            res.push(arr[dequeue[0]]);
          }
    }

    return res;
}


let arr =  [1,3,-1,-3,5,3,6,7], k = 3;
console.log("res", maxSlidingWindow(arr, k));