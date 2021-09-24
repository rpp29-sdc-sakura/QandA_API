var formatDate = (date) => {
  let parsed = new Date(date).toISOString()
  return parsed
}

//plug answers into this
//answers =
var formatAnswers = (arr) => {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let currentAnswer = arr[i]
    let currentId = currentAnswer.id
    let currentDate = currentAnswer.date
    let newDate = formatDate(currentDate)
    currentAnswer['date'] = newDate
    currentAnswer['photos'] = []
    result[currentId] = currentAnswer
  }
  return result;
}

//plug answerPhotos and result of formatAnswers into this
//answers =
var integratePhotos = (photoArray, ansObject) => {
  for (let j = 0; j < photoArray.length; j++) {
    var currentPhoto = photoArray[j]
    var currentAnswerId = currentPhoto.answer_id
    if (ansObject[currentAnswerId] !== undefined) {
      var ansPhotos = ansObject[currentAnswerId].photos
      ansPhotos.push(currentPhoto)
    }
  }
  return ansObject
}


//plug questions into this
//questions =
var formatQuestions = (q, finalAnswers) => {
  for (let k = 0; k < q.length; k++) {
    var currentQuestion = q[k]
    var newDate = formatDate(currentQuestion.question_date)
    currentQuestion.question_date = newDate
    currentQuestion['answers'] = {}
  }
  let quests = q;

  for (var ans in finalAnswers) {
    var currentAnswer = finalAnswers[ans]
    var currentAnswerId = currentAnswer.id
    var currentQId = currentAnswer.question_id

    for (var l = 0; l < quests.length; l++) {
      var currentQuestion = quests[l]
      var qId = currentQuestion.question_id
      if (currentQId === qId) {
        currentQuestion.answers[currentAnswerId] = currentAnswer
      }
    }
  }
  console.log('QUESTS: ', quests)
  return quests
}

//plug final answers and formatted questions into
//questions =
var integrateAnswers = (finalAnswers, quests) => {
  for (var ans in finalAnswers) {
    var currentAnswer = finalAnswers[ans]
    var currentAnswerId = currentAnswer.id
    var currentQId = currentAnswer.question_id

    for (var l = 0; l < quests.length; l++) {
      var currentQuestion = quests[l]
      var qId = currentQuestion.question_id
      if (currentQId === qId) {
        currentQuestion.answers[currentAnswerId] = currentAnswer
      }
    }
  }
  return quests
}


var questions = [
  {
      "question_id": 1,
      "product_id": 1,
      "question_body": "What fabric is the top made of?",
      "question_date": 1595884714409,
      "asker_name": "yankeelover",
      "asker_email": "first.last@gmail.com",
      "reported": 0,
      "question_helpfulness": 1
  },
  {
      "question_id": 2,
      "product_id": 1,
      "question_body": "HEY THIS IS A WEIRD QUESTION!!!!?",
      "question_date": 1613888219613,
      "asker_name": "jbilas",
      "asker_email": "first.last@gmail.com",
      "reported": 1,
      "question_helpfulness": 4
  },
  {
      "question_id": 7,
      "product_id": 2,
      "question_body": "Where is this product made?",
      "question_date": 1590428073460,
      "asker_name": "iluvcatz",
      "asker_email": "first.last@gmail.com",
      "reported": 0,
      "question_helpfulness": 0
  },
  {
      "question_id": 8,
      "product_id": 2,
      "question_body": "Is this product sustainable?",
      "question_date": 1608855284662,
      "asker_name": "coolkid",
      "asker_email": "first.last@gmail.com",
      "reported": 1,
      "question_helpfulness": 5
  }
]

var answers = [
  {
      "id": 1,
      "question_id": 1,
      "body": "Something pretty soft but I can't be sure",
      "date": 1599990560555,
      "answerer_name": "metslover",
      "answerer_email": "first.last@gmail.com",
      "reported": 0,
      "helpfulness": 5
  },
  {
      "id": 2,
      "question_id": 1,
      "body": "Its the best! Seriously magic fabric",
      "date": 1614451524662,
      "answerer_name": "metslover",
      "answerer_email": "first.last@gmail.com",
      "reported": 0,
      "helpfulness": 7
  },
  {
      "id": 3,
      "question_id": 2,
      "body": "Its a rubber sole",
      "date": 1616293796317,
      "answerer_name": "dschulman",
      "answerer_email": "first.last@gmail.com",
      "reported": 0,
      "helpfulness": 2
  },
  {
      "id": 4,
      "question_id": 2,
      "body": "The rubber on the bottom wears thin quickly",
      "date": 1588644950162,
      "answerer_name": "dschulman",
      "answerer_email": "first.last@gmail.com",
      "reported": 0,
      "helpfulness": 2
  }
]

var photos = [
  {
      "id": 1,
      "answer_id": 1,
      "url": "https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
  },
  {
      "id": 2,
      "answer_id": 1,
      "url": "https://images.unsplash.com/photo-1511127088257-53ccfcc769fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  },
  {
      "id": 3,
      "answer_id": 2,
      "url": "https://images.unsplash.com/photo-1500603720222-eb7a1f997356?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"
  }
]


var letsDoThis = (quests, ans, phos) => {
  new Promise((resolve, reject) => {
    resolve(formatAnswers(ans))
  }).then((formattedAnswers) => {
    return integratePhotos(phos, formattedAnswers)
  }).then((ansWithPhos) => {
    return formatQuestions((quests, ansWithPhos))
  }).then((fullyFormed) => {
    console.log('FULLY: ', fullyFormed)
    return fullyFormed
  })
}


console.log(letsDoThis(questions, answers, photos))