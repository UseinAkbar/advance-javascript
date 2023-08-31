// Rest Parameter

// const myFunc = function(a, b, ...rest) {
//   return rest;
//    // return Array.from(arguments);
//    // return [...arguments];
// }
//
// console.log(myFunc(1,2,3,4,5));

// rest parameter harus diletakkan di akhir dari parameter, tidak boleh (...rest, a, b)


// const jumlah = function(...angka) {
//   // let hasil = 0;
//   // let index = 0;
//   // for( [i, item] of angka.entries() ) {
//   //   hasil += item;
//   //   index += i;
//   // }
//   // return `hasilnya = ${hasil}, hasil indeksnya = ${index}`;
//
//   return angka.reduce( (a, b) => a+b );
// }
//
// console.log(jumlah(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ['Usein', 'Joko', 'Bagus', 'Hendra', 'Ari'];
//
// const [ketua, wakil, ...anggota] = kelompok1;

//object destructuring
// const team = {
//   pm: 'Usein',
//   frontend1: 'Joko',
//   frontend2: 'Bowo',
//   backend: 'Budi',
//   ux: 'Radit',
//   devops: 'William'
// }
//
// const {pm, ...myTeam} = team;

// filtering
const filterBy = function(tipe, ...values) {
   return values.filter( item => {
     return typeof(item) === tipe;
   })
}

console.log(filterBy('number', 1, 2, false, null, true, 10, undefined, 'Joko'));
