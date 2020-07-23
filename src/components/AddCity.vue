<template>
  <form class="form" @submit.prevent="onSubmit">
    <input class="text-input" type="text" v-model="title" maxlength="20" placeholder="enter city" />
    <button class="add" type="submit">add</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.title !== '') {
        const city = this.title
        this.$emit('add-city', city)
        this.title = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  margin-top: 20px;
  width: 300px;
}
.text-input {
  border: none;
  border-bottom: 2px solid #666666;
  padding: 10px;
  font-size: 18px;
  width: 100%;
}
.add {
  position: absolute;
  top: 20px;
  padding: 5px;
  right: 15px;
  font-size: 18px;
  font-weight: bold;
  background: transparent;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    color: #4682B4;
  }
}
</style>
