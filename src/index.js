import './assets/styles/style.scss';
const helloElement = document.createElement('h1');
helloElement.innerText = 'Hello Webpack';
helloElement.classList.add('hello');
document.body.append(helloElement);