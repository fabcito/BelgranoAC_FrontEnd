console.log(location.search)
var id=location.search.substr(4)
console.log(id)
const { createApp } = Vue
  createApp({
    data() {
      return {
        id: 0,
            imagen: "",
            nombre: "",
            precio: 0,
            talles: "",
            target: "",
            url: 'https://kevincac.pythonanywhere.com/productos/'+id,
       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id = data.id
                    this.imagen = data.imagen
                    this.nombre = data.nombre
                    this.precio = data.precio
                    this.talles = data.talles
                    this.target = data.target                    
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        modificar() {
            let producto = {
                imagen: this.imagen,
                nombre: this.nombre,
                precio: this.precio,
                talles: this.talles,
                target: this.target
            }
            var options = {
                body: JSON.stringify(producto),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./productos.html";        
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')
