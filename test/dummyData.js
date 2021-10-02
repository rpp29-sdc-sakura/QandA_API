const data = [
  {
    _id: 1,
    questions: [
      {
        question_id: 1,
        product_id: 1,
        question_body: 'What fabric is the top made of?',
        question_date: '2020-07-27T21:18:34.409Z',
        asker_name: 'yankeelover',
        asker_email: 'first.last@gmail.com',
        reported: 0,
        question_helpfulness: 1,
        answers: [
          {
            id: 5,
            question_id: 1,
            body: "Something pretty soft but I can't be sure",
            date: '2020-09-13T09:49:20.555Z',
            answerer_name: 'metslover',
            answerer_email: 'first.last@gmail.com',
            reported: 0,
            helpfulness: 5,
            photos: [
              'https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
              'https://images.unsplash.com/photo-1511127088257-53ccfcc769fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
              'https://images.unsplash.com/photo-1500603720222-eb7a1f997356?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80'
            ]
          },
          {
            photos: [],
            id: 7,
            question_id: 1,
            body: 'Its the best! Seriously magic fabric',
            date: '2021-02-27T18:45:24.662Z',
            answerer_name: 'metslover',
            answerer_email: 'first.last@gmail.com',
            reported: 0,
            helpfulness: 7
          },
          {
            photos: [],
            id: 8,
            question_id: 1,
            body: "DONT BUY IT! It's bad for the environment",
            date: '2020-09-19T21:49:22.548Z',
            answerer_name: 'metslover',
            answerer_email: 'first.last@gmail.com',
            reported: 0,
            helpfulness: 8
          },
          {
            photos: [],
            id: 57,
            question_id: 1,
            body: 'Suede',
            date: '2021-04-11T16:51:31.495Z',
            answerer_name: 'metslover',
            answerer_email: 'first.last@gmail.com',
            reported: 0,
            helpfulness: 7
          },
          {
            photos: [],
            id: 95,
            question_id: 1,
            body: 'Supposedly suede, but I think its synthetic',
            date: '2020-09-14T21:53:52.219Z',
            answerer_name: 'metslover',
            answerer_email: 'first.last@gmail.com',
            reported: 0,
            helpfulness: 3
          }
        ]
      },
      {
        question_id: 2,
        product_id: 1,
        question_body: 'HEY THIS IS A WEIRD QUESTION!!!!?',
        question_date: '2021-02-21T06:16:59.613Z',
        asker_name: 'jbilas',
        asker_email: 'first.last@gmail.com',
        reported: 1,
        question_helpfulness: 4,
        answers: [
          {
            id: 30,
            question_id: 2,
            body: 'Its a rubber sole',
            date: '2021-03-21T02:29:56.317Z',
            answerer_name: 'dschulman',
            answerer_email: 'first.last@gmail.com',
            reported: 0,
            helpfulness: 2,
            photos: [
              'https://images.unsplash.com/photo-1528318269466-69d920af5dad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
            ]
          },
          {
            photos: [],
            id: 75,
            question_id: 2,
            body: 'The rubber on the bottom wears thin quickly',
            date: '2020-05-05T02:15:50.162Z',
            answerer_name: 'dschulman',
            answerer_email: 'first.last@gmail.com',
            reported: 0,
            helpfulness: 2
          },
          {
            photos: [],
            id: 84,
            question_id: 2,
            body: 'Rubber',
            date: '2021-03-16T04:17:56.652Z',
            answerer_name: 'dschulman',
            answerer_email: 'first.last@gmail.com',
            reported: 0,
            helpfulness: 3
          },
          {
            photos: [],
            id: 102,
            question_id: 2,
            body: 'Some kind of recycled rubber, works great!',
            date: '2020-09-25T02:30:12.339Z',
            answerer_name: 'dschulman',
            answerer_email: 'first.last@gmail.com',
            reported: 0,
            helpfulness: 6
          }
        ]
      },
      {
        answers: [],
        question_id: 3,
        product_id: 1,
        question_body: 'Does this product run big or small?',
        question_date: '2020-12-21T07:31:47.083Z',
        asker_name: 'jbilas',
        asker_email: 'first.last@gmail.com',
        reported: 0,
        question_helpfulness: 8
      },
      {
        question_id: 4,
        product_id: 1,
        question_body: 'How long does it last?',
        question_date: '2020-07-10T00:35:17.010Z',
        asker_name: 'funnygirl',
        asker_email: 'first.last@gmail.com',
        reported: 0,
        question_helpfulness: 6,
        answers: [
          {
            id: 65,
            question_id: 4,
            body: 'It runs small',
            date: '2020-11-19T11:11:47.205Z',
            answerer_name: 'dschulman',
            answerer_email: 'first.last@gmail.com',
            reported: 0,
            helpfulness: 1,
            photos: [
              'https://images.unsplash.com/photo-1470116892389-0de5d9770b2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
              'https://images.unsplash.com/photo-1536922645426-5d658ab49b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
            ]
          },
          {
            photos: [],
            id: 89,
            question_id: 4,
            body: 'Showing no wear after a few months!',
            date: '2020-09-02T23:33:29.530Z',
            answerer_name: 'sillyguy',
            answerer_email: 'first.last@gmail.com',
            reported: 0,
            helpfulness: 8
          }
        ]
      },
      {
        question_id: 5,
        product_id: 1,
        question_body: 'Can I wash it?',
        question_date: '2020-12-25T00:14:44.662Z',
        asker_name: 'cleopatra',
        asker_email: 'first.last@gmail.com',
        reported: 0,
        question_helpfulness: 7,
        answers: [
          {
            photos: [],
            id: 46,
            question_id: 5,
            body: "I've thrown it in the wash and it seems fine",
            date: '2020-11-22T05:27:23.272Z',
            answerer_name: 'marcanthony',
            answerer_email: 'first.last@gmail.com',
            reported: 0,
            helpfulness: 8
          },
          {
            photos: [],
            id: 64,
            question_id: 5,
            body: 'It says not to',
            date: '2020-05-05T02:15:50.162Z',
            answerer_name: 'ceasar',
            answerer_email: 'first.last@gmail.com',
            reported: 0,
            helpfulness: 0
          },
          {
            photos: [],
            id: 92,
            question_id: 5,
            body: 'Haha, are you serious?',
            date: '2020-09-17T08:12:11.162Z',
            answerer_name: 'ceasar',
            answerer_email: 'first.last@gmail.com',
            reported: 1,
            helpfulness: 0
          },
          {
            photos: [],
            id: 96,
            question_id: 5,
            body: "I wouldn't machine wash it",
            date: '2020-05-27T13:03:41.205Z',
            answerer_name: 'ceasar',
            answerer_email: 'first.last@gmail.com',
            reported: 0,
            helpfulness: 0
          },
          {
            photos: [],
            id: 101,
            question_id: 5,
            body: 'Only if you want to ruin it!',
            date: '2020-05-27T13:03:41.205Z',
            answerer_name: 'ceasar',
            answerer_email: 'first.last@gmail.com',
            reported: 0,
            helpfulness: 5
          },
          {
            photos: [],
            id: 107,
            question_id: 5,
            body: 'Yes',
            date: '2021-01-13T08:47:26.863Z',
            answerer_name: 'Seller',
            answerer_email: 'first.last@gmail.com',
            reported: 0,
            helpfulness: 4
          }
        ]
      },
      {
        question_id: 6,
        product_id: 1,
        question_body: 'Is it noise cancelling?',
        question_date: '2020-12-25T00:14:44.662Z',
        asker_name: 'coolkid',
        asker_email: 'first.last@gmail.com',
        reported: 1,
        question_helpfulness: 19,
        answers: [
          {
            photos: [],
            id: 108,
            question_id: 6,
            body: 'No?',
            date: '2021-04-17T09:27:17.781Z',
            answerer_name: 'warmkid',
            answerer_email: 'first.last@gmail.com',
            reported: 0,
            helpfulness: 14
          }
        ]
      }
    ]
  }
]

