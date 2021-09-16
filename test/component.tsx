import { render, screen } from '@testing-library/react';
import Component from '../src/component';
import { expect } from 'chai';
import React from 'react';

// ---------------------------------------------------------------------

it('the test', () => {
  render(<Component message="foo" />);

  expect(screen.queryByText('foo')).to.be.instanceof(HTMLElement);
});
