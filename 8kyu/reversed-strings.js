// Complete the solution so that it reverses the string passed into it.

function solution(str) {
  const splitString = str.split('');

  const reverseArr = splitString.reverse();

  const joinArr = reverseArr.join('');

  return joinArr;
}

solution('world');
