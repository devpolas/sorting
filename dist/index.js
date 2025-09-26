import { Sort } from "./Sorter.js";
import { NumberCollection } from "./NumberCollection.js";
import { CharacterCollection } from "./CharacterCollection.js";
const numberCollection = new NumberCollection([10, 11, 31]);
const sortNumber = new Sort(numberCollection);
sortNumber.sort();
console.log(numberCollection.data);
const characters = new CharacterCollection("XaFvHRgdP");
const sortCharacter = new Sort(characters);
sortCharacter.sort();
console.log(characters.data);
//# sourceMappingURL=index.js.map