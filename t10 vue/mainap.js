function Add_Products(){
   let product = {
      name: document.getElementById('name').value,
      price: document.getElementById('price').value,
      img: document.getElementById('img').value,
      developer: document.getElementById('developer').value,
      reviews: document.getElementById('reviews').value,
      Kategotia: document.getElementById('Kategotia').value
    }
    db.collection('product.Kategotia').add(product).then(function(){
        location.reload();
    })
}

/*let data = {
    products: [
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
    ]
}*/