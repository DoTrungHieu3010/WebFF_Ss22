let menu = `
-------MENU-------
1. S tron
2. C tron
3. S hcn
4. C hcn
5. Thoat
Please enter your choice:`
let check = true
let banKinh = 0
let cdai, crong = 0
while (check) {
    let choice = +prompt(menu)
    switch (choice) {
        case 1:
            banKinh = +prompt("Nhap ban kinh cua hinh tron")
            if (banKinh <= 0 || isNaN(banKinh) == true) {
                alert("Du lieu khong hop le")
            } else {
                let result = acreageTron(banKinh)
                console.log(result)
            }
            break
        case 2:
            banKinh = +prompt("Nhap ban kinh cua hinh tron")
            if (banKinh <= 0 || isNaN(banKinh) == true) {
                alert("Du lieu khong hop le")
            } else {
                result = perimeterTron(banKinh)
                console.log(result)
            }
            break
        case 3:
            cdai = +prompt("Nhap chieu dai cua hinh chu nhat: ")
            crong = +prompt("Nhap chieu rong cua hinh chu nhat: ")
            if (cdai <= 0 || crong <= 0 || isNaN(cdai) == true || isNaN(crong) == true) {
                alert("Du lieu khong hop le")
            } else {
                result = acreageHCN(cdai, crong)
                console.log(result)
            }
            break
        case 4:
            cdai = +prompt("Nhap chieu dai cua hinh chu nhat: ")
            crong = +prompt("Nhap chieu rong cua hinh chu nhat: ")
            if (cdai <= 0 || crong <= 0 || isNaN(cdai) == true || isNaN(crong) == true) {
                alert("Du lieu khong hop le")
            } else {
                result = perimeterHCN(cdai, crong)
                console.log(result)
            }
            break
        case 5:
            check = false
            break
        default:
            alert("Lua chon khong hop le")
            break
    }
}

function acreageTron(r) {
    return Math.PI * (r ** 2)
}

function perimeterTron(r) {
    return 2 * Math.PI * r
}

function acreageHCN(a, b) {
    return a * b
}

function perimeterHCN(a, b) {
    return (a + b) * 2
}
