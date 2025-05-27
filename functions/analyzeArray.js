// Helper functions
function findAverage(arr) {
    let sum = 0;
    arr.forEach(number => {
        sum += number;
    });
    const average = sum / arr.length;
    return average;
}

function compareNumbers(a, b) {
  return a - b;
}

function findMin(arr) {
    const sortedArray = arr.sort(compareNumbers);
    return sortedArray[0];
}

function findMax(arr) {
    const sortedArray = arr.sort(compareNumbers);
    return sortedArray[arr.length - 1];
}

// main function
export default function analyzeArray(arr) {
    // handle invalid input cases. For consistency we always return null
    // check to see if some meanie decided to input null or undefined first since reading properties of both is not a thing
    if (arr == null) return null;

    // arrays only!
    if (Array.isArray(arr) === false) return null;

    // no empty arrays
    if (arr.length === 0) return null;

    // the array must only have numbers, no NaN and no infinity
    for (const number of arr) {
        if (typeof number !== "number" || number === NaN || !Number.isFinite(number)) return null;
    }

    // if everything passes, create a new output object and perform the relevant calculations before returning said object
    const output = new Object();
    output.average = findAverage(arr);
    output.min = findMin(arr);
    output.max = findMax(arr);
    output.length = arr.length;
    return output;
}