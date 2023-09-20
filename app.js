// function weightCheck(name, weight) {
//   name = prompt("Input your name:");
//   weight = Number(prompt("Input your weight in Kg:"));
//   return `${name}'s Weight in Pounds: ${weight * 2.20462}lbs`
//   }
  
//   alert(weightCheck());

let name = prompt("Input your name:");
let weight = Number(prompt("Input your weight in Kg:"));

function weightCheck() {
 return `${name}'s weight in Pounds: ${weight * 2.20462}lbs`
}
alert(weightCheck());