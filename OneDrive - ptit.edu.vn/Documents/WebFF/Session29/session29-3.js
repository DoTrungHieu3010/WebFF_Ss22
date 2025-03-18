let categories = {
    "Món chính": [
        { name: "Cơm gà", price: 50000, note: "Cơm với gà chiên giòn" },
    ],
    "Đồ uống": [{ name: "Trà sữa", price: 30000, note: "Trà sữa trân châu" }],
};

let menu = `Menu
  1. Thêm món ăn vào danh mục.
  2. Xóa món ăn theo tên khỏi danh mục.
  3. Cập nhật thông tin theo tên của món ăn.
  4. Hiển thị toàn bộ menu.
  5. Tìm kiếm món ăn theo tên.
  6. Thoát`;

function displayMenu() {
    console.clear();
    console.log("=== MENU ===");
    for (let category in categories) {
        console.log(`\n${category}:`);
        categories[category].forEach((item) => {
            console.log(`- ${item.name} (Giá: ${item.price}) - ${item.note}`);
        });
    }
}
function search(name) {
    for (let category in categories) {
        for (let i = 0; i < categories[category].length; i++) {
            if (categories[category][i].name === name) {
                return { category: category, index: i };
            }
        }
    }
    return null;
}

let luaChon;
while (luaChon !== 6) {
    luaChon = +prompt(menu);
    switch (luaChon) {
        case 1: {
            let category = prompt("Nhập danh mục (hoặc tạo mới)");
            if (!categories[category]) categories[category] = [];
            let inputName = prompt("Nhập tên món ăn");
            let inputPrice = +prompt("Nhập giá của món ăn");
            let inputNote = prompt("Nhập mô tả của món ăn");
            categories[category].push({
                name: inputName,
                price: inputPrice,
                note: inputNote,
            });
            alert("Thêm món ăn thành công");
            break;
        }
        case 2: {
            let inputName = prompt("Nhập tên món ăn cần xóa");
            let result = search(inputName);
            if (result) {
                categories[result.category].splice(result.index, 1);
                alert("Xóa món ăn thành công");
            } else {
                alert("Tên món ăn không tồn tại");
            }
            break;
        }
        case 3: {
            let inputName = prompt("Nhập tên món ăn cần sửa");
            let result = search(inputName);
            if (result) {
                let newName = prompt("Nhập tên món ăn mới");
                let newPrice = +prompt("Nhập giá món ăn mới");
                let newNote = prompt("Nhập mô tả món mới");
                categories[result.category][result.index] = {
                    name: newName,
                    price: newPrice,
                    note: newNote,
                };
                alert("Cập nhật thành công");
            } else {
                alert("Tên món ăn không tồn tại");
            }
            break;
        }
        case 4: {
            displayMenu();
            break;
        }
        case 5: {
            let name = prompt("Nhập tên món cần tìm");
            let found = false;
            for (let category in categories) {
                for (let i = 0; i < categories[category].length; i++) {
                    if (categories[category][i].name.includes(name)) {
                        console.log("Tìm thấy: " + categories[category][i].name);
                        found = true;
                    }
                }
            }
            if (!found) alert("Không tìm thấy món");
            break;
        }
        case 6: {
            alert("Tạm biệt");
            break;
        }
        default: {
            alert("Lựa chọn không hợp lệ");
            break;
        }
    }
}