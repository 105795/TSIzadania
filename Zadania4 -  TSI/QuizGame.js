const questions = [];

const question1 = {
  category: `music`,
  question: `Which type of music is basicly from Poland?`,
  choices: [`Discopolo`, `RNB`, `House`],
  answer: `Discopolo`,
};

const question2 = {
  category: `geography`,
  question: `Who is West-side neighbour of Poland country?`,
  choices:  [`Germany`, `Czechia`, `Lithuania`],
  answer: `Germany`,
};
const question3 = {
  category: `math`,
  question: `2 + 2 * 2 = ?`,
  choices:  [`Eight`, `Six`, `Ten`],
  answer: `Six`,
};
const question4 = {
  category: `mediicine`,
  question: `Which blood groups is rarest?`,
  choices:  [`AB Rh-`, `0 Rh-`, `B Rh-`],
  answer: `AB Rh-`,
};
const question5 = {
  category: `animals`,
  question: `What was first? Chicken or egg?`,
  choices:  [`Chicken`, `Egg`, `Both`],
  answer: `Chicken`,
};

questions.push(question1, question2, question3, question4, question5);

function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
};
function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length)
  return choicesArray[randomIndex];
}
function getResults(questionObject, computerChoice) {
  if (questionObject.answer === computerChoice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}

const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
const result = getResults(randomQuestion, computerChoice);

console.log(`Category: ${randomQuestion.category}`);
console.log(`Question: ${randomQuestion.question}`);
console.log(`Choices: ${randomQuestion.choices.join(', ')}`);
console.log(`Computer's choice: ${computerChoice}`);
console.log(result);

