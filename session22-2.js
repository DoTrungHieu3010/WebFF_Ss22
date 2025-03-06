let numbers = [2,5,7,4,1,6,8]
let check = 0
let input = +prompt("Nhap so bat ky")
for(let i =0; i<numbers.length; i++){
    if (input == numbers[i]){
        check = 0
        break
    } else {
        check++
    }
}
if(check == 0){
    console.log("Bingo")
} else {
    console.log("Chuc ban may man lan sau")
}