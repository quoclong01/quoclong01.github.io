var questionQuiz = [
  { question: 'Bác Hồ sinh năm bao nhiêu ?',
    answer_a: '1900',
    answer_b: '1911',
    answer_c: '1890',
    answer_d: '1891',
    correct: 'c'
  },
  { question: '1 + 1 = ?',
    answer_a: '4',
    answer_b: '2',
    answer_c: '5',
    answer_d: '6',
    correct: 'b'
  },
  { question: '2 + 2 = ?',
    answer_a: '4',
    answer_b: '2',
    answer_c: '5',
    answer_d: '6',
    correct: 'a'
  },
  { question: '2 * 3 = ?',
    answer_a: '4',
    answer_b: '2',
    answer_c: '5',
    answer_d: '6',
    correct: 'd'
  }
]

const questionNumber = document.getElementById('question');
const answer_a = document.getElementById('answer_a');
const answer_b = document.getElementById('answer_b');
const answer_c = document.getElementById('answer_c');
const answer_d = document.getElementById('answer_d');
const submit = document.getElementById('btn');
const answerEls = document.querySelectorAll('.contact');
const end = document.getElementById('end');
const screen = document.querySelector('.card');

let currentQuiz = 0;
let score = 0;

loadQuestion();

function loadQuestion(){
  let numberQuestion = questionQuiz[currentQuiz];

  questionNumber.innerText = numberQuestion.question;
  answer_a.innerText = numberQuestion.answer_a;
  answer_b.innerText = numberQuestion.answer_b;
  answer_c.innerText = numberQuestion.answer_c;
  answer_d.innerText = numberQuestion.answer_d; 
}

function getAnswer(){
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if(answerEl.checked){
      answer = answerEl.id;
    } 
  });
  return answer;
}

function deleteAnswer(){
  answerEls.forEach((answerEl) => {
    if(answerEl.checked){
      answerEl.checked = false;
    }
  });
}

submit.addEventListener('click', () => {
    const answer = getAnswer();
   
    if(answer){
      if(answer === questionQuiz[currentQuiz].correct){
        score++;
      }

      currentQuiz++;

      if(currentQuiz < questionQuiz.length){
          deleteAnswer();
          loadQuestion();
      }
      else {
        screen.classList.add('active');
        end.classList.add('active');
        end.innerText = `You finished Quiz Question. Score is ${score}`;
      }
    }
});