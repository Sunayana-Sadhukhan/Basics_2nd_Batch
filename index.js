import { add } from "./src/add.js";
import { minus } from "./src/minus.js";

const main = () => {
    add([40,30,1001,6789]);
    minus();
}

main(); //Anonymus Function or Fat arrow function;

// (() => {
//     console.log("Hi")
// })();

// (() => {
//     console.log("Hello")
// })();