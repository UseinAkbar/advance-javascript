// CLOSURE
// Closure ialah function yg membutuhkan variabel dari parent functionnya, dgn kata lain ialah nested function yang dipanggil lalu mengembalikan variabel atau value parent functionnya
// Manfaat Closure :
// 1. Utk membuat function factory
// 2. Agar kita mempunyai method pribadi / seolah" memiliki private method

// function init() {
//   let nama = 'Usein';
//
//   return () => {
//     console.log(nama);
//   }
//
// }
//
// let panggilNama = init();
// panggilNama();


// FUNCTION FACTORY
// function ucapkanSalam(waktu) {
//
//   return (nama) => {
//     console.log(`Selamat ${waktu} ${nama}!`);
//   }
// }
//
// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');
//
// selamatMalam('Usein');



// PRIVATE METHOD
// Bukan cara closure
// Cara ini akan bermasalah jika kita assign global variabel baru, karena itu akan overwrite variabel sebelumnya
// let counter = 0;
// let add = () => {
//   return counter += 1;
// }
// console.log(add());
// kalau var counter kita jadikan local variabel, setiap kita panggil fungsi add maka var counternya akan selalu diassign menjadi 0 lagi. Ini disebabkan oleh perilaku hoisting;


// let init = () => {
//   var nama = 'Usein Akbar';
//
//   let panggilNama = () => {
//     return (nama);
//   }
//   console.log(panggilNama());
//
// }


// Cara closure
// Dengan cara biasa / disimpan ke variabel
// let add = () => {
// let counter = 0;
//
//   return () => {
//     console.log(counter);
//     return counter += 1;
//   }
// };
//
//
// let a = add();
// console.log(a());


// Dengan cara tanpa disimpan ke variabel
// let add = (() => {
//   let counter = 0;
//
//   return () => {
//     return counter += 1;
//   }
// })();
// console.log(add());
// Cara seperti ini disebut SIAF / Self Invoked Anonymous Function
