function matrixDiff(matrix: number[][]): number {
  let d1: number = 0;
  let d2: number = 0;
  const n: number = matrix.length;

  for (let i = 0; i < n; i++) {
    d1 += matrix[i][i];
    d2 += matrix[i][n - 1 - i];
  }

  return Math.abs(d1 - d2);
}

const matrix: number[][] = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrixDiff(matrix));
