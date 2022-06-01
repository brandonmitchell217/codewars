// Description
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let placeNonZeros = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[placeNonZeros] = arr[i];
      placeNonZeros++;
    }
  }

  for (let i = placeNonZeros; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}
