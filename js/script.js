const bookmarkBtn = document.querySelector(".bookmark__btn");
const bookmarkSvg = document.querySelector(".bookmark__svg");
const answerBtn = document.querySelector(".card__btn");
const answerTxt = document.querySelector(".card__answer");

bookmarkBtn.addEventListener('click', () => {
    bookmarkSvg.classList.toggle("bookmark__svg--red");
})

answerBtn.addEventListener('click', () => {
    answerTxt.classList.toggle("card__answer--hidden");
    if (answerBtn.textContent == "Hide Answer"){
        answerBtn.textContent = "Show Answer";
    } else{
        answerBtn.textContent = "Hide Answer";
    }
    
})
