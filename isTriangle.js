var angleOne = document.querySelector("#angle-one")
var angleTwo = document.querySelector("#angle-two")
var angleThree = document.querySelector("#angle-three")
var btnCheckTriangle = document.querySelector("#btn-check-triangle")
var outputMessage = document.querySelector("#output-message")

function checkTriangle() {
    if ((Number(angleOne.value) + Number(angleTwo.value) + Number(angleThree.value)) === 180) {
        outputMessage.innerHTML = "Yay, this angles form a triangle!"
    } else {
        outputMessage.innerHTML = "Oh no! this angles doesn't form a triangle"
    }
    angleOne.value = ""
    angleTwo.value = ""
    angleThree.value = ""
}

btnCheckTriangle.addEventListener("click", checkTriangle)