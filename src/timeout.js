//Set Timeout
export const timeout = () => {
    console.log(`Sub: ${sub()}`);
}

const sub = () => {
    console.log("1st");
    console.log("2nd");
    const timeout1 = setTimeout(() => { //EventLoop 
        console.log("3rd")
        console.log("4th");
        clearTimeout(timeout1);
    }, 3000);
    const timeout2 = setTimeout(() => { //EventLoop 
        console.log("7th")
        console.log("8th");
        clearTimeout(timeout2);
    },2999);
    console.log("5th");
    console.log("6th");

    return 1+2;
}

//Set Interval
export const interval = () => {
    let num = 1
    const int = setInterval(() => {
        if(num === 5)
            clearInterval(int);
        console.log(Math.random());
        num++
    },3000)
}


//Obs.subcribe() //1st 
//Obs.subrcibe() //2nd
//await firstValueForm(para) and //lastValueForm 