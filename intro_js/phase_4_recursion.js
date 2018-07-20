function range(start, end) {
  if (end < start) {
    return -1;
  }
  if (start === end) {
    return [start];
  }
  let result = [start];
  result = result.concat(range(start+1, end));
  return result;
}

function sumRec(arr){
  if (arr.length === 1) {
    return arr[0];
  }
  currNum = arr.shift();
  return (currNum + sumRec(arr));
}

function exponent(base, exp){
  if (exp === 0){
    return 1;
  }
  return base * exponent(base, exp - 1);
}

function exponent2(base, exp){
  if (exp === 0){
    return 1;
  }
  if (exp === 1){
    return base;
  }

  if (exp % 2 === 0){
    let result = exponent2(base, exp/2);
    return result * result;
  }
  else {
    let result = exponent2(base,((exp-1)/2));
    return(base * (result * result));
  }
}

function fibonacci(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  }
  let previous_fib = fibonacci(n-1);
  previous_fib.push(previous_fib[previous_fib.length-1] + previous_fib[previous_fib.length-2]);
  return previous_fib;
}

function deepDup(arr){
  //checking if all elements are not arrays.
  if (arr.every(el => !Array.isArray(el))){ // typeOf(el) === "Array"
    return arr.slice();
  }

  let result = [];
  arr.forEach((el) => {
    if (Array.isArray(el)){
      result.push(deepDup(el));
    } else {
      result.push(el);
    }
  });
  return result;
}

function bsearch(arr, target) {
  if (arr.length === 0) return -1;
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return bsearch(arr.slice(0, mid), target);
  } else {
    let result = bsearch(arr.slice(mid+1), target);
    return (result === -1) ? -1 : result + mid + 1;
  }
}

function mergeSort(arr){
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right){
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]){
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }
  return result.concat(left.concat(right));
}

function subsets(arr) {
  if (arr.length === 0) return [[]];

  let last = arr.pop();
  let previous_sub = subsets(arr);
  let result = [];

  previous_sub.forEach((el) => {
    let elCopy = el.slice();
    elCopy.push(last);
    result.push(elCopy);
  });
  return previous_sub.concat(result);
}
