document.addEventListener('DOMContentLoaded', async function(){
    let NotFound = await axios.get('templates/404.html');
    let home = await axios.get('templates/home.html');
    
    const data = {
        test: 'Hello',
        currentPath: window.location.hash
          
    }
   const Home = {
    template: home.data
   } 
   const Not_Found = {
    template: NotFound.data
   } 
 const routes = {
    '/': Home,
    '/NotFound': Not_Found
 }





const app = {
    data(){
      return data
    },
    methods: {
        getProducts(){
            db.collection('products').get().then( res => {
             res.forEach( doc => {
                let prod = doc.data();
                prod.idefication = doc.id;
                console.log(prod);
             })
            })
        }
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
          this.getProducts()
    
    }
}
Vue.createApp(app).mount('#app')
})