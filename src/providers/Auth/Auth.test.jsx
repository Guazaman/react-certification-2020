import { renderHook } from '@testing-library/react-hooks';
import AuthProvider, { useAuth } from './Auth.provider';

describe('Test auth provider', () => {
  it('Should set the context', () => {
    const { result } = renderHook(() => useAuth());
    expect(result).not.toBeNull();
  });

  it('Should set the provider', () => {
    const { result } = renderHook(() => AuthProvider());
    expect(result).not.toBeNull();
  });
});
