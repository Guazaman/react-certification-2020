import FavoritesReducer from './Favorites.reducer';

const mockState = [];
const mockVideo = {
  snippet: {
    title: 'test title',
    description: 'test description',
    thumbnails: { high: { url: 'test url' } },
    videoId: 'test videoID',
  },
  id: { videoId: 'test videoID' },
};
const mockAddAction = {
  type: 'ADD_FAVORITE',
  payload: mockVideo,
};
const mockRemoveAction = {
  type: 'REMOVE_FAVORITE',
  payload: {
    videoId: 'test videoID',
  },
};
const mockLoadAction = { type: 'LOAD_FROM_STORAGE' };
const notValidAction = 'not valid';

describe('Test Favorites reducer', () => {
  it('Should add a new item', () => {
    const result = FavoritesReducer(mockState, mockAddAction);
    expect(result).toMatchObject({ favorites: [mockVideo] });
  });

  it('Should add and then remove an item from favorites', () => {
    const oneVideoOnstate = FavoritesReducer(mockState, mockAddAction);
    const result = FavoritesReducer(oneVideoOnstate, mockRemoveAction);
    expect(result).toMatchObject({ favorites: [] });
  });

  it('Should get all videos from favorites', () => {
    const oneVideoOnstate = FavoritesReducer(mockState, mockAddAction);
    const result = FavoritesReducer(oneVideoOnstate, mockLoadAction);
    expect(result).toMatchObject({ favorites: [mockVideo] });
  });

  it('Should return mock state', () => {
    const result = FavoritesReducer(mockState, notValidAction);
    expect(result).toMatchObject([]);
  });
});
