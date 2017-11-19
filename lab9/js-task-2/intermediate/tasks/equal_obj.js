module('Deep comparison');

/*
Напишіть функцію, яка приймає два значення і повертає true, 
тільки якщо це два однакових значення або це об'єкти, властивості 
яких мають однакові значення 
*/

function deepEqual(a, b) {
  var checkStatus = 0;
  if (a === b) return true;
  if (typeof(a) !== typeof(b)) return false;
  if (typeof(a) == 'number' && isNaN(a) && isNaN(b)) return true;
  
  var aKeys = Object.keys(a),
      bKeys = Object.keys(b);

  if (aKeys.length != bKeys.length) return false; // compare quantity of keys
  if (!aKeys.every(function(key) {return b.hasOwnProperty(key)})) return false; // check if a and b keys are equal
  return aKeys.every(function(key) { // Check key values
    return deepEqual(a[key], b[key])
  });
  return false;   
}

test('Deep comparison', function() {
  var obj = {here: {is: "an"}, object: 2};
  equal(deepEqual(obj, obj), true, "один об'єкт");
  
  equal(deepEqual(obj, {here: 1, object: 2}), false, "різні об'єкти");
  
  equal(deepEqual(obj, {here: {is: "an"}, object: 2}), true, "два однакових об'єкти");

  equal(deepEqual(13, 13), true, "прості типи");

  equal(deepEqual(13, "13"), false, "прості типи");
  
});
