var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var questions = [[ 'What period of art is Picasso most commonly associated with?', 'cubism' ],
['What is the setting of Monets most famous painting?', 'garden'],
['What is the oldest sculpture of a woman we have today?', 'venus of willendorf']
];
var correct = [];
var wrong = [];


function buildList(arr) {
  var listHTML = '<ol>';
    for ( var i = 0; i < arr.length; i += 1 ) {
      listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML += '</ol>';
    return listHTML;
}


function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for ( var i = 0; i < questions.length; i += 1) {
    question = questions[i][0];
    answer = questions[i][1];
    response = prompt(question).toLowerCase();
    if (response === answer) {
      correctAnswers += 1;
      correct.push(question);
    } else {
      wrong.push(question);
    }
}

html = "You got " + correctAnswers + " correct!";
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);
