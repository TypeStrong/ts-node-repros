// This shows that path mapping is working
import {localStuff} from 'mycode';

// This tests if path mapping allows us to redirect the typechecker for a node built-in
// If we get an error about `readFile`, then we know the typechecker is ignoring @types/node and using our local fs.ts
// And vice versa for thisComesFromOurFsTsFile
import {readFile, thisComesFromOurFsTsFile} from 'fs';
