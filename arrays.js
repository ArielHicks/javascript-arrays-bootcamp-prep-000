var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element){
  var destructivelyAddElementToEndOfArray.push = [element, array]
}
