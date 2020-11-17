// Cara lama
// FUNCTION SCOPE
// (function() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//
//   var a = 120;
// })();
// // function seperti ini dinamakan SIAF (Self Invoked Anonymous Function), sebuah function yg lgsg dipanggil;
// console.log(i);

// Cara baru / cara ES6
// BLOCK SCOPE
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);


// -> Gunakan Const jika valuenya tdk akan berubah, gunakan Let jika kira" valuenya akan berubah, JANGAN GUNAKAN VAR LAGI!
// Let dan Const fungsinya utk meminimalisir perubahan state
// Let masih bisa overwrite value, sedangkan Const valuenya tdk bisa dirubah lagi
