let arr = [10]
let result = 0
let index = 0
for (let i = 0; i < 10; i++) {
    arr[i] = +prompt("Nhap so nguyen bat ky")
}
result = arr[0]
index = 1
for (let i = 0; i < 10; i++) {
    if (arr[i] > result) {
        result = arr[i]
        index = i + 1
    }
}
alert(`
    So lon nhat: ${result}
    vi tri: ${index}`)