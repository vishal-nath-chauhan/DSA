function mergeSort(arr,p,r){
  if(p<r){
    let q=parseInt((p+r)/2)
    mergeSort(arr,p,q)
    mergeSort(arr,q+1,r)
    merge(arr,p,q,r)
  }
}



function merge(arr,low,mid,high){
  let n1=mid-low+1;
  let  n2=high-mid;
  let i,j;
  let L=[];
  let R=[];
  for(i=0;i<n1;i++){
    L[i]=arr[low+i]
  }
  for(j=0;j<n2;j++){
    R[j]=arr[mid+1+j]
  }
  L[n1]=Number.POSITIVE_INFINITY
  R[n2]=Number.POSITIVE_INFINITY

  i=0;
  j=0;
  for(let k=low;k<=high;k++){
    if(L[i]<=R[j]){
      arr[k]=L[i];
    i++
    }
    else{
      arr[k]=R[j];
     j++
    }
  }
}


mergeSort(arr,0,arr.length-1)
console.log(arr)
