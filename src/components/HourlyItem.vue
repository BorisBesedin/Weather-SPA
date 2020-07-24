<template>
  <li class="hour-item">
    <span class="time">{{getHours(hourData.time)}}:00</span>
    <span class="temperature">{{ Math.floor(hourData.temperature) }} &#8451;</span>
    <img class="icon" v-bind:src="getIcon(this.hourData.icon)" alt="icon" width="40" height="40">
  </li>
</template>

<script>
export default {
  props: ['hourData', 'offset'],
  methods: {
    getHours: function (time) {
      let hours = new Date(this.hourData.time * 1000).getUTCHours() + this.offset
      if (hours > 23) {
        hours = hours - 24
      }
      if (hours < 0) {
        hours = 24 + hours
      }
      return hours
    },
    getIcon: function (icon) {
      return `icons/${icon}.png`
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
