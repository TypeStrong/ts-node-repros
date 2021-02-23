import test from 'ava';
import {hello} from './other.js';

test('can use import and export syntax', t => {
    t.assert(hello === 'hello world')
});