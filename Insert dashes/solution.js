function insertDash(num) {
  let number = num.toString();
  let numbers = number.split('');
  var newNumbers = [];
  for(var i = 0; i < numbers.length; i++) {
    if(numbers[i]%2 !== 0) {
      if(i !== 0) {
        if(numbers[i-1]%2 !== 0) {
          newNumbers.push('-');
        }
      }
    }
    newNumbers.push(numbers[i]);
  }
  let newNumber = newNumbers.join('');
  return newNumber;
}