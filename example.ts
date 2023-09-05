type Foo = {
  foo: string,
  bar: number,
}

function foofn () {
  throw new Error('bar');
}

try {
  foofn();
}
catch (err) {
  const stack = (err as Error).stack || '';
  if (/at foofn \(.*\/example\.ts:7:.*\)/.exec(stack)) {
    console.log('OK, stack seems to have correct line numbers.');
  }
  else {
    console.error('Grr, stack seems to have wrong line numbers.');
    throw err;
  }
}
