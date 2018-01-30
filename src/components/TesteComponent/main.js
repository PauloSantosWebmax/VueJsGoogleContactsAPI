
import axios from 'axios'

export default {
  name: 'testeComponent',
  data () {
    return {
        config: {
          'client_id': '956798173942-13d26083frvglbtbrqmr3eu2au8426i1.apps.googleusercontent.com',
          'scope': 'https://www.google.com/m8/feeds'
        },
        googleContacts: null
    }
  },
  methods: {
    auth() {
        gapi.auth.authorize(this.config, () => {
           this.fetch(gapi.auth.getToken());
        });
    },
    formatContacts (data) {

      var importedContacts = []; 

      (data.feed.entry).forEach(function (i) {
        if (i.gd$email) {
          i.gd$email.forEach(function (j) {
            importedContacts.push({
              name: i.title.$t || 'unknown',
              email: j.address
            });
          });
        }
      });
      return importedContacts;
    },
    fetch (token) {

        let url = "https://www.google.com/m8/feeds/contacts/default/full?access_token=" + token.access_token + "&alt=json&max-results=999999999";

        axios.get(url).then(data => {
            this.googleContacts = this.formatContacts(data.data);
            this.sendDataToApi();
        }).catch(err => console.log(err));
    },
    importGoogleContacts () {
        this.auth();
    },
    sendDataToApi () {
        console.log(JSON.stringify(this.googleContacts, null, 4))
    }
  },
  created () {
    let t = document.createElement('script')
        t.async = 1;
        t.src = 'https://apis.google.com/js/client.js';

    let s = document.getElementsByTagName('script')[0];
        s.insertBefore(t, s.firstChild)
  }
}
