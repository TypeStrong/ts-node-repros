// Note: the segfault is random, so we have to run this multiple time
import { AsyncLocalStorage } from 'async_hooks';
const asyncStore = new AsyncLocalStorage;
function sleep(ms: number) { return new Promise(resolve => setTimeout(resolve, ms)) }
for(let i = 0; i < 1000; ++i) {
	asyncStore.run(() => {}, async() => {
		// may need to vary the delay depending on where this is running
		await sleep(Math.random() * 100);
		process.exit();
	});
}