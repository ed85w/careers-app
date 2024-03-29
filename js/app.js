var app = new Vue({
  el: '#ca-app',
  data: {
    quizStarted: false,
    quizClass: "inactive",
    questionsContainerHeight: "",
    allQuestions: [
      {
        "questionHeader": "Working Environment",
        "questionImg": "environment.jpg",
        "questionImgAlt": "A picture of scientists working in a lab",
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
        "questionImg": "./team.jpg",
        "questionImgAlt": "picture of a teams hands",
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
        "questionImg": "coding.jpg",
        "questionImgAlt": "a picture of a laptop and python book",
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
        "link": "./nuclear-engineer.html",
        "img": "nuclear-engineer.png",
        "imgAlt": "image of a woman working at a machine"
      },
      {"title": "Metallurgist",
        "question1" : "2",
        "question2" : "1",
        "question3" : "1",
        "link": "./metallurgist.html",
        "img": "metallurgist.png",
        "imgAlt": "image of a metallurgist"
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
        "link": "./data-analyst.html",
        "img": "applications-developer.png",
        "imgAlt": "image of a laptop"
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
      this.setContainerHeight();
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
    setContainerHeight: function(){
      if(document.querySelector('.ca-question-container.active')){
        const requiredHeight = document.querySelector('.ca-question-container.active').offsetHeight;
        // console.log(requiredHeight);
        this.questionsContainerHeight = requiredHeight;
      }
      
    }
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
    quizStarted: function(val) {
      if (val == false){
        this.allQuestions.forEach(e => e.questionAnswerValue = "");
      }
    }
  }
})
