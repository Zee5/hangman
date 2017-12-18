$(document).ready(function() {
  var chosenWord = '';
  var myWord = [];
  var blankSpaces = [];
  var letterIndex = [];      // this variable was never used
  var arrayReplace = [];      // this variable was never used
  var previousGuesses = [];      // this variable was never used
  var lives = 6;
  var possibleWords = ['DO', 'FOR', 'CHAR', 'CLASS','ARGUMRNTS', 'DELETE'];
  // ["boolean", "break", "byte", "case", "catch", "abstract",  "arguments",  "await" "const",  "continue", "debugger", "default",  "delete",  "double",  "else", "enum", "eval", "export", "extends",  "false",  "final", "finally", "float",  "for",  "function", "goto", "if", "implements", "import", "in", "instanceof", "int",  "interface", "let", "long", "native", "new", "null",  "package",  "private",  "protected", "public",  "return", "short",  "static", "super", "switch",  "synchronized", "this", "throw",  "throws", "transient",  "true", "try",  "typeof", "var",  "void", "volatile", "while",  "with", "yield"]

  $('#beginGame').on('click', startGameClick)
  $('.letter').on('click', letterClick)

   // The function runs when clicking the start button
  function startGameClick() {
    // random word selection from the array
    var chosenWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    for (var i = 0; i < chosenWord.length; i++) {
      myWord.push(chosenWord[i]);
      blankSpaces.push('_ '); // pushing underscore
    }
    $('#hidden').append((blankSpaces));      // puts all the _'s in the dom in the div with the 'hidden' id
    $('#livesLeftNumber').text(lives);  // displays lives on the dom when start game is clicked
    showHangedMan(lives);
  };
  // when any letter clicked form the screen, then letterClick function runs
  function letterClick() {
    $(this).hide();
    var pressedLetter = this.innerHTML;    // assings button pressed to var pressedLetter
    for (var i = 0; i < myWord.length; i++) {
      if (pressedLetter === myWord[i]) {
        blankSpaces[i] = pressedLetter;
      }
    }
    // Grab letters from the array writes it into the answer area
      $('.hiddenClass').text(blankSpaces.join(' '));
      if (blankSpaces.indexOf('_ ') === -1) {
        $('#incorrectTryBox').text('You Win!'); //
        setTimeout(location.reload.bind(location), 6000);
        // after you win refreshes the page after 6 seconds to start over
        }
      if (!(myWord.indexOf(pressedLetter) > -1)) {
        lives -= 1;
        showHangedMan(lives);         // everytime lives counts down goes through the switch/case
        $('#livesLeftNumber').text(lives);

        }
      if (lives < 1) {
        $('#incorrectTryBox').text('YOU LOSE!');
        $('.hiddenClass').text(myWord.join(' '));   // added in to show the word when you lose
        setTimeout(location.reload.bind(location), 6000);
        // after you lose refreshes the page after 5 seconds to start over
      }
  };
  // everytime lives counts down goes through the switch/case
  var showHangedMan = function(anyParam) {
    switch (anyParam) {
      case 6:
          $('#hangmanHead').hide();
          $('#hangmanBody').hide();
          $('#hangmanLeftArm').hide();
          $('#hangmanRightArm').hide();
          $('#hangmanLeftLeg').hide();
          $('#hangmanRightLeg').hide();
            break;
      case 5: $('#hangmanHead').show();
            break;
      case 4:
          $('#hangmanBody').show();
            break;
      case 3:
          $('#hangmanLeftArm').show();
            break;
      case 2:
          $('#hangmanRightArm').show();
            break;
      case 1:
          $('#hangmanLeftLeg').show();
            break;
      case 0:
          $('#hangmanRightLeg').show();
            break;
      default:
            break;
    }
  }
});
