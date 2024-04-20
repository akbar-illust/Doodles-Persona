const questions = [
    {
        question: '1. Apakah Anda lebih suka menghabiskan waktu sendiri daripada bersama dengan orang lain?',
        answers: {
            I: {
                text: 'Iya',
                scores: { I: +1, E: 0}
            },
            E: {
                text: 'Tidak',
                scores: { I: 0, E: +1}
            }
        },
    },
    {
        question: '2. Apakah Anda merasa energi Anda lebih terisi ketika Anda sendiri dibandingkan ketika Anda bersama banyak orang?',
        answers: {
            I: {
                text: 'Iya',
                scores: { I: +1, E: 0}
            },
            E: {
                text: 'Tidak',
                scores: { I: 0, E: +1}
            }
        },
    },
    {
        question: '3. Apakah Anda lebih suka memiliki sedikit teman dekat daripada banyak teman yang hanya sebatas kenalan?',
        answers: {
            I: {
                text: 'Iya',
                scores: { I: +1, E: 0}
            },
            E: {
                text: 'Tidak',
                scores: { I: 0, E: +1}
            }
        },
    },
    {
        question: '4. Apakah Anda sering merasa lebih baik ketika Anda memiliki waktu untuk merenung atau melakukan aktivitas sendiri?',
        answers: {
            I: {
                text: 'Iya',
                scores: { I: +1, E: 0}
            },
            E: {
                text: 'Tidak',
                scores: { I: 0, E: +1}
            }
        },
    },
    {
        question: '5. Apakah Anda merasa terbebani atau lelah setelah berinteraksi dengan orang banyak dalam waktu yang lama?',
        answers: {
            I: {
                text: 'Iya',
                scores: { I: +1, E: 0}
            },
            E: {
                text: 'Tidak',
                scores: { I: 0, E: +1}
            }
        },
    },
    {
        question: '6. Apakah Anda lebih suka berfikir tentang kemungkinan-kemungkinan masa depan daripada fakta-fakta yang ada di hadapan Anda?',
        answers: {
            N: {
                text: 'Iya',
                scores: { N: +1, S: 0}
            },
            S: {
                text: 'Tidak',
                scores: { N: 0, S: +1}
            }
        },
    },
    {
        question: '7. Apakah Anda cenderung mencari pola atau hubungan tersembunyi antara hal-hal yang terjadi di sekitar Anda?',
        answers: {
            N: {
                text: 'Iya',
                scores: { N: +1, S: 0}
            },
            S: {
                text: 'Tidak',
                scores: { N: +1, S: 0}
            }
        },
    },
    {
        question: '8. Apakah Anda lebih suka berfokus pada potensi atau kemungkinan yang belum terwujud daripada situasi saat ini?',
        answers: {
            N: {
                text: 'Iya',
                scores: { N: +1, S: 0}
            },
            S: {
                text: 'Tidak',
                scores: { N: 0, S: +1}
            }
        },
    },
    {
        question: '9. Apakah Anda merasa lebih nyaman dalam situasi yang memungkinkan Anda untuk memperluas imajinasi atau berspekulasi tentang kemungkinan-kemungkinan baru?',
        answers: {
            N: {
                text: 'Iya',
                scores: { N: +1, S: 0}
            },
            S: {
                text: 'Tidak',
                scores: { N: 0, S: +1}
            }
        },
    },
    {
        question: '10. Apakah Anda sering merenungkan arti atau makna di balik pengalaman-pengalaman hidup Anda?',
        answers: {
            N: {
                text: 'Iya',
                scores: { N: +1, S: 0}
            },
            S: {
                text: 'Tidak',
                scores: { N: 0, S: +1}
            }
        },
    },
    {
        question: '11. Apakah Anda cenderung membuat keputusan berdasarkan logika dan analisis daripada perasaan dan emosi?',
        answers: {
            T: {
                text: 'Iya',
                scores: { T: +1, F: 0}
            },
            F: {
                text: 'Tidak',
                scores: { T: 0, F: +1}
            }
        },
    },
    {
        question: '12. Apakah Anda merasa lebih nyaman dalam menyampaikan keputusan atau opini tanpa terlalu memperhatikan reaksi emosional orang lain?',
        answers: {
            T: {
                text: 'Iya',
                scores: { T: +1, F: 0}
            },
            F: {
                text: 'Tidak',
                scores: { T: 0, F: +1}
            }
        },
    },
    {
        question: '13. Apakah Anda lebih mempertimbangkan nilai-nilai objektif dalam membuat keputusan daripada mempertimbangkan dampaknya terhadap perasaan orang lain?',
        answers: {
            T: {
                text: 'Iya',
                scores: { T: +1, F: 0}
            },
            F: {
                text: 'Tidak',
                scores: { T: 0, F: +1}
            }
        },
    },
    {
        question: '14. Apakah Anda lebih suka memberikan kritik berdasarkan fakta dan rasionalitas daripada pertimbangan terhadap perasaan orang lain?',
        answers: {
            T: {
                text: 'Iya',
                scores: { T: +1, F: 0}
            },
            F: {
                text: 'Tidak',
                scores: { T: 0, F: +1}
            }
        },
    },
    {
        question: '15. Apakah Anda merasa lebih nyaman dalam situasi yang memerlukan pemikiran kritis dan analisis yang mendalam?',
        answers: {
            T: {
                text: 'Iya',
                scores: { T: +1, F: 0}
            },
            F: {
                text: 'Tidak',
                scores: { T: 0, F: +1}
            }
        },
    },
    {
        question: '16. Apakah Anda merasa lebih nyaman dengan jadwal yang teratur dan rencana yang terperinci?',
        answers: {
            J: {
                text: 'Iya',
                scores: { J: +1, P: 0}
            },
            P: {
                text: 'Tidak',
                scores: { J: 0, P: +1}
            }
        },
    },
    {
        question: '17. Apakah Anda merasa tertekan ketika tugas-tugas atau proyek-proyek berakhir di luar batas waktu yang ditetapkan?',
        answers: {
            J: {
                text: 'Iya',
                scores: { J: +1, P: 0}
            },
            P: {
                text: 'Tidak',
                scores: { J: 0, P: +1}
            }
        },
    },
    {
        question: '18. Apakah Anda cenderung membuat daftar tugas atau rencana yang terstruktur untuk mengatur kegiatan harian Anda?',
        answers: {
            J: {
                text: 'Iya',
                scores: { J: +1, P: 0}
            },
            P: {
                text: 'Tidak',
                scores: { J: 0, P: +1}
            }
        },
    },
    {
        question: '19. Apakah Anda merasa frustrasi ketika situasi tidak terorganisir atau tidak terencana dengan baik?',
        answers: {
            J: {
                text: 'Iya',
                scores: { J: +1, P: 0}
            },
            P: {
                text: 'Tidak',
                scores: { J: 0, P: +1}
            }
        },
    },
    {
        question: '20. Apakah Anda merasa tidak terlalu kerepotan ketika situasi berubah secara tiba-tiba dan Anda harus beradaptasi dengan cepat?',
        answers: {
            P: {
                text: 'Iya',
                scores: { P: +1, J: 0}
            },
            J: {
                text: 'Tidak',
                scores: { P: 0, J: +1}
            }
        },
    },
]

