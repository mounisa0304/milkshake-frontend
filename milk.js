const textElements = document.querySelectorAll('.ice-cream-cone h1');

textElements.forEach((textEl, index) => {
  textEl.style.animation = `textColorChange ${index * 0.5}s ease-in-out infinite alternate`;
});

const textColorChange = `
  from { color: #fff; }
  to { color: #f0f0f0; }
`;

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('page-content').classList.add('loaded');
});


