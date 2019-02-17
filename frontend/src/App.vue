<template>
    <div>
        <div id="top">
          <Add/>
        </div>
        <div>
            <Start/>
        </div>
    </div>
</template>

<script>
  import Add from './components/Add'
  import Start from './components/Start'
    export default {
        name: "App",
        components: {
          Add,
          Start
        }
    }
</script>


<style scoped>
  #top {
    padding: 90px;
    height: 200px;
    width: 20%;
    margin-left: 40%;
  }
</style>
