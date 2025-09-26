export class CharacterCollection {
    data;
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const allCharacter = this.data.split("");
        const leftHand = allCharacter[leftIndex];
        allCharacter[leftIndex] = allCharacter[rightIndex];
        allCharacter[rightIndex] = leftHand;
        this.data = allCharacter.join("");
    }
}
//# sourceMappingURL=CharacterCollection.js.map