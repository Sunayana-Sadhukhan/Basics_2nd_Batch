export const spread = () => {
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];

    //"..." Spread Operator: It's spread the elements present inside the Objects/Arrays
    // const arr3 = [...arr1, ...arr2];
    // //console.log(arr2);
    // //const arr3 = [...arr1, ...arr2];

    // arr1 = [
    //     ...arr1,
    //     ...arr2
    // ];
    // console.log(arr1);

    let data = [
        {
            name: "Sunayna",
            home: "Howarh",
            company: "ABC",
            status: true,
        },
        {
            name: "A",
            home: "Howarh",
            company: "DEF",
            status: false
        }
    ];

    //!1st
    console.log(data);

    data = [
        ...data,
        {
            ...data.find(x => x.status === false)
        }
    ];

    console.log(data); //WIth 3rd object

    let obj = data.find(x => x.status === false);
    if (obj === undefined)
        return;

    let index = data.findIndex(x => x.status === false);
    data[index] = {
        ...obj,
        home: "Modified",
        hh: "new"
    }

    console.log(data); //modified same object


}


export const rest = (name = "1", ...args) => {
    let res = 0;
    for (let i = 0; i < args.length; i++) {
        res += args[i];
    }

    console.log(res);
}


export const objectDestructure = () => {
    const obj = {
        name: "A",
        age: 10,
        home: "AA",
        status: false,
        conditions: [1, 2, 3]
    }

    ///Object Destructuring 

    let { age, conditions, home, name, status } = obj;
    home = "1";
    console.log(obj);
}

export const arrDestructuring = () => {
    let obj1 = {
        name: "Sunayna",
        home: "Howarh",
        company: "ABC",
        status: true,
    }
    let obj2 = {
        name: "A",
        home: "Howarh",
        company: "DEF",
        status: false
    }
    let obj3 = {
        name: "A",
        home: "Howarh",
        company: "DEF",
        status: false
    }
    let [str, num, status] = test();
    //let [str, num, status] = test().filter(x => /.../);

    // console.log(str)
    // console.log(num)
    // console.log(status);

    testArgs("H");
    testArgs("H", 1);
    testArgs("H", 1, true);
}

const test = () => {
    return [1, true, { name: "K" }];
}


const testArgs = (...args) => {
    const [name, num, status] = args;

    if (name !== undefined) {
        console.log(name);
    }
    if (num !== undefined) {
        console.log(num);
    }
    if (status !== undefined) {
        console.log(status);
    }
}

// const testArgs1 = (...args) => {
//     const [rainGauge, riverGauge, ca] = args;

//     if (name !== undefined) {
//         console.log(name);
//     }
//     if (num !== undefined) {
//         console.log(num);
//     }
//     if (status !== undefined) {
//         console.log(status);
//     }
// }

