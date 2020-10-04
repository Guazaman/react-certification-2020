import storage from './storage';

const TEST_KEY = 'test key';
const TEST_VALUE = 'test value';
const TEST_INVALID_KEY = 'invalid key';

describe('Test the storage function', () => {
  it('Should set a value', () => {
    storage.set(TEST_KEY, TEST_VALUE);
  });

  it('Should get a value', () => {
    const res = storage.get(TEST_KEY);
    expect(res).toBe(TEST_VALUE);
  });

  it('Should not get a value', () => {
    const res = storage.get(TEST_INVALID_KEY);
    expect(res).toBeNull();
  });

  it('Should throw an error', () => {
    storage.set(TEST_INVALID_KEY, undefined);
    const res = storage.get(TEST_INVALID_KEY);
    expect(res).toBeNull();
  });
});
