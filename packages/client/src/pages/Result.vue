<template lang="pug">
  q-page.q-mt-xl
    .items-center.flex.justify-around
      .mainResult
        .title.q-mb-md Your Perspective
        .result Your perspective type is {{this.result.map(r => r.result).join('')}}
      .detailedResult
        .dimensions(v-for='dimension in dimensions')
          .row.col-12
            .dimension.col-4 {{dimension.left.name}} ({{dimension.left.symbol}})
            q-linear-progress(:value='0.5', :reverse='dimension.right.symbol === dimension.result').progress.col-4
            .dimension.col-4 {{dimension.right.name}} ({{dimension.right.symbol}})
</template>

<style lang='stylus'>
  .mainResult
    .title
      font-size 32px
    .result
      font-size 16px
  .dimensions
    width 600px
  .col-4
    padding 10px
    margin-top 20px
</style>

<script>
import api from '../boot/api'
import { mapGetters } from 'vuex'

export default {
  name: 'page-result',
  computed: {
    ...mapGetters('user', ['email', 'result'])
  },
  async mounted () {
    this.dimensions = await api.call('GET', '/dimensions')
    this.dimensions = this.dimensions.map((dimension) => {
      const result = this.result.find((r) => r.name === dimension.name).result
      return {
        ...dimension,
        result
      }
    })
  },
  data: function () {
    return {
      dimensions: []
    }
  }
}
</script>
