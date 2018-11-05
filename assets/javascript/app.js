//global variables
var correct = 0;
var wrong = 0;

//questions and answers for quiz
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

//Document Ready
$(document).ready(function() {

    //Hide quiz and answer results
   $("#trivia").hide();
   $("#results").hide();

    //Generate Questions and Answer choices
    function startQuiz (){

      //store answers  
      var answers;

     //Store output to append to DOM
      var output = [];

      for (var i = 0; i < questions.length; i++) {
          answers =[];
      for(letter in question[i].choices){

       // Creat radio buttons
        answers.push(
            "<label>" +
            "<input type='radio' name=question" + i + " value=" + letter + "> " +
            questions[i].choices[letter] +
            "</label><br>"
        )
      }

      //Push questions and choices to Output
      output.push(
        "<div class='question'><h2>" + questions[i].question + "</h2></div>" +
        "<div class='answers'>" + answers.join(" ") + "</div><br>" 
      )
    }

    //Append output to DOM
    $("#quiz").append(output.join(" ") + "<br>" + "<button type='button' class='buttons' id='submit'>SUBMIT</button>");

}


// Start quiz

$("#start").on("click", function () {

    // Timer
    var number = 120;
    var intervalId;

    function run() {
        clearInterval(intervalId);
        invervalId = setInterval(decerement, 1000);
    }

    function decerement() {
        number--;
        $("#time").text(number);
        if (number === 0) {
            stop()
        }
    }

    function stop() {
        clearInterval(invervalId);
        scoreQuiz();
        $("#quiz").hide();
        $("#stats").show();
    };

    run();

    startQuiz();

    $("#quiz").show();
    $(".start").hide();


    //Score quiz
    function scoreQuiz() {
        for (i = 0; i < questions.length; i++) {

            if ($("input[name=question" + i + "]").is(":checked")) {
                if ($("input[name=question" + i + "]:checked").val() === questions[i].correctAnswer) {
                    right++;
                } else {
                    wrong++;
                }
            } 
        }
//Write results to DOM
        $("#right").text(right);
        $("#wrong").text(wrong);
 
}
     

    // Done Button
    $("#done").on("click", function () {
        scoreQuiz();
        $("#quiz").hide();
        $("#stats").show();
    });
})
})





