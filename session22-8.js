let arr = [3,6,1,1,8,5,9,1,6,3,2,4]
let check = 0
let repeat = 0
let result = arr[0]
for (let i = 0; i<arr.length; i++){
    check = 0
    for (let j = i+1; j<arr.length ; j++){
        if (arr[i] == arr[j]){
            check++
        }
    }
    if (check > repeat){
        repeat = check
        result = arr[i]
    } else if (check == repeat){
        if (arr[i] < result){
            result = arr[i]
        }
    }
}
alert(result)