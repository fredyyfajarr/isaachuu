'use client';

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import {
  FiEdit3,
  FiEye,
  FiEyeOff,
  FiLogIn,
  FiLogOut,
  FiPlus,
  FiSave,
  FiTrash2,
} from 'react-icons/fi';
import { auth, db, hasFirebaseConfig } from '@/lib/firebase';
import type { Project, ProjectTier, RepoLink } from '@/lib/content';

type ProjectForm = {
  id: string;
  order: string;
  published: boolean;
  title: string;
  tier: ProjectTier;
  labelEn: string;
  labelId: string;
  descriptionEn: string;
  descriptionId: string;
  featuresEn: string;
  featuresId: string;
  roleEn: string;
  roleId: string;
  scopeEn: string;
  scopeId: string;
  statusEn: string;
  statusId: string;
  tags: string;
  repoLinks: string;
  liveUrl: string;
  imageUrl: string;
};

type RecaptchaRenderOptions = {
  sitekey: string;
  callback: (token: string) => void;
  'expired-callback': () => void;
  'error-callback': () => void;
};

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        options: RecaptchaRenderOptions
      ) => number;
      reset: (widgetId?: number) => void;
    };
    onAdminRecaptchaLoaded?: () => void;
  }
}

const adminEmail = (
  process.env.NEXT_PUBLIC_FIREBASE_ADMIN_EMAIL ??
  'fredyfajar46@gmail.com'
)
  .trim()
  .toLowerCase();

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';

const initialForm: ProjectForm = {
  id: '',
  order: '10',
  published: true,
  title: '',
  tier: 'featured',
  labelEn: 'Featured Project',
  labelId: 'Project Unggulan',
  descriptionEn: '',
  descriptionId: '',
  featuresEn: '',
  featuresId: '',
  roleEn: 'Full-Stack Developer',
  roleId: 'Full-Stack Developer',
  scopeEn: '',
  scopeId: '',
  statusEn: 'Source code',
  statusId: 'Source code',
  tags: '',
  repoLinks: 'Repository|Repository|https://github.com/fredyyfajarr/|true',
  liveUrl: '',
  imageUrl: '',
};

const inputClass =
  'w-full border border-line bg-void/70 px-3 py-3 text-sm text-paper outline-none transition-colors focus:border-accent-2';
const labelClass = 'mb-2 block font-mono text-xs uppercase text-accent-2';
const panelClass = 'border border-line bg-panel/70 p-5 shadow-2xl backdrop-blur';

const lines = (value: string) =>
  value
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean);

const csv = (value: string) =>
  value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const repoLinksToText = (repoLinks: RepoLink[]) =>
  repoLinks
    .map(
      (repo) =>
        `${repo.label.en}|${repo.label.id}|${repo.url}|${
          repo.isPublic === false ? 'false' : 'true'
        }`
    )
    .join('\n');

const parseRepoLinks = (value: string): RepoLink[] =>
  lines(value).map((line) => {
    const [labelEn, labelId, url = '', isPublic = 'true'] = line
      .split('|')
      .map((item) => item.trim());

    return {
      label: {
        en: labelEn || 'Repository',
        id: labelId || labelEn || 'Repository',
      },
      url,
      isPublic: isPublic.toLowerCase() !== 'false',
    };
  });

