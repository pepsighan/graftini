import {
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from 'firebase/auth';
import { useEffectOnce } from 'react-use';
import create from 'zustand';
import { firebaseAuth } from './firebase';

/**
 * The login status of the user.
 */
export enum LoginStatus {
  Loading,
  Yes,
  No,
}

/**
 * The useAuth store type.
 */
type UseAuth = {
  user: User | null;
  loginStatus: LoginStatus;
};

/**
 * Store that contains the currently logged in user.
 */
export const useAuth = create<UseAuth>(() => ({
  user: null,
  loginStatus: LoginStatus.Loading,
}));

/**
 * Initialize the auth when the app loads for the first time. It keeps the store
 * in sync with the firebase auth state.
 */
export function useInitializeAuth() {
  useEffectOnce(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      useAuth.setState({
        user,
        loginStatus: user ? LoginStatus.Yes : LoginStatus.No,
      });
    });
  });
}

/**
 * Initiates login with github.
 */
export async function login() {
  const provider = new GithubAuthProvider();
  await signInWithPopup(firebaseAuth, provider);
}
