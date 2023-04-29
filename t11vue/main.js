const data = {
    test: 'hello',
    comments: [],
    new_comment: {
        name: '',
        text: ''

    }
}
    const CommentComponent = {
        props:['comment'],
        template: `
        <div class="card mb-3">
            <div class="d-flex">
              <div class="userlogo_box">
                  <div class="username">
                        {{comment.name.slice(0,1)}}
                  </div>
              </div>
              <div class="pl-3">
                  <h5>{{comment.name}}</h5>
                  <p>
                    {{comment.text}}
                  </p>
              </div>
            </div>
          </div>
        `
    }


const app = {
    data(){
        return data
    },
    methods:{
       GetComments(){
        db.collection('comments').get().then(res => {
              this.comments = []
            res.forEach(doc => {
                let comentar = doc.data();
                comentar.id = doc.id;
                this.comments.push(comentar)
            });
        })
       },

         AddNewComment(){
            db.collection('comments').add(this.new_comment).then(res =>{
                alert('Success')
                this.new_comment.name = ''
                this.new_comment.text = ''
                this.GetComments()
            })
         }

    },
    components: {
        CommentComponent
    },
    mounted(){
        this.GetComments()

    }
}


Vue.createApp(app).mount('#app');


