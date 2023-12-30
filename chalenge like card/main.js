const countSpanId = document.getElementById("countSpan")
const pricecountId = document.getElementById("pricecount")
const incrementbuttonId = document.getElementById("incrementbutton")
const decrementbuttonId = document.getElementById("decrementbutton")
const deletebuttonId = document.getElementById("deletebutton")
const likebuttonId = document.getElementById("like")
const mercedesId = document.getElementById("mercedes")
const photoId = document.getElementById("photo")
{
let count = 0;
let price= 100;

incrementbuttonId.addEventListener("click", () => {
    if(count<10){
    count++;
    countSpanId.textContent = count
    }
    const TotalPirce = count * price
    pricecountId.textContent = TotalPirce 
 
})
decrementbuttonId.addEventListener("click", () => {
    if(count>1){
    count--;
    countSpanId.textContent = count
    }
    const TotalPirce = count * price
    pricecountId.textContent = TotalPirce 
});


let delet = false
deletebuttonId.addEventListener("click", () => {

    delet=!delet
if(delet){
    deletebuttonId.textContent = "visibles"
    photoId.style.visibility = "hidden"
    countSpanId.textContent = '0'
    pricecountId.textContent = '0'
} else{
    deletebuttonId.textContent = "delete"
    photoId.style.visibility = "visible"

}

    })
let like = true
likebuttonId.addEventListener("click", () =>{
    like =! like
 if(like){
 likebuttonId.src="like.png"
} else{
likebuttonId.src="like (1).png"
    }
})
}
const countSpan2Id = document.getElementById("countSpan2")
const pricecount2Id = document.getElementById("pricecount2")
const incrementbutton2Id = document.getElementById("incrementbutton2")
const decrementbutton2Id = document.getElementById("decrementbutton2")
const deletebutton2Id = document.getElementById("deletebutton2")
const likebutton2Id = document.getElementById("like22")
const bmwId = document.getElementById("bmw")
const photo2Id = document.getElementById("photo2")
{
let count = 0;
let price= 100;

incrementbutton2Id.addEventListener("click", () => {
    if(count<10){
    count++;
    countSpan2Id.textContent = count
    }
    const TotalPirce = count * price
    pricecount2Id.textContent = TotalPirce 
 
})
decrementbutton2Id.addEventListener("click", () => {
    if(count>1){
    count--;
    countSpan2Id.textContent = count
    }
    const TotalPirce = count * price
    pricecount2Id.textContent = TotalPirce 
});


let delet = false
deletebutton2Id.addEventListener("click", () => {

    delet=!delet
if(delet){
    deletebutton2Id.textContent = "visibles"
    photo2Id.style.visibility = "hidden"
    countSpan2Id.textContent = '0'
    pricecount2Id.textContent = '0'
} else{
    deletebutton2Id.textContent = "delete"
    photo2Id.style.visibility = "visible"

}

    })
    
let like1 = true
likebutton2Id.addEventListener("click", () =>{
    like1 =!like1
 if(like1){
 likebutton2Id.src = "like (2).png"
} else{
likebutton2Id.src="like (1).png"
    }
});
}