//create generateRandomInt function to make unique ids
const generateRandomInt = () => {
  let timeStamp = new Date().getTime();
  let random = Math.floor(Math.random() * (14000000 - 7000000) + 7000000);
  return parseInt(timeStamp + '' + random);
}

//create function to format data correctly
const formatData = (data) => {
  return new Promise((resolve, reject) => {
    let formatted = [];
    for (let i = 0; i < data[0].questions.length; i++) {
      let question = data[0].questions[i];
      if (question.reported === 0) {
        let formattedQuestion = formatQuestions(question);
        formatted.push(formattedQuestion);
      }
    }

    resolve({
      'product_id': data[0]._id,
      'results': formatted
    })
  })
}

//create function to format each question correctly
const formatQuestions = (question) => {
  let formattedAnswers = {};
  if (question.answers === undefined) {
    formattedAnswers = {}
  } else {
    for (let i = 0; i < question.answers.length; i++) {
      let answer = question.answers[i];
      if (answer.reported === 0) {
        formattedAnswers[answer.id] = {
          id: answer.id,
          body: answer.body,
          date: answer.date,
          answerer_name: answer.answerer_name,
          helpfulness: answer.helpfulness,
          photos: answer.photos || []
        };
      }
    }
  }

  return {
    question_id: question.question_id,
    question_body: question.question_body,
    question_date: question.question_date,
    asker_name: question.asker_name,
    question_helpfulness: question.question_helpfulness,
    reported: false,
    answers: formattedAnswers
  }
}

module.exports = {
  generateRandomInt,
  formatData,
  formatQuestions
}

