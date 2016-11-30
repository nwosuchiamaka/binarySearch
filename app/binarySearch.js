Array.prototype.toTwenty = function(){
  var result = [];
  for (var i=1; i <= 20; i++){
    result.push(i);
  }
 
  return result;
};

Array.prototype.toForty = function(){
  var result = [];
  for (var i=2; i<= 40; i += 2){
    result.push(i);
  }
  return result;
};

Array.prototype.toOneThousand = function(){
  var result = [];
  for (var i=10; i<= 1000; i += 10){
    result.push(i);
  }
  return result;
};

Array.prototype. search = function(targetValue) {
    var min = 0;
    var max = this.length - 1;
    var guess;
    var count = 0;
    var index = -1;
    var length = this.length;
    while(min <= max) {
      console.log(min, max);
        guess = parseInt((max + min) / 2);
        if (this[guess] === targetValue) {
            index = guess;
            break;
        }
        else if (this[guess] < targetValue) {
            min = guess + 1;
        }
        else {
            max = guess - 1;
        }
        
        // Increment count by 1
        count++;
    }

    return {
      count,
      length,
      index
    };
};


