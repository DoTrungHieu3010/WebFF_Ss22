let array = [5]
let odd = ""
let even =""
for (let i = 0; i < 5; i++){
    array[i] = Math.ceil(Math.random() * 10)
    array[i] = Number(array[i])
    if (array[i] % 2 == 0){
        even += array[i]
        even = Number(even)
    } else {
        odd += array[i]
        odd = Number(odd)
    }
}
for (let i = 0; i < array.length; i++){
    console.log(`${array[i]}`)
}
console.log(`Tong cac so chan: ${even}`)
console.log(`Tong cac so le: ${odd}`)