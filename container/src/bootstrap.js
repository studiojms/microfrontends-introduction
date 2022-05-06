import { mount as cartMount } from 'cart/CartShow';
import { mount as productsMount } from '../../products/src/bootstrap';

console.log('container');

productsMount(document.querySelector('#container-products'));
cartMount(document.querySelector('#container-cart'));
