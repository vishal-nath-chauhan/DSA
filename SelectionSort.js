function selectionSort(arr){
	let n=arr.length;
	for(let i=0;i<n;i++){
		let min =i;
		for(let j=i+1;j<n;j++){
			if(arr[j]<arr[min]){
				swap(arr,j,min)
			}
		}
		if(min!==i){
			swap(arr,i,min)
		}
	}
}

selectionSort(arr)
console.log(arr)
