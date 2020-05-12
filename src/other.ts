// intentional whitespace to prove sourcemaps are working










export function other(i: number) {
    if(i === 0) {
        // You can set a breakpoint here to prove that breakpoint is triggered for the first iteration, as opposed
        // to subsequent ones.
        console.log('other called in the first iteration of the loop.');
    }
    if(i === 1) {
        console.log('other called in the second iteration of the loop.');
    }
    const a = 1;

    const b = a + 2;

    console.log(a, b);

    throw new Error(`thrown from other: ${i} ${a} ${b}`);
}
