import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { useCallback } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { animals, colors, uniqueNamesGenerator } from 'unique-names-generator';
import { Collection } from 'utils/collections';
import { useAuth } from './auth';
import { firestore } from './firebase';

type Project = {
  id: string;
  name: string;
  // The date may be null until the changes from local are not synced to the firestore
  // upstream.
  createdAt: Timestamp | null;
  updatedAt: Timestamp | null;
};

/**
 * Gets the projects of a logged in user.
 */
export function useProjects(): UseQueryResult<Project[] | null, unknown> {
  const uid = useAuth(useCallback((state) => state.user?.uid, []));

  return useQuery(
    'my-projects',
    () =>
      getDocs(
        query(
          collection(firestore, Collection.Users, uid, Collection.Projects),
          orderBy('name', 'asc')
        )
      ).then((result) =>
        result.docs.map((it) => ({
          id: it.id,
          name: it.get('name'),
          createdAt: it.get('createdAt'),
          updatedAt: it.get('updatedAt'),
        }))
      ),
    { enabled: Boolean(uid) }
  );
}

/**
 * Create a new random project (at least for now).
 */
export function useCreateProject() {
  const uid = useAuth(useCallback((state) => state.user?.uid, []));

  return useCallback(async () => {
    if (!uid) {
      return;
    }

    await addDoc(
      collection(firestore, Collection.Users, uid, Collection.Projects),
      {
        name: uniqueNamesGenerator({
          dictionaries: [colors, animals],
          separator: '-',
        }),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }
    );
  }, [uid]);
}
