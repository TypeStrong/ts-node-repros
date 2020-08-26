var tsNode = require('ts-node');
var mainPath = './directoryToChange';
var testingFile = "JS";


// 1. Open two files from directoryToChange.
// 2. Ensure 'withTsNode();' is commented.
// 3. npm install, npm start.
// 4. Add blank lines to fileToChangeJS.js.
// 5. Look at console, find out that line info changed.
// 6. Uncomment 'withTsNode();'.
// 7. npm start.
// 8. Add blank lines to fileToChangeTS.ts.
// 9. Look at console, find out that line info DID NOT change.
// 10. Add 10 blank lines and above 'new Error()' somewhere add '//' lines or 'console.log()'
// 11. Observe weird line info changing when add more '//' lines above
// (Sometimes it will even decrement line number when you add more '//' lines above 'new Error()' line)


// Change TS to JS and stack will show correct line
withTsNode();

function withTsNode() {
    testingFile = "TS";

    tsNode.register({
        project: './tsconfig.json',
        cache: false
    })
}

setInterval(() => {
    rerequire();
}, 5e3);

function rerequire() {
    try {
        clearCache();
        var map = require(mainPath + "/fileToChange" + testingFile);
    } catch (err) {
        console.log(err);
    }
}

function clearCache() {
    var keysToRemove = []
    for (var key in require.cache) {
        if (key.indexOf('fileToChange') != -1) {
            keysToRemove.push(key);
        }
    }

    for (var i in keysToRemove) {
        delete require.cache[keysToRemove[i]];
        console.log("Found and removed cache: " + keysToRemove[i]);
    }
}