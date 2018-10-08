import './footer.css';

const top = document.createElement('div');
top.innerText = 'top';
top.classList.add('top');

const bottom = document.createElement('div');
bottom.innerText = 'bottom';
bottom.classList.add('bottom');

const footer = document.createElement('footer');
footer.appendChild(top);
footer.appendChild(bottom);

export default footer;
