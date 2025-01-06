a()
async function a(){
    let data=await fetch('https://fakestoreapi.com/products')
    let data1=await data.json()
    console.log(data1);   

    let parentdiv=document.createElement("div")
    parentdiv.style.display="flex"
    parentdiv.style.flexWrap="wrap"
    parentdiv.style.gap="10px"


data1.forEach((x) => {
    let card=document.createElement("div")
    card.style.width="280px"
    card.style.border="2px solid pink"
    card.innerHTML=`<img src="${x.image}" width=270px/>
    <h2>${x.title}</h2> <p>${x.price}</p> 
    <p>${x.description}</p><p>${x.category}</p>
     `
     parentdiv.appendChild(card)
     document.body.append(parentdiv)
})
}





