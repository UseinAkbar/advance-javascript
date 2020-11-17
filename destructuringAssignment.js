// Destructuring variable / assignment

// --> Destructuring Array

// // basic
// const perkenalan = ['Halo', 'nama', 'saya', 'Usein'];
// // const [salam, satu, dua, nama] = perkenalan;
//
// // skipping items
// const [salam, , , nama] = perkenalan;
//
// // swap items
// let a = 1;
// let b = 2;
//
// [a, b] = [b, a];

// return value pada function
// function coba() {
//   return [1, 2];
// }
//
// const [a, b] = coba();

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];


// --> Destructuring object

// // basic
// const mhs = {
//   nama: 'Usein Akbar',
//   umur: 20
// }
//
// const {nama, umur} = mhs

// Assignment tanpa deklarasi object
// ({nama, umur} = {nama: 'Usein', umur: 20});

// Ganti nama properti
// const mhs = {
//   nama: 'Usein Akbar',
//   umur: 20
// }
//
// const {nama: name, umur: age} = mhs;

// Memberikan Default value
// const mhs = {
//   nama: 'Usein Akbar',
//   umur: 20,
//   email: 'usein@gmail.com'
// }
//
// const {nama, umur, email = 'default@gmail.com'} = mhs;

// const mhs2 = {
//   nama: 'Usein Akbar',
//   umur: 20,
// }
//
// const {nama: name, umur: age, email: gmail = 'default@gmail.com'} = mhs2;

// Rest parameter
// const mhs = {
//   nama: 'Usein Akbar',
//   umur: 20,
//   email: 'usein@gmail.com'
// }
//
// const {nama, ...values} = mhs;

// Mengambil properti tertentu pada object setelah dikirim sebagai parameter untuk function
// const mhs = {
//   id: 123,
//   nama: 'Usein Akbar',
//   umur: 20,
//   email: 'usein@gmail.com'
// }
//
// function getId({umur}) {
//   return age
// }
//
// console.log(getId(mhs));
