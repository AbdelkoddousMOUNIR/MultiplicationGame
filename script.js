let form = document.querySelector("form fieldset legend");
let inputFill = document.getElementById("input-fill");
let inputSend = document.querySelector("#input-send");
let scoreEl = document.getElementById("score");
let formEl = document.getElementById("form");


let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

scoreEl.innerText = `score: ${score}`;




let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let num3 = Math.floor(Math.random() * 10);

form.innerHTML = `what is ${num1} * ${num2} ?`;

let correcteans = num1 * num2;

formEl.addEventListener("submit", (e) => {
    if (inputFill.value == correcteans) {
        score++;
        updateLocalStorage();
    } else if(inputFill.value !== correcteans && score > 0) {
        score--;
        updateLocalStorage();
    }
})
function updateLocalStorage() {
    localStorage.setItem("score" , JSON.stringify(score))
}
