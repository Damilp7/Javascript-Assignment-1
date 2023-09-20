function weightCheck(name, weight) {
  name = prompt("Input your name:");
  weight = Number(prompt("Input your weight in Kg:"));
  return `${name}'s Weight: ${weight * 2.20462}lbs`
  }
  
  alert(weightCheck());