const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");


const temperature = 12;
if (temperature < 0) {
  console.log("make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("short sleeves won't cut it!");
} else {
  console.log("short sleeves are fine.");
}

console.log("now you're ready to go outside!")



const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("you are eligible to vote.");
}