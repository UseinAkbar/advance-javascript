// Callback
// Synchronous Callback

// const halo = (nama) => {
//    return (`Halo ${nama}`);
// }

// const tampilkanPesan = (callback) => {
//   const nama = prompt('Masukkan nama: ');
//   console.log(callback(nama));
// }
//
// tampilkanPesan(nama => `Haii ${nama}`)

const mhs = [
  {
    "nama": "Usein Akbar",
    "NIM": "1202204043",
    "email": "useinakbar123@gmail.com",
    "jurusan": "Sistem Informasi",
    "idDosenWali": 1,
    "jodoh": "hehe"
  },
  {
    "nama": "Joko Anwar",
    "NIM": "1202204050",
    "email": "jokoanwar123@gmail.com",
    "jurusan": "Teknik Industri",
    "idDosenWali": 2
  },
  {
    "nama": "Adit Widodo",
    "NIM": "1202204060",
    "email": "aditwidodo123@gmail.com",
    "jurusan": "Teknik Mesin",
    "idDosenWali": 3
  }
]


// console.log('mulai');
// mhs.forEach((item) => {
//   for(let i = 0; i < 1000; i++) {
//     let date = new Date()
//   }
//   console.log(item.nama);
// })
// console.log('selesai');
//-> cara seperti ini akan memakan waktu yang lama (blocking/console.log(item.nama) tdk akan dieksekusi sampai for loopnya selesai dahulu), dgn begitu maka console.log('selesai') akan lama utk dieksekusi. Maka dari itu dibutuhkan asynchronous callback / dgn non-blocking.

// Asynchronous Callback
// --> Vanilla Javascript

// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();
//
//   xhr.onreadystatechange = () => {
//     if(xhr.readyState === 4) {
//       if(xhr.status === 200) {
//         success(xhr.response)
//       } else if (xhr.status === 404) {
//         error()
//       }
//     }
//   }
//
//   xhr.open('get', url)
//   xhr.send()
// }
//
//
// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', result => {
//   const mhs = JSON.parse(result).forEach((item, i) => {
//     const {nama} = item
//     console.log(nama);
//   });
//
// }, () => {
//   console.log('error');
// })
// console.log('selesai');

// --> JQuery
console.log('mulai');
$.ajax({
  url: 'data/mahasiswa.json',
  success: (mhs) => {
    mhs.forEach( item => console.log(item.nama))
  },
  error: (err) => {
    console.log(err.status);
  }
});
console.log('selesai');
