let arr = []
let chech = 0
let n = +prompt("Nhap do dai cua mang")
if (n<3){
    alert("Do dai cua mang khong hop le")
} else {
    for (let i = 0;i <n;i++){
        arr[i] = +prompt(`Nhap phan tu thu ${i+1}`)
        if (isNaN(arr[i])){
            alert("du lieu khong hop le")
            chech++
            break
        }
    }
    if (chech == 0){
        csc()
    }
}

function csc (){
    let check = arr[1]-arr[0]
    let count = 0
    for(let i =1;i<arr.length-1 ; i++){
        if (check !== arr[i+1] - arr[i]){
            count++
        } 
    }
    if (count === 0){
        alert("TRUE")
    } else {
        alert("FALSE")
    }
}