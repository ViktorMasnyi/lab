
module('Braces');

/*
Write a function that validates a series of braces.
*/

function validSequence(braces) {
 // Write code here
  var parentheses = "()[]{}<>",
    stack = [],
    i, character, bracePosition;

  for(i = 0; character = braces[i]; i++) {
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

  return stack.length === 0;
}

test('Simple valid cases', function() {
  equal(validSequence(''), true, 'empty string validates');
  equal(validSequence('[]'), true, 'square braces');
  equal(validSequence('()'), true, 'round braces');
  equal(validSequence('{}'), true, 'figure braces');
  equal(validSequence('<>'), true, 'brackets');
});

test('Simple invalid cases', function() {
  equal(validSequence('}'), false, 'invalid case');
  equal(validSequence('({'), false, 'invalid case');
  equal(validSequence('[<]'), false, 'invalid case');
  equal(validSequence('({)}'), false, 'invalid case');
});

test('Final cases', function() {
  equal(validSequence('([](<{}>))'), true, 'valid case');
  equal(validSequence('({[](<{}>}))'), false, 'invalid case');
});
