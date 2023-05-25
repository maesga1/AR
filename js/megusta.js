const image = document.querySelector('img.gusta[src="./megusta.js/megusta.jpg"]');
const likeCount = document.querySelector('.like-count');

let count = 0;

image.addEventListener('click', () => {
  count++;
  likeCount.textContent = count;
});