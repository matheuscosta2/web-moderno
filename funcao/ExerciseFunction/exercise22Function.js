function anualValue(month, value) {
  if (month > 0 && month < 13) {
    late = month - 1;
    return value * (1 + 0.5) ** late;
  } else {
    return "Error";
  }
}

console.log(anualValue(2, 100));
