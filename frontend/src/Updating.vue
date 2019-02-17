<template>
    <div>
      <router-link to="/" id="btn-back">Назад</router-link>
      <div id="add-all">
        <div id="added">
          <label>Добавленные</label>
          <div class="added-list" v-for="shopping in shoppings" :id="shopping.id">
            <div class="parter1">
              <h3>{{ shopping.name }}</h3>
              <p>{{ shopping.price }}</p>
            </div>
            <div class="parter2">
              <div >
                <i @click="deleteProduct(shopping)" class="fas fa-trash-alt"></i>
              </div>
            </div>
          </div>
        </div>
        <div id="add">
          <label>Все продукты</label>
          <div class="add-list" v-for="product in products">
            <div class="parter1">
              <h3>{{ product.name }}</h3>
              <p>{{ product.price }}</p>
            </div>
            <div class="parter2">
              <div >
                <i @click="addProduct(product)" class="fas fa-plus-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Updating',
  computed: mapGetters(['products', 'shoppings']),
  methods: {
    addProduct: function (ProductObj) {
      this.$store.dispatch('createShopping', {'product': ProductObj.id, 'order': this.$route.params.id})
    },
    deleteProduct: function (ShoppingObj) {
      this.$store.dispatch('deleteShopping', ShoppingObj.id)
    }
  },
  beforeMount () {
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getShoppings', this.$route.params.id)
  }
}
</script>

<style scoped>
  #btn-back {
    width: 20%;
    height: 50px;
    color: aliceblue;
    font-size: 28px;
    display: block;
    background-color: #5f8aff;
    border-radius: 0 0 5px 0 ;
  }
  #added, #add {
    min-height: 100px;
    display: inline-block;
    width: 47.7%;
    background-color: beige;
    margin: 20px 1%;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    vertical-align: top;
    padding: 0 10px;
  }

  #add label, #added label{
    font-size: 25px;
  }
  #add-all {
    margin-top:15px;
    background-color: aliceblue;
  }
  .add-class {
    display: block;

  }
  .added-list, .add-list {
    margin-top:15px;
    background-color: burlywood;
    border-radius: 5px;
    padding: 3px 5px;

  }
  .parter1 {
    width: 70%;
    display: inline-block;
    vertical-align: top;
  }
  .parter2 {
    width: 29%;
    display: inline-block;
    vertical-align: top;
  }
  .parter2 div {
    height:49px;
    font-size: 58px;
  }
</style>
