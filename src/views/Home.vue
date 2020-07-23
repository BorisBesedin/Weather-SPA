<template>
  <div class="home wrapper">
    <h2 class="location">Your location</h2>
    <h3 class="name">{{weather.title}}</h3>
    <p class="timezone">{{weather.timezone}}</p>
    <div class="weather-info">
      <CurrentCity class="current" v-if="weather.weatherData.hourly" v-bind:weather="weather"/>
      <HourlyWeather class="hourlyList" v-if="weather.weatherData.hourly" v-bind:hourlyData="weather.weatherData.hourly"/>
    </div>
    <Loader class="loader" v-if="loading" />
  </div>
</template>

<script>
import Loader from '../components/Loader'
import CurrentCity from '../components/CurrentCity'
import HourlyWeather from '../components/HourlyWeather'
import { getWeatherData } from '../services/requests'
export default {
  name: 'Home',
  data () {
    return {
      weather: {
        weatherData: {},
        title: 'City',
        timezone: 'timezone',
        temperature: 0,
        iconURL: 'icons/sunny.png'
      },
      loading: true
    }
  },
  components: {
    CurrentCity, Loader, HourlyWeather
  },
  mounted () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.long = position.coords.longitude
        this.lat = position.coords.latitude

        const geocoder = `https://geocode-maps.yandex.ru/1.x/?apikey=0f35a098-67cb-49e4-a28d-27b3cd6167d0&geocode=${this.long}, ${this.lat}&format=json&lang=en_RU`

        fetch(geocoder)
          .then(response => {
            return response.json()
          })
          .then(res => {
            getWeatherData(this.lat, this.long)
              .then(data => {
                this.weather = {
                  weatherData: data,
                  title: res.response.GeoObjectCollection.featureMember[0].GeoObject.description,
                  timezone: data.timezone,
                  temperature: data.currently.temperature,
                  iconURL: `icons/${data.currently.icon}.png`
                }
                this.loading = false
              })
          })
          .catch(() => {
            alert('somethings wrong')
          })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .name {
    margin-top: 20px;
    font-size: 24px;
    line-height: 28px;
    max-width: 500px;
  }

  .location {
    font-size: 26px;
    line-height: 30px;
    text-align: left;
    color: #666666;
    opacity: 0.4;
  }

  .timezone {
    font-size: 16px;
    line-height: 20px;
    opacity: 0.5;
    margin-top: 10px;
  }

  .weather-info {
    display: flex;
    width: 100%;
  }

  .hourlyList {
    margin-left: 20px;
    margin-top: 20px;
    flex-grow: 1;
  }

  .current {
    margin-top: 30px;
  }

  @media (max-width: 680px) {
    .weather-info {
      flex-direction: column;
      align-items: center;
    }

    .hourlyList {
      margin-left: 0;
    }
  }
</style>
