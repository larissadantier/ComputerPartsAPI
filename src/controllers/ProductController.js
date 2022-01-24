let products = require('../mocks/products');

module.exports = {
  listProducts(request, response) {
    const { order } = request.query;

    const sortedProducts = products.sort((a, b) => {
      if (order === 'desc'){
        return a.id < b.id ? 1 : -1;
      };

      return a.id > b.id ? 1 : -1;
    }) ;

    response.send(200, sortedProducts)
  },
  getProductById(request, response) {
    const { id } = request.params; 

    const product = products.find(product => product.id === Number(id));

    if(!product) {
      return response.send(400, {error: 'Product Not Found ❌'})
    }

    response.send(200, product);
  },

  createProduct(request, response){
    const body = request.body;

    const lastProductId = products[products.length - 1].id;

    const newProduct = {
      id: lastProductId + 1,
      category: body.category,
      name: body.name,
      brand: body.brand,
      memory: body.memory,
      dram: body.dram,
      price: body.price,
      }

      products.push(newProduct);

      response.send(200, newProduct);
  },
  updateProduct(request, response){
    let { id } = request.params;
    const { category, name, brand, memory, dram, price } = request.body;

    id = Number(id);

    const productExists = products.find((product) => product.id === id);

    if(!productExists) {
      return response.send(404, {error: 'Product Not Exists ❌'})
    }

    products = products.map((product) => {
      if(product.id === id) {
        return {
          ...product,
          category,
          name,
          brand,
          memory,
          dram,
          price
        };
      };

      return product;
    })

    response.send(200, {id, category, name, brand, memory, dram, price});

  },
  deleteProduct(request, response){
    let { id } = request.params;
    id = Number(id);

    products = products.filter((product) => product.id !== id);

    response.send(200, { deleted: 'Product successfully deleted ✔'});
  },
} 