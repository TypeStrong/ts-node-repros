const a = [
	'Row one',
	'Row two',
];

const b = [
	'Row three',
	'Row four',
];

const set = [
	...new Set([ ...a, ...b ])
];

// If you will see empty array - this is a bug
console.log(set);
