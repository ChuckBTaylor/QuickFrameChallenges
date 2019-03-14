const willsUtils = {};

//Stuff for question one \/ \/ \/ \/ \/ \/ \/ \/
let myArr = [1, 2, 4, 7, 10];
myArr.name = "myArr";
(function () {
  willsUtils.map = function (myFunc) {
    let returnArray = [];
    for (let x = 0; x < this.length; x++) {
      returnArray.push(myFunc(this[x]));
    }
    return returnArray;
  }
})();

willsUtils.questionOne = () => {
  console.clear();
  console.log("For Question 1, I have already declared a variable `myArr` that has come preloaded with `.map()`")
  console.log("myArr starts as:");
  console.log(myArr);
  console.log("Below you see the result of myArr.map(it => it * it);");
  myArr.map = willsUtils.map;
  let tempArr = myArr.map(it => it * it);
  console.log(tempArr);
  console.log("In order to test this on a different list, create a new list and assign willsUtils.map to its `.map` property.");
  console.log("E.g.");
  console.log("let myNewArr = ['A', 'B', 'C'];");
  console.log("myNewArr.map = willsUtils.map;");
  console.log("myNewArr.map(it => ...);")
}

function clickQuestionOne() {
  willsUtils.questionOne();
}
//Stuff for question one /\ /\ /\ /\ /\ /\ /\ /\ 

//Stuff for question two \/ \/ \/ \/ \/ \/ \/ \/
let toBeSorted = [
  { name: "Bob", age: 45 },
  { name: "Tom", age: 71 },
  { name: "Susan", age: 56 },
  { name: "Barb", age: 20 },
  { name: "Helen", age: 37 },
  { name: "Ian", age: 15 },
  { name: "Elle", age: 44 }
];
toBeSorted.name = "toBeSorted";

let objectOfTruth = {
  sort: 'name',
  order: [
    "Barb", "Helen", "Tom", "Ian", "Elle", "Susan", "Bob"
  ]
};
objectOfTruth.name = "objectOfTruth";

(function () {
  const getMapOfTruth = objectOfTruth => {
    let mapOfTruth = {};
    for (let x = 0; x < objectOfTruth.order.length; x++) {
      mapOfTruth[objectOfTruth.order[x]] = x;
    }
    return mapOfTruth;
  }

  const addRemainderOfArray = (sourceArray, arrayToAdd, startingIndex) => {
    for (let x = startingIndex; x < arrayToAdd.length; x++) {
      sourceArray.push(arrayToAdd[x]);
    }
    return sourceArray;
  }

  const mergeSortWithMapAndKeyOfTruth = (arrayToSort, mapOfTruth, keyOfTruth) => {
    if (arrayToSort.length <= 1) {
      return arrayToSort;
    } else {
      let halfLength = Math.ceil(arrayToSort.length / 2);
      let leftArray = mergeSortWithMapAndKeyOfTruth(arrayToSort.slice(0, halfLength), mapOfTruth, keyOfTruth);
      let rightArray = mergeSortWithMapAndKeyOfTruth(arrayToSort.slice(halfLength), mapOfTruth, keyOfTruth);
      let leftIndex = 0, rightIndex = 0;
      let returnArray = [];
      while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (!mapOfTruth.hasOwnProperty(leftArray[leftIndex][keyOfTruth])) {
          console.log("Below element omitted from list as its `" + keyOfTruth + "` property was not in the objectOfTruth's list.");
          console.log(leftArray[leftIndex]);
          leftIndex++;
        } else if (!mapOfTruth.hasOwnProperty(rightArray[rightIndex][keyOfTruth])) {
          console.log("Below element omitted from list as its `" + keyOfTruth + "` property was not in the objectOfTruth's list.");
          console.log(rightArray[rightIndex]);
          rightIndex++;
        } else if (mapOfTruth[leftArray[leftIndex][keyOfTruth]] < mapOfTruth[rightArray[rightIndex][keyOfTruth]]) {
          returnArray.push(leftArray[leftIndex++]);
        } else {
          returnArray.push(rightArray[rightIndex++]);
        }
      }
      if (leftIndex === leftArray.length) {
        returnArray = addRemainderOfArray(returnArray, rightArray, rightIndex);
      } else {
        returnArray = addRemainderOfArray(returnArray, leftArray, leftIndex);
      }
      return returnArray;
    }
  }
  const resort = (objectList, objectOfTruth) => {
    let mapOfTruth = getMapOfTruth(objectOfTruth);
    let keyOfTruth = objectOfTruth.sort;
    return mergeSortWithMapAndKeyOfTruth(objectList, mapOfTruth, keyOfTruth);
  }
  willsUtils.resort = resort;
})();

willsUtils.questionTwo = () => {
  console.clear();
  console.log("The console has come preloaded with two varibales: `toBeSorted` and `objectOfTruth`. See Below");
  console.log(toBeSorted);
  console.log(objectOfTruth);
  console.log("To sort the list, use the function at willsUtils.resort(toBeSorted, objectOfTruth);")
  console.log("I've done just that below.");
  let tempArr = willsUtils.resort(toBeSorted, objectOfTruth);
  console.log(tempArr);
  console.log("The function is designed to leave out an element if its `keyOfTruth` property can't be found in the `objectOfTruth.order` list.");
  console.log("But it will tell you when its done so.");
  console.log("e.g.");
  toBeSorted.push({ name: "Kyle", age: 49 })
  console.log("Adding {name: \"Kyle\", age: 49} to the list");
  console.log("And run method...");
  willsUtils.resort(toBeSorted, objectOfTruth);
  console.log("Gone but not forgotten!");
  toBeSorted.pop();
}
function clickQuestionTwo() {
  willsUtils.questionTwo();
}
//Stuff for question two /\ /\ /\ /\ /\ /\ /\ /\ 

//Stuff for question three \/ \/ \/ \/ \/ \/ \/ \/
(function () {
  const isSpaceEven = (column, row) => {
    return ((column + row) % 2) === 0;
  }
  const printChessBoard = (size = 8) => {
    for (let x = 0; x < size; x++) {
      let printString = "";
      for (let y = 0; y < size; y++) {
        printString = printString.concat("|");
        printString = printString.concat(isSpaceEven(x, y) ? "#" : " ");
        printString = printString.concat("|")
        if (y !== size - 1) {
          printString = printString.concat(" ");
        }
      }
      console.log(printString);
    }
  }
  willsUtils.printChessBoard = printChessBoard;
})();


willsUtils.questionThree = () => {
  console.clear();
  console.log("Question 3 doesn't have much of an explanation. It prints a fun chessboard.")
  console.log("It does take an argument for whatever length square you'd like.");
  console.log("But it defaults to 8");
  console.log("You can see the chessboard by calling `willsUtils.printChessBoard([size]);`");
  willsUtils.printChessBoard();
}

function clickQuestionThree() {
  willsUtils.questionThree();
}
//Stuff for question three /\ /\ /\ /\ /\ /\ /\ /\ 