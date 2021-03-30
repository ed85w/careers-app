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
        ],
        "link": "https://docs.google.com/document/d/1-1eH7S-fRLX68XvpFSqB1y2XbrqJExqE1nXD-5nWSqQ"
      },
      {"title": "Metallurgist",
        "question1" : "2",
        "question2" : "1",
        "question3" : "1",
        "information": [
          "Metallurgist info",
        ],
        "link": "careers-app/metallurgist.html"
      },
      {"title": "Applications Developer",
        "question1" : "1",
        "question2" : "1",
        "question3" : "2",
        "information": [
          "Applications Developer info",
          "hello again"
        ],
        "link": "https://docs.google.com/document/d/1vrh-yDQVkBtyM5odgiVq3rlN0jwyZc0F6P846HBBtzg"
      },
      {"title": "Data Analyst",
        "question1" : "1",
        "question2" : "1",
        "question3" : "2",
        "information": [
          "Data Analyst",
          "job 4 involves physics so would appeal to someone who enjoys physics",
        ]
      },
      {"title": "Financial Quantitative Analyst",
      "question1" : "1",
      "question2" : "1",
      "question3" : "2",
        "information": [
          "Financial Quantitative Analyst",
        ]
      },
      {"title": "Geophysicist",
        "question1" : "3",
        "question2" : "1",
        "question3" : "1",
        "information": [
          "Geophysicist",
        ]
      },
      {"title": "Meteorologist",
        "question1" : "2",
        "question2" : "1",
        "question3" : "1",
        "information": [
          "Meteorologist",
        ]
      },
      {"title": "Royal Air Force Airperson",
        "question1" : "3",
        "question2" : "2",
        "question3" : "3",
        "information": [
          "Royal Air Force Airperson",
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
    },
    // resetQuiz: function(){
    //   if(!this.quizStarted) {
    //     this.allQuestions.forEach(qu => qu.questionAnswerValue = "")
    //   }
    // }
  },
  watch: {
    resetQuiz: function(quizStarted){
      if(this.quizStarted == false) {
        this.allQuestions.forEach(qu => qu.questionAnswerValue = "")
      }
    }
  }
})
