//Set Timeout
export const timeout = () => {
    console.log(`Sub: ${sub()}`);
}

const sub = () => {
    console.log("1st");
    console.log("2nd");
    setTimeout(() => { //EventLoop 
        console.log("3rd")
        console.log("4th");
    }, 3000);
    setTimeout(() => { //EventLoop 
        console.log("7th")
        console.log("8th");
    },2999);
    console.log("5th");
    console.log("6th");

    return 1+2;
}

//Set Interval
export const interval = () => {
    
}


//Obs.subcribe() //1st 
//Obs.subrcibe() //2nd
//await firstValueForm(para) and //lastValueForm 