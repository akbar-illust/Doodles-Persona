const questions = [
    {
        question: '1. lorem ipsum dolor sit amet',
        answers: {
            I: {
                text: '',
                scores: { I: +1, E: 0}
            },
            E: {
                text: '',
                scores: { I: +1, E: 0}
            }
        },
    }
]

const resultOptions = {
    '': {
        image:'img.png',
        text: "You're the **** "
    }
}

let currentQuestion = 0;

function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<p>${question.question}</p>`;
        for (const option in question.answers) {
            html += `<button class=" " value=" " id=" ">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        // attachButtonClickHandlers();
    } else {
        console.log('error')
    }
}