// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var player = 'x';

  $('.box').on('click', function placeIcon() {
    $(this).text(player);
  });

  $('#reset').on('click', function resetBoard() {
    $('.box').text('');
  });

});
