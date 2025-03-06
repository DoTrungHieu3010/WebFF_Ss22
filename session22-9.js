let arr = [3,6,9,1,1,8,5,7,5,9,1,6,3,2,4]
let result =""
for (let i = 0; i< arr.length; i++){
    for (let j = i+ 1 ; j< arr.length; j++){
        if (arr[i] == arr[j]){
            arr.splice(j,1)
            if (arr[i] > arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        } else {
            if (arr[i] > arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
}
for (let i = 0; i< arr.length; i++){
    result += arr[i]
}
alert(result)
