let arr = []
let odd = 0
let num = +prompt("Nhap so phan tu ban muon")
if (num == 0){
    alert("Mang khong co phan tu")
} else if (num < 0){
    alert("So luong phan tu khong hop le")
} else {
    for(let i = 0; i< num; i++){
        arr[i] = +prompt("Nhap cac phan tu cho mang")
        if (arr[i] < 0){
            odd++
        }
    }
    alert(odd)
}