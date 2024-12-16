// let immgEle=document.querySelector("#img")
// // function a(){
// // immgEle.style.borderRadius="40%"
// // }
// function a(){
//     immgEle.src="https://wallpaper-house.com/data/out/1/wallpaper2you_12270.jpg";
// }

// let imgEle=document.getElementById("img1")
// imgEle.onclick=function (){
//     imgEle.src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/Sosuke-Aizen-from-the-TYBW-Bleach-Brave-Souls.jpg"
// }

let btn1=document.getElementById("hover")
btn1.onmouseover=function (){
    btn1.style.backgroundColor="pink"
    btn1.style.color="white"
    btn1.style.fontSize="50px" 

}
btn1.onmouseleave=function (){
    btn1.style.background="orange"
    btn1.style.color="blue"
}
let btn2=document.getElementById("oneclick")
btn2.onclick=function (){
    btn2.style.backgroundColor="white"
    btn2.style.color="blue" 
    btn2.style.fontSize="50px" 
}
let btn3=document.getElementById("dblclick")
btn3.onclick=function (){
    btn3.style.backgroundColor="green"
    btn3.style.color="blue"  
    btn3.style.fontSize="50px" 

}

let input=document.querySelector("input")
input.onkeypress=function (){
    document.body.style.backgroundColor="pink"
}
input.onkeyup=function (){
    document.body.style.backgroundColor="pink"
}
input.onkeydown=function (){
    document.body.style.backgroundColor="pink"
}

let pTags=document.querySelectorAll("p")
for(i=0;i<pTags.length;i++){
    color=['orange','white','green']
    pTags[i].style.backgroundColor=color[i]
    pTags[i].style.fontSize="30px"
    pTags[i].style.color="blue"
    pTags[i].style.textAlign="center"
}
