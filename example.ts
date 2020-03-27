import { register } from 'ts-node'

register({
    ignore: [],
    compilerOptions: { module: 'CommonJS' }
});

import('foo/bar')