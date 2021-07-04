import { register } from 'ts-node'
import { JSDOM } from 'jsdom';

register({
    ignore: [],
    compilerOptions: { module: 'CommonJS' }
});

const { window } = new JSDOM();

for (const key of ['self', 'document', 'HTMLElement', 'HTMLUnknownElement'])
    global[key] = window[key];

import('boot-cell/source/Reminder/Icon')