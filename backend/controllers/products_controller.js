const ProductModel = require('../models/products_model');

const ProductController = {
  getAllProducts: function(req, res) {
    ProductModel.getAll((err, products) => {
      if (err) {
        console.error('Erreur lors de la récupération des produits :', err);
        res.status(500).send('Erreur lors de la récupération des produits');
        return;
      }
      res.json(products);
    });
  },

  getProductById: function(req, res) {
    const productId = req.params.id;
    ProductModel.getById(productId, (err, product) => {
      if (err) {
        console.error('Erreur lors de la récupération du produit :', err);
        res.status(500).send('Erreur lors de la récupération du produit');
        return;
      }
      if (!product) {
        res.status(404).send('Produit non trouvé');
        return;
      }
      res.json(product);
    });
  },

  deleteProduct: function(req, res) {
    const productId = req.params.id;
    ProductModel.deleteProduct(productId, (err, result) => {
      if (err) {
        console.error('Erreur lors de la suppression du produit :', err);
        res.status(500).send('Erreur lors de la suppression du produit');
        return;
      }
      res.json(result);
    });
  },

  createProduct: function(req, res) {
    const { name, price } = req.body;
    ProductModel.createProduct(name, price, (err, result) => {
      if (err) {
        console.error('Erreur lors de la création du produit :', err);
        res.status(500).send('Erreur lors de la création du produit');
        return;
      }
      res.json(result);
    });
  },

  updateProduct: function(req, res) {
    const productId = req.params.id;
    const { name, price } = req.body;
    ProductModel.updateProduct(productId, name, price, (err, result) => {
      if (err) {
        console.error('Erreur lors de la mise à jour du produit :', err);
        res.status(500).send('Erreur lors de la mise à jour du produit');
        return;
      }
      res.json(result);
    });
  }
};

module.exports = ProductController;
