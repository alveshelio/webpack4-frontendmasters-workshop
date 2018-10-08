const nav = document.createElement('nav');
const navUl = document.createElement('ul');
const liHome = document.createElement('li');
const liAbout = document.createElement('li');
const liContact = document.createElement('li');
liHome.innerText = 'Home';
liAbout.innerText = 'About';
liContact.innerText = 'About';
navUl.appendChild(liHome);
navUl.appendChild(liAbout);
navUl.appendChild(liContact);
nav.appendChild(navUl);

export default nav;
