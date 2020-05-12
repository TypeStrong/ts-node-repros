import {other} from './other';

// intentional whitespace to prove sourcemaps are working







// set a breakpoint here to ensure the first breakpoints in ./other.ts are hit.
// I am not sure why this happens; Chrome DevTools do not have this problem.
for(let i = 0; i < 10; i++) {
    try {
        other(i);
    } catch(e) {
        console.error(e);
    }
}