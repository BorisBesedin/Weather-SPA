<template>
  <div class="current-city">
    <p class="description" v-if="weather.weatherData.hourly">{{weather.weatherData.hourly.summary}}</p>
    <img class="icon" width="75" height="75" alt="icon" :src="weather.iconURL">
    <span class="temperature">{{ Math.floor(weather.temperature) }} &#8451;</span>
    <span>{{weather.weatherData.currently.summary}}</span>
    <span>pressure: {{weather.weatherData.currently.pressure}}</span>
    <span>wind speed: {{weather.weatherData.currently.windSpeed}}</span>
  </div>
</template>

<script>
export default {
  props: ['weather']
}
</script>

<style lang="scss" scoped>
.description {
  font-size: 18px;
  line-height: 22px;
}

.current-city {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 280px;
  max-height: 350px;
  padding: 20px;
  border: 3px solid #4682B4;
  border-radius: 10px;
}

.icon {
  margin-top: 20px;
}

.temperature {
  margin-top: 20px;
  font-size: 36px;
  line-height: 40px;
}
</style>
