let arr = [3,2,6,8,5,9,1,6,3,2,4]
let result = ""
for (let i = 0; i< arr.length; i++){
    for (let j = i+1; j<arr.length;j++){
        if (arr[i] > arr [j]){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}
for (let k = 0;k< arr.length; k++){
    result += arr[k]
}
alert(result)