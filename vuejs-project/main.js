Vue
  .createApp({
    data() {
      return {
        text1: 'Edit me!'
      }
    }
  })
  .mount('#editable')

Vue
  .createApp({
    data() {
      return {
        text2: 'Tech.io Vue.js Template'
      }
    },
    methods: {
      reverseMessage: function () {
        this.text2 = this.text2.split('').reverse().join('')
      }
    }
  })
  .mount('#reverse')
