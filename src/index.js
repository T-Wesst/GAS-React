import nav from './nav';
import { footer } from './footer';
import makeButton from './button';
import { makeColorStyle } from './button-styles';
import makeImage from './image';
import css from './footer.css';
import buttonStyle from './button.css';
import imageURL from './webpack-logo.jpg';

const button = makeButton('yay a button');
const image = makeImage(imageURL);

button.style = makeColorStyle('cyan');
document.body.appendChild(button);
document.body.appendChild(image);
document.body.appendChild(footer);

console.log(nav(), makeColorStyle('yellow'));
