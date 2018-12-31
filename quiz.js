var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var questions = [[ 'What period of art is Picasso most commonly associated with?', 'cubism' ],
['What is the setting of Monets most famous painting?', 'garden'],
['What is the oldest sculpture of a woman we have today?', 'venus of willendorf']
];

function print(message) {
  document.write(message);
}

for ( var i = 0; i < questions.length; i += 1) {
    question = questions[i][0];
    answer = questions[i][1];
    response = answer.toLowercase(prompt(question));
    if (response === answer) {
      correctAnswers += 1;
    }
}

html = "You got " + correctAnswers + " correct!";
print(html);
