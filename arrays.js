var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  var newerArray = [ ...array, element]
  return newerArray
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return 
}
