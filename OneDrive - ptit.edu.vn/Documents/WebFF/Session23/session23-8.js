let n = +prompt("Nhap so luong phan tu");
let arr = [];
if (!Number.isInteger(n)) {
  alert("Sai du lieu");
} else if (n < 0) {
  alert("So luong phan tu khong duoc nho hon 0");
} else {
  for (let i = 0; i < n; i++) {
    let input = +prompt(`Nhap phan tu cua mang`);
    arr.push(input);
  }
  let isFibonacci = true;
  if (arr.length < 3) {
    isFibonacci = false;
  } else {
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1] + arr[i - 2]) {
        isFibonacci = false;
        break;
      }
    }
  }
  if (isFibonacci) {
    alert("La day so fibonacci");
  } else {
    alert("Khong phai day so fibonacci");
  }
}