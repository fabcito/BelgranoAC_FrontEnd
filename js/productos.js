const { createApp } = Vue;

createApp({
    data() {
        return {
            productos: [],
            url: 'https://kevincac.pythonanywhere.com/productos',
            error: false,
            cargando: true,
            imagen: "",
            nombre: "",
            precio: 0,
            talles: "",
            target: ""
        };
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    this.cargando = false;
                })
                .catch(err => {
                    console.error(err);
                    this.error = true;
                });
        },
        eliminar(id) {
            const url = `${this.url}/${id}`;
            var options = {
                method: 'DELETE',
            };
            fetch(url, options)
                .then(res => res.text())
                .then(res => {
                    alert('Registro Eliminado');
                    this.fetchData(this.url);
                })
                .catch(err => {
                    console.error(err);
                    alert('Error al eliminar el registro');
                });
        },
        grabar() {
            let producto = {
                imagen: this.imagen,
                nombre: this.nombre,
                precio: this.precio,
                talles: this.talles,
                target: this.target
            };

            var options = {
                body: JSON.stringify(producto),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            };

            fetch(this.url, options)
                .then(() => {
                    alert('Registro grabado');
                    window.location.href = './productos.html';
                })
                .catch(err => {
                    console.error(err);
                    alert('Error al grabar el registro');
                });
        }
    },
    created() {
        this.fetchData(this.url);
    }
}).mount('#app');
