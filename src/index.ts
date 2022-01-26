// This shows that path mapping is working
import {fromNestedModule as fromNestedModule1} from 'nested-module';

import {fromNestedModule as fromNestedModule2} from 'map-to-nested-directory/nested-module';

// This tests if path mapping allows us to redirect the typechecker for a node built-in
// If we get an error about `readFile`, then we know the typechecker is ignoring `@types/node` and resolving to our local `fs.ts`
// And vice versa for `thisComesFromOurFsTsFile`
import {readFile, thisComesFromOurFsTsFile} from 'fs';

import {fromRootFile} from 'root-file';
