var base = document.querySelector("#base-value")
var height = document.querySelector("#height-value")
var hypotenuseMessage = document.querySelector("#hypotenuse-message")
var btnCheckHypotenuse = document.querySelector("#btn-check-hypotenuse")

function checkHypotenuse(){
    var hypotenuseValue = Math.sqrt((base.value*base.value)+(height.value* height.value))
    hypotenuseMessage.innerHTML = "The length of hypotenuse is: "+ hypotenuseValue
    // console.log(hypotenuseValue)
    base.value = ""
    height.value =""
}

btnCheckHypotenuse.addEventListener("click",checkHypotenuse)