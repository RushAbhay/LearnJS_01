const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//   alert('Click');
// };

// btn.addEventListener('click', () => {
//   alert('Click');
// });

// btn.addEventListener('click', () => {
//   alert('Second Click');
// });

let i = 0;

const deleteElement = (e) => {
  console.log(e.target);
  console.log(e.type);
  // i++;
  // if (i == 1) {
  //   btn.removeEventListener('click', deleteElement);
  // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(item => {
  item.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
  event.preventDefault();

  console.log(event.target);
});