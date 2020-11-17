// for..of

// Array
// const mhs = ['Usein', 'Joko', 'Edo'];

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i])
// }
// for loop bisa untuk melooping string juga

// mhs.forEach( item => console.log(item));
// forEach khusus untuk melooping array, tidak bisa string
// karena forEach adalah prototype/method array

// for( const item of mhs ) {
//   console.log(item);
// }

// String
// const nama = 'Usein';
// const mhs = ['Usein', 'Joko', 'Edo'];
// for( const item of nama ) {
//   console.log(item);
// }

// mhs.forEach((item, i) => {
//   console.log(`Mahasiswa ke ${i + 1} adalah ${item}`);
// });

// for ( const [i, item] of mhs.entries() ) {
//   console.log(`Mahasiswa ke ${i} adalah ${item}`);
// }

// NodeList
// const names = document.querySelectorAll('.nama');
// const a = [...names];
// for ( const item of names ) {
//   console.log(item.textContent);
// }

// Arguments
// function jumlahAngka() {
//   let jumlah = 0;
//   for ( const item of arguments) {
//     jumlah += item
//   }
//   // arguments tidak bisa pakai reduce / forEach karena kedua itu prototype/method array bukan arguments
//   return jumlah
// }
//
// console.log(jumlahAngka(1,2,3,4,5));


// for..in
// Untuk melooping property pada object dan valuenya

// const mhs = {
//   nama: 'Usein',
//   usia: 20
// }

// for ( item in mhs ) {
//   console.log(item);
// }
// output => nama, usia

// for ( item in mhs ) {
//   console.log(mhs[item]);
// }
// output => Usein, 20
