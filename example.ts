console.log('Hello from TypeScript in ts-node via npx' as string);
declare const module: any;
console.log('To prove this is running as ESM, typeof module should be undefined: ' + typeof module);
// @ts-ignore
console.log('To prove this is running as ESM, import.meta.url should be a URL: ' + import.meta.url);
