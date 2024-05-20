

let products = [];
let id = 1;


function resetProducts() {
  products = [];
  id = 1;
}


function addProduct(name, price) {

  if (!isValidName(name) || !isValidPrice(price)) {
    throw new Error('Name and Price must be valid');
  }

  const newProduct = {
    id: id ,
    name: name,
    price: price
  };
  
  const product = products.find((p) => p.name === name && p.price === price);
  if (product) {
    throw new Error('Product exists already');
  }
  else {
    products.push(newProduct);
    id++;
  }

  return newProduct;
}

function getProduct(id) {

  if (!isValidId(id)) {
    throw new Error('Id must be positive number');
  }
  
  const product = products.find((p) => p.id === id);

  if (product === undefined || product === null) {
    console.log(product);
    throw new Error('Product not exists');
  }
  return product;

}

function updateProduct(id, name, price) {

  if (!isValidId(id) || !isValidName(name) || !isValidPrice(price)) {
    throw new Error('Id, Name and Price must be valid');
  }
  const product = products.find((p) => p.id === id);

 if (product === undefined || product === null) {
    throw new Error('Product not exists');
  }
  return { ...product, name, price };
}

function removeProduct(id) {

  if (!isValidId(id)) {
    throw new Error('Id must be positive number');
  }
  const productEncontrado = products.findIndex((p) => p.id === id);

  if (productEncontrado === -1) {
    throw new Error('Product not exists');
  }
  
  products.splice(productEncontrado, 1);
  id++;

  return true;
}

function getProducts() {
  console.log(products);
  if (products === undefined || products === null || products.length <= 0 ) {
    throw new Error('Products are empty');
  }
  return products;

}


function isValidName(name)
{
  let bRes = false;
  if (name !== null && name !== undefined && name !== '' ) {
    bRes = true; 
  }
  return bRes;
}

function isValidPrice(price)
{
  let bRes = false;
  if (price !== null && price !== undefined && price >= 0) {
    bRes = true; 
  }
  return bRes;
}

function isValidId(id)
{
  let bRes = false;
  if (id !== null && id !== undefined && id > 0) {
    bRes = true; 
  }
  return bRes;
}


module.exports = {
    resetProducts,  addProduct, getProduct, updateProduct, removeProduct, getProducts
  };



/*
  console.log("resultado: "+addProduct('product1', 18.5));
  console.log(products);
  console.log("resultado: "+  getProduct(1));
  console.log("resultado: "+  getProduct(2));
*/