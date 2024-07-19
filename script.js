let images=document.querySelectorAll(".tourimg");
// tourimg is an array of images
let next=document.querySelector("#next");
// next arrow button
let prev=document.querySelector("#previous");
// prev arrow button
let i=0;
// initially display none
displaynone();


function displaynone(){
for (let index = 0; index < images.length; index++) {
    images[index].style.display="none";
}
}

// This loop displays the first 3 images 
for (let index = 0; index < 3; index++) {
    images[index].style.display="flex";
}



// event listener on next button
next.addEventListener("click",()=>{
i=i+3;
let j=i;

// when someone clicks button it hides the previous images
displaynone();

// This loop displays the next three images starting from new i value
for (let index = 0; index < 3; index++) {
    images[j%images.length].style.display="flex";

    // for circular loop of array index
    j=(j+1)%images.length;
}
})

prev.addEventListener("click",()=>{
i=i-3;
let j=i;
displaynone();
for (let index = 0; index < 3; index++) {
    images[j%images.length].style.display="flex";
    j=(j+1)%images.length;
}
})







const media= window.matchMedia('(max-width:1024px)');
let phoneimg=document.querySelectorAll(".phoneimg");
// tourimg is an array of images
let nextM=document.querySelector("#next-mobile");
// next arrow button
let prevM=document.querySelector("#previous-mobile");
// prev arrow button
let l=0;
// initially display none
displaynonephone();
console.log(phoneimg)

function displaynonephone(){
for (let index = 0; index < phoneimg.length; index++) {
    phoneimg[index].style.display="none";
    console.log(index)
}
}

// This loop displays the first 3 images 
    phoneimg[0].style.display="block";




if(media.matches){
    alert("hello")
    console.log("inside if");
nextM.addEventListener("click",()=>{
l=l+1;
console.log("inside event")
let k=l;

displaynonephone();
    phoneimg[k%phoneimg.length].style.display="block";
})

prevM.addEventListener("click",()=>{
l=l-1;
if(l<0){
    l=7;
}
let k=l;
displaynonephone();
    phoneimg[k%phoneimg.length].style.display="block";
})

    }


