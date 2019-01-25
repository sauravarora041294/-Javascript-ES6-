function minMoves(avg) {
    // Write your code here
    let low = 0, high = avg.length - 1, count=0;
    while (low <= high) {
        if (avg[low] == 1) {
            low++;
        } else {
        	if(avg[low] == 0 && avg[high]==1){
        		count++;
        		swap(avg,low, high);
            	high--;
        	} else{
        		high--;
        	}
                    }
    }
    console.log(count);
    console.log(avg);
}

function swap(arr, a, b) {
    let tmp;
    tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

minMoves([1,1,1,1,0,1,0,1])