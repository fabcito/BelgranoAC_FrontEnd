const { createApp } = Vue
createApp({
    data() {
      return {
        url: "https://kevincac.pythonanywhere.com/productos",
        datos: [],
        error: false,
      }
    },
    methods: {
      fetchData(url) {
        fetch(url)
          .then(response => response.json())
          .then(
            data => {
              console.log(data)
              this.datos = data
            }
          )
          .catch(error => {
            console.log("Error:" + error)
            this.error = true
          });
      }
    },
    created() {
        this.fetchData(this.url)
      }
      }).mount('#app')