const projectToForm = (project: Project): ProjectForm => ({
  id: project.id,
  order: String(project.order),
  published: project.published,
  title: project.title,
  tier: project.tier,
  labelEn: project.label.en,
  labelId: project.label.id,
  descriptionEn: project.description.en,
  descriptionId: project.description.id,
  featuresEn: project.features.en.join('\n'),
  featuresId: project.features.id.join('\n'),
  roleEn: project.role.en,
  roleId: project.role.id,
  scopeEn: project.scope.en,
  scopeId: project.scope.id,
  statusEn: project.status.en,
  statusId: project.status.id,
  tags: project.tags.join(', '),
  repoLinks: repoLinksToText(project.repoLinks),
  liveUrl: project.liveUrl ?? '',
  imageUrl: project.imageUrl ?? '',
});

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

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [form, setForm] = useState<ProjectForm>(initialForm);
  const [projects, setProjects] = useState<Project[]>([]);
  const [status, setStatus] = useState('');
  const [saving, setSaving] = useState(false);
  const [loadingProjects, setLoadingProjects] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');
  const [captchaLoaded, setCaptchaLoaded] = useState(false);
  const captchaRef = useRef<HTMLDivElement | null>(null);
  const captchaWidgetId = useRef<number | null>(null);

  const isAllowed = useMemo(
    () =>
      Boolean(
        user?.email && user.email.toLowerCase() === adminEmail
      ),
    [user]
  );

  useEffect(() => {
    if (!auth) {
      setAuthReady(true);
      return;
    }

    return onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setAuthReady(true);
    });
  }, []);

  const update = <K extends keyof ProjectForm>(key: K, value: ProjectForm[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const loadProjects = async () => {
    if (!db || !isAllowed) {
      return;
    }

    setLoadingProjects(true);
    setStatus('');

    try {
      const snapshot = await getDocs(collection(db, 'projects'));
      const nextProjects = snapshot.docs
        .map((projectDoc) => ({ id: projectDoc.id, ...projectDoc.data() }))
        .filter(isProject)
        .sort((a, b) => a.order - b.order);

      setProjects(nextProjects);
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : 'Gagal memuat daftar project.'
      );
    } finally {
      setLoadingProjects(false);
    }
  };

  useEffect(() => {
    if (isAllowed) {
      loadProjects();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAllowed]);

  useEffect(() => {
    if (!authReady || isAllowed || !recaptchaSiteKey || !captchaRef.current) {
      return;
    }

    const renderCaptcha = () => {
      if (!window.grecaptcha || !captchaRef.current || captchaWidgetId.current !== null) {
        return;
      }

      captchaWidgetId.current = window.grecaptcha.render(captchaRef.current, {
        sitekey: recaptchaSiteKey,
        callback: (token: string) => {
          setCaptchaToken(token);
          setCaptchaLoaded(true);
        },
        'expired-callback': () => setCaptchaToken(''),
        'error-callback': () => setCaptchaToken(''),
      });
      setCaptchaLoaded(true);
    };

    window.onAdminRecaptchaLoaded = renderCaptcha;

    if (window.grecaptcha) {
      renderCaptcha();
      return;
    }

    if (!document.querySelector('script[data-admin-recaptcha="true"]')) {
      const script = document.createElement('script');
      script.src =
        'https://www.google.com/recaptcha/api.js?onload=onAdminRecaptchaLoaded&render=explicit';
      script.async = true;
      script.defer = true;
      script.dataset.adminRecaptcha = 'true';
      document.head.appendChild(script);
    }
  }, [authReady, isAllowed]);

  const resetCaptcha = () => {
    setCaptchaToken('');

    if (captchaWidgetId.current !== null) {
      window.grecaptcha?.reset(captchaWidgetId.current);
    }
  };

  const signIn = async () => {
    if (!auth) {
      setStatus('Firebase config belum tersedia.');
      return;
    }

    if (!recaptchaSiteKey) {
      setStatus('reCAPTCHA site key belum tersedia di environment.');
      return;
    }

    if (!captchaToken) {
      setStatus('Verifikasi manusia wajib diselesaikan sebelum login.');
      return;
    }

    setStatus('');

    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      resetCaptcha();
      setStatus(
        error instanceof Error ? error.message : 'Login Google gagal.'
      );
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setStatus('');
  };

  const buildProject = (): Project | null => {
    const projectId = form.id || slugify(form.title);
    const repoLinks = parseRepoLinks(form.repoLinks);

    if (!projectId || !form.title || repoLinks.length === 0) {
      setStatus('ID/title/repository wajib diisi.');
      return null;
    }

    if (repoLinks.some((repo) => !repo.url.startsWith('https://'))) {
      setStatus('Semua repo URL harus memakai https://.');
      return null;
    }

    return {
      id: projectId,
      order: Number(form.order) || 999,
      published: form.published,
      title: form.title,
      tier: form.tier,
      label: {
        en: form.labelEn,
        id: form.labelId,
      },
      description: {
        en: form.descriptionEn,
        id: form.descriptionId,
      },
      features: {
        en: lines(form.featuresEn),
        id: lines(form.featuresId),
      },
      role: {
        en: form.roleEn,
        id: form.roleId,
      },
      scope: {
        en: form.scopeEn,
        id: form.scopeId,
      },
      status: {
        en: form.statusEn,
        id: form.statusId,
      },
      tags: csv(form.tags),
      repoLinks,
      ...(form.liveUrl ? { liveUrl: form.liveUrl } : {}),
      ...(form.imageUrl ? { imageUrl: form.imageUrl } : {}),
    };
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!db) {
      setStatus('Firestore belum aktif. Isi env Firebase terlebih dahulu.');
      return;
    }

    if (!isAllowed) {
      setStatus(`Akses ditolak. Login harus memakai ${adminEmail}.`);
      return;
    }

    const project = buildProject();

    if (!project) {
      return;
    }

    setSaving(true);
    setStatus('');

    try {
      await setDoc(
        doc(db, 'projects', project.id),
        {
          ...project,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );
      setStatus(`Project "${project.title}" tersimpan.`);
      setForm(initialForm);
      await loadProjects();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : 'Gagal menyimpan project ke Firestore.'
      );
    } finally {
      setSaving(false);
    }
  };

  const togglePublished = async (project: Project) => {
    if (!db || !isAllowed) {
      return;
    }

    await setDoc(
      doc(db, 'projects', project.id),
      {
        ...project,
        published: !project.published,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
    await loadProjects();
  };

  const removeProject = async (project: Project) => {
    if (!db || !isAllowed) {
      return;
    }

    const confirmed = window.confirm(
      `Hapus project "${project.title}" dari Firestore?`
    );

    if (!confirmed) {
      return;
    }

    await deleteDoc(doc(db, 'projects', project.id));
    if (form.id === project.id) {
      resetForm();
    }
    await loadProjects();
  };

  const renderGate = () => (
    <div className={`${panelClass} mx-auto mt-10 max-w-xl`}>
      <p className="font-mono text-sm text-accent">Protected Admin /&gt;</p>
      <h2 className="mt-3 text-3xl font-black text-paper">Login required</h2>
      <p className="mt-4 text-sm leading-6 text-soft">
        Selesaikan verifikasi manusia terlebih dahulu, lalu lanjut dengan
        Google Sign-In. Setelah login, Firestore Rules hanya menerima akun
        Google admin yang sudah dikonfigurasi.
      </p>

      {!hasFirebaseConfig && (
        <div className="mt-5 border border-warm/50 bg-warm/10 p-4 text-sm text-warm">
          Firebase env belum tersedia. Untuk production, isi Firebase
          Environment Variables di Vercel. Untuk local, isi{' '}
          <code>.env.local</code> dari <code>.env.example</code>.
        </div>
      )}

      {user && !isAllowed && (
        <div className="mt-5 border border-red-400/50 bg-red-400/10 p-4 text-sm text-red-200">
          Email <code>{user.email}</code> tidak diizinkan.
        </div>
      )}

      <div className="mt-6">
        <p className="mb-3 font-mono text-xs uppercase text-accent-2">
          Step 1 - Human verification
        </p>
        {recaptchaSiteKey ? (
          <div className="min-h-[78px]" data-native-cursor>
            <div ref={captchaRef} />
            {!captchaLoaded && (
              <p className="mt-3 text-sm text-soft">Loading reCAPTCHA...</p>
            )}
          </div>
        ) : (
          <div className="border border-warm/50 bg-warm/10 p-4 text-sm text-warm">
            Isi <code>NEXT_PUBLIC_RECAPTCHA_SITE_KEY</code> agar verifikasi
            manusia aktif.
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={signIn}
        disabled={!hasFirebaseConfig || !authReady || !captchaToken}
        className="mt-6 inline-flex items-center gap-2 border border-accent bg-accent/10 px-5 py-4 font-mono text-sm font-bold text-paper transition-colors hover:border-accent-2 disabled:opacity-40"
      >
        <FiLogIn />
        Step 2 - Continue with Google
      </button>

      {status && (
        <p className="mt-5 border border-line bg-void/70 p-4 font-mono text-sm text-soft">
          {status}
        </p>
      )}
    </div>
  );

  return (
    <main className="min-h-screen px-5 py-10 text-paper">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-sm text-accent">Admin /&gt;</p>
            <h1 className="mt-3 text-4xl font-black md:text-6xl">
              Project Dashboard
            </h1>
            <p className="mt-4 max-w-2xl text-soft">
              Kelola project portfolio dari Firestore. Public visitor hanya
              bisa membaca project yang statusnya published.
            </p>
          </div>

          {user && (
            <div className="flex flex-wrap items-center gap-3 font-mono text-sm">
              <span className="border border-line px-3 py-2 text-soft">
                {user.email}
              </span>
              <button
                type="button"
                onClick={() => auth && signOut(auth)}
                className="inline-flex items-center gap-2 border border-line px-4 py-3 text-soft transition-colors hover:border-accent-2 hover:text-paper"
              >
                <FiLogOut />
                Logout
              </button>
            </div>
          )}
        </div>

        {!authReady ? (
          <div className={panelClass}>Checking session...</div>
        ) : !isAllowed ? (
          renderGate()
        ) : (
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <aside className={panelClass}>
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black">Projects</h2>
                  <p className="mt-1 text-sm text-soft">
                    {loadingProjects
                      ? 'Loading...'
                      : `${projects.length} item di Firestore`}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center gap-2 border border-accent bg-accent/10 px-3 py-2 font-mono text-xs font-bold text-paper"
                >
                  <FiPlus />
                  New
                </button>
              </div>

              <div className="grid gap-3">
                {projects.map((project) => (
                  <article
                    key={project.id}
                    className="border border-line bg-void/60 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-mono text-xs text-accent-2">
                          #{project.order} {project.id}
                        </p>
                        <h3 className="mt-2 font-bold text-paper">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-xs text-soft">
                          {project.published ? 'Published' : 'Draft'} -{' '}
                          {project.tier}
                        </p>
                      </div>
                      {project.published ? (
                        <FiEye className="shrink-0 text-accent-2" />
                      ) : (
                        <FiEyeOff className="shrink-0 text-muted" />
                      )}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => setForm(projectToForm(project))}
                        className="inline-flex items-center gap-2 border border-line px-3 py-2 font-mono text-xs text-soft hover:border-accent-2 hover:text-paper"
                      >
                        <FiEdit3 />
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => togglePublished(project)}
                        className="inline-flex items-center gap-2 border border-line px-3 py-2 font-mono text-xs text-soft hover:border-accent-2 hover:text-paper"
                      >
                        {project.published ? <FiEyeOff /> : <FiEye />}
                        {project.published ? 'Unpublish' : 'Publish'}
                      </button>
                      <button
                        type="button"
                        onClick={() => removeProject(project)}
                        className="inline-flex items-center gap-2 border border-red-400/40 px-3 py-2 font-mono text-xs text-red-200 hover:border-red-300"
                      >
                        <FiTrash2 />
                        Delete
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </aside>

            <form onSubmit={submit} className={`${panelClass} grid gap-5`}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black">
                    {form.id ? 'Edit Project' : 'New Project'}
                  </h2>
                  <p className="mt-1 text-sm text-soft">
                    Repo links format:{' '}
                    <code className="text-accent-2">
                      Label EN|Label ID|URL|true
                    </code>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetForm}
                  className="border border-line px-3 py-2 font-mono text-xs text-soft"
                >
                  Reset
                </button>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <label>
                  <span className={labelClass}>Project ID</span>
                  <input
                    className={inputClass}
                    value={form.id}
                    onChange={(event) => update('id', event.target.value)}
                    placeholder="sacket"
                  />
                </label>
                <label>
                  <span className={labelClass}>Order</span>
                  <input
                    className={inputClass}
                    value={form.order}
                    onChange={(event) => update('order', event.target.value)}
                    inputMode="numeric"
                  />
                </label>
                <label>
                  <span className={labelClass}>Tier</span>
                  <select
                    className={inputClass}
                    value={form.tier}
                    onChange={(event) =>
                      update('tier', event.target.value as ProjectTier)
                    }
                  >
                    <option value="featured">featured</option>
                    <option value="other">other</option>
                  </select>
                </label>
              </div>

              <label className="flex items-center gap-3 font-mono text-sm text-soft">
                <input
                  type="checkbox"
                  checked={form.published}
                  onChange={(event) => update('published', event.target.checked)}
                />
                Published
              </label>

              <label>
                <span className={labelClass}>Title</span>
                <input
                  className={inputClass}
                  value={form.title}
                  onChange={(event) => update('title', event.target.value)}
                  placeholder="Project name"
                />
              </label>

              <div className="grid gap-5 md:grid-cols-2">
                <label>
                  <span className={labelClass}>Label EN</span>
                  <input
                    className={inputClass}
                    value={form.labelEn}
                    onChange={(event) => update('labelEn', event.target.value)}
                  />
                </label>
                <label>
                  <span className={labelClass}>Label ID</span>
                  <input
                    className={inputClass}
                    value={form.labelId}
                    onChange={(event) => update('labelId', event.target.value)}
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label>
                  <span className={labelClass}>Description EN</span>
                  <textarea
                    className={inputClass}
                    rows={4}
                    value={form.descriptionEn}
                    onChange={(event) =>
                      update('descriptionEn', event.target.value)
                    }
                  />
                </label>
                <label>
                  <span className={labelClass}>Description ID</span>
                  <textarea
                    className={inputClass}
                    rows={4}
                    value={form.descriptionId}
                    onChange={(event) =>
                      update('descriptionId', event.target.value)
                    }
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label>
                  <span className={labelClass}>Features EN</span>
                  <textarea
                    className={inputClass}
                    rows={5}
                    value={form.featuresEn}
                    onChange={(event) => update('featuresEn', event.target.value)}
                  />
                </label>
                <label>
                  <span className={labelClass}>Features ID</span>
                  <textarea
                    className={inputClass}
                    rows={5}
                    value={form.featuresId}
                    onChange={(event) => update('featuresId', event.target.value)}
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label>
                  <span className={labelClass}>Role EN</span>
                  <input
                    className={inputClass}
                    value={form.roleEn}
                    onChange={(event) => update('roleEn', event.target.value)}
                  />
                </label>
                <label>
                  <span className={labelClass}>Role ID</span>
                  <input
                    className={inputClass}
                    value={form.roleId}
                    onChange={(event) => update('roleId', event.target.value)}
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label>
                  <span className={labelClass}>Scope EN</span>
                  <input
                    className={inputClass}
                    value={form.scopeEn}
                    onChange={(event) => update('scopeEn', event.target.value)}
                  />
                </label>
                <label>
                  <span className={labelClass}>Scope ID</span>
                  <input
                    className={inputClass}
                    value={form.scopeId}
                    onChange={(event) => update('scopeId', event.target.value)}
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label>
                  <span className={labelClass}>Status EN</span>
                  <input
                    className={inputClass}
                    value={form.statusEn}
                    onChange={(event) => update('statusEn', event.target.value)}
                  />
                </label>
                <label>
                  <span className={labelClass}>Status ID</span>
                  <input
                    className={inputClass}
                    value={form.statusId}
                    onChange={(event) => update('statusId', event.target.value)}
                  />
                </label>
              </div>

              <label>
                <span className={labelClass}>Tags, comma separated</span>
                <input
                  className={inputClass}
                  value={form.tags}
                  onChange={(event) => update('tags', event.target.value)}
                  placeholder="Laravel, PHP, MySQL"
                />
              </label>

              <label>
                <span className={labelClass}>Repo links, one per line</span>
                <textarea
                  className={inputClass}
                  rows={4}
                  value={form.repoLinks}
                  onChange={(event) => update('repoLinks', event.target.value)}
                />
              </label>

              <div className="grid gap-5 md:grid-cols-2">
                <label>
                  <span className={labelClass}>Live URL, optional</span>
                  <input
                    className={inputClass}
                    value={form.liveUrl}
                    onChange={(event) => update('liveUrl', event.target.value)}
                  />
                </label>
                <label>
                  <span className={labelClass}>Image URL, optional</span>
                  <input
                    className={inputClass}
                    value={form.imageUrl}
                    onChange={(event) => update('imageUrl', event.target.value)}
                    placeholder="/images/example.png"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={saving}
                className="inline-flex w-fit items-center gap-3 border border-accent bg-accent/10 px-6 py-4 font-mono text-sm font-bold text-paper transition-all hover:border-accent-2 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <FiSave />
                {saving ? 'Saving...' : 'Save project'}
              </button>

              {status && (
                <p className="border border-line bg-void/70 p-4 font-mono text-sm text-soft">
                  {status}
                </p>
              )}
            </form>
          </div>
        )}
      </section>
    </main>
  );
}
