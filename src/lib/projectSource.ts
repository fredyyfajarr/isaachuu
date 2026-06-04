import {
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { projects, type Project } from '@/lib/content';

const projectsCollection = 'projects';

const isProject = (value: unknown): value is Project => {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const project = value as Partial<Project>;

  return Boolean(
    project.id &&
      project.title &&
      project.label &&
      project.description &&
      project.role &&
      project.scope &&
      project.status &&
      Array.isArray(project.tags) &&
      Array.isArray(project.repoLinks)
  );
};

export const getFallbackProjects = () =>
  [...projects]
    .filter((project) => project.published)
    .sort((a, b) => a.order - b.order);

export const getPortfolioProjects = async (): Promise<Project[]> => {
  if (!db) {
    return getFallbackProjects();
  }

  try {
    const snapshot = await getDocs(
      query(
        collection(db, projectsCollection),
        where('published', '==', true)
      )
    );
    const firestoreProjects = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .filter(isProject)
      .sort((a, b) => a.order - b.order);

    return firestoreProjects.length > 0
      ? firestoreProjects
      : getFallbackProjects();
  } catch (error) {
    console.warn('Failed to load Firestore projects. Falling back to local data.', error);
    return getFallbackProjects();
  }
};
