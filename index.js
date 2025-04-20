import { add, addWithReducer, addWithReducerV2 } from "./src/add.js";
import { minus } from "./src/minus.js";
import { spread, rest, objectDestructure, arrDestructuring } from "./src/arr_objects.js";
import { timeout, interval } from "./src/timeout.js";

const main = () => {
    //add([1001,40,6789,30]);
    //addWithReducer([1001,40,6789,30]);
    //minus([1001,40,6789,30]);
    //addWithReducerV2();
    //spread();
    //rest(1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6,12,23,"A");
    //objectDestructure();
    //arrDestructuring();
    timeout();
    //interval();
}

main(); //Anonymus Function or Fat arrow function;

// (() => {
//     console.log("Hi")
// })();

// (() => {
//     console.log("Hello")
// })();