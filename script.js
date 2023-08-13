const questions = [
    {
        'que': 'how is the father of java ? ',
        'a': 'denial richered',
        'b': 'jems golsling',
        'c': 'guido van russom',
        'd': 'elon mask',
        'right': 'b'
    },
    {
        'que': 'how is the father of javascript ? ',
        'a': 'denial richered',
        'b': 'jems golsling',
        'c': 'guido van russom',
        'd': 'none',
        'right': 'd'
    },
    {
        'que': 'how is the father of tesla ?',
        'a': 'denial richered',
        'b': 'jems golsling',
        'c': 'guido van russom',
        'd': 'elon mask',
        'right': 'd'
    },
    {
        'que': 'how is the father of Pthyon ? ',
        'a': 'denial richered',
        'b': 'jems golsling',
        'c': 'guido van russom',
        'd': 'elon mask',
        'right': 'c'
    },
    {
        'que': 'how is the father of c ? ',
        'a': 'denial richered',
        'b': 'jems golsling',
        'c': 'guido van russom',
        'd': 'elon mask',
        'right': 'a'
    }
]
let index = 0
let total = questions.length;
let right = 0
let wrong = 0
const quebox = document.getElementById('QueBox');
const opt = document.querySelectorAll('.opt')
const loadQuestion = () => {
    if(index === total){
        return EndQuize();
    }
    reset(); 
    const data = questions[index];
    quebox.innerHTML =`${index+1} ) ${data.que}`;
    opt[0].nextElementSibling.innerHTML = data.a;
    opt[1].nextElementSibling.innerHTML = data.b;
    opt[2].nextElementSibling.innerHTML = data.c;
    opt[3].nextElementSibling.innerHTML = data.d;
}
function submitqueAns() {
    const data = questions[index];
    const ans = getAnswer();
    if (ans==data.right) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    opt.forEach((input) => {
        if (input.checked) {
            return input.value;
           
        }
    })
}
const reset = () => {
    opt.forEach((input) => {
      input.checked =false;
        
    })
}

function EndQuize(){
    let final =document.getElementById('boxfinal');
    final.innerHTML=`<h3> Thank you for playing quize</h3> <br> <h2> ${total}/${right} </h2>`
   
}

loadQuestion();