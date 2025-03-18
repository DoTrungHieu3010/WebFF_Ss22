let n = 1;

const contact = [
    {
        id: n,
        name: "Do Trung Hieu",
        email: "dohieu30102006@gmail.com",
        phone: "0244346348",
    },
]

let menu = `
1. Thêm đối tượng Contact vào danh sách liên hệ.
2. Hiển thị danh sách danh bạ.
3. Tìm kiếm thông tin Contact theo số điện thoại.
4. Cập nhật thông tin Contact(name, email, phone) theo id.
5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.
6. Thoát.
`;

let check = true;

while (check) {
    let findIndex = -1
    let choice = +prompt(menu)

    switch (choice) {
        case 1:
            inputContact();
            break

        case 2:
            displayContact();
            break

        case 3:
            searchPhone();
            break

        case 4:
            updateContact();
            break

        case 5:
            deleteContact();
            break

        case 6:
            check = false
            alert("Exit complete.")
            break

        default:
            alert("Your choice is not available.")
            break
    }
}

function inputContact() {
    let inputName = prompt("Nhap ten muon them")
    let inputEmail = prompt("Nhap email muon them")
    let inputPhone = prompt("Nhap so dien thoai muon them")

    let newContact = {
        id: n + 1,
        name: inputName,
        email: inputEmail,
        phone: inputPhone,
    }

    contact.push(newContact)
    n++;
}

function displayContact() {
    for (let i in contact) {
        console.log(`id: ${contact[i].id}`)
        console.log(`ten: ${contact[i].name}`)
        console.log(`email: ${contact[i].email}`)
        console.log(`phone: ${contact[i].phone}`)
        console.log(`--------------------------`)
    }
}

function searchPhone() {
    let searchPhone = prompt("Nhap so dien thoai can tim kiem:")
    for (let i in contact) {
        if (contact[i].phone === searchPhone) {
            findIndex = i
            break
        }
    }
    if (findIndex === -1) {
        alert("Khong tim thay so dien thoai.")
    } else {
        console.log(contact[findIndex])
    }
}

function updateContact() {
    let searchId = +prompt("Nhap id can cap nhat:")
    for (let i in contact) {
        if (contact[i].id === searchId) {
            findIndex = i
            break
        }
    }
    if (findIndex === -1) {
        alert("Khong co id ban can tim.")
    } else {
        let updateName = prompt("Nhap ten muon them")
        let updateEmail = prompt("Nhap email muon them")
        let updatePhone = prompt("Nhap so dien thoai muon them")

        let updateContact = {
            id: +findIndex + 1,
            name: updateName,
            email: updateEmail,
            phone: updatePhone,
        }

        contact.splice(findIndex, 1, updateContact)
    }
}

function deleteContact() {
    let searchId = +prompt("Nhap id can xoa:")
    for (let i in contact) {
        if (contact[i].id === searchId) {
            findIndex = i
            break
        }
    }
    if (findIndex === -1) {
        alert("Khong co id ban can tim.")
    } else {
        contact.splice(findIndex, 1)
    }
}