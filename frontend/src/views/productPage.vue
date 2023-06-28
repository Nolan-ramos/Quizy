<template>
    <div>
      <span>PRODUCT PAGE</span>
      <ul>
        <li v-for="product in products" :key="product.id">
            <span>id = {{ product.id_product }}</span>
            <span>name = {{ product.name_product }}</span>
            <span>price = {{ product.price_product }}</span>
            <button @click="deleteProduct(product.id_product)">Supprimer</button>
            <button @click="editProduct(product)">Modifier</button>
            <div v-if="product.editingProduct" class="modal--produit">
                <div class="modal--produit--content">
                    <input v-model="product.name_product" type="name" placeholder="name" required>
                    <input v-model="product.price_product" type="price" placeholder="price" required>
                    <button @click="saveProduct(product)">Enregistrer</button>
                    <button @click="cancelEditProduct(product)">Annuler</button>
                </div>
            </div>
        </li>
      </ul>
    </div>
</template>
  
<script>
  
export default {
    name: 'productPage',
    data() {
      return {
        products: [],
      };
    },
    mounted() {
      this.getProducts();
    },
    methods: {
        getProducts(){
            this.$productFunctions.getProducts()
                .then(products => {
                    this.products = products;
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des produits:', error);
                });
        },
        deleteProduct(productsId) {
            this.$productFunctions.deleteProduct(productsId)
                .then(() => {
                    console.log('Produit supprimé avec succès');
                    // Mettre à jour la liste des utilisateurs après la suppression
                    this.getProducts();
                })
                .catch(error => {
                    console.error('Erreur lors de la suppression du produit :', error);
                });
        },
        editProduct(product) {
            product.editingProduct = true;
        },
        saveProduct(product) {
            console.log(product)
            this.$productFunctions.updateProduct(product.id_product, product.name_product, product.price_product)
                .then(() => {
                    console.log('produit mis à jour avec succès');
                    this.getProducts();
                    product.editingProduct = false;
                })
                .catch(error => {
                    console.error('Erreur lors de la mise à jour du produit:', error);
                });
        },
        cancelEditProduct(product) {
            this.getProducts();
            product.editingProduct = false;
        },
    }
};
</script>
  
<style lang="scss" scoped>
    .modal--produit{
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top:0;
        left:0;
        width:100%;
        height:100vh;
        background: rgba(0, 0, 0, 0.8);
        &--content{
            width:500px;
            height:400px;
            background: white;
            border-radius: 20px;
        }
    }
</style>
  