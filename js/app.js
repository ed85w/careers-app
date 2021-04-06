var app = new Vue({
  el: '#app',
  data: {
    quizStarted: false,
    quizClass: "inactive",
    questionsContainerHeight: "",
    allQuestions: [
      {
        "questionHeader": "Working Environment",
        "questionImg": "working-environment.jpg",
        "questionImgAlt": "A picture of a man working at a desk",
        "questionTitle": "What’s your ideal work environment?",
        "questionClass": "inactive",
        "questionAnswerValue" : "",
        "questionAnswerText" : "",
        "options" : [
          { text: 'Office-based', value: '1' },
          { text: 'Laboratory/Scientific Facility', value: '2' },
          { text: 'Out & About (e.g. working with external clients or customers or field-work)', value: '3' }
          ]
      },
      {
        "questionHeader": "Team Size",
        "questionImg": "team-size.jpg",
        "questionImgAlt": "TBC",
        "questionTitle": "What size team do you prefer to work in?",
        "questionClass": "inactive",
        "questionAnswerValue" : "",
        "questionAnswerText" : "",
        "options" : [
          { text: 'Small team', value: '1' },
          { text: 'Large team', value: '2' },
          ]
      },
      {
        "questionHeader": "Job Skills",
        "questionImg": "team-size.jpg",
        "questionImgAlt": "TBC",
        "questionTitle": "In your job, do you mostly want to use your...",
        "questionClass": "inactive",
        "questionAnswerValue" : "",
        "questionAnswerText" : "",
        "options" : [
          { text: 'Physics Knowledge', value: '1' },
          { text: 'Computing / Coding Skills', value: '2' },
          { text: 'Something else', value: '3' }
          ]
        },
    ],
    careers: [
      {"title": "Nuclear Engineer",
        "question1" : "1",
        "question2" : "2",
        "question3" : "1",
        "link": "https://docs.google.com/document/d/1-1eH7S-fRLX68XvpFSqB1y2XbrqJExqE1nXD-5nWSqQ",
        "img": "",
        "imgAlt": "TO ENTER"
      },
      {"title": "Metallurgist",
        "question1" : "2",
        "question2" : "1",
        "question3" : "1",
        "link": "./metallurgist.html",
        "img": "metallurgist.png",
        "imgAlt": "TO ENTER"
      },
      {"title": "Applications Developer",
        "question1" : "1",
        "question2" : "1",
        "question3" : "2",
        "link": "./applications-developer.html",
        "img": "applications-developer.png",
        "imgAlt": "image of a laptop"
      },
      {"title": "Data Analyst",
        "question1" : "1",
        "question2" : "1",
        "question3" : "2",
        "link": "./metallurgist.html",
        "img": "./metallurgist.html",
        "imgAlt": "TO ENTER"
      },
      {"title": "Financial Quantitative Analyst",
      "question1" : "1",
      "question2" : "1",
      "question3" : "2",
      "link": "./metallurgist.html",
      "img": "./metallurgist.html",
      "imgAlt": "TO ENTER"
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
  },
  methods: {
    quizStart: function(){
      this.allQuestions[0].questionClass = "active"
      this.quizStarted = true
    },
    nextQuestion: function(index){
      this.allQuestions[index].questionClass = "done";
      this.allQuestions[index + 1].questionClass = "active";
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
    },
  },
  computed: {
    careerFilter: function () {
      return this.careers.filter(career => career.question1.includes(this.allQuestions[0].questionAnswerValue) && career.question2.includes(this.allQuestions[1].questionAnswerValue) && career.question3.includes(this.allQuestions[2].questionAnswerValue));
    },
  },
  created() {
    window.addEventListener("resize", this.setContainerHeight);
  },
  destroyed() {
    window.removeEventListener("resize", this.setContainerHeight);
  },
  watch: {
    resetQuiz: function(quizStarted){
      if(this.quizStarted == false) {
        this.allQuestions.forEach(qu => qu.questionAnswerValue = "")
      }
    },
  }
})
