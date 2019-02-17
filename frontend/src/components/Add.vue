<template>
  <div>
    <div id="btn-div">
        <button @click="createOrder" id="btn">Создать покупку</button>
    </div>
    <div v-if="load_div" id="load-div">
      Создание...
    </div>
  </div>
</template>

<script>
import { uuid } from 'vue-uuid'
export default {
  name: 'Add',
  data (){
    return {
      load_div: false
    }
  },
  methods: {
    createOrder: function () {
      this.load_div = true
      let uuid_id = uuid.v1()
      let getway = this
      this.$store.dispatch('createOrder', {id: uuid_id})
      setTimeout(function () {
        getway.load_div = false
        getway.$router.push('/order/' + uuid_id)
      }, 1300)
    }
  }
}
</script>

<style scoped>
  #btn {
    background-color: #238d1b;
    border: 1px solid #58b33e;
    color: #e2e2e2;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    width: 100%;
    height:50px;
  }
  #btn-div {
    width: 100%;
  }
  #load-div {
    font-size: 30px;
    margin-left: -30px;
  }
</style>
