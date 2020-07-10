{
    const foobar = null;
    console.log(foobar?.foo?.bar ?? "default value");
}
{
    const foobar = {foo: {bar: 'foo.bar value'}};
    console.log(foobar?.foo?.bar ?? "default value");
}