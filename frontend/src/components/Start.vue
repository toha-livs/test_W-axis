<template>
  <div>
    <h2>Покупки</h2>
      <div class="ordersList">
        <div class="order" v-for="order in orders" :id="order.id">
          <div @click="updateOrder(order.id)" class="shell">
          <div class="data1">{{ order.date }}</div>
          <div class="data2">
            <div class="Product" v-for="product in order.products">
              <h3>{{product.name}}</h3>
              <p>{{product.price}} грн</p>
            </div>
          </div>
          <div class="data3">{{order.sum_price}} грн</div>
          </div>
          <button @click="delOrder(order.id)" class="data4 button"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Start',
  computed: mapGetters(['orders']),
  methods: {
    updateOrder: function (OrderId) {
      this.$router.push('/order/' + OrderId)
    },
    delOrder: function (OrderId) {
      this.$store.dispatch('deleteOrder', OrderId)
    }
  },
  beforeMount () {
    this.$store.dispatch('getOrders')
  }
}
</script>

<style scoped>
  .data1, .data3, .data4 {
    width: 17%;
    display: inline-block;
  }
  .data2 {
    width: 64%;
    display: inline-block;
  }
  .Product {
    display: inline-block;
    width: auto;
    border: 1px solid #e4d3e6;
    padding: 0 3px;
    border-radius: 3px;
    margin: 0 5px;
  }
  .data4 {
    background-color: #ff685b;
    height: 50px;
    font-size: 32px;
    border: 1px solid #fd9393;
  }
  .order {
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    padding-bottom:10px;
  }
  .shell {
    display: inline-block;
    width: 80%;
  }
</style>
