function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temporary = 0;
    for (var i=min; i <= max; i++){
        temporary+= i;
    }

  return temporary;
}

sumAll([1, 4]);
