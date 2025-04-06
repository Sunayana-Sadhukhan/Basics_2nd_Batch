export const minus = (arr = []) => {
    if (arr.length === 0) return;

    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const elem = arr[i];

        result = (() => {
            return result > elem ? result - elem : elem - result;
        })();
    }

    console.log(`Result: ${result}`);
}
