
module('FizzBuzz');

/*
Write a function, that takes a number of elements N.
It must create a string filled with consecutive numbers from 1 to N, with exceptions:

Replace any numbers that are divisible by 3 with string 'Fizz'
Replace any numbers that are divisible by 5 with string 'Buzz'
Replace numbers that are divisible by both 3 and 5 with string 'FizzBuzz'

fizzBuzz(1) == '1'
fizzBuzz(2) == '1 2'
fizzBuzz(3) == '1 2 Fizz'
fizzBuzz(5) == '1 2 Fizz 4 Buzz'
fizzBuzz(15) == '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz'
*/

function fizzBuzz(n) {
        var str = '';
        var space = ' ';
        // Write your code here
        if(!n) return alert('please input positive integer');
        for (var i = 1; i <= n; i++) {
            // if (i = n) space = '';
            if (i % 3 == 0 && i % 5 == 0) {
            str += 'FizzBuzz' + space;
            continue;
            }
            if (i % 3 == 0) {
            str += 'Fizz' + space;
            continue;
            }
            if (i % 5 == 0) {
            str += 'Buzz' + space; 
            }    
            else str += i + space;    
        }
        return str.slice(0, -1);
}

test('FizzBuzz', function() {
  equal(fizzBuzz(1), '1', 'correct fizzBuzz(1)');
  equal(fizzBuzz(2), '1 2', 'correct fizzBuzz(2)');
  equal(fizzBuzz(3), '1 2 Fizz', 'correct fizzBuzz(3)');
  equal(fizzBuzz(5), '1 2 Fizz 4 Buzz', 'correct fizzBuzz(5)');
  equal(fizzBuzz(15), '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz', 'correct fizzBuzz(15)');
});
