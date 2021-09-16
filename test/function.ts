import func from '../src/function';
import { expect } from 'chai';

// ---------------------------------------------------------------------

it('the test', () => {
  expect(func('foo')).to.eq('foo');
});
