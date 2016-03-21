// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var player = "X";
  var count = 0;

  function nextPlayer() {
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
  }

  function getWinner() {
    var winner = "";
    if ( $('#a1').text() === "X" && $('#a2').text() === "X" && $('#a3').text() === "X" ) {
      winner = "X";
    } else if ( $('#b1').text() === "X" && $('#b2').text() === "X" && $('#b3').text() === "X" ) {
      winner = "X";
    } else if ( $('#c1').text() === "X" && $('#c2').text() === "X" && $('#c3').text() === "X" ) {
      winner = "X";
    } else if ( $('#a1').text() === "X" && $('#b1').text() === "X" && $('#c1').text() === "X" ) {
      winner = "X";
    } else if ( $('#a2').text() === "X" && $('#b2').text() === "X" && $('#c2').text() === "X" ) {
      winner = "X";
    } else if ( $('#a3').text() === "X" && $('#b3').text() === "X" && $('#c3').text() === "X" ) {
      winner = "X";
    } else if ( $('#a1').text() === "X" && $('#b2').text() === "X" && $('#c3').text() === "X" ) {
      winner = "X";
    } else if ( $('#a3').text() === "X" && $('#b2').text() === "X" && $('#c1').text() === "X" ) {
      winner = "X";
    } else if ( $('#a1').text() === "O" && $('#a2').text() === "O" && $('#a3').text() === "O" ) {
      winner = "O";
    } else if ( $('#b1').text() === "O" && $('#b2').text() === "O" && $('#b3').text() === "O" ) {
      winner = "O";
    } else if ( $('#c1').text() === "O" && $('#c2').text() === "O" && $('#c3').text() === "O" ) {
      winner = "O";
    } else if ( $('#a1').text() === "O" && $('#b1').text() === "O" && $('#c1').text() === "O" ) {
      winner = "O";
    } else if ( $('#a2').text() === "O" && $('#b2').text() === "O" && $('#c2').text() === "O" ) {
      winner = "O";
    } else if ( $('#a3').text() === "O" && $('#b3').text() === "O" && $('#c3').text() === "O" ) {
      winner = "O";
    } else if ( $('#a1').text() === "O" && $('#b2').text() === "O" && $('#c3').text() === "O" ) {
      winner = "O";
    } else if ( $('#a3').text() === "O" && $('#b2').text() === "O" && $('#c1').text() === "O" ) {
      winner = "O";
    }
    return winner;
  }

  $('.box').on('click', function addMarker() {
    if ($(this).text() === "") {

      $(this).text(player);
      $(this).addClass(player);
      count ++;
      console.log(count);
      var winner = getWinner();
      if (winner) {
        alert(winner + " has won!");
      } else if (count < 9) {
        nextPlayer();
      } else {
        alert("It's a Draw!");
      }
    } else {
      alert("Taken");
    }
  });

  $('#reset').on('click', function resetBoard() {
    $('.box').text("");
    $('.box').removeClass("X");
    $('.box').removeClass("O");
    player = "X";
    count = 0;
  });
});
