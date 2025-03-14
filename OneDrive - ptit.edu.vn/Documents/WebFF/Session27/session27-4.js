let arr = []
let menu = `
-------MENU-------
1. Nhap danh sach so nguyen
2. Tinh trung binh cac so
3. Tim so chan lon nhat
4. Tim so le nho nhat
5. Thoat
Please enter your choice: `
let check = true
while (check) {
    let choice = +prompt(menu)
    switch (choice) {
        case 1:
            inputArr()
            break
        case 2:
            let result = average()
            console.log(result)
            break
        case 3:
            searchMaxEven()
            break
        case 4:
            searchMinOdd()
            break
        case 5:
            check = false
            break
        default:
            alert("Lua chon khong hop le")
            break
    }
}

function inputArr() {
    let n = +prompt("Nhap do dai cua mang")
    if (n <= 0 || isNaN(n) == true) {
        alert("Do dai khong hop le")
    } else {
        for (let i = 0; i < n; i++) {
            let input = +prompt(`Nhap phan tu thu ${i + 1}:`)
            arr.push(input)
        }
    }
}

function average() {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

function searchMaxEven() {
    let even = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i])
        }
    }
    alert(Math.max(...even))
}

function searchMinOdd() {
    let odd = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            odd.push(arr[i])
        }
    }
    alert(Math.min(...odd))
}