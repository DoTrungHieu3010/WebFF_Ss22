let num1 = +prompt("Nhap so thu nhat")
let num2 = +prompt("Nhap so thu hai")
let menu = `
--------MENU---------
1. Cộng hai số.
2. Trừ hai số.
3. Nhân hai số.
4. Chia hai số.
5. Thoát.
Please enter your choice: `
let check = true
let result = 0
if (isNaN(num1) == true || isNaN(num2) == true) {
    alert("Du lieu khong hop le")
} else {
    while (check) {
        let choice = +prompt(menu)
        switch (choice) {
            case 1:
                result = num1 + num2
                alert(result)
                break
            case 2:
                result = num1 - num2
                alert(result)
                break
            case 3:
                result = num1 * num2
                alert(result)
                break
            case 4:
                result = num1 / num2
                result = result.toFixed(1)
                alert(result)
                break
            case 5:
                check = false
                break
            default:
                alert("Lua chon khong hop le")
                break
        }
    }
}

