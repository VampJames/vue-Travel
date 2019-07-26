<template>
<div>
  <citiHeader></citiHeader>
  <citiSearch></citiSearch>
</div>
</template>

<script>
import citiHeader from './components/Header'
import citiSearch from './components/Search'
export default {
  name: 'City',
  components: {
    citiHeader,
    citiSearch
  }
}
</script>

<style scoped lang="stylus">

</style>
