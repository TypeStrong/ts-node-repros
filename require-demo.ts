// This simulates what a typical test runner does

console.time("require everything");
timeRequire("./src/getMessage.ts");
timeRequire("./src/getMessage.test.ts");
timeRequire("./src/App.tsx");
timeRequire("./src/App.test.tsx");
timeRequire("./src/MyComponent.tsx");
timeRequire("./src/MyComponent.test.tsx");
console.timeEnd("require everything");

function timeRequire(path: string) {
    const label = `require ${path}`;
    console.time(label);
    require(path);
    // Here a test runner would look for tests and run them
    console.timeEnd(label);
}