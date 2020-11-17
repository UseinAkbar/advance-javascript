// ambil semua elemen video
  const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
  let jsLanjutan = videos.filter( video => {
    return video.textContent.includes('JAVASCRIPT LANJUTAN');
  })
// ambil durasi masing" video
.map( item => {
  return (item.dataset.duration); // atau return (item.getAttribute('data-duration'));
})
// ubah durasi menjadi integer, ubah semua menit menjadi detik
.map( waktu => {
  const parts = waktu.split(':').map( part => parseInt(part));
  return (parts[0] * 60) + parts[1];
})
// jumlahkan semua detiknya tadi
.reduce((total, detik) => {
  return total + detik;
});

// ubah detiknya jadi jam:menit:detik
const jam = Math.floor(jsLanjutan / 3600);
jsLanjutan = jsLanjutan - (jam * 3600);
const menit = Math.floor(jsLanjutan / 60);
const detik = jsLanjutan - menit * 60;

// simpan di DOM
const pDurasi1 = document.querySelector('.total-durasi-1');
pDurasi1.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const jmlVideo1 = videos.filter( video => {
  return video.textContent.includes('JAVASCRIPT LANJUTAN');
}).length;
const pJmlVideo1 = document.querySelector('.jumlah-video-1').textContent = `${jmlVideo1} video`;


// durasi video selain JAVASCRIPT LANJUTAN
const otherVideos = Array.from(document.querySelector('ul').querySelectorAll('li'));
let otherVideosDuration = otherVideos.filter( video => {
  return !video.textContent.includes('JAVASCRIPT LANJUTAN');
})
.map( item => {
  return item.dataset.duration;
})
.map( waktu => {
  const parts = waktu.split(':').map( part => {
    return(parseInt(part));
  })

  return (parts[0] * 60 + parts[1]);
})
.reduce( (a, b) => {
  return a + b;
})

// format jam:menit:detik
const otherJam = Math.floor(otherVideosDuration / 3600);
otherVideosDuration = otherVideosDuration - (otherJam * 3600);
const otherMenit = Math.floor(otherVideosDuration / 60);
const otherDetik = otherVideosDuration - otherMenit * 60;

// simpan di DOM
const pDurasi2 = document.querySelector('.total-durasi-2');
pDurasi2.textContent = `${otherJam} jam, ${otherMenit} menit, ${otherDetik} detik`;

const JmlVideo2 =  otherVideos.filter( video => {
  return !video.textContent.includes('JAVASCRIPT LANJUTAN');
}).length;
const pJmlVideo2 = document.querySelector('.jumlah-video-2').textContent = `${JmlVideo2} video`;


// total video
const pTotalVid = document.querySelector('.total-video').textContent = `${jmlVideo1 + JmlVideo2} video`;
const pTotalDurasi = document.querySelector('.total-durasi').textContent = `${jam + otherJam} jam, ${menit + otherMenit} menit, ${detik + otherDetik} detik`;
