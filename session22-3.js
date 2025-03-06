let array = prompt("Nhap day so bat ky")
let result =""
if (isNaN(array) == false){
    for (let i = array.length - 1; i>=0; i--){
        result += array[i] 
    }
    alert(result)
} else if (isNaN(array) == true){
    alert("Day khong hop le")
}


