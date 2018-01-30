
export default {
  data () {
    return {
      googleSignInParams: {
        client_id: '956798173942-13d26083frvglbtbrqmr3eu2au8426i1.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    onSignInSuccess (googleUser) {
      const profile = googleUser.getBasicProfile()
      console.log(profile) 
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
}
