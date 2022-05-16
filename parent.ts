// parent.ts
const fork = require("child_process").fork;
const proc = fork("./child.js", { silent: true });
proc.stdout.on("data", (data: any) => {
    console.log(data.toString());
});
console.log("parent");