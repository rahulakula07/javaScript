// let p1Tag=document.getElementById("p1")
// p1Tag.textContent="rahul"
// p1Tag.innerHTML="<a href=''>google<a/> <h2>hello!!!!!</h2>"
// let p2Tag=document.querySelector("#p2")
// console.log(p1Tag);
// console.log(p2Tag);
// let p3Tag=document.querySelector(".p5")
// p2Tag.innerHTML

// to give color to every ptag
// let pTags=document.querySelectorAll("p");
// for(i=0;i<pTags.length;i++){
//    let colors=["red","pink","green","yellow"]
//    pTags[i].style.backgroundColor=colors[i]
// }
// console.log(pTags) 

let card=document.getElementById("card")
card.innerHTML="<img src='https://images.meesho.com/images/products/406282018/lkqqj_512.webp' width='300px'>  <h2>FLOWER DESIGNER SAREE</h2> <p>408rs </p> <button  id='addToCartBtn'>addToCart</button>"
// Apply styles to the button
let button = document.getElementById("addToCartBtn");
button.style.backgroundColor = "pink"; // Button background color
button.style.color = "white"; // Text color (white contrasts well with aqua)
button.style.padding = "12px 25px"; // Padding
button.style.border = "2px solidrgb(23, 156, 0)"; // Darker border to give definition
button.style.borderRadius = "8px"; // Rounded corners
button.style.cursor = "pointer"; // Pointer on hover
button.style.fontSize = "18px"; // Font size
button.style.fontWeight = "bold"; // Bold text
button.style.transition = "all 0.3s ease"; // Smooth transition for hover effect

// Add hover effect for better interaction
button.onmouseover = function() {
    button.style.backgroundColor = "#009c99"; // Change to a darker shade of aqua
    button.style.color = "white"; // Keep text white
};
button.onmouseout = function() {
    button.style.backgroundColor = "pink"; // Revert to the original aqua
    button.style.color = "white"; // Keep text white
};

let card1=document.getElementsByClassName("card")[0];
console.log(card1);

card1.innerHTML=`
    <img src="https://images.meesho.com/images/products/405048121/a49eg_512.webp" width='300px' /> <h2>Gold Heart Shap Necklace Chain</h2> <p>84rs</p> <button id="ByNowbtn">BuyNow</button>
`
let button1 = document.getElementById("ByNowbtn");
console.log(button1);

button1.style.backgroundColor = "pink"; // Button background color
button1.style.color = "white"; // Text color (white contrasts well with aqua)
button1.style.padding = "12px 25px"; // Padding
button1.style.border = "2px solidrgb(23, 156, 0)"; // Darker border to give definition
button1.style.borderRadius = "8px"; // Rounded corners
button1.style.cursor = "pointer"; // Pointer on hover
button1.style.fontSize = "18px"; // Font size
button1.style.fontWeight = "bold"; // Bold text
button1.style.transition = "all 0.3s ease"; // Smooth transition for hover effect

// Add hover effect for better interaction
button1.onmouseover = function() {
    button1.style.backgroundColor = "#009c99"; 
    button1.style.color = "white";
};
button1.onmouseout = function() {
    button1.style.backgroundColor = "pink"; 
    button1.style.color = "white"; 
};

card.style.backgroundColor="aqua"

let cardcontainer=document.getElementById("cardcontainer");

let data=[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }
  ]
  for(i=0;i<data.length;i++){
    let card2=document.createElement("div")
    card2.innerHTML=`
            <p>${JSON.stringify(data[i].address)}</p>
    `
    console.log(data[i])
    cardcontainer.appendChild(card2)
  }
// console.log(data);

  