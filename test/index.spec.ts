import assert from "assert";
import { foo } from "./this_is_ts.js";
import { bar } from "./this_is_js.js";

it('this test passes', () => {
  assert.equal(foo, '123');
  assert.equal(bar, '456');
});