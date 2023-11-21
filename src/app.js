// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop
const NEG_INF = -1000000;
const createPop = (arrayOfNumbers, itemToSearch) => {
  // Progression 2: add 3 variables: title, currIndex, check
  let title = document.createElement('h3');
  document.querySelector('body').appendChild(title);
  let currIndex = NEG_INF;
  let check = false;

  // Progression 3: create a function "searchForElement"
  const find = () => {
    arrayOfNumbers.map((ele, idx) => {
      if (ele === itemToSearch) {
        currIndex = idx;
        check = true;
      }
    });

    // Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
    // to return the desired output.

    return check
      ? (title.innerHTML = `The item is present and is at index ${currIndex}`)
      : `The item is not present and is at index ${currIndex}`;
  };

  return find;
};

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const itemToSearch = 1;
