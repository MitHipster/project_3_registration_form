/*jslint esversion: 6, browser: true*/
/*global window, $, jQuery, alert*/

// Character counter for textarea input
let maxLength = 200; // Max character count

$('#other-topics').keyup(function () {
  let charLength = $(this).val().length;
  charLength = maxLength - charLength;
  $('#chars').text(charLength);
});