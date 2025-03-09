let arr = []
let result = 0
count = 0
let num = prompt("Nhap so phan tu ban muon")
if (num == 0) {
    alert("Khong co ky tu so")
} else if (num < 0) {
    alert("So luong phan tu khong duoc am")
} else {
    for (let i = 0; i < num; i++) {
        arr[i] = +prompt("Nhap cac phan tu cho mang")
        if (Number.isNaN(arr[i]) == false) {
            Number(arr[i])
            result += arr[i]
            count++
        }
    }
    if (count == 0) {
        alert("Khogn co phan tu nao la so")
    } else {
        alert(result)
    }
}