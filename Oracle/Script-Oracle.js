var vid = document.getElementById("myVideo");

function playVid() {
  vid.play();
}

$(document).ready(function () {
  var oracle = {};
  oracle.listofanswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
  ];

  oracle.getAnswer = function (question) {
    var randomNumber = Math.random();
    var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
    var answer = this.listofanswers[randomAnswer];

    $("#answer").text(answer);
    $("#answer").fadeIn(3000);

    console.log(question);
    console.log(answer);
  };
  $("#answer").hide();

  var onClick = function () {
    $("#answer").hide();

    var question = prompt("What do you want to know?");
    oracle.getAnswer(question);
  };

  $("#questionButton").click(onClick);
});
