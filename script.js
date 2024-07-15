let images=document.querySelectorAll(".tourimg");
let next=document.querySelector("#next");
let prev=document.querySelector("#previous");
let i=0;
displaynone();
function displaynone(){
for (let index = 0; index < images.length; index++) {
    images[index].style.display="none";
}
}

for (let index = 0; index < 3; index++) {
    images[index].style.display="flex";
}

next.addEventListener("click",()=>{
i=i+3;
let j=i;
displaynone();
for (let index = 0; index < 3; index++) {
    images[j%images.length].style.display="flex";
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


// list of documents
