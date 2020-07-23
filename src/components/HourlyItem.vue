<template>
  <li class="hour-item">
    <span class="time">{{getHours(hourData.time)}}:00</span>
    <span class="temperature">{{ Math.floor(hourData.temperature) }} &#8451;</span>
    <img class="icon" v-bind:src="this.iconURL" alt="icon" width="40" height="40">
  </li>
</template>

<script>
export default {
  props: ['hourData', 'index'],
  data () {
    return {
      iconURL: `icons/${this.hourData.icon}.png`
    }
  },
  methods: {
    getHours: function (time) {
      let hours = new Date().getHours() + this.index

      if (hours >= 24) {
        hours -= 24
      }
      if (hours < 10) {
        hours = '0' + hours
      }
      return hours
    }
  }
}
</script>

<style lang="scss">
  .hour-item {
    padding: 10px;
    width: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #4682B4;
    border-radius: 10px;
    margin-right: 5px;
    margin-bottom: 5px;
  }

  .time {
    font-size: 14px;
    line-height: 18px;
    opacity: 0.5;
    align-self: end;
  }

  .temperature {
    margin-top: 10px;
    font-size: 18px;
    line-height: 20px;
  }
</style>
