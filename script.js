function fib(num) {
    let theAnswer = [];
    let calcNumber = 0;
    let i = 1;
    if (num >= 1) {
      theAnswer = [0,1];
      while (i+1 < num) {
        calcNumber = theAnswer[i] + theAnswer[i-1];
        theAnswer.push(calcNumber);
        i++;
      }
    } else {
      theAnswer = [0];
    }
    alert(theAnswer);
  }
  
  let userNum =prompt("pick a number");
  userNum == parseInt(userNum);
  fib(userNum);
  
  
  let calcNumber = 0;
  let theAnswer = [0,1];
  function fibRec(num, arr) {
    if (num == 2) {
      alert(arr) ;
    } else {
      calcNumber = arr[arr.length-1] + arr[arr.length-2];
      arr.push(calcNumber);
      return fibRec(num-1, arr);
    }
  }
  
  fibRec(userNum, theAnswer);
  
  let someArray = [1,4,7,3,8,2,9,15,47,26,18,8];
  mergeSort(someArray, 1, someArray.length)
  alert(someArray);
  
  function mergeSort(arr, low, high) {
    if (low < high) {
      let mid=parseInt((low + high)/2);
      mergeSort(arr, low, mid);
      mergeSort(arr, mid + 1, high);
      merge(arr,low, mid, high);
    }
  }
  
  function merge(arr,low, mid, high) {
    let newArray = [];
      left = someArray.slice(low-1,mid);
      right = someArray.slice(mid,high);
    while (right.length > 0 && left.length > 0)  {
      if (left[0] < right[0]) {
        newArray.push(left.shift());
      } else {
        newArray.push(right.shift());
      }
    }
  if (right.length == 0) {
    while (left.length > 0) {
      newArray.push(left.shift());
    }}
  if (left.length == 0) {
    while (right.length > 0) {
      newArray.push(right.shift());
    }
  }
  Array.prototype.splice.apply(someArray, [low-1, newArray.length].concat(newArray));
  return newArray;
  }