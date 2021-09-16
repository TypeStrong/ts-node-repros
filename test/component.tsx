// https://enzymejs.github.io/enzyme/docs/guides/jsdom.html

import { JSDOM } from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/'
});

global.navigator = { userAgent: 'node.js' };
global.document  = jsdom.window.document;
global.window    = jsdom.window;

// ---------------------------------------------------------------------

import { render, screen } from '@testing-library/react';
import Component from '../src/component';
import { expect } from 'chai';
import React from 'react';

// ---------------------------------------------------------------------

it('the test', () => {
  render(<Component message="foo" />);

  expect(screen.queryByText('foo')).to.not.eq(null)
});
