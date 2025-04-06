import { add, addWithReducer, addWithReducerV2 } from "./src/add.js";
import { minus } from "./src/minus.js";

const main = () => {
    //add([1001,40,6789,30]);
    //addWithReducer([1001,40,6789,30]);
    //minus([1001,40,6789,30]);
    addWithReducerV2()
}

main(); //Anonymus Function or Fat arrow function;

// (() => {
//     console.log("Hi")
// })();

// (() => {
//     console.log("Hello")
// })();