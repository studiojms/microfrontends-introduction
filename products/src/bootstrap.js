import faker from 'faker';

const mount = (element) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();

    products += `<div>${name}</div>`;
  }

  element.innerHTML = products;
};

if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#dev-products');

  //assuming the container doesn't have an element with id 'dev-products'
  if (element) {
    //so, running in isolation
    mount(element);
  }
}

export { mount };
