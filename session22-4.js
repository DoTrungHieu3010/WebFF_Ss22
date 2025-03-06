let num = prompt("Nhap day so bat ky")
if (isNaN(num) == false){
    let array = num.split("")
    let max = num[0]
    for (let i = 1; i < num.length ; i++){
        if (num[i] > max){
            max = num[i]
        }
    }
    alert(`${max} la so lon nhat trong day so`)
} else {
    alert("Day so khong hop le")
}