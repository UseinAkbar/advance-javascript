const angka = [-1, 5, 3, -4, 7, -6, 8, 1, 9, 2];
// Mencari angka >=3
// for

// const myArr = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     myArr.push(angka[i]);
//   }
// }

// filter
// const newAngka = angka.filter((item) => {
//   return item >= 3;
// });

// map
// const newAngka = angka.map((item) => {
//   return item * 2;
// });

// reduce
// Menjumlahkan seluruh elemen pada array
// 0 adalah nilai awal, kita bisa ubah pada argumen di bawah ini
// jika nilai awalnya tdk ingin dirubah, maka tdk usah mengisikan nilai apapun
const newAngka = angka.reduce((a, b) => a + b); // 24
// "0" + -1 + 5 + 3 + -4 + 7 + -6 + 8 + 1 + 9 + 2

// const newAngka = angka.reduce((a, b) => a + b, 6); // 30
// "6" + -1 + 5 + 3 + -4 + 7 + -6 + 8 + 1 + 9 + 2



// Method Chaining
// 1. cari angka > 5
// 2. kalikan 3
// 3. jumlahkan angka"nya

const hasil = angka.filter( item => {
  return item > 5;
})
.map( item => {
  return item * 3;
})
.reduce((a, b) => {
  return a + b;
});

























// const range = (n, e) => {
//   let b = 0;
//   for (let i = n; i <= e; i++) {
//     b += i;
//   }
//   return b;
// }
//
// const sum = (range) => {
//   console.log(range);
// }

// sum(range(1, 10));


// const kerjakanTugas = (action, time) => {
//   setTimeout(action, time);
// }
//
// kerjakanTugas(() => {
//   console.log('Start the machine..');
// }, 1000);
