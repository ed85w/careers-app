var app = new Vue({
  el: '#app',
  data: {
    allQuestions: [
      {"questionTitle": "question 1",
      "questionAnswer" : "",
      "options" : [
        { text: 'Question 1 option 1', value: '1' },
        { text: 'Question 1 option 2', value: '2' },
        { text: 'Question 1 option 3', value: '3' }
        ]
      },
      {"questionTitle": "question 2",
      "questionAnswer" : "",
      "options" : [
        { text: 'Question 2 option 1', value: '1' },
        { text: 'Question 2 option 2', value: '2' },
        { text: 'Question 2 option 3', value: '3' }
        ]
      },
      {"questionTitle": "question 3",
      "questionAnswer" : "",
      "options" : [
        { text: 'question 3 option 1', value: '1' },
        { text: 'question 3 option 2', value: '2' },
        { text: 'question 3 option 3', value: '3' }
        ]
      },
    ],
    careers: [
      {"title": "job1",
        "question1" : "1 2",
        "question2" : "1 2",
        "question3" : "1 2",
        "information": [
          "some information about job 1",
          "some more information about job 1"
        ]
      },
      {"title": "job2",
        "question1" : "1",
        "question2" : "2",
        "question3" : "2",
        "information": [
          "job 2 would be a good job",
          "you would do lots of maths"
        ]
      },
      {"title": "job3",
        "question1" : "3",
        "question2" : "2",
        "question3" : "3",
        "information": [
          "hello",
          "hello again"
        ]
      },

    ]
  },
  computed: {
    careerFilter: function () {
      return this.careers.filter(career => career.question1.includes(this.allQuestions[0].questionAnswer) && career.question1.includes(this.allQuestions[1].questionAnswer) && career.question1.includes(this.allQuestions[2].questionAnswer)
        )
    }
  }
})