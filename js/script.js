'use strict';

const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function indexOf ( arr , item) {
    for ( let i = 0; i < arr.length; i++) {
        if ( arr[i] === item ) {
            return i;
        }
    }
    return -1;
}

console.log( "Index item = " + indexOf(arr, 5));

function lastIndexOf ( arr, item) {
    for ( let i = arr.length; i > -1; i--) {
        if ( arr[i] === item) {
            return i;
        }
    }
    return -1;
}

console.log("Index item = " + lastIndexOf(arr, 5 ));

function findItem (arr , item) {
    for ( let i = 0; i < arr.length; i++) {
        if (item(arr[i] , i , arr)) {
            return arr[i];

        }
    }
    return undefined;
}

console.log("Find item = " +
    findItem(arr , function (value){
        return value === 5;
    }));

function findItemIndex ( arr , item , index) {
    for ( let i = 0; i < arr.length; i++) {
        if ( item (arr[i] , i , index)) {
            return i;
        }
    }
    return -1 ;
}

console.log(
    "Find index item = " +
    findItemIndex (arr,function (value){
      return value === 5;
    }
    ));

function includes ( arr, searchElement , fromIndex = 0) {
    for ( let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            return true;
        }
    }
    return false;
}

console.log("Search item: 5 includes to array : "
    + includes(arr, 5 ,4));


function every ( arr , callback) {
    for ( let i = 0; i < arr.length; i++) {
        if (!callback ( arr[i], i , arr)) {
            return false;
        }
    }
    return true;
}


console.log( "Сhecking an array for type : " +
    every(arr, function (value) {
            return  typeof value === 'number';
    }
    ));


function some (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i , arr )) {
            return true;
        }
    }
    return false;
}

console.log("Checking if an array has an element > 10 : "
    + some(arr, function (value){
        return   value > 10;
    }
    ));
