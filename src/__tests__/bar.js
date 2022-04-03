export {};

it('runs JS as ESM', () => {
    expect(import.meta.url).toBeDefined();
});