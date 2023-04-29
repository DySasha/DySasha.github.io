





document.addEventListener('DOMContentLoaded', async function(){
    let card_template = await axios.get("card.html");


const data = {
    message: 'Привіт',
    products: []
};


const CardCom = {
    props: ['product'],
    template: card_template.data,
    methods: {
        countTotalPrice(){
            let preOrderPrice = 0;
            let fastDeliveryPrice = 0;
            let productsPrice = this.product.price * this.product.count
            if(this.product.preOrder){
                preOrderPrice = productsPrice * 0.05;
            }
            if(this.product.fast){
                fastDeliveryPrice = productsPrice  * 0,1;
            }
            this.product.TotalPrice = productsPrice - preOrderPrice + fastDeliveryPrice;
            console.log(productsPrice)
        }
    }
}




const drawProducts = {
    data(){
        return data
    },
    methods: {
        getProducts(Kategotia){
            this.product = []
            db.collection(Kategotia).get().then(res =>{


                res.forEach(doc => {
                    let product = doc.data();
                    product.id = doc.id;
                    this.products.push(product)
                   
                })
            })
           
        }
    },
    components: {
        'card': CardCom
    },
    mounted(){
        this.getProducts('product.Kategotia')
    }
}
Vue.createApp(drawProducts).mount('#tovari')
})
 


