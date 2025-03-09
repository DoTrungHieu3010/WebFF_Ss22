let arr = []
let max
let secMax
let num = +prompt("Nhap so luong phan tu")
if (num > 0){
    for (let i = 0; i< num ; i++){
        arr[i] = +prompt("Nhap gia tri cua phan tu")
    }
    max = arr[0]
    secMax = arr[0]
    for(let i = 1; i<num;i++){
        if (arr[i]>max){
            max = arr[i]
        }
        for (let j = 0; j<num;j++){
            if(arr[j] > secMax && arr[j] < max){
                secMax = arr[j]
            }
        }
    }
    alert(secMax)
} else if (num == 0){
    alert("Mang khong co phan tu nao")
} else {
    alert("So luong phan tu khong duoc nho hon 0")
}
