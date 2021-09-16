import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from 'firebase/firestore';
import { useCallback } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { useAuth } from './auth';
import { firestore } from './firebase';

type Project = {
  id: string;
  name: string;
  // The date may be null until the changes from local are not synced to the firestore
  // upstream.
  createdAt: Timestamp | null;
};

/**
 * Gets the projects of a logged in user.
 */
export function useProjects(): UseQueryResult<Project[] | null, unknown> {
  const uid = useAuth(useCallback((state) => state.user?.uid, []));

  return useQuery('my-projects', () =>
    getDocs(
      query(
        collection(firestore, 'users', uid, 'projects'),
        orderBy('name', 'asc')
      )
    ).then((result) =>
      result.docs.map((it) => ({
        id: it.id,
        name: it.get('name'),
        createdAt: it.get('createdAt'),
      }))
    )
  );
}
