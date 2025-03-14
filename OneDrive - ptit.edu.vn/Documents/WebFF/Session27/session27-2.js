let arr = []
let menu = `
-----MENU-----
1. Nhap danh sach sinh vien
2. Hien thi danh sach sinh vien
3. Tim sinh vien theo ten
4. Xoa sinh vien khoi danh sach
5. Thoat
Please enter your choice: `
let check = true
while (check) {
    let choice = +prompt(menu)
    switch (choice) {
        case 1:
            let num = + prompt("Nhap so luong sinh vien")
            if (num <= 0) {
                alert("Do dai khong hop le")
            } else {
                inputStudent(num)
            }
            break
        case 2:
            listOfStudent()
            break
        case 3:
            let nameStudent = prompt("Nhap ten sinh vien muon tim")
            searchStudent(nameStudent)
            break
        case 4:
            let nameDelete = prompt("Nhap ten sinh vien ban muon xoa")
            deleteStudent(nameDelete)
            break
        case 5:
            check = false
            break
        default:
            alert("Lua chon khong hop le")
            break
    }
}

function inputStudent(n) {
    for (let i = 0; i < n; i++) {
        let input = prompt("Nhap ten sinh vien")
        arr.push(input)
    }
}

function listOfStudent() {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}. ${arr[i]}`)
    }
}

function searchStudent(name) {
     let count = -1
    for (let i = 0; i < arr.length; i++) {
        if (name == arr[i]) {
            count = 0
            break
        } else {
            count = -1
        }
    }
    if (count == 0) {
        console.log(name)
    } else if (count == -1) {
        alert("Khong tim thay sinh vien phu hop")
    }
}

function deleteStudent(name) {
    for (let i = 0; i < arr.length; i++) {
        if (name == arr[i]) {
            arr.splice(i,1)
            break
        }
    }
}