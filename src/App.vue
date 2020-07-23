<template>
  <div id="app">
    <div class="header">
      <h1 class="title">What's the weather?</h1>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/cityes">Cityes</router-link>
      </div>
    </div>
    <router-view class="content"/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Baloo Da 2', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #333333;
    }
  }
}

.header {
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4682B4;
}

.wrapper {
  width: 96%;
  max-width: 960px;
  margin: 0 auto;
}

.title {
  font-size: 40px;
  line-height: 44px;
  color: #ffffff;
}

.content {
  margin-top: 40px;
}

@media (max-width: 680px) {
  .header {
    flex-direction: column;
    align-items: center;
  }
}
</style>
