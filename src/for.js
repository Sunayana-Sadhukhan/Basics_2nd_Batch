const object$ = [{ //0 Index
    name: "A",
    age: "20",
    class_: 10,
    maritalStatus: "Single"
},
{ //1 Index
    name: "B",
    age: "-10",
    class_: -100,
    maritalStatus: "Unknown"
}]

for (const obj in object$) {
    const index = Number(obj);
    const singleObj = object$[index];
    const keys = Object.keys(singleObj);

    keys.map((value, index) => {
        console.log(`Key: "${value}" & Value: ${singleObj[value]}`)
    });
}

for (const [index, value] of arr.entries()) {

}

