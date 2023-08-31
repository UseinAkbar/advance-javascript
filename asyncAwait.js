// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai');
//     }, 2000)
// })

// coba.then(res => console.log(coba))

const cobaPromise = () => {
    const waktu = 2000
    return new Promise((resolve, reject) => {
        if(waktu < 3000) {
            setTimeout(() => {
                resolve('selesai');
            }, waktu)
        } else {
            reject('kelamaan!');
        }
    })
}

// const coba = cobaPromise()
// coba
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// Async berguna untuk menjalankan code yg asynchronous di dalam code yg synchronous, sehingga di dalam bloknya harus ditambahkan await. Await Ini berguna agar promise tsb ditunggu dahulu sampai resolve / reject baru baris setelahnya akan dijalankan
// jika menggunakan async await, maka resolvenya akan dihandle oleh blok try dan rejectnya akan dihandle oleh blok catch()

// DENGAN ASYNC AWAIT
async function cobaAsync() {
    try {
        const coba = await cobaPromise()
        console.log(coba);
    } catch(err) {
        console.error(err);
    }
}

// TANPA ASYNC AWAIT
// function cobaAsync() {
//     const coba = cobaPromise()
//     coba.then(res => console.log(res))
//         .catch(err => console.log(err))
//         .finally(() => console.log('selesai menunggu'))
// }

cobaAsync()

const fetchData = () => {
   return new Promise((resolve, reject) => {
    $.ajax({
        url: `http://www.omdbapi.com/?apikey=227af78&type=movie&s=tinsdvdstin`,
        success: (res) => {
            resolve(res.Search)
        },
        error: (err) => {
            reject(err.responseJSON.Error);
        }
  })
   })
}

async function movie() {
    try {
        const data = await fetchData()
        console.log(data);
    } catch (err) {
        alert(err);
    }
}

movie()