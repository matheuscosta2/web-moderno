const value = 100;

const healthPlan = (age) => {
  if (age < 0) {
    return "Error";
  } else if (age < 10) {
    return value + 80;
  } else if (age < 30) {
    return value + 50;
  } else if (age < 60) {
    return value + 95;
  } else {
    return value + 130;
  }
};

console.log(healthPlan(9));
