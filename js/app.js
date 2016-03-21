// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var player = "X";

  function nextPlayer() {
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
  }

  $('.box').on('click', function placeIcon() {
    $(this).text(player);
    $(this).addClass(player);
    nextPlayer();
  });



  $('#reset').on('click', function resetBoard() {
    $('.box').text("");
    $('.box').removeClass("X");
    $('.box').removeClass("O");
    player = "X";
  });

});
