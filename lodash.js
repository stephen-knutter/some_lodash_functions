var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 // Returns the first element of an array.
_.first = function(array) {
  // Place your solution here
  if(Array.isArray(array)){
    var iElem = array.shift();
    return iElem;
  } else {
    return false;
  }
};

 // Returns the first n number of elements in an array.
_.take = function(array, n) {
	// Place your solution here
  if(!n || n <= 0){
    n = 1;
  } else {
    n = parseInt(n);
  }
  if(Array.isArray(array)){
    length = array.length;
    newArray = array.slice(0,n);
    return newArray;
  } else {
    return false;
  }
};

// Returns the last element of an array.
_.last = function(array) {
	// Place your solution here
  if(Array.isArray(array)){
    var iElem = array.pop();
    return iElem;
  } else {
    return false;
  }
};

// Returns the last n number of elements in an array.
_.takeRight = function(array, n) {
	// Place your solution here
  var length = array ? array.length : 0;
  if(!length){
    return [];
  }
  if(!n || n <= 0){
    n = 1;
  } else {
    n = parseInt(n);
  }
  var firstItem = array.slice(-1);
  if(n > 1){
    var lastItems = array.slice(-n,-1);
  }
  if(lastItems){
    newArray = lastItems.concat(firstItem);
  } else {
    newArray = firstItem;
  }
  return newArray;
};

// Returns a new array with all falsey values removed.
// falsy values: false, null, 0, "", undefined, and NaN.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(array) {
	// Place your solution here
  if(Array.isArray(array)){
    var length = array.length;
    for(var i=0; i < length; i++){
      curVal = array[i];
      if(!curVal){
        array.splice(i,1);
      }
    }
    return array;
  } else {
    return false;
  }
};

// Returns a new array of elements in the first argument, but
// excludes any element found in the second argument.
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function(arrayOne, arrayTwo) {
	// Place your solution here
  if(Array.isArray(arrayOne) && Array.isArray(arrayTwo)){
    arrayOne.map(function(item,index){
      if(arrayTwo.indexOf(item) !== -1){
        arrayOne.splice(index,1);
      }
    })
    return arrayOne;
  } else {
    return false;
  }
};

// Returns element with minimum
// value in an array.
_.min = function(array) {
	// Place your solution here
  if(Array.isArray(array)){
    array.sort();
    var minElem = array.shift();
    return minElem;
  } else {
    return false;
  }
};

// Returns element with maximum
// value in an array.
_.max = function(array) {
	// Place your solution here
  if(Array.isArray(array)){
    array.sort();
    var maxElem = array.pop();
    return maxElem;
  } else {
    return false;
  }
};

// Returns either index of matched element or
// -1.
_.indexOf = function(array, el) {
	// Place your solution here
  if(Array.isArray(array)){
    var index = array.indexOf(el);
    return index;
  } else {
    return false;
  }
};

/*************** BONUS ***************/
// Retuns a new array with elements in shuffled order.
_.shuffle = function(array) {
	// Place your solution here
};

/**************************************
************* COLLECTIONS *************
**************************************/
// Returns the length of a collection.
_.size = function(collection) {
	// Place your solution here
};

// Iterates on each element of a collection and
// then returns the original collection.
_.forEach = function(collection, callback) {
	// Place your solution here
};

// Iterates on each element of a collection and
// then returns a new array.
_.map = function(collection, callback) {
	// Place your solution here
};

// Returns a new collection with filtered elements.
_.filter = function(collection, callback) {
	// Place your solution here
};

// Returns a new collection with unfiltered elements.
_.reject = function(collection, callback) {
	// Place your solution here
};

/*************** BONUS ***************/
 // Returns n number of elements in a collection.
_.sample = function(collection, n) {
	// Place your solution here
};

module.exports = _;
