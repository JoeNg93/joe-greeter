import { Greeter } from '../index';

test('My Greeter', () => {
  expect(Greeter('Joe')).toBe('Hello, Joe');
});
