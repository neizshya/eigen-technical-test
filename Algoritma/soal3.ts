function countWord(i: string[], q: string[]): number[] {
  const output: number[] = [];

  for (const qWord of q) {
    let temp: number = 0;
    for (const iWord of i) {
      if (qWord === iWord) {
        temp++;
      }
    }
    output.push(temp);
  }

  return output;
}

const INPUT: string[] = ["xc", "dz", "bbb", "dz"];
const QUERY: string[] = ["bbb", "ac", "dz"];
console.log(countWord(INPUT, QUERY));
