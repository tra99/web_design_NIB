const scoreInput=document.querySelector("#score");
const btn=document.querySelector("#check");
const result=document.querySelector("#result");

btn.addEventListener("click", () =>{
    const score=Number(scoreInput.value);

    let grade= "False";

    if(score >=90 && score <=100) grade="A";
    if(score >=80) grade="B";

    result.innerText=`Your score is ${score} and your grade is ${grade}`;
})