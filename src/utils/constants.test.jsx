import { AUTH_STORAGE_KEY, FAVORITES_VIDEOS_STORAGE_KEY } from './constants';

const TEST_AUTH_STORAGE_KEY = 'wa_cert_authenticated';
const TEST_FAVORITES_VIDEOS_STORAGE_KEY = 'favorite_videos';

describe('Test the constants file', () => {
  it('Should provide the auth storage value', () => {
    expect(AUTH_STORAGE_KEY).toBe(TEST_AUTH_STORAGE_KEY);
  });

  it('Should provide the favorites video value', () => {
    expect(FAVORITES_VIDEOS_STORAGE_KEY).toBe(TEST_FAVORITES_VIDEOS_STORAGE_KEY);
  });
});
