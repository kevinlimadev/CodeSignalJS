function createZeroMatrix(rows, columns) {
  return Array.from({ length: rows }, () => Array(columns).fill(0));
}

console.log(createZeroMatrix(3, 3));
