// ()

//var angka = [1,2,3,4,5,6,7,8,9,10];
// var genap = [];
//
// const cetakGanjil = () => {
//    return angka.filter( item => {
//     return item % 2 !== 0;
//   });
// };

// const cetakGeometri = () => {
//   for (let n = 1; n <= 10 ; n++) {
//     var a = 4;
//     var r = 3;
//     let Un = a * (Math.pow(r, n-1));
//     console.log(Un);
//   }
// }
//
// cetakGeometri();


// const cetakHuruf = (i) => {
//     if (i <= 45) {
//       console.log('E');
//     } else if (i > 45 && i <= 55) {
//       console.log('D');
//     } else if (i > 55 && i <= 68 ) {
//       console.log('C');
//     } else if (i > 68 && i < 80) {
//       console.log('B');
//     } else {
//       console.log('A');
//     }
// }

// const fibonacci = (n) => {
//   let a = 0;
//   let b = 1;
//   let c = 0;
//
//     for (let i = 1; i <= n; i++) {
//       if (i === 1) {
//         console.log(0);
//       } else if (i === 2) {
//         console.log(1);
//       } else {
//         c = a+b;
//         a = b;
//         b = c;
//         console.log(c);
//       }
//     }
// }





// const ubahSuhu = (suhu, temp) => {
//
//   if (suhu === 'kelvin') {
//     return `${temp + 273}°C`;
//   } else if (suhu === 'fahrenheit') {
//     return `${Math.ceil(9/5 * temp + 32)}°F`;
//   } else if (suhu === 'reamur') {
//     return `${4/5*temp}°R`;
//   }
// }
//
// const a = prompt(`Konversikan ke :
//   (Kelvin / Reamur / Fahrenheit)`
// ).toLowerCase();
//
// const b = parseInt(prompt(`Masukkan suhu celcius :`));
//
// console.log(ubahSuhu(a, b));
