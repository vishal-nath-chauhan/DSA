function quicksort(arr,p,r){
	if(p<r){
		let q =partition(arr,p,r)
		quicksort(arr,p,q-1)
		quicksort(arr,q+1,r)
	}
}

function partition(arr,p,r){
	let pivot=arr[p];
	let index=p;
	for(let j=p+1;j<=r;j++){
		console.log('lo ',arr[j])
		if(arr[j]<=pivot){
			console.log('j ',j,r)
			index+=1;
			swap(arr,index,j)
		}
	}
	swap(arr,p,index)
	return index
}

quicksort(arr,0,arr.length)
console.log(arr)
