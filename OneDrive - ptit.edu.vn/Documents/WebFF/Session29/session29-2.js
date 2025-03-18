const products = [];
let n = 1;
let findIndex
let searchId
let menu = `
1.Thêm sản phẩm vào danh sách sản phẩm.
2.Hiển thị tất cả sản phẩm.
3.Hiển thị chi tiết sản phẩm theo id.
4.Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
5.Xóa sản phẩm theo id.
6.Lọc sản phẩm theo khoảng giá.
7.Thoát.
Lựa chọn của bạn (1-7):
`;
let choice;
while (choice !== 7) {
    findIndex = -1
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            addProduct();
            break;
        case 2:
            displayProducts();
            break;
        case 3:
            displayProductDetail();
            break;
        case 4:
            updateProduct();
            break;
        case 5:
            deleteProduct();
            break;
        case 6:
            filterProductByPrice();
            break;
        case 7:
            console.log('Thoát chương trình.')
            break;
        default:
            console.log('Lựa chọn không hợp lệ. Vui lòng chọn lại!');
            break;
    }
}
function addProduct(){
    let inputId = n;
    let inputName = prompt("Nhap ten san pham muon them")
    let inputPrice = +prompt("Nhap gia cua san pham")
    let inputCategory = prompt("Nhap danh muc cua san pham")
    let inputQuantity = +prompt("Nhap so luong san pham")
    
    let inputProduct = {
        Id: inputId,
        Name: inputName,
        Price: inputPrice,
        Category: inputCategory,
        Quantity: inputQuantity,
    }

    products.push(inputProduct)
    n++;
}
function displayProducts(){
    for (let i in products){
        console.log(`Id: ${products[i].Id}`)
        console.log(`Ten san pham: ${products[i].Name}`)
        console.log(`Gia san pham: ${products[i].Price}`)
        console.log(`Danh muc san pham: ${products[i].Category}`)
        console.log(`So luong cua san pham: ${products[i].Quantity}`)
        console.log("-----------------------------------------")
    }
}
function displayProductDetail(){
    searchId = +prompt("Nhap id can tim:")
    for (let i in products) {
        if (products[i].Id === searchId) {
            findIndex = i
            break
        }
    }
    if (findIndex === -1) {
        alert("Khong co id ban can tim.")
    } else {
        console.log(products[findIndex])
    }
}
function updateProduct(){  
    searchId = +prompt("Nhap id can cap nhat:")
    for (let i in products) {
        if (products[i].Id === searchId) {
            findIndex = i
            break
        }
    }
    if (findIndex === -1) {
        alert("Khong co id ban can tim.")
    } else {
        let updateName = prompt("Nhap ten muon thay doi")
        let updatePrice = prompt("Nhap gia muon thay doi")
        let updateCategory = prompt("Nhap danh muc muon thay doi")
        let updateQuantity = +prompt("Nhap so luong san pham can cap nhat")

        let updateProduct = {
            Id: +findIndex + 1,
            Name: updateName,
            Price: updatePrice,
            Category: updateCategory,
            Quantity: updateQuantity,
        }

        products.splice(findIndex, 1, updateProduct)
    }
}
function deleteProduct(){
    let searchId = +prompt("Nhap id can xoa:")
    for (let i in products) {
        if (products[i].Id === searchId) {
            findIndex = i
            break
        }
    }
    if (findIndex === -1) {
        alert("Khong co id ban can tim.")
    } else {
        products.splice(findIndex, 1)
    }
}
function filterProductByPrice(){    
    let minPrice = +prompt("Ban muon tim san pham gia tu:")
    let maxPrice = +prompt("Den:")
    let checkPrice = -1
    for (let i in products){
        if (minPrice>=products[i].Price&&products[i].Price<=maxPrice){
            checkPrice = 1
            break
        } 
    }
    if (checkPrice === -1){
        alert("Khong co san pham trong khoang gia")
    } else {
        console.log(products[i].Price)
    }
}