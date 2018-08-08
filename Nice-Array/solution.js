function isNice(arr){
  let IsAllNice = false;
  for (var i = 0; i < arr.length; i++) {
  let num = arr[i];
  let numNice = false;
  for (var j = 0; j < arr.length; j++) {
    let num2 = arr[j]; 
    let isNice = num == num2+1 || num == num2-1;
    if (isNice == true) {
      numNice = true;
      IsAllNice = true; 
    }
    }
    if (numNice == false) {
      IsAllNice = false; 
      break;
    }
  }
  return IsAllNice 