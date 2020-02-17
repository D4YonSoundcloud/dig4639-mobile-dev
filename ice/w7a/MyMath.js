export function Sum(a, b) {
  let result = undefined;
  if (typeof a === "number" && typeof b === "number") {
    result = a + b;
  } else {
    return undefined;
  }
  return result;
}

//console.log(Sum(2,3)==5)
let myArray = [];

export function AddList(myArray) {
  let result = undefined;
  if(Array.isArray(myArray) && myArray.length > 0){
    result = 0;
  for(var i = 0; i < myArray.length; i++){
    if(typeof myArray[i] != "number"){
      return undefined
    }
        result = result + myArray[i];
  }
}
  return result;
  // if (Array.isArray(newArray) && !newArray.some(isNaN)) {
  //   let addedlist = newArray.reduce((total, num) => total + num);
  //   if (addedList === 0) {
  //     return null;
  //   } else {
  //     return addedlist;
  //   }
  // }
  // return undefined;
}

export function DivideBy(number, divisor) {
  if (divisor != 0 && isNaN(divisor)) {
    var sum = number % divisor;
    return sum;
  } else {
    return undefined;
  }
}

export function ContainsString(string1, string2) {
  if (
    typeof string1 === "string" &&
    typeof string2 === "string" &&
    string1.includes(string2)
  ) {
    return true;
  } else {
    return "enter a string";
  }
}

export function ReSortedNumbers([]) {
  let newArray = [...[]];
  let sortedArray = newArray.sort();
  if(sortedArray.filter(isNaN)){
    return sortedArray;
  } else {
    return null;
  }

}

export function Adder() {}
