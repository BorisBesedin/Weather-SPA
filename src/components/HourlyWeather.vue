<template>
  <div class="hourly">
    <ul class="list" v-if="hourlyData.data">
      <HourlyItem v-for="(item, index) in hourlyData.data.slice(0, 24)"
                  :key="item.id"
                  v-bind:index="index"
                  v-bind:hourData="item"/>
    </ul>
  </div>
</template>

<script>
import HourlyItem from '../components/HourlyItem'
export default {
  props: ['hourlyData'],
  components: {
    HourlyItem
  }
}
</script>

<style lang="scss" scoped>
  .list {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
  }

  .description {
    opacity: 0.5;
    text-align: left;
  }

  @media (max-width: 680px) {
    .list {
      justify-content: center;
    }
  }
</style>
