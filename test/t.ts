import t from "tap";
const { C } = t.mock("./f.ts", {
  console: {
    error: () => {}
  }
});

t.test("DosStub", (t) => {
  t.throws(function() {new C()}, 'foo')
  t.done
});
