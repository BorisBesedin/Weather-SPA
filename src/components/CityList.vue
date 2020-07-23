<template>
  <div>
    <ul class="city-list">
      <CityItem v-for="city in cityes"
                :key="city.id"
                v-bind:city="city"
                @get-city="getCityData"
                @remove-city="removeCity" />
    </ul>
  </div>
</template>

<script>
import CityItem from '../components/CityItem'
export default {
  props: ['cityes'],
  data () {
    return {
      cityList: [

      ]
    }
  },
  components: {
    CityItem
  },
  methods: {
    getCityData (city) {
      this.$emit('get-data', city)
    },
    removeCity (city) {
      this.$emit('remove-city', city)
    }
  }
}
</script>

<style lang="scss" scoped>
  .city-list {
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
</style>
