let arr = []
let num = +prompt("Nhap do dai cua mang");
for (let i = 0; i < num; i++) {
    let input = +prompt(`Nhap phan tu thu ${i+1}:`)
    arr.push(input)
}
let n = +prompt("Nhap kich thuoc mang con")
if (isNaN(n) || !Number.isInteger(n) || n <= 0 || n > arr.length) {
    alert("Khong hop le")
} else {
    alert(chiaMang(arr, n))
}

function chiaMang(arr, n) {
    let newArr = []
    for (let i = 0; i < arr.length; i += n) {
        newArr.push(arr.slice(i, i + n))
    }
    return newArr
}