const userInputString = prompt(
    "Your Froyo Order.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

  const stringArray = userInputString.split(",");

  console.log (stringArray);

  // loop function sorts array
  

 // object tracks array elements count

 const flavors = {
  vanilla: 3,
  strawberry: 1,
  coffe: 2,
 }

  // loop function sorts array

 for(const vanilla in flavors){
  console.log(vanilla);
};

console.log(Object.keys(flavors));

console.log(Object.values(flavors));

  // function to return total count of order

function mapOrder(elements) {
  const map = {};
  for (let i = 0; i < elements.length; i++) {
    if (map[elements[i]]) {
      map[elements[i]]++;
    } else {
      map[elements[i]] = 1;
    }
  }
  return map;
}

console.log("mapOrder result: ", mapOrder(stringArray));