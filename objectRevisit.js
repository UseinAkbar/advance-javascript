//1.1 Cara membuat object pada Javascript

//1. Object Literal
// !PROBLEM: Tidak efektif untuk digunakan ketika kita membuat object yang banyak / (too much repeated property)

// let mahasiswa1 = {
//   nama: 'Usein',
//   energi: 10,
//   makan: function(porsi) {
//       this.energi += porsi;
//       console.log(`${this.nama} telah makan ${porsi} porsi dan memiliki energi ${this.energi}`);
//   },
//   reset: function() {
//     this.energi = 10;
//     console.log(`Energi anda sekarang ${this.energi}`);
//   }
// }
//
// let mahasiswa2 = {
//   nama: 'Akbar',
//   energi: 5,
//   makan: function(porsi) {
//       this.energi += porsi;
//       console.log(`${this.nama} telah makan ${porsi} porsi dan memiliki energi ${this.energi}`);
//   },
//   reset: function() {
//     this.energi = 5;
//     console.log(`Energi anda sekarang ${this.energi}`);
//   }
// }

//2. Function Declaration
//   const methodMahasiswa = {
//     makan: function(porsi) {
//       this.energi += porsi;
//       console.log(`${this.nama} makan!`);
//     },
//     main: function(jam) {
//       this.energi -= jam;
//       console.log(`${this.nama} selamat main!`);
//     },
//     tidur: function(jam) {
//       this.energi *= 2;
//       console.log(`${this.nama} selamat tidur!`);
//     }
//   }
//
// const Mahasiswa = (nama, energi) => {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//
//   return mahasiswa;
// }
//
// const usein = Mahasiswa('Usein Akbar', 10);
// const sofie = Mahasiswa('Sofie', 20);


// PROTOTYPE VERSION
function Mahasiswa(nama, energi) {
  //Automaticly prototype akan dibuat di belakang layar
  // let this = Object.create(Mahasiswa.prototype);
  this.nama = nama;
  this.energi = energi;
  //return this;
}

Mahasiswa.prototype.makan = function(porsi) {
  this.energi += porsi;
  return `Selamat makan ${this.nama}`;
};

Mahasiswa.prototype.main = function(jam) {
  this.energi -= jam;
  return `Selamat main ${this.nama}`;
};

let usein = new Mahasiswa('Usein', 10);



// let angka = [1,2,3];
//Di belakang layar terjadi seperti ini :
// function Array() {
//   let this = Object.create(Array.prototype);
// }

// let angka = new Array();
// maka array angka tadi mewarisi semua method dari object Array



// CLASS VERSION
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   };
//
//   makan(porsi) {
//     this.energi += porsi;
//     return `Selamat makan ${this.nama}`;
//   };
//
//   main(jam) {
//     this.energi -= jam;
//     return `Selamat main ${this.nama}`;
//   };
//
// }
//
// const usein = new Mahasiswa('Usein', 50);


//3. Constructur Function
// With keyword "new"

// function Mahasiswa(nama, energi) {
//
//   this.nama = nama;
//   this.energi = energi;
//   this.makan = function(porsi) {
//     this.energi += porsi;
//     console.log(`${this.nama} makan!`);
//   }
//   this.main = function(jam) {
//     this.energi -= jam;
//     console.log(`${this.nama} selamat main!`);
//     console.log(this);
//   }
//
// }
//
// let usein = new Mahasiswa('Usein', 10);
// let sofie = new Mahasiswa('Sofie', 20);
