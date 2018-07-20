Array.prototype.uniq = function(){
  let result = [];
  this.forEach((el) => {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  return result;
};

Array.prototype.twoSum = function(){
  let result = [];
  for(let i=0; i < this.length-1; i++){
    for(let j = i + 1; j < this.length; j++){
      if (this[i] + this[j] === 0){
        result.push([i, j]);
      }
    }
  }
  return result;
};

Array.prototype.transpose = function() {
  let result = [];
  for(let i = 0; i < this[0].length; i++) {
    let sub_arr = [];
    for(let j = 0; j < this.length; j++) {
      sub_arr.push(this[j][i]);
    }
    result.push(sub_arr);
  }
  return result;
};
