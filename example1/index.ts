import {other, other2} from 'foo';
import {other as otherBar, other2 as other2Bar} from 'bar';

const a: number = other; // shows that other.js exposed type info
const b: number = other2; // shows that other2.js exposed type info
const c: number = otherBar; // shows that other.ts exposed type info
const d: number = other2Bar; // shows that other2.ts exposed type info