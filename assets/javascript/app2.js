var correct = 0;
var wrong = 0;

var questions = [
    {
      text: "What candy bar was named after a family's horse?",
      choices: { 
                 a: "Milky Way", 
                 b: "Snickers", 
                 c: "Twix", 
                 d: "Butterfinger"
                },

      correctAnswer: "b",      
    },

    {
      text: "Which of these was not among the four original Starburst flavors?",
      choices: {
                a: "Cherry", 
                b: "Lime", 
                c: "Strawberry", 
                d: "Lemon"
        },
        correctAnswer: "a",
   },

   {
    text: "Which candy was the first one to be individually wrapped?",
    choices: {
                a: "Root Beer Barrels", 
                b: "Tootsie Roll", 
                c: "Jolly Ranchers", 
                d: "Werther's"
            },
    correctAnswer: "b",
 },

 {
    text: "What candy bar originally came in three pieces and had three different flavors?",
    choices: {
                a: "Toblerone", 
                b: "Crunch Bar", 
                c: "Three Musketeers", 
                d: "Kit Kat"
            },
    correctAnswer: "c",
 },

 {
    text: "Which Candy manufacture when out of business in July 2018?",
    choices: {
                a: "Ricola", 
                b: "Mars", 
                c: "Ferrero", 
                d: "NECCO"
            },
    correctAnswer: "d",
 },

 {
    text: "Which candy, once chewed, transforms into chewing gum?",
    choices: {
                a: "Jujubes", 
                b: "Chuckles", 
                c: "Snaps", 
                d: "Razzles"
            },
    correctAnswer: "d",
 },

 {
    text: "In 1847 the first chocolate candy bar was invented by...",
    choices: {
                a: "Joseph Fry", 
                b: "Milton Hershey", 
                c: "John Cadbury", 
                d: "Jacob Nestle"
            },
    correctAnswer: "a",
 },

 {
    text: "In 1995, which color of M&M was voted into packages by the public?",
    choices: {
                a: "Red", 
                b: "Orange", 
                c: "Blue", 
                d: "Green"
            },
    correctAnswer: "c",
 },

 {
    text: "Which of these has not been a Kit Kat flavor in Japan?",
    choices: {
                a: "Potato", 
                b: "Sake", 
                c: "Mac and Cheese", 
                d: "Cough Drop"
            },
    correctAnswer: "c",
 },

 {
    text: "Which band's name was taken from a candy bar?",
    choices: {
                a: "Sugar Ray", 
                b: "Squirrel Nut Zippers", 
                c: "Red Hot Chilli Peppers", 
                d: "Cake"
            },
    correctAnswer: "b",
 }
]

var quizContainer = document.getElementById("trivia");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

$(document).ready(function(){
    $("#results").hide();
    $("#trivia").hide();

    function startQuiz(){
        var output = [];
        var answers;

        for(var i = 0; i< questions.length; i++){
            answers= [];
        
            for(letter in questions[i].choices){

                answers.push(
                    '<label>'
                        + '<input type="radio" name="question' + i + '" value= "'+ letter + '">'
                        + letter + ':  ' 
                        + questions[i].choices[letter]
                    + '</label><br>'
                );
            }

        output.push(
        '<div class="question"><h2>' + questions[i].text + '</h2></div>'
        + '<div class="answers"><h3>' + answers.join('') + '</h3></div>'
            );



        }

        $("#trivia").append(output.join(" ") + "<br>" + "<button type='button' class='btn btn-dark' id='submit'>Submit Answers</button>");


    }


            
      

  $("#start").on("click", function(){
    
    //Timer

    var number = 60;
    var intervalId;

    function run() {
        clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
      }

      function decrement() {
        number--;
        $("#timer").html("<h2>" + "Time left: " + number + "</h2>");

        if (number === 0) {
            stop();
            scoreQuiz();
            $("#trivia").hide();
            $("#timer").hide();
            $("#results").show();

        }

      }

      function stop() {
        clearInterval(intervalId);
    }
    run();

    startQuiz();

      $("#start").hide();
      $("#trivia").show();

    function scoreQuiz(){
        for(var i = 0; i < questions.length; i++){
            if ($("input[name=question" + i + "]").is(":checked")) {
                if ($("input[name=question" + i + "]:checked").val() === questions[i].correctAnswer) {
                    correct++;
                } else {
                    wrong++;
                }
            } 

        }

        $("#correct").html("<h2>" + "Correct Answers: " + correct + "</h2>");
        $("#wrong").html("<h2>" + "Wrong Answers: " + wrong + "<h2>");
    }

    $("#submit").on("click", function(){
        scoreQuiz();
        $("#trivia").hide();
        $("#timer").hide();
        $("#results").show();
    });

     
  });

})