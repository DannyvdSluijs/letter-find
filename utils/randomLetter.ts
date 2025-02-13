export function getLetterToFindOrRandomLetter(letterToFind: string, lettersToPickFrom: Record<string, number>): string {
    // Generate a random number between 0 and 1
    const randomChance = Math.random();

    if (randomChance < 0.15) {
        return letterToFind; // Return target letter 50% of the time
    }

    const filteredLetterWeights: Record<string, number> = Object.fromEntries(
        Object.entries(lettersToPickFrom).filter(([letter]) => letter !== letterToFind)
    );

    return getRandomLetter(filteredLetterWeights);
}

export function getRandomLetter(lettersToPickFrom: Record<string, number>): string {
    const weightedPool: string[] = [];
    Object.entries(lettersToPickFrom).forEach(([letter, weight]) => {
        for (let i = 0; i < weight; i++) {
            weightedPool.push(letter);
        }
    });

    return weightedPool[Math.floor(Math.random() * weightedPool.length)];
}