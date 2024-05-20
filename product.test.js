const { resetProducts, addProduct, getProduct, updateProduct, removeProduct, getProducts} = require('./product');

describe('addProduct', () => {
    it('should add two params, name and price', () => {
      const newProduct = {
        id: 1,
        name: 'producto1',
        price: 18
      };
      expect(addProduct('producto1', 18)).toStrictEqual(newProduct);
    });

    // comprobar si el producto existe y en ese caso devolver error
    it('should product exists return an error', () => {
      expect(() => addProduct('producto1', 18)).toThrow('Product exists already');
    });

    // comprobar si algún param no viene informado o definidio y lanzar  error
    it('shoud return an error if name or price are not value', () => {
      expect(() => addProduct('producto1', -1)).toThrow('Name and Price must be valid');
    });
  });


  describe('getProduct', () => {
    beforeEach(() => {
      resetProducts();
    });

    it('should get product', () => {
      const newProduct = {
        id: 1,
        name: 'producto1',
        price: 18
      };
      addProduct('producto1', 18);
      expect(getProduct(1)).toStrictEqual(newProduct);
    });

    it('should product not exists return an error', () => {
      expect(() => getProduct(2)).toThrow('Product not exists');
    });

    it('shoud return an error if id are not positive number', () => {
      expect(() => getProduct(-1)).toThrow('Id must be positive number');
    });
  });


  describe('updateProduct', () => {
    beforeEach(() => {
      resetProducts();
    });

    it('should get product', () => {
      const newProduct = {
        id: 1,
        name: 'producto2',
        price: 22.5
      };
      addProduct('producto1', 18);
      expect(updateProduct(1,'producto2', 22.5)).toStrictEqual(newProduct);
    });

    it('should product not exists return an error', () => {
      expect(() => updateProduct(1,'producto1', 18)).toThrow('Product not exists');
    });

    it('shoud return an error if name or price are not value', () => {
      expect(() => updateProduct(-1, 'producto1', 18)).toThrow('Id, Name and Price must be valid');
    });
  });

  describe('removeProduct', () => {
    beforeEach(() => {
      resetProducts();
    });

    it('should get product', () => {
      addProduct('producto1', 18);
      expect(removeProduct(1)).toBe(true);
    });

    it('should product not exists return an error', () => {
      expect(() => removeProduct(2)).toThrow('Product not exists');
    });

    it('shoud return an error if id are not positive number', () => {
      expect(() => removeProduct(-1)).toThrow('Id must be positive number');
    });
  });

  describe('getProducts', () => {
    beforeEach(() => {
      resetProducts();
    });

    it('should get all products', () => {
      const productsTest = [{  id: 1, name: 'producto1',  price: 18}, {id: 2, name: 'producto2', price: 2.5}];
      addProduct('producto1', 18);
      addProduct('producto2', 2.5);
      expect(getProducts()).toStrictEqual(productsTest);
    });

    it('should products are empty return an error', () => {
      expect(() => getProducts()).toThrow('Products are empty');
    });

  });


