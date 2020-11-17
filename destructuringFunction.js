// DESTRUCTURING FUNCTION

// const kalkulasi = (a, b) => {
//   return [a + b, a - b, a / b, a * b];
// }
//
// let [a, b, c, d = 'tidak ada'] = kalkulasi(2, 4);

// const kalkulasi = function(a, b) {
//   this.tambah = a + b;
//   this.kali = a * b;
//   this.kurang = a - b;
//   this.bagi = a / b;
// }
//
//  const {tambah, kurang = 'tidak ada', ...c} = new kalkulasi(3, 4);

// Destructuring Function Arguments
// const mhs1 = {
//   nama: 'Usein',
//   umur: 20,
//   email: 'usein@gmail.com',
//   nilai: {
//     tugas: 85,
//     uts: 80,
//     uas: 88
//   }
// }
//
// const cetakMhs = ({nama, nilai: {tugas, uts, uas}, umur}) => {
//   return `Nama = ${nama}, umur = ${umur}, nilai tugas = ${tugas}, nilai uts = ${uts}, nilai uas = ${uas}, rata-rata nilai = ${Math.round((tugas+uts+uas) / 3)}`;
// }
//
// console.log(cetakMhs(mhs1));
