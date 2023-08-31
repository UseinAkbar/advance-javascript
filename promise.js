// Ajax versi library external
// $.ajax({
//   url: `http://www.omdbapi.com/?apikey=2275af78&type=movie&s=taken`,
//   success: (res) => {
//     console.log(res.Search);
//   },
//   error: (err) => {
//     console.log(err.responseText);
//   }
// })

// Ajax versi vanilla javascript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       console.log(JSON.parse(xhr.response).Search)
//     } else if (xhr.status === 404) {
//       console.log(xhr);
//     }
//   }
// }
//
// xhr.open('get', `http://www.omdbapi.com/?apikey=2275af78&type=movie&s=taken`)
// xhr.send()

// fetch(`http://www.omdbapi.com/?apikey=2275af78&s=taken&type=movie`)
//   .then(res => res.json())
//   .then(res => console.log(res))


// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)

// keadaan
// --> states (fulfilled / rejected / pending)
// fungsi callback
// --> callback (resolve / reject / finally)
// aksi (yang akan dilakukan jika janjinya terpenuhi / tidak terpenuhi)
// --> then (jika resolve)
// --> catch (jika reject)


// contoh 1
// let ditepati = true
// const janji1 = new Promise((resolve, reject) => {
//   if(ditepati) {
//     resolve('Janji telah ditepati!')
//   } else {
//     reject('Ingkar janji..')
//   }
// })
// .then(res => console.log(`OK! ${res}`))
// .catch(res => console.log(`NOT OK! ${res}`))

// contoh 2
// let ditepati = true
// const janji2 = new Promise((resolve, reject) => {
//   if(ditepati) {
//     setTimeout(() => {
//       resolve('Ditepati setelah beberapa waktu!')
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject('Tidak ditepati setelah beberapa waktu!')
//     }, 2000);
//   }
// })

// console.log('mulai');
// janji2
//   .then(res => console.log(`OK! ${res}`))
//   .catch(res => console.log(`NOT OK! ${res}`))
//   .finally(() => console.log('selesai menunggu!'))
// console.log('selesai');
// console.log(janji2.then(() => console.log(janji2)))

// Promise.all()
// Untuk menjalankan lebih dari satu Promise secara bersamaan
const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
        judul: 'Taken',
        sutradara: 'Usein Akbar',
        aktor: 'Liam Nesson'
      }])
  }, 1000);
})

const cuaca = new Promise(resolve => {
    setTimeout(() => {
      resolve([{
        kota: 'Jakarta',
        temp: 30,
        kondisi: 'Mendung'
      }])
    }, 500);
})

// film.then(res => console.log(res))
// cuaca.then(res => console.log(res))

// Promise.all([film, cuaca])
//   .then(res => {
//     const [film, cuaca] = res
//     console.log(film);
//     console.log(cuaca);
//   })


  const omdb = new Promise((resolve, reject) => {
    $.ajax({
      url: `http://www.omdbapi.com/?apikey=2275af78&type=movie&s=taken`,
      success: (res) => {
        resolve(res.Search)
      },
      error: (err) => {
        reject(JSON.parse(err.responseText));
      }
    })
  })
  
  omdb
    .then(res => console.log(res))
    .catch(err => console.log(err.Error))
    .finally(() => console.log('Data diterima'))