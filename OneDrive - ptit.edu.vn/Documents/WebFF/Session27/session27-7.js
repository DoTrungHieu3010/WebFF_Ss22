let arr = [];
let n = +prompt("Nhap do dai cua mang");
for (let i = 0; i < n; i++) {
    let input = +prompt(`Nhap phan tu thu ${i+1}`);
    arr.push(input);
}
alert(findMissingNum(arr));

function findMissingNum(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i] + 1;
        }
    }
}