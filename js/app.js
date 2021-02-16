var app = new Vue({
  el: '#app',
  data: {
    allQuestions: [
      {"questionTitle": "What is your preferred working environment?",
      "questionClass": "inactive",
      "questionAnswerValue" : "",
      "questionAnswerText" : "",
      "options" : [
        { text: 'Office-based', value: '1' },
        { text: 'Laboratory/Scientific Facility', value: '2' },
        { text: 'Out & About (e.g. field-work, travel, outdoors)', value: '3' }
        ]
      },
      {"questionTitle": "question 2",
      "questionClass": "inactive",
      "questionAnswerValue" : "",
      "questionAnswerText" : "",
      "options" : [
        { text: 'Question 2 option 1', value: '1' },
        { text: 'Question 2 option 2', value: '2' },
        { text: 'Question 2 option 3', value: '3' }
        ]
      },
      {"questionTitle": "question 3",
      "questionClass": "inactive",
      "questionAnswerValue" : "",
      "questionAnswerText" : "",
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
      {"title": "job4",
        "question1" : "1 2 3",
        "question2" : "1 2 3",
        "question3" : "1 2 3",
        "information": [
          "job 4!",
          "job 4 involves physics so would appeal to someone who enjoys physics",
        ]
      },
      {"title": "job5",
        "question1" : "3",
        "question2" : "1 3",
        "question3" : "1 2 3",
        "information": [
          "job 5!",
        ]
      },
      {"title": "job6",
        "question1" : "1",
        "question2" : "2",
        "question3" : "3",
        "information": [
          "job 6!",
        ]
      },
      {"title": "job7",
        "question1" : "3",
        "question2" : "2 3",
        "question3" : "1 2 3",
        "information": [
          "job 7!",
        ]
      },
    ],
    quizStarted: false,
    quizClass: "inactive"
  },
  methods: {
    quizStart: function(){
      this.allQuestions[0].questionClass = "active"
      this.quizStarted = true
    },
    nextQuestion: function(index){
      this.allQuestions[index].questionClass = "done"
      this.allQuestions[index + 1].questionClass = "active"
    },
    prevQuestion: function(index) {
      // if 1st question 
      if(index == 0) {
        this.allQuestions[index].questionClass = "inactive"
        this.quizStarted = false
      } else {
        this.allQuestions[index].questionClass = "inactive"
        this.allQuestions[index - 1].questionClass = "active"
      }
    },
    // assigns the text version of each answer to the relevant question 
    setAnswerText: function(val, index) {
      this.allQuestions[index].questionAnswerText = val.srcElement.nextSibling.data
    }
  },
  computed: {
    careerFilter: function () {
      return this.careers.filter(career => career.question1.includes(this.allQuestions[0].questionAnswerValue) && career.question1.includes(this.allQuestions[1].questionAnswerValue) && career.question1.includes(this.allQuestions[2].questionAnswerValue));
    }
  }
})