const questions = {
  question_id: 5,
  product_id: 1,
  question_body: 'Can I wash it?',
  question_date: '2020-12-25T00:14:44.662Z',
  asker_name: 'cleopatra',
  asker_email: 'first.last@gmail.com',
  reported: 0,
  question_helpfulness: 7,
  answers: [
    {
      photos: [],
      id: 46,
      question_id: 5,
      body: "I've thrown it in the wash and it seems fine",
      date: '2020-11-22T05:27:23.272Z',
      answerer_name: 'marcanthony',
      answerer_email: 'first.last@gmail.com',
      reported: 0,
      helpfulness: 8
    },
    {
      photos: [],
      id: 64,
      question_id: 5,
      body: 'It says not to',
      date: '2020-05-05T02:15:50.162Z',
      answerer_name: 'ceasar',
      answerer_email: 'first.last@gmail.com',
      reported: 0,
      helpfulness: 0
    },
    {
      photos: [],
      id: 92,
      question_id: 5,
      body: 'Haha, are you serious?',
      date: '2020-09-17T08:12:11.162Z',
      answerer_name: 'ceasar',
      answerer_email: 'first.last@gmail.com',
      reported: 1,
      helpfulness: 0
    },
    {
      photos: [],
      id: 96,
      question_id: 5,
      body: "I wouldn't machine wash it",
      date: '2020-05-27T13:03:41.205Z',
      answerer_name: 'ceasar',
      answerer_email: 'first.last@gmail.com',
      reported: 0,
      helpfulness: 0
    },
    {
      photos: [],
      id: 101,
      question_id: 5,
      body: 'Only if you want to ruin it!',
      date: '2020-05-27T13:03:41.205Z',
      answerer_name: 'ceasar',
      answerer_email: 'first.last@gmail.com',
      reported: 0,
      helpfulness: 5
    },
    {
      photos: [],
      id: 107,
      question_id: 5,
      body: 'Yes',
      date: '2021-01-13T08:47:26.863Z',
      answerer_name: 'Seller',
      answerer_email: 'first.last@gmail.com',
      reported: 0,
      helpfulness: 4
    }
  ]
};

