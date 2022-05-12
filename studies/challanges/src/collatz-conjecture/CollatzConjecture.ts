export class CollatzConjecture {
  /**
   * O cache de todas as sequências já calculadas (para otimização).
   */
  sequencesLenghtCache: number[] = [];

  /**
   * Retorna o próximo número após um número impar.
   * @param {number} number
   * @returns number
   */
  getNextNumberByOdd(number: number) {
    return number * 3 + 1;
  }
  /**
   * Retorna o próximo número após um número par.
   * @param {number} number
   * @returns number
   */
  getNextNumberByEven(number: number) {
    return number / 2;
  }

  /**
   * Retorna o número com a maior sequência calculada entre dois números.
   * @param {initialNumber} number O número inicial da sequência que deve ser calculado.
   * @param {finalNumber} number O número final da sequência que deve.
   * @returns {{ sequenceLenght: number, number: number }}
   */
  getGreatestSequenceBetween(
    initialNumber: number,
    finalNumber: number
  ): Promise<{
    number: number;
    sequenceLenght: number;
  }> {
    return new Promise((resolve) => {
      let longestSequenceLength = 1;
      let longestSequenceNumber = 0;
      let currentIndex = initialNumber;

      while (currentIndex < finalNumber) {
        let length = 1;
        let number = currentIndex;

        while (number !== 1) {
          if (number > finalNumber && this.sequencesLenghtCache[number]) {
            length = length + this.sequencesLenghtCache[number];
            break;
          }

          if (number % 2 === 0) number = this.getNextNumberByEven(number);
          else number = this.getNextNumberByOdd(number);

          length += 1;
        }

        this.sequencesLenghtCache[number] = length;

        if (length > longestSequenceLength) {
          longestSequenceNumber = currentIndex;
          longestSequenceLength = length;
        }

        currentIndex += 1;
        if (currentIndex === finalNumber) {
          resolve({
            number: longestSequenceNumber,
            sequenceLenght: longestSequenceLength,
          });
        }
      }
    });
  }
}
