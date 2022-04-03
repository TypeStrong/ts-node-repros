import { functionality } from "../functionality.js";

export {};

it('runs TS as ESM', () => {
    // Using type syntax to prove that TS is working
    expect(import.meta.url as string | undefined).toBeDefined();
    expect(functionality).toBe(true);
});