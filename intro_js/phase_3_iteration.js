Array.prototype.bubbleSort = function() {
  let copy = this.slice();
  for(let i = 0; i < copy.length-1; i++) {
    for(let j = i+1; j < copy.length; j++) {
      if (copy[i] > copy[j]) {
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
    }
  }
  return copy;
};

String.prototype.substrings = function(){
  let result = [];
  for (let i = 0; i < this.length; i++){
    for(let j = i + 1; j < this.length + 1; j++){
      result.push(this.slice(i,j));
    }
  }
  return result;
};
