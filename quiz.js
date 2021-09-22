var arr = ["90°", "right angled", "one right angle","12, 16, 20","Equilateral triangle","100°","30°","a + b + c","no","45°"]
var cnt = 0
var btnSubmit = document.querySelector("#btn-check-score")
var scoreMessage = document.querySelector("#score-message")

function checkScore() {
    for (var i = 0; i < arr.length; i++) {
        var radioArr = document.getElementsByName("question-" + (i + 1))
        // console.log(ele)
        var giveAnswer = ""
        for (var j = 0; j < radioArr.length; j++) {
            if (radioArr[j].checked == true) {
                giveAnswer = radioArr[j].value
                // console.log(giveAnswer)
            }
        }
        // console.log(giveAnswer, arr[i])
        if (giveAnswer == arr[i]) {
            cnt++
        }
    }
    console.log(cnt)
    scoreMessage.innerHTML = "You have scored: "+cnt+" out of 10"
    cnt = 0
}

btnSubmit.addEventListener("click", checkScore)