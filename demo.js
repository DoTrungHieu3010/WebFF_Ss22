let students = [
    "Việt Quốc",
    "Việt Anh",
    "Việt Quyền",
    "Việt Tiến",
];
// console.log(students);



// // Lấy 1 phần tử 
// students[3]; 
// console.log(students[2], "Nhót"); 
//     // Tương tự lấy treen
//     students[students.length-2];



// // Lất toàn bộ phần tử
// for(let i=0;i<students.length;i++){
//     console.log(students[i], "Nhót");
// }
// for(let i=students.length-1;i>=0;i--){
//     console.log(students[i], "Nhót");
// }


// for(let student of students){
//     console.log(student);
// }
// for(let index in students){
//     console.log(index, students[index]);
// }

students.unshift("123") //them vao dau mang
students.push("456") //them vao cuoi mang
students.splice(2,0, "154") //them phan tu vao vi tri so 2 va khong xoa vi tri nao
students.shift() //xoa dau
students.pop() //xoa cuoi
students.splice() //xoa tai vi tri bat ky