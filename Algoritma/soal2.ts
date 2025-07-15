function longestWord(sentence: string): string {
  const words: string[] = sentence.split(" ");
  let temp: string = "";

  for (const word of words) {
    if (word.length > temp.length) {
      temp = word;
    }
  }

  return `${temp}: ${temp.length} character`;
}

console.log(longestWord("Saya sangat senang mengerjakan soal algoritma"));
