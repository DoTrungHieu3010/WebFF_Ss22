let arr = [10]
let result= ""
let count = 0
for (let i = 0; i<10;i++){
    arr[i] = +prompt("Nhap so nguyen bat ky")
}
for (let i = 0; i< 10; i++){
    if (Number.isInteger(arr[i]) == false){
        alert("Sai du lieu")
        break
    } else {
        if (arr[i] >= 10){
            count++
            result = result + " " + arr[i]
        }
    }
}
if (count > 0){
    alert(result)
} else {
    alert("Khong co so nao lon hon 10")
}
