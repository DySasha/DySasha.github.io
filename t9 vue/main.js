let test = {
    title: 'qq',
    clicks: 0
}

const Test_Vue = {
    data(){
        return test
    },
    methods: {
       cklickRach(){
        this.clicks++;

       }
    },
    mounted() {

    }
}
Vue.createApp(Test_Vue).mount('#app');