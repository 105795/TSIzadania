let lunches = [];
function addLunchToEnd(arr, string) {
  arr.push(string);
  console.log(`${string} added to the end of the lunch menu.`);
  return arr;
}
function addLunchToStart(arr, string) {
  arr.unshift(string);
  console.log(string + " added to the start of the lunch menu.");
  return arr;
}
function removeLastLunch(arr) {
  if (arr.length >= 1) {
    let removed = arr.pop();
    console.log(removed + " removed from the end of the lunch menu.");
    return arr;
  } else if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }
}
function removeFirstLunch(arr) {
  if (arr.length >= 1) {
    let removed = arr.shift();
    console.log(`${removed} removed from the start of the lunch menu.`)
  } else if (arr.length === 0) {
    console.log("No lunches to remove.");
  }
  return arr;
}
function getRandomLunch (arr) {
  if (arr.length >= 1) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    console.log(`Randomly selected lunch: ${arr[randomIndex]}`)
  } else {
    console.log("No lunches available.");
  }
}
function showLunchMenu (arr) {
  if (arr.length === 0) {
      console.log("The menu is empty.");
    } else {
      console.log(`Menu items: ${arr.join(', ')}`);
    }
}

