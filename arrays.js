var chocolateBars = ["snickers","hundred grand","kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return [element,...array]
}


function destructivelyAddElementToBeginningOfArray(array ,element){
  return array.unshift(element)
}


function addElementToEndOfArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array ,element){
  return array.push(element)
}


function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}