<template>
    <div>
      <span>PRODUCT PAGE</span>
      <ul>
        <li v-for="product in products" :key="product.id">
            <span>id = {{ product.id_product }}</span>
            <span>name = {{ product.name_product }}</span>
            <span>price = {{ product.price_product }}</span>
            <button @click="deleteProduct(product.id_product)">Supprimer</button>
            <div class="modal--produit">
                <div class="modal--produit--content">
                    <input v-model="name" type="name" placeholder="name" required>
                    <input v-model="price" type="price" placeholder="price" required>
                    <button @click="updateProduct">Modifier le produit</button>
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
        name: '',
        price: ''
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
        background: rgba(0, 0, 0, 0.5);
        &--content{
            width:500px;
            height:400px;
            background: white;
            border-radius: 20px;
        }
    }
</style>
  