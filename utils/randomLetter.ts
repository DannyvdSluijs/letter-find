export function getLetterToFindOrRandomLetter(letterToFind: string, lettersToPickFrom: string[]): string {
    // Generate a random number between 0 and 1
    const randomChance = Math.random();

    // 50% chance to pick the target letter
    if (randomChance < 0.3) {
        return letterToFind; // Return target letter 50% of the time
    }

    // Pick a random letter from the array (excluding target letter)
    const filteredLetters = lettersToPickFrom.filter((l) => l !== letterToFind);

    return getRandomLetter(filteredLetters);
}

export function getRandomLetter(lettersToPickFrom: string[]): string {
    const randomIndex = Math.floor(Math.random() * lettersToPickFrom.length);

    return lettersToPickFrom[randomIndex];
}