const resultOptions = {
    'ISTJ': {
        image:'01ISTJ.png',
        text: "You're the ISTJ "
    },
    'ISFJ': {
        image:'02ISFJ.png',
        text: "You're the ISFJ "
    },
    'ESTJ': {
        image:'03ESTJ.png',
        text: "You're the ESTJ "
    },
    'ESFJ': {
        image:'04ESFJ.png',
        text: "You're the ESFJ "
    },
    'ISTP': {
        image:'05ISTP.png',
        text: "You're the ISTP "
    },
    'ISFP': {
        image: '06ISFP.png',
        text: "You're the ISFP "
    },
    'ESTP': {
        image: '07ESTP.png',
        text: "You're the ESTP "
    },
    'ESFP': {
        image: '08ESFP.png',
        text: "You're the ESFP "
    },
    'INFJ': {
        image: '09INFJ.png',
        text: "You're the INFJ "
    },
    'INFP': {
        image: '10INFP.png',
        text: "You're the INFP "
    },
    'ENFJ': {
        image: '11ENFJ.png',
        text: "You're the ENFJ "
    },
    'ENFP': {
        image: '12ENFP.png',
        text: "You're the ENFP "
    },
    'INTJ': {
        image: '13INTJ.png',
        text: "You're the INTJ "
    },
    'INTP': {
        image: '14INTP.png',
        text: "You're the INTP "
    },
    'ENTP': {
        image: '15ENTP.png',
        text: "You're the ENTP "
    },
    'ENTJ': {
        image: '16ENTJ.png',
        text: "You're the ENTJ "
    },
}

let currentQuestion = 0;

// document.addEventListener("DOMContentLoaded", function() {
//     displayQuestion();
// });


function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<div><p class="sm:w-64 md:w-96 text-center sm:text-lg md:text-xl mb-5">${question.question}</p></div>`;
        for (const option in question.answers) {
            html += `
            <div class="grid justify-center">
                <button class="next-btn bg-emerald-800 hover:bg-emerald-900 w-64 m-3 sm:text-lg md:text-xl p-3 rounded-2xl" value="${option}" id="${option}">${question.answers[option].text}</button>
            </div>
            `;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {
        console.log('error')
    }
}

document.getElementById('start-btn').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
    // userAnswers.userName = userName;
});

document.getElementById('start-btn2').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
    // userAnswers.userName = userName;
});


function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.next-btn');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}

function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];

    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    // const resultElement = document.getElementById('result');
    // const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "JP"];
    pairs.forEach(pair => {
        const options = pair.split('');
        const scores = options.map(option => userAnswers[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...scores));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    const result = pairs.map(pair => topLetters[pair]).join('');

    const personalityData = resultOptions[result];
    if (personalityData) {
        

        resultImage.src = "images/"+personalityData.image;
        resultImage.alt = `${personalityData.image} Image`;
    } else {
        console.log('error')
    }

    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    // document.getElementById('restart-button').style.display = 'block';
}

function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'grid';
    displayQuestion();
}

document.getElementById('restart-btn').addEventListener('click', restartQuiz);

displayQuestion();