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