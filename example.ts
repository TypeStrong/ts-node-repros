import {create, createRepl} from 'ts-node';
import Path from 'path';

const repl = createRepl();
const service = create();
repl.setService(service);
repl.start();
repl.evalCode(`import * as Types from "${Path.resolve(__dirname, 'types')}";\n`);
