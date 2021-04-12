console.log('ts-node symbol exists?');
console.log(process[Symbol.for("ts-node.register.instance")] != null);