const correctQuestionsFormat = {
  question_id: 5,
  question_body: 'Can I wash it?',
  question_date: '2020-12-25T00:14:44.662Z',
  asker_name: 'cleopatra',
  question_helpfulness: 7,
  reported: false,
  answers: {
    '46': {
      id: 46,
      body: "I've thrown it in the wash and it seems fine",
      date: '2020-11-22T05:27:23.272Z',
      answerer_name: 'marcanthony',
      helpfulness: 8,
      photos: []
    },
    '64': {
      id: 64,
      body: 'It says not to',
      date: '2020-05-05T02:15:50.162Z',
      answerer_name: 'ceasar',
      helpfulness: 0,
      photos: []
    },
    '96': {
      id: 96,
      body: "I wouldn't machine wash it",
      date: '2020-05-27T13:03:41.205Z',
      answerer_name: 'ceasar',
      helpfulness: 0,
      photos: []
    },
    '101': {
      id: 101,
      body: 'Only if you want to ruin it!',
      date: '2020-05-27T13:03:41.205Z',
      answerer_name: 'ceasar',
      helpfulness: 5,
      photos: []
    },
    '107': {
      id: 107,
      body: 'Yes',
      date: '2021-01-13T08:47:26.863Z',
      answerer_name: 'Seller',
      helpfulness: 4,
      photos: []
    }
  }
}

