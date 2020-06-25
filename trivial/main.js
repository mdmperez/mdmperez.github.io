'use strict';

let correctAnswer = '';
const liSelectAnswer = document.getElementById('answer');
const msgError = document.querySelector('.error-hide');
const msgCorrect = document.querySelector('.correct-hide');
const setionQuestions = document.getElementById('section-questions'); 

let amount = document.getElementById('questions').value;
let arrayAnswers = [];
let questionsToResolve = [];
let questionPosition = 0;
let finalCorrectAnswer = 0;
let finalIncorrectAnswer = 0;

//Pintar los options de las categorias
function paintCategories() {
    fetch('https://opentdb.com/api_category.php')
    .then(response => response.json())
    .then(data => {

        const selectCategories = document.getElementById('category');
        const categories = data.trivia_categories;

        categories.forEach((item) => {
        const option = document.createElement('OPTION');
        option.innerHTML = item.name;
        option.value = item.id;
        selectCategories.appendChild(option);
        })
    });
}

paintCategories(); 

//Creación de la url de la petición que contiene el JSON 
function playNow() {
    let initUrl = 'https://opentdb.com/api.php?';
    let category = document.getElementById('category').value;
    let difficulty = document.getElementById('difficulty').value.toLowerCase();
    let type = document.getElementById('type').value;

    let urlCompleted = `${initUrl}amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
    console.log(urlCompleted);

    getQuestions(urlCompleted);
}

const btnPlay = document.querySelector('.btn-play');
btnPlay.addEventListener('click', playNow);

//Petición AJAX que contiene questionsToResolve y ejecuta changeScreen y fieldQuestion
function getQuestions(urlCompleted){
    fetch(urlCompleted)
    .then(response => response.json())
    .then(data => {
        if(data.results.length !== 0){
            questionsToResolve = data.results;
            changeScreen();
            fieldQuestion(questionsToResolve[questionPosition]);
        } else {
            const msgNoData = document.getElementById('mgs-no-data');
            msgNoData.classList.add('section_choose__msg-error');
            msgNoData.classList.remove('msg-hide');

            const removeMsg = () => {
                msgNoData.classList.remove('section_choose__msg-error');
                msgNoData.classList.add('msg-hide'); 
            };
            setTimeout(removeMsg, 3000);

        }
    })
}

//Ocultar pantalla 1 y mostrar pantalla del juego
function changeScreen(){ 
    setionQuestions.classList.add('section_questions');
    const sectionChoose = document.getElementById('section_choose');
    sectionChoose.classList.remove('section_choose');
    sectionChoose.classList.add('hide');
}

//Pintar categoria, dificultad, pregunta y posibles respuestas
function fieldQuestion(question){

    let liCategory = document.getElementById('li-category');
    const liDifficulty = document.getElementById('li-difficulty');
    let liQuestion = document.getElementById('li-question');

    liCategory.innerHTML = 'Category: ' + question.category;
    liDifficulty.innerHTML = 'Difficulty: ' + question.difficulty;
    liQuestion.innerHTML = 'Question: ' + question.question;

    correctAnswer = question.correct_answer;

    //Meter mensaje de respuesta errónea
    msgError.innerHTML = 'ERROR! The correct answer is: ' + question.correct_answer;
        
    //Vamos a crear un array con todas las respuestas posibles:
    
    arrayAnswers = [];
    arrayAnswers.push(question.correct_answer);
    let incorrectAnswers = question.incorrect_answers;
    for(let index of incorrectAnswers) {
        arrayAnswers.push(index);
    }
    arrayAnswers.sort();

    for(let element of arrayAnswers) {
        let optionAnswer = document.createElement('BUTTON');
        optionAnswer.innerHTML = element;
        optionAnswer.classList.add('btn-posible-answers');
        liSelectAnswer.appendChild(optionAnswer);
        optionAnswer.addEventListener('click', checkAnswer);
    }
}

//Checkear la respuesta
function checkAnswer() {
    if(event.currentTarget.innerText === correctAnswer) {
        event.currentTarget.classList.add('correct');
        msgCorrect.classList.toggle('correct-show');
        finalCorrectAnswer = (finalCorrectAnswer + 1);
        setionQuestions.classList.add('correct-section');  

    } else if (event.currentTarget.innerText !== correctAnswer){
        event.currentTarget.classList.add('incorrect');
        msgError.classList.toggle('error-show');   
        finalIncorrectAnswer = (finalIncorrectAnswer + 1); 
        setionQuestions.classList.add('error-section');  
    }  
    
    btnNext.classList.toggle('btn-next');
   disabledButtons();
}

//Función para deshabilitar los botones
function disabledButtons() {
    let allButtons = document.querySelectorAll('.btn-posible-answers');
    for(let btns of allButtons) {
       btns.disabled = true;
   }
}

//Pasar a la siguiente pregunta
function nextQuestion() {
    liSelectAnswer.innerHTML ="";
    setionQuestions.classList.remove('error-section');  
    setionQuestions.classList.remove('correct-section');  
    if(questionPosition < (amount - 1)) {
        questionPosition = (questionPosition + 1); 
        fieldQuestion(questionsToResolve[questionPosition]);

        //Borrar mensajes pregunta anterior y el propio btn de siguiente
        msgCorrect.classList.remove('correct-show');
        msgError.classList.remove('error-show'); 
        btnNext.classList.remove('btn-next');
    
    } else {
        console.log('Has terminado el juego');
        setionQuestions.classList.remove('section_questions');
        paintFinalScreem();
    }
    
}
const btnNext = document.getElementById('btn-next');
btnNext.addEventListener('click', nextQuestion);

//Pintar pantalla final
function paintFinalScreem() {
    const sectionFinal = document.getElementById('section-final');
    sectionFinal.classList.add('section-final');

    let totalAnswers = document.getElementById('numberAnswers');
    totalAnswers.innerHTML = `Total answers: ${amount}`;
    let totalCorrect = document.getElementById('numberCorrectAnswers');
    totalCorrect.innerHTML = `Corrects: ${finalCorrectAnswer}`;
    let textResult = document.getElementById('youResult');

    if(finalCorrectAnswer > (questionsToResolve.length/2)) {
        textResult.innerHTML = 'You are a genious! 🥳';
        const fireworks = document.getElementById('fire');
        fireworks.classList.remove('hide');
    } else {
        textResult.innerHTML = 'Better luck next time 😊';
    }
}

//Volver a empezar el juego
function reloadGame() {
    location.reload();
}

const btnReload = document.querySelector('.btn-reload');
btnReload.addEventListener('click', reloadGame);