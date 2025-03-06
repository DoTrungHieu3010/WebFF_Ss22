let numbers = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9]
let check = 0
let num = +prompt("Nhap so ban muon kiem tra")
for(let i =0; i< numbers.length; i++){
    if (num == numbers[i]){
        check++
    }
}
alert(`So ${num} xuat hien ${check} lan`)