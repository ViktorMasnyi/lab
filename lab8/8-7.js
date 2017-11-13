function isPaired(string) {
  var parentheses = "()",
    stack = [],
    i, character, bracePosition;

  for(i = 0; character = string[i]; i++) {
    bracePosition = parentheses.indexOf(character);

    if(bracePosition === -1) {
      continue;
    }

    if(bracePosition % 2 === 0) {
      stack.push(bracePosition + 1); // push next expected brace position
    } else {
      if(stack.length === 0 || stack.pop() !== bracePosition) {
        return false;
      }
    }
  }

  if (stack.length === 0) return 'YES';
  else return 'NO'
}
var strToCheck = prompt();
document.write('sting to check: ' + strToCheck + '<br>' + isPaired(strToCheck));
