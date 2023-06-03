document.addEventListener('DOMContentLoaded', async function(){
    let NotFound = await axios.get('templates/404.html');
    let home = await axios.get('templates/home.html');
    let products = await axios.get('templates/products.html');
    let orders = await axios.get('templates/order.html');
    
    const data = {
        test: 'Hello',
        currentPath: window.location.hash,
        content: []
          
    }
   const Home = {
    template: home.data
   } 
   const Not_Found = {
    template: NotFound.data
   } 

   const Orders = {
    template: orders.data,
    methods: {
        getProducts(){
            db.collection('products').get().then( res => {
                this.$root.content = [];
             res.forEach( doc => {
                let prod = doc.data();
                prod.idefication = doc.id;
                this.$root.content.push(prod)
                })
            })
        }
    },
    mounted(){
        this.getProducts();
    }
   }

   const Products = {
    template: products.data,
    methods: {
        getProducts(){
            db.collection('products').get().then( res => {
                this.$root.content = [];
             res.forEach( doc => {
                let prod = doc.data();
                prod.idefication = doc.id;
                this.$root.content.push(prod)
                })
            })
        }
    },
    mounted(){
        this.getProducts();
    }
   }

 const routes = {
    '/': Home,
    '/not-found': Not_Found,
    '/products': Products,
    '/orders': Orders
 }



const app = {
    data(){
      return data
    },
    methods: {
        
    },
    components: {

    },
    computed: {
        currentView(){
            return routes[this.currentPath.slice(1) || '/' || Not_Found]
        }
    },
    mounted(){
        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash;
          })
          
    
    }
}
Vue.createApp(app).mount('#app')
})