import nav from './nav';
import { top, bottom } from './footer';
import makeButton from './button';
import { makeColorStyle } from './button-styles';

console.log(
  nav(),
  top,
  bottom,
  makeButton('my first button'),
  makeColorStyle('yellow')
);
