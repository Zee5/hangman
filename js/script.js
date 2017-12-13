$(document).ready(function() {
  var chosenWord = '';
  var myWord = [];
  var blankSpaces = [];
  var letterIndex = [];
  var arrayReplace = [];
  var previousGuesses = [];
  var lives = 6;              
  var possibleWords = ['DO', 'FOR', 'CHAR', 'CLASS','DELETE'];
  // ["boolean", "break", "byte", "case", "catch", "abstract",  "arguments",  "await" "const",  "continue", "debugger", "default",  "delete",  "double",  "else", "enum", "eval", "export", "extends",  "false",  "final", "finally", "float",  "for",  "function", "goto", "if", "implements", "import", "in", "instanceof", "int",  "interface", "let", "long", "native", "new", "null",  "package",  "private",  "protected", "public",  "return", "short",  "static", "super", "switch",  "synchronized", "this", "throw",  "throws", "transient",  "true", "try",  "typeof", "var",  "void", "volatile", "while",  "with", "yield"]

  $('#beginGame').on('click', startGameClick) 
  $('.letter').on('click', letterClick)
  
   // when clicking the start button, run this function
  function startGameClick() {
    var chosenWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];  // randomly picks a word from the array
    for (var i = 0; i < chosenWord.length; i++) {
      myWord.push(chosenWord[i]);    // puts in _ for the length of the word
      blankSpaces.push('_ ');

      

}); 