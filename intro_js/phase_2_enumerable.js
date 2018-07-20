Array.prototype.myEach = function(callback){
  this.forEach(callback);
};

Array.prototype.myMap = function(callback){
  let result = [];
  this.myEach(el => result.push(callback(el)));
  return result;
};


Array.prototype.myReduce = function(callback, initialValue){
  if (!initialValue) {
    initialValue = this.shift();
  }
  this.myEach(el => initialValue = callback(initialValue, el));
  return initialValue;
};

let multiply = function(el) {
  return el * 2;
};
