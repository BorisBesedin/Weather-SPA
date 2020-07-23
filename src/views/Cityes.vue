<template>
  <div class="about wrapper">
    <AddCity @add-city="addCity" />
    <CityList @get-data="getData" v-bind:cityes="cityes" @remove-city="removeCity" />
    <h2 class="city-name">{{ weather.title }}</h2>
    <p class="timezone">{{ weather.timezone }}</p>
      <div class="weather-info">
        <CurrentCity class="current" v-if="weather.weatherData.hourly" v-bind:weather="weather"/>
        <HourlyWeather class="hourlyList"
                       v-if="weather.weatherData.hourly"
                       v-bind:hourlyData="weather.weatherData.hourly"
                       v-bind:offset="weather.weatherData.offset"/>
      </div>
      <Loader class="loader" v-if="loading" />
  </div>
</template>

<script>
import Loader from '../components/Loader'
import AddCity from '../components/AddCity'
import CurrentCity from '../components/CurrentCity'
import HourlyWeather from '../components/HourlyWeather'
import CityList from '../components/CityList'
import { getWeatherData } from '../services/requests'
export default {
  props: [],
  data () {
    return {
      cityes: [],
      weather: {
        weatherData: {},
        title: 'City',
        timezone: 'timezone',
        temperature: 0,
        iconURL: 'icons/sunny.png'
      },
      loading: false
    }
  },
  components: {
    CurrentCity, HourlyWeather, CityList, Loader, AddCity
  },
  mounted () {
    if (localStorage.cityes) {
      this.cityes = JSON.parse(localStorage.cityes)
    }

    if (this.cityes[0] !== undefined) {
      this.getData(this.cityes[0])
    }
  },
  methods: {
    getData (city) {
      const geocoder = `https://geocode-maps.yandex.ru/1.x/?apikey=0f35a098-67cb-49e4-a28d-27b3cd6167d0&geocode=${city}&format=json&lang=en_RU`
      this.loading = true
      fetch(geocoder)
        .then(response => {
          return response.json()
        })
        .then(res => {
          const coords = res.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')
          const lat = coords[1]
          const long = coords[0]
          getWeatherData(lat, long)
            .then(data => {
              this.weather = {
                weatherData: data,
                title: city,
                timezone: data.timezone,
                temperature: data.currently.temperature,
                iconURL: `icons/${data.currently.icon}.png`
              }
              this.loading = false
            })
        })
        .catch(() => {
          alert('incorrect name')
          this.loading = false
        })
    },
    addCity (city) {
      this.cityes.push(city)
    },
    removeCity (city) {
      this.cityes = this.cityes.filter(item => item !== city)
    }
  },
  watch: {
    cityes: function () {
      localStorage.setItem('cityes', JSON.stringify(this.cityes))
    }
  }
}
</script>

<style lang="scss">
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

  .city-name {
    margin-top: 20px;
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
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
