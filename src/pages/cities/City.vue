<template>
<div>
  <cityHeader></cityHeader>
  <citySearch></citySearch>
  <cityList :cities="cities" :hotCities="hotCities"
  :letter="letter"></cityList>
  <cityAlphabet :cities="cities" @change="handleLetterChange"></cityAlphabet>
</div>
</template>

<script>
import cityHeader from './components/Header'
import citySearch from './components/Search'
import cityList from './components/List'
import cityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style scoped lang="stylus">

</style>
