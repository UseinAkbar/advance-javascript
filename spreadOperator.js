// Spread Operator
// Memecah iterables menjadi single elements

// const mhs = ['Usein', 'Joko', 'Budi'];
// console.log(...mhs[2]);

// Menggabungkan 2 array ->

// const mhs = ['Usein', 'Joko', 'Budi'];
// const dosen = ['Dewi', 'Nia', 'Ayu'];
//
// const orang = [...mhs, ...dosen];
// atau
// const orang = mhs.concat(dosen);

// Meng-copy array ->

// const mhs = ['Usein', 'Joko', 'Budi'];
// const mhs1 = mhs;
// mhs1[0] = 'Adi';
// cara di atas tidak menunjukkan bahwa mhs1 benar" meng-copy array mhs, karena ketika array ke-0 dari mhs1 diganti, maka array ke-0 dari mhs juga terganti

// const mhs1 = [...mhs];
// mhs1[0] = 'Adi';
// cara di atas adalah cara yang benar ketika ingin meng-copy array

// Mengambil text dari HTML ->

// const liMhs = document.querySelectorAll('li');
// const mhs = [...liMhs].map( item => {
//   return item.textContent;
// })

// Contoh implementasi
// ->
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map( (item, i) => {
  return `<span>${item.toUpperCase()}</span>`
}).join('')
nama.innerHTML = huruf

// ->
// const nama = document.querySelector('.nama');
// const alphabet = nama.textContent;
// nama.addEventListener('click', function() {
//   if (this.textContent.includes('*')) {
//     nama.textContent = alphabet;
//   } else {
//     const encode = [...alphabet].map( (item, i) => {
//       if (i > 2) {
//         return item;
//       } else {
//         return '*';
//       }
//     });
//     nama.textContent = encode.join('');
//   }
// })
