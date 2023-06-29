<template>
    <div class="view">
        <span class="view__title">PRODUCT PAGE</span>
        <div class="form form_create_user">
            <span>PRODUCT CREATE</span>
            <input class="input" v-model="name" type="email" placeholder="email" required>
            <input class="input" v-model="price" type="number" placeholder="price" required>
            <button class="button" @click="createUser">Créer un produit</button>
        </div>
        <ul class="element_list">
            <li class="element" v-for="product in products" :key="product.id">
                <div class="element_info">
                    <span>id = {{ product.id_product }}</span>
                    <span>name = {{ product.name_product }}</span>
                    <span>price = {{ product.price_product }}</span>
                </div>
                <div class="element_buttons">
                    <button class="button" @click="deleteProduct(product.id_product)">Supprimer</button>
                    <button class="button" @click="editProduct(product)">Modifier</button>
                </div>
                <div v-if="product.editingProduct" class="modal--produit">
                    <div class="form modal--produit--content">
                        <span>PRODUCT EDIT</span>
                        <input class="input" v-model="product.name_product" type="name" placeholder="name" required>
                        <input class="input" v-model="product.price_product" type="price" placeholder="price" required>
                        <button class="button" @click="saveProduct(product)">Enregistrer</button>
                        <button class="button" @click="cancelEditProduct(product)">Annuler</button>
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
            price: null
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
        createUser() {
            this.$productFunctions.createProduct(this.name, this.price)
                .then(() => {
                    console.log('produit créé avec succès');
                    this.getProducts();
                })
                .catch(error => {
                    console.error('Erreur lors de la création du produit:', error);
                });
        },
        deleteProduct(productsId) {
            this.$productFunctions.deleteProduct(productsId)
                .then(() => {
                    console.log('Produit supprimé avec succès');
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
    }
    .form_create_user{
        margin:24px 0;
    }
</style>
