<template lang='pug'>
  q-page.q-mx-xl.q-my-xl
    h4.title Discover your Perspective
    h6.subtitle Complete the 7 minutes test and get a detailed report of your lenses on the world
    .questions.flex-flex-center
      q-card(
        flat
        bordered
        v-for='(question, index) in questions'
        :key='question._id'
      ).q-my-md
        .column.flex.flex-center
          q-card-section.question {{question.text}}
          q-card-section.options
            .row.items-center
              .agree Agree
              q-radio(
                v-for='radio in [1, 2, 3, 4, 5, 6, 7]'
                :key='radio'
                :val='radio'
                v-model='form.ranks[index]'
              )
              .disagree Disagree

      q-card(flat, bordered)
        .column.flex.flex-center.email
          q-card-section Your email
          q-card-section
            q-input(outlined, v-model.trim='form.email')
      .column.flex.flex-center
        .error-area.q-mt-md
          .errors(v-if='$v.form.email.$error')
            .error(v-if='!$v.form.email.required') Email is required. Insert a valid email.
            .error(v-if='!$v.form.email.email') Invalid email format. Insert a valid email.
          .errors(v-if='$v.form.ranks.$error')
            .error Please give an answser to all questions.
        q-btn(label='Save & Continue', color='primary', @click='sendRanks').q-my-lg
</template>

<style lang='stylus'>
  .question
  .options
    font-size 18px
    .agree
      color $green-9
    .disagree
      color $red-8
  .email
    font-size 22px
  .error-area
    font-size 18px
    color $red-8
</style>

<script>
import api from '../boot/api'
import { mapActions } from 'vuex'
import { required, email, between } from 'vuelidate/lib/validators'

export default {
  name: 'page-index',
  async mounted () {
    this.questions = await api.call('GET', '/questions')
    this.form.ranks = Array(this.questions.length).fill(0)
  },
  methods: {
    ...mapActions('user', ['setResult', 'clearResult']),
    async sendRanks () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const questions = this.questions.map((question, index) => {
          return {
            ...question,
            rank: this.form.ranks[index]
          }
        })

        const data = {
          email: this.form.email,
          questions
        }

        await this.setResult(data)
        this.$router.push({ path: '/result' })
      }
    }
  },
  data: function () {
    return {
      questions: [],
      form: {
        ranks: [],
        email: undefined
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      ranks: {
        required,
        $each: {
          between: between(1, 7)
        }
      }
    }
  }
}
</script>
