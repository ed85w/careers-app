var app = new Vue({
  el: '#app',
  data: {
    allQuestions: [
      {"questionTitle": "What’s your ideal work environment?",
      "questionClass": "inactive",
      "questionAnswerValue" : "",
      "questionAnswerText" : "",
      "options" : [
        { text: 'Office-based', value: '1' },
        { text: 'Laboratory/Scientific Facility', value: '2' },
        { text: 'Out & About (e.g. working with external clients or customers or field-work)', value: '3' }
        ]
      },
      {"questionTitle": "What size team do you prefer to work in?",
      "questionClass": "inactive",
      "questionAnswerValue" : "",
      "questionAnswerText" : "",
      "options" : [
        { text: 'Small team', value: '1' },
        { text: 'Large team', value: '2' },
        ]
      },
      {"questionTitle": "In your job, do you mostly want to use your...",
      "questionClass": "inactive",
      "questionAnswerValue" : "",
      "questionAnswerText" : "",
      "options" : [
        { text: 'Physics Knowledge', value: '1' },
        { text: 'Computing / Coding Skills (Mathematicsand data analysis?)', value: '2' },
        { text: 'Something else', value: '3' }
        ]
      },
    ],
    careers: [
      {"title": "Nuclear Engineer",
        "question1" : "1",
        "question2" : "2",
        "question3" : "1",
        "information": [
          "some information about Nuclear Engineer",
          "some more information about Nuclear Engineer"
        ]
      },
      {"title": "Metallurgist",
        "question1" : "2",
        "question2" : "1",
        "question3" : "1",
        "information": [
          "job 2 would be a good job",
          "you would do lots of maths"
        ]
      },
      {"title": "Applications Developer",
        "question1" : "1",
        "question2" : "1",
        "question3" : "2",
        "information": [
          "hello",
          "hello again"
        ]
      },
      {"title": "Data Analyst",
        "question1" : "1",
        "question2" : "1",
        "question3" : "2",
        "information": [
          "job 4!",
          "job 4 involves physics so would appeal to someone who enjoys physics",
        ]
      },
      {"title": "Financial Quantitative Analyst",
      "question1" : "1",
      "question2" : "1",
      "question3" : "2",
        "information": [
          "job 5!",
        ]
      },
      {"title": "Geophysicist",
        "question1" : "3",
        "question2" : "1",
        "question3" : "1",
        "information": [
          "job 6!",
        ]
      },
      {"title": "Meteorologist",
        "question1" : "2",
        "question2" : "1",
        "question3" : "1",
        "information": [
          "job 7!",
        ]
      },
      {"title": "Royal Air Force Airperson",
        "question1" : "3",
        "question2" : "2",
        "question3" : "3",
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
      return this.careers.filter(career => career.question1.includes(this.allQuestions[0].questionAnswerValue) && career.question2.includes(this.allQuestions[1].questionAnswerValue) && career.question3.includes(this.allQuestions[2].questionAnswerValue));
    }
  }
})
