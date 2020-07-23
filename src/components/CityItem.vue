<template>
  <li class="city-item">
    <span class="city" @click="$emit('get-city', city)">{{ city }}</span>
    <button @click.prevent="$emit('remove-city', city)" class="close">&#10006;</button>
  </li>
</template>

<script>
export default {
  props: ['city']
}
</script>

<style lang="scss">
  .city-item {
    position: relative;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .city {
    display: block;
    padding: 5px 30px 5px 20px;
    border: 2px solid #4682B4;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: #4682B4;
      color: #ffffff;
      transition: 0.3s ease-in-out;
    }
  }

  .close {
    position: absolute;
    top: 10px;
    right: 5px;
    font-size: 20px;
    line-height: 20px;
    color: rgb(129, 24, 24);
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      color: red;
    }
  }
</style>
