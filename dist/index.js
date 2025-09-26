import { Sort } from "./Sorter.js";
import { NumberCollection } from "./NumberCollection.js";
const numberCollection = new NumberCollection([10, 11, 31]);
const sortNumber = new Sort(numberCollection);
sortNumber.sort();
console.log(numberCollection.data);
//# sourceMappingURL=index.js.map