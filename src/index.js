import nav from './nav';
import makeButton from './button';
import { makeColorStyle } from './button-styles';
import makeImage from './image';
import css from './footer.css';
import buttonStyle from './button.css';
import imageURL from './webpack-logo.jpg';
// import { footer } from './footer';
const loadFooter = () => import('./footer');

const button = makeButton('yay a button');
const image = makeImage(imageURL);

button.addEventListener('click', (e) => {
  loadFooter().then((module) => {
    document.body.appendChild(module.footer);
  });
});

button.style = makeColorStyle('cyan');
document.body.appendChild(button);
document.body.appendChild(image);

console.log(nav(), makeColorStyle('yellow'));
