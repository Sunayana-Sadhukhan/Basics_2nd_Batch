export const add = (arr = []) => {
    if(arr.length === 0) return;

    let result = 0;

    for(let i = 0; i < arr.length; i++){
        const elem = arr[i];

        result = (() => {
            return result += elem;
        })();
    }

    console.log(`Result: ${result}`);
}

export const addWithReducer = (arr = []) => {
    if(arr.length === 0) return;

    let result = 0;

    result = arr.reduce((res, x) => res + x, 0);

    console.log(`Result: ${result}`);
}

export const addWithReducerV2 = () => {
    const arr = [
       { name: "A", age: 12, mentalAge: 5, activeStatus: true },
       { name: "B", age: 50, mentalAge: 0, activeStatus: true },
       { name: "C", age: 1, mentalAge: 100, activeStatus: true },
       { name: "D", age: 100, mentalAge: 100, activeStatus: true },
       { name: "E", age: -10, mentalAge: -50, activeStatus: false },
       { name: "F", age: 100, mentalAge: -500, activeStatus: false }
    ];
 
    const resultAge = arr.reduce((x, y) => y.activeStatus ? x + y.age : x, 0);
    const resultMentalAge = arr.reduce((x, y) => y.activeStatus ? x + y.mentalAge : x, 0);
 
    console.log(`Ages: ${resultAge} \nMental Ages: ${resultMentalAge} \n`);
 }
 