import makeButton from './button';
import makeImage from './makeImage';
import webpackLogo from './webpack-logo.jpeg';

const content = () => {
  const button = makeButton('My Awesome Button');

  const img = makeImage(webpackLogo);
  const main = document.createElement('main');
  main.appendChild(button);
  main.appendChild(img);
  return main;
};

export default content;
