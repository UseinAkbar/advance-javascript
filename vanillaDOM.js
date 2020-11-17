const text = [
  'First ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Second ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Third ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
];

const longText = `${text}`;
const shortText = `${text.slice(0, 250)} ...`;
// document.querySelector('.text').innerHTML = `${shortText}`;

const allText = text.map( (item, i) => {
  return `<div class="paraphBox"><p class="text short">${item.slice(0, 220)}...</p><span>Read more</span></div>${i === text.length - 1 ? '' : '<br><br>'}`
}).join('');

document.body.innerHTML = allText;

// const change = () => {
//   let text = document.querySelector('.text')
//   if (text.classList.contains('short')) {
//     text.innerHTML = longText;
//     document.querySelector('span').textContent = 'Hide'
//   } else {
//     text.innerHTML = shortText;
//     document.querySelector('span').textContent = 'Read more'
//   }
//   text.classList.toggle('long')
//   text.classList.toggle('short')
// }
const paraph = document.querySelectorAll('.text')

document.querySelectorAll('span').forEach( (item, i) => {
  item.addEventListener('click', () => {
    if (paraph[i].classList.contains('short')) {
      paraph[i].innerHTML = text[i];
      item.textContent = 'Hide'
    } else {
      paraph[i].textContent = `${text[i].slice(0, 220)}...`;
      item.textContent = 'Read more'
    }
    paraph[i].classList.toggle('long');
    paraph[i].classList.toggle('short');
  })
});