const correctDataFormat = {
  "product_id": 1,
  "results": [
    {
      "question_id": 1,
      "question_body": "What fabric is the top made of?",
      "question_date": "2020-07-27T21:18:34.409Z",
      "asker_name": "yankeelover",
      "question_helpfulness": 1,
      "reported": false,
      "answers": {
        "5": {
          "id": 5,
          "body": "Something pretty soft but I can't be sure",
          "date": "2020-09-13T09:49:20.555Z",
          "answerer_name": "metslover",
          "helpfulness": 5,
          "photos": [
            "https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
            "https://images.unsplash.com/photo-1511127088257-53ccfcc769fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
            "https://images.unsplash.com/photo-1500603720222-eb7a1f997356?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"
          ]
        },
        "7": {
          "id": 7,
          "body": "Its the best! Seriously magic fabric",
          "date": "2021-02-27T18:45:24.662Z",
          "answerer_name": "metslover",
          "helpfulness": 7,
          "photos": []
        },
        "8": {
          "id": 8,
          "body": "DONT BUY IT! It's bad for the environment",
          "date": "2020-09-19T21:49:22.548Z",
          "answerer_name": "metslover",
          "helpfulness": 8,
          "photos": []
        },
        "57": {
          "id": 57,
          "body": "Suede",
          "date": "2021-04-11T16:51:31.495Z",
          "answerer_name": "metslover",
          "helpfulness": 7,
          "photos": []
        },
        "95": {
          "id": 95,
          "body": "Supposedly suede, but I think its synthetic",
          "date": "2020-09-14T21:53:52.219Z",
          "answerer_name": "metslover",
          "helpfulness": 3,
          "photos": []
        }
      }
    },
    {
      "question_id": 3,
      "question_body": "Does this product run big or small?",
      "question_date": "2020-12-21T07:31:47.083Z",
      "asker_name": "jbilas",
      "question_helpfulness": 8,
      "reported": false,
      "answers": {}
    },
    {
      "question_id": 4,
      "question_body": "How long does it last?",
      "question_date": "2020-07-10T00:35:17.010Z",
      "asker_name": "funnygirl",
      "question_helpfulness": 6,
      "reported": false,
      "answers": {
        "65": {
          "id": 65,
          "body": "It runs small",
          "date": "2020-11-19T11:11:47.205Z",
          "answerer_name": "dschulman",
          "helpfulness": 1,
          "photos": [
            "https://images.unsplash.com/photo-1470116892389-0de5d9770b2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
            "https://images.unsplash.com/photo-1536922645426-5d658ab49b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          ]
        },
        "89": {
          "id": 89,
          "body": "Showing no wear after a few months!",
          "date": "2020-09-02T23:33:29.530Z",
          "answerer_name": "sillyguy",
          "helpfulness": 8,
          "photos": []
        }
      }
    },
    {
      "question_id": 5,
      "question_body": "Can I wash it?",
      "question_date": "2020-12-25T00:14:44.662Z",
      "asker_name": "cleopatra",
      "question_helpfulness": 7,
      "reported": false,
      "answers": {
        "46": {
          "id": 46,
          "body": "I've thrown it in the wash and it seems fine",
          "date": "2020-11-22T05:27:23.272Z",
          "answerer_name": "marcanthony",
          "helpfulness": 8,
          "photos": []
        },
        "64": {
          "id": 64,
          "body": "It says not to",
          "date": "2020-05-05T02:15:50.162Z",
          "answerer_name": "ceasar",
          "helpfulness": 0,
          "photos": []
        },
        "96": {
          "id": 96,
          "body": "I wouldn't machine wash it",
          "date": "2020-05-27T13:03:41.205Z",
          "answerer_name": "ceasar",
          "helpfulness": 0,
          "photos": []
        },
        "101": {
          "id": 101,
          "body": "Only if you want to ruin it!",
          "date": "2020-05-27T13:03:41.205Z",
          "answerer_name": "ceasar",
          "helpfulness": 5,
          "photos": []
        },
        "107": {
          "id": 107,
          "body": "Yes",
          "date": "2021-01-13T08:47:26.863Z",
          "answerer_name": "Seller",
          "helpfulness": 4,
          "photos": []
        }
      }
    }
  ]
}

module.exports = {
  data,
  questions,
  correctQuestionsFormat,
  correctDataFormat
}