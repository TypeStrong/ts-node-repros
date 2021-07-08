console.log('Some .ts code reproducing a bug');
/* some comment */
function someFunc() {
    throw new Error("Error2 "); // Line 4
}
; (() => {
    try {
        /* some comment */
        someFunc(); // Line 9
    }
    catch (err) {
        /* some comment */
        //  console.log("Error Found", err);

        const a = err.stack.split("\n").filter(x => x.match(/example.ts/));
        const lineNumbers = a.map((x) => parseInt(x.match(/\:([0-9]+)/)[1], 10));
        console.log(lineNumbers);
        if (lineNumbers.join(",") !== "4,9,22") {
            throw new Error("Invalid line number : expecting 4,9,22 and got " + lineNumbers.join(","));
        }
    }
})(); // Line 22