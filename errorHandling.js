// ERROR HANDLING

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

//1. With common Promise
const coba = cobaPromise()
coba.then(res => console.log(res))
    .catch(err => console.log(err))

//2. With async await
async function cobaAsync() {
    try {
        const coba = await cobaPromise()
        console.log(coba);
    } catch(err) {
        console.error(err);
    }
}

//3. With fetch
async function fetchMovie() {
    try {
        const movies = await getMovies()
        console.log(movies);
    } catch (err) {
        alert(err)
    }
}
function getMovies() {
    console.log('mulai');
    return fetch(`http://www.omdbapi.com/?apikey=2275af78&s=tintin&type=movie`)
      .then(response => {
        if(!response.ok) {
          throw new Error(response.statusText)
        } else {
          return response.json()
        }
      })
      .then(response => {
        if(response.Response === 'False') {
          throw new Error(response.Error)
        } else {
          return response.Search
        }
      })
      .finally(() => console.log('selesai'))
  }