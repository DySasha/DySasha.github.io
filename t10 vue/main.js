let data = {
    browsers: [
        {
            name: 'Google',
            img: 'https://castironsteak.com/wp-content/uploads/2016/01/google-square.jpg'
        },
        {
            name: 'Mozilla Firefox',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/640px-Firefox_logo%2C_2019.svg.png'
        },
        {
            name: 'Microsoft Edge',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/1200px-Microsoft_Edge_logo_%282019%29.svg.png'
        },
        {
            name: 'Opera',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Opera_2015_icon.svg/640px-Opera_2015_icon.svg.png'
        }
    ],
    product: [

    ]
}

const SocialsComponent = {
    props: ['social'],
    template: `
    <div class="card" style="width: 200px; padding: 10px; margin: 10px;">
        <h2 class="text-center">{{social.name}}</h2>
        <img v-bind:src="social.img" style="width:100px; height: 100px; margin:0 auto;">
    </div>
    `
}

const app = {
    data(){
        return data
    },
    methods: {

    },
    components:{
        SocialsComponent
    },
    mounted(){
    db.collection('products').get().then(res => {
        res.forEach(pro => {
            let product1 = pro.data()
            product1.id = pro.id;
            this.product.push(product1)
        });
    })
    },
}

Vue.createApp(app).mount('#test')