import test from 'ava';
import {hello} from './other';

test('can use import and export syntax', t => {
    t.assert(hello === 'hello world')
});