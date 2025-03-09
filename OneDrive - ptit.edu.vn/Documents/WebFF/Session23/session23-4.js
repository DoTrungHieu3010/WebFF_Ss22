let arr = []
let result = ""
let num = prompt("Nhap so phan tu ban muon")
if (num <= 0){
    alert("Khong co ky tu so")
} else {
    for(let i = 0; i< num; i++){
        arr[i] = +prompt("Nhap cac phan tu cho mang")
        if (Number.isNaN(arr[i]) == false){
            result = result + " " + arr[i]
        }
    }
    alert(result)
}