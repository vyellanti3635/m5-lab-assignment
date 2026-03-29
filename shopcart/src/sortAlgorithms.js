// Bubble Sort - O(n^2)
// compares adjacent elements and swaps them if out of order
// repeats until no more swaps needed
export function bubbleSort(arr, key) {
  let sorted = arr.map(item => ({ ...item }));
  let n = sorted.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      let valA = sorted[j][key];
      let valB = sorted[j + 1][key];

      // handle string vs number comparison
      if (typeof valA === 'string') {
        if (valA.localeCompare(valB) > 0) {
          let temp = sorted[j];
          sorted[j] = sorted[j + 1];
          sorted[j + 1] = temp;
        }
      } else {
        if (parseFloat(valA) > parseFloat(valB)) {
          let temp = sorted[j];
          sorted[j] = sorted[j + 1];
          sorted[j + 1] = temp;
        }
      }
    }
  }
  return sorted;
}

// Quick Sort - O(n log n) average
// picks a pivot, partitions into left (smaller) and right (larger)
// recursively sorts each side
export function quickSort(arr, key) {
  let sorted = arr.map(item => ({ ...item }));
  return qSort(sorted, key);
}

function qSort(arr, key) {
  if (arr.length < 2) return arr;

  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;

    let valCurrent = arr[i][key];
    let valPivot = pivot[key];

    let goLeft;
    if (typeof valCurrent === 'string') {
      goLeft = valCurrent.localeCompare(valPivot) < 0;
    } else {
      goLeft = parseFloat(valCurrent) < parseFloat(valPivot);
    }

    if (goLeft) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...qSort(left, key), pivot, ...qSort(right, key)];
}

// Merge Sort - O(n log n) guaranteed
// splits array in half, sorts each half, merges them back
export function mergeSort(arr, key) {
  let sorted = arr.map(item => ({ ...item }));
  return mSort(sorted, key);
}

function mSort(arr, key) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let leftHalf = mSort(arr.slice(0, mid), key);
  let rightHalf = mSort(arr.slice(mid), key);

  return merge(leftHalf, rightHalf, key);
}

function merge(left, right, key) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    let valL = left[i][key];
    let valR = right[j][key];

    let leftFirst;
    if (typeof valL === 'string') {
      leftFirst = valL.localeCompare(valR) <= 0;
    } else {
      leftFirst = parseFloat(valL) <= parseFloat(valR);
    }

    if (leftFirst) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}
