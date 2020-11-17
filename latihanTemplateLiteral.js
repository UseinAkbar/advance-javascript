// ()

// 1. Looping
// const mhs = [
//   {
//     nama: 'Usein',
//     NIM: 1202204043,
//     prestasi: 'Juara 1 Hackaton Hongkong'
//   },
//   {
//     nama: 'Jaka',
//     NIM: 1202204063
//   },
//   {
//     nama: 'Candra',
//     NIM: 1202203043,
//     prestasi: 'Juara 2 Accounting Berlin'
//   }
// ];
//
// const el = mhs.map( item => {
//   return (
//   `<li>${item.nama}</li>
//   <li>${item.NIM}</li>
//   ${item.prestasi ? `<li>${item.prestasi}</li>` : ''}
//   <br>`
//   )
// }).join('');
//
// document.body.innerHTML = `<ul>${el}</ul>`;

// 2.Conditionals
// ternary
// const lagu = {
//   judul: 'Menuju Senja',
//   penyanyi: 'Payung Teduh',
//   featuring: 'Ryan D\'Masiv'
// };
//
// const el = `<ul>
// <li>${lagu.penyanyi}</li>
// <li>${lagu.judul} ${lagu.featuring ? `<em>(feat. ${lagu.featuring})</em>` : ''}</li>
// </ul>`;
//
// document.body.innerHTML = el;

// 3. Nested
// HTML fragments bersarang

// const mhs = {
//   nama: 'Usein Akbar',
//   semester: 1,
//   mataKuliah: [
//     'Algoritma Pemrograman',
//     'Web Application Development',
//     'Sistem Enterprise',
//     'Struktur Data dan Basis Data'
//   ]
// }
//
// const cetakMatkul = (items) => {
//   return items.map( item => {
//     return (
//       `<li>${item}</li>`
//     )
//   }).join('');
//
// }
//
// const el = `<div>
// <h2>${mhs.nama}</h2>
// <p>Semester : ${mhs.semester}</p>
// <h3>Mata Kuliah :</h3>
// <ol>
//   ${cetakMatkul(mhs.mataKuliah)}
// </ol>
// </div>`;
//
// document.body.innerHTML = el;



const mhs = [
  {
    nama: 'Usein',
    semester: 2,
    mataKuliah: [
      'Algoritma Pemrograman',
      'Web Application Development'
    ]
  },
  {
    nama: 'Fandy',
    semester: 3,
    mataKuliah: [
      'Fisika Dasar',
      'Sistem Enterprise'
    ]
  },
  {
    nama: 'Jaka',
    semester: 5,
    mataKuliah: [
      'Algoritma Pemrograman',
      'Matematika Diskrit'
    ]
  },
  {
    nama: 'Yusuf',
    semester: 4,
    mataKuliah: [
      'Kalkulus',
      'Matematika Diskrit',
      'Fisika Komputasi'
    ]
  }
]

const uniqueVal = (items) => {
  let b = [];
  items.forEach( item => {
    item.mataKuliah.forEach( matkul => {
      b.push(matkul);
    })
  });
  return b;
}

// With flat method and return unique value
// const totalMatkul = (items) => {
//   let z = items.map( item => {
//     let a = item.mataKuliah.map( matkul => {
//       return matkul;
//     });
//
//     return a;
//   }).flat(Infinity);
//   const uniqueItem = [...new Set(z)];
//
//   return uniqueItem
// }

// const a = () => {
//   return totalMatkuls(mhs).map(item => {
//     return `<li>${item}</li>`
//   }).join('')
// }
// Without flat method and not return unique value
const totalMatkul = (items) => {

  return items.map( item => {
    let a = item.mataKuliah.map( matkul => {
      return matkul;
    });

    return a.length;
  }).reduce((a, b) => {
    return a+b;
  })
}

const cetakMatkul = (items) => {
  return items.map( item => {
    return (
      `<li>${item}</li>`
    )
  }).join('');
}





// setInterval(function () {
//   time(new Date());
// }, 1000);


const el = mhs.map( (item, i) => {

  return `<h2>${item.nama}</h2>
  <p>Semester : ${item.semester} (<em>semester ${item.semester % 2 === 0 ? 'genap' : 'ganjil'}</em>)</p>
  <h3>Mata kuliah :</h3>
  <ol>
    ${cetakMatkul(item.mataKuliah)}
  </ol>
  ${(i == mhs.length-1) ? '' : `<hr>`}`

}).join('');

document.body.innerHTML = `
<h2 class="clock"></h2>
${el}
<h2>Total mata kuliah ${mhs.length} mahasiswa :</h2>
<ul>
  <li>${totalMatkul(mhs)} mata kuliah : </li>
</ul>`;

const time = (date) => {
  const clockElement = document.querySelector('.clock');
  clockElement.innerHTML = `<em>${date.toLocaleTimeString().split('.').join(':')}</em>`;
  setTimeout(function () {
    time(new Date())
  }, 1000);

}
time(new Date());
