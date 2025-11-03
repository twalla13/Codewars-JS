// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
  //insert brilliant code here

  //input will be char array ['n','s']
  //single block for each letter, one block is one minute

  //Must be less than 10 min and returns to starting point

  //Maybe do something like track x and y for coordinates [x,y]
  // n - [0,1], s- [0,-1]
  // e -[1,0], w - [-1,0]

  if (walk.length < 10 || walk.length > 10) {
    return false;
  }

  const coordinates = [0, 0];
  for (let direction of walk) {
    switch (direction) {
      case "n":
        coordinates[1]++;
        break;
      case "s":
        coordinates[1]--;
        break;
      case "e":
        coordinates[0]++;
        break;
      case "w":
        coordinates[0]--;
        break;

      default:
        throw new Error("Not a valid direction");
    }
  }

  console.log(coordinates);
  return coordinates[0] === 0 && coordinates[1] === 0;
  //   return walk === zero; cannot compare like thisssss
}

console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
