//1.2 EXECUTION CONTEXT, HOISTING, SCOPE


// -> Creation Phase pada global konteks

// console.log(nama);
// var nama = 'Usein';

// Javascript awal" akan melihat ke kode kita, apakah ada nama var / nama function, jika ada maka nama var maka akan diisi dgn "undefined" dulu, sedangkan nama function akan diisi dengan "function itu sendiri".
// Object "this" dan "window" lgsg dicreate secara otomatis oleh Javascript di dlm memory, selain itu tidak ada yg dicreate di dlm memory

// nama var = undefined
// nama function = fn()
// window = global object
// this = window
// Ini disebut konsep hoisting

// -> Execution phase


// console.log(sayHello());
// var nama = 'Usein'
// var umur = 20;
//
// function sayHello() {
//   return `Hello nama saya ${nama}, umur ${umur} tahun.`;
// }

// -> Function itu membuat local execution context sendiri
// yang di dalamnya terdapat juga creation dan execution phase
// intinya setiap function dipanggil, ia akan membuat execution context sendiri (execution context stack), setelah function dieksekusi maka execution context stacknya akan hilang dari memory
// terdapat window dan arguments
// terdapat juga hoisting


// var nama = 'Usein Akbar';
// var username = '@useinakbarr';
//
// function cetakURL(username) {
//   var instagramURL = 'https://instagram.com/';
//   return `${instagramURL}${username}`;
// }
//
// console.log(cetakURL('@jakawibowo'));


function satu() {
  var nama = 'Usein';
  console.log(nama);

  tiga(nama);
}

function dua() {
  console.log(nama);
}

function tiga(nama) {
  console.log(nama);
}

console.log(nama);
var nama = 'Erik';
satu();
dua('Jaka');
console.log(nama);





// function a() {
//   console.log('ini a');
//
//   function b() {
//     console.log('ini b');
//
//     function c() {
//       console.log('ini c');
//
//     }
//
//     c();
//   }
//
//   b();
// }
//
// a();
