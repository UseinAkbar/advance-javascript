// Implisit return
// const tampilNama = nama => `Hello ${nama}`;
// const tampilHello = () => `Hello world!`;

let mahasiswa = ['Usein', 'Jaka', 'Ucok'];
// let urutMahasiswa = mahasiswa.map((nama, i) => ({nama, urutan: i+1}) );
// atau
let urutMahasiswa = mahasiswa.map((nama, i) => {
  return {
    nama,
    urutan: i+1
  }
})
console.table(urutMahasiswa);

// urutMahasiswa.forEach((item, i) => {
//   console.log(`${item.nama} urutan ke ${item.urutan}`);
// });
