import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { useCallback } from 'react';
import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query';
import { animals, colors, uniqueNamesGenerator } from 'unique-names-generator';
import { Collection } from 'utils/collections';
import { useAuth } from './auth';
import { firestore } from './firebase';

export type Project = {
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
    useCallback(
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
      [uid]
    ),
    { enabled: Boolean(uid) }
  );
}

/**
 * Create a new random project (at least for now).
 */
export function useCreateProject() {
  const queryClient = useQueryClient();
  const uid = useAuth(useCallback((state) => state.user?.uid, []));

  return useMutation(
    useCallback(async () => {
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
      // Refetch all the projects.
      queryClient.invalidateQueries('my-projects');
    }, [queryClient, uid])
  );
}

type UseDeleteProjectData = {
  projectId: string;
};

/**
 * Delete a project.
 */
export function useDeleteProject() {
  const queryClient = useQueryClient();
  const uid = useAuth(useCallback((state) => state.user?.uid, []));

  return useMutation(
    useCallback(
      async (data: UseDeleteProjectData) => {
        if (!uid) {
          return;
        }

        await deleteDoc(
          doc(
            firestore,
            Collection.Users,
            uid,
            Collection.Projects,
            data.projectId
          )
        );
        // Refetch all the projects.
        queryClient.invalidateQueries('my-projects');
      },
      [queryClient, uid]
    )
  );
}
