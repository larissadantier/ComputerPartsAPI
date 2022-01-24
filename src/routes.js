const ProductController = require('./controllers/ProductController');

module.exports = [
  {
    endpoint: '/products',
    method: 'GET',
    handler: ProductController.listProducts,
  },
  {
    endpoint: '/products/:id',
    method: 'GET',
    handler: ProductController.getProductById,
  },
  {
    endpoint: '/products',
    method: 'POST',
    handler: ProductController.createProduct,
  },
  {
    endpoint: '/products/:id',
    method: 'PUT',
    handler: ProductController.updateProduct,
  },
  {
    endpoint: '/products/:id',
    method: 'DELETE',
    handler: ProductController.deleteProduct,
  },
];