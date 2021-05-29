
const quizDB = [
    {
        question : "Q1: what is force?" , 
        a: "mass * acceleration" , 
        b: "mass / acceleration" , 
        c: "jerk" , 
        d : "none" , 
        ans : "ans1"
    } , 
    {
        question : "Q2: What is ether ?" , 
        a: "unproved space fabric which is supposed to transmit human thoughts telepathically " , 
        b: "hot molten iron" , 
        c: "momentum / time" , 
        d : "minimum possible length" , 
        ans : "ans1"
    } , 
    {
        question : "Q1: What is precision ?" , 
        a: "accuracy - ( unit of measurement ) " , 
        b: "same as accuracy" , 
        c: "resolution of scale upto which measurement can occur" , 
        d : "none of the above" , 
        ans : "ans3"
    } 
]
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector("#option2");
const option3 = document.querySelector('#option3');
const option4 = document.querySelector("#option4");
const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');


const submit = document.querySelector("#submit");

let questionCount = 0;
let score = 0;


const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

  //  question.innerHTML = quizDB[0].question;


}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((x)=> {
        if(x.checked) {
            answer = x.id;

        }
        
    }
 
   ) 

  

   return answer;
}

const deselectAll = () => {
    answers.forEach((x)=>x.checked = false );

}

submit.addEventListener('click', ()=> {


  

   const checkedAnswer = getCheckAnswer();
    if(questionCount < quizDB.length && checkedAnswer === quizDB[questionCount].ans) {
        score++;
    }
    questionCount++;
    deselectAll();

    if(questionCount < quizDB.length ) {
        loadQuestion();

    }
    else {
        showScore.innerHTML = `
        <h3>You score ${score} / ${quizDB.length} </h3>
        <button class="btn" onClick="location.reload()">Play Again</button>
    `;
    showScore.classList.remove('scoreArea');


    }
    
})




