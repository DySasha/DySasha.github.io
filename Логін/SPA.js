

document.addEventListener('DOMContentLoaded', async function(){
   let user_id = new URL(window.location.href).searchParams.get('id');
   let not_found = await axios.get('templates/404.html');
   let home =     await axios.get('templates/home.html');
   let products = await axios.get('templates/products.html');
   let profile = await axios.get('templates/profile.html');
   


   const data = {
       test: 'Привіт',
       currentPath: window.location.hash,
       content: []
   }


   const Home = {
       template: home.data
   }


   const NotFound = {
       template: not_found.data
   }


   const Products = {
       template: products.data,
       methods: {
           getProducts(){
               db.collection('products').get().then(res => {
                   this.$root.content = [];
                 res.forEach( doc => {
                   let prod = doc.data();
                   prod.id = doc.id;
                   this.$root.content.push(prod)
                                 })
                                 
               })
           }
       },
       mounted(){
           this.getProducts();
       }
   }
   const Profile = { template: profile.data,
   methods: {
       GetUserInformation(){
        db.collection('Reg_TestV').doc(user_id).get().then(res => {
            console.log(res.data())
        })
       }
   },
}
   const routes = {
       '/home': Home,
       '/not-found': NotFound,
       '/products' : Products,
       '/profile' : Profile
       
   }








   const app = {
       data(){
           return data
       },
       methods: {
          SignOut(){
            firebase.auth().signOut().then(() => {
               
              }).catch((error) => {
                
              });
              localStorage.clear('login')
              setTimeout(function(){
                window.location.href = `index.html`
              }, 1000);
          }
       },
       components: {
           
       },
       computed: {
           currentView(){
               return routes[this.currentPath.slice(1) || '/' || NotFound]
               console.log(this.currentPath.slice(1))
               console.log(this.currentPath)
           }
       },
       mounted(){
           window.addEventListener('hashchange', () => {
               this.currentPath = window.location.hash;
               console.log('hash change')
           });
           


       }
   }
   Vue.createApp(app).mount('#TestApp')
})








































/*function vyvid(id){
     db.collection('Reg_TestV').doc(id).get().then(res =>{
        console.log(res)
     })
}
vyvid(user_id)*/