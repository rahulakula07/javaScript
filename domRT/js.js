// let divTag=document.getElementById("card")
// // console.log(divTag);
// // divTag.innerHTML="<a href='https://cdn.pixabay.com/photo/2015/01/15/16/17/hands-600497_1280.jpg'></a>"



// let card=document.getElementById("card");
// card.innerHTML="<img src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png'width='350' > <h3>caputring is an art</h3> <p>nature</p>"
// // card.style.border="2px";


let card = document.getElementById("card")
// console.log(card);
card.style.width = "350px"
card.style.height = "480px"
card.style.border = "solid 2px"
card.innerHTML = "<img src='https://staticg.sportskeeda.com/editor/2022/09/913c9-16634358241063-1920.jpg' width='350x' height='300px'> <h3>bleach</h3> <p>600rs</p> <p>Rating:-4.2</p> <button>Buynow</button>"
card.style.backgroundColor = "aqua"
card.style.borderRadius = "5px"
card.style.justifyItems = "center"


let card1 = document.getElementById("card1")
// console.log(card);
card1.style.width = "350px"
card1.style.height = "480px"
card1.style.border = "solid 2px"
card1.innerHTML = "<img src='http://upload.wikimedia.org/wikipedia/commons/a/ae/An_Adidas_shoe.jpg' width='350x' height='300px'> <h3>Mens Shoes</h3> <p>450rs</p> <p>Rating:-4.5</p> <button>Buynow</button>"
card1.style.backgroundColor = "salmon"
card1.style.borderRadius = "5px"
card1.style.justifyItems = "center"
card1.style.marginLeft = "50px"



let data=
        {
          "id": 1,
          "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          "price": 109.95,
          "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          "category": "men's clothing",
          "image": "http://ecx.images-amazon.com/images/I/815LC3856YL._SL1500_.jpg",
          "rating": {
            "rate": 3.9,
            "count": 120
          }
        }

var card2=document.createElement("div")
card2.innerHTML= `<img src="${data.image}" width="300px"/>
 <h2>${data.title}</h2> <p>${data.price}</p> 
<p>${data.description}</p><p>${data.category}</p>`
document.body.append(card2)