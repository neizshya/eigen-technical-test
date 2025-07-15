function ReverseSentence(str: string): string {
  let tempHuruf: string = "";
  let tempAngka: string = "";

  for (const a of str) {
    if (isNaN(parseInt(a))) {
      tempHuruf += a;
    } else {
      tempAngka += a;
    }
  }

  const reverse: string = tempHuruf.split("").reverse().join("");
  return reverse + tempAngka;
}

console.log(ReverseSentence("NEGIE1"));
