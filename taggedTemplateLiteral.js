// Tagged Templates
// const nama = 'Usein Akbar';
// const umur = 20;
// const tinggi = 166
//
// const test = (strings, ...values) => {
//   // let str = '';
//   // strings.forEach( (item, i) => {
//   //   str += `${item}${values[i] ? values[i] : ''}`; // atau values[i] || ''
//   // });
//   //
//   // return str;
//
//
//   return strings.reduce( (a, b, i) => {
//
//     return `${a}${b}${values[i] || ''}`
//   }, '');
//
// }
//
// const str = test `Halo, nama saya ${nama}. Umur saya ${umur}.`
// console.log(str);


// const a = [1,2,3,4];
// const b = () => {
//   return a.reduce( (a, b) => `${a}${b}`, ' ')
// }

// Highligt
const nama = 'Usein Akbar';
const umur = 20;
const email = 'useinakbar01@gmail.com';

const highlight = (strings, ...values) => {

  return strings.reduce( (a, b, i) => {
    if (i === values.length - 1) {
      return `${a}${b}<strong class="hl"><em>${values[i] || ''}</em></strong>`
    } else {
      return `${a}${b}<strong class="hl">${values[i] || ''}</strong>`
    }
  }, '');

}

const str = highlight `Halo, nama saya ${nama}. Umur saya ${umur}. Dan email saya ${email}.`;
console.log(str);
//document.querySelector('.display').innerHTML = `${str}`

// Kegunaan TAGGED TEMPLATE LITERAL
// 1. untuk menghighlight / memberi style secara spesifik pada suatu elemen HTML seperti pada contoh di atas
// 2. Escaping HTML tags (sanitasi) / menghindari adanya script atau karakter yang tidak diinginkan pada webpage kita --> ini memakai library khusus
// 3. Translation & Internationalization (alih bahasa / translate bahasa dari website kita) --> ini memakai library khusus
// 4. Styled components
