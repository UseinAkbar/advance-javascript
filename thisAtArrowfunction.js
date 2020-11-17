// Konsep this pada arrow function
// Constructure function
// const Mahasiswa = function() {
//   this.nama = 'Usein';
//   this.umur = 20;
//   this.sayHello = function() {
//     console.log(`Hello, nama saya ${this.nama}`);
//   }
// }
//
// const usein = new Mahasiswa();



//-> Arrow function

// Constructure function
// const Mahasiswa = function() {
//   this.nama = 'Usein';
//   this.umur = 20;
//   this.sayHello = () => {
//     console.log(this);
//     console.log(`Hello, nama saya ${this.nama}`);
//   }
// }
//
// const a = new Mahasiswa();

//Function declaration
// const mahasiswa = () => {
//   let mhs = {};
//   mhs.nama = 'Usein';
//   mhs.umur = 20;
//   mhs.hello = () => {
//     console.log(this.nama);
//   }
// }
//const a = mahasiswa()

// Object literal
const usein = {
  nama: 'Usein',
  umur: 20,
  sayHello: () => {
    return(this);
  }
}

// const Mahasiswa = function() {
//   this.nama = 'Usein';
//   this.umur = 20;
//   this.sayHello = function() {
//     console.log(`Hello, nama saya ${this.nama}`);
//   }
//
//   // setInterval(() => {
//   //   console.log(this.umur += 1);
//   // }, 500);
// }
//
// const usein = new Mahasiswa();

// Intinya, arrow function itu TIDAK memiliki konsep this. Sehingga ia akan mencari keluar scopenya sampai bertemu variable this, jika tdk ada maka akan mereturn window
// Kalau function expression / "function() {}" ia memiliki konsep this / "built in this"
// Penggunaan arrow function harus disesuaikan dgn kebutuhan, tdk bisa dipukul rata



// Menukar value variable menggunakan syntax ES6
// let a = 1;
// let b = 2;
// [a,b] = [b,a];

// Implementasi konsep this pada arrow function in real life example
const box = document.querySelector('.box');
box.addEventListener('click', function() {
let satu = 'size';
let dua = 'caption';

if (this.classList.contains(satu)) {
  [satu, dua] = [dua, satu];
}

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
