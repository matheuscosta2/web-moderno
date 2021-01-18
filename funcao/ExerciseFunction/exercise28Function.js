function read(array) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log(`Pares ${even}, Ímpares ${odd}`);
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
read(vetor);
