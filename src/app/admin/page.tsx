'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { FiLogIn, FiLogOut, FiSave } from 'react-icons/fi';
import { auth, db, hasFirebaseConfig } from '@/lib/firebase';
import type { Project, ProjectTier } from '@/lib/content';

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
  repoLabelEn: string;
  repoLabelId: string;
  repoUrl: string;
  liveUrl: string;
  imageUrl: string;
};

const adminEmail =
  process.env.NEXT_PUBLIC_FIREBASE_ADMIN_EMAIL ??
  'fredyfajaradiputra08@gmail.com';

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
  repoLabelEn: 'Repository',
  repoLabelId: 'Repository',
  repoUrl: '',
  liveUrl: '',
  imageUrl: '',
};

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

const inputClass =
  'w-full border border-line bg-void/70 px-3 py-3 text-sm text-paper outline-none transition-colors focus:border-accent-2';
const labelClass = 'mb-2 block font-mono text-xs uppercase text-accent-2';

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [form, setForm] = useState<ProjectForm>(initialForm);
  const [status, setStatus] = useState('');
  const [saving, setSaving] = useState(false);

  const isAllowed = useMemo(
    () => Boolean(user?.email && user.email === adminEmail),
    [user]
  );

  useEffect(() => {
    if (!auth) {
      return;
    }

    return onAuthStateChanged(auth, setUser);
  }, []);

  const update = <K extends keyof ProjectForm>(key: K, value: ProjectForm[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const signIn = async () => {
    if (!auth) {
      setStatus('Firebase config belum tersedia.');
      return;
    }

    await signInWithPopup(auth, new GoogleAuthProvider());
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

    const projectId = form.id || slugify(form.title);

    if (!projectId || !form.title || !form.repoUrl) {
      setStatus('ID/title/repository wajib diisi.');
      return;
    }

    const project: Project = {
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
      repoLinks: [
        {
          label: {
            en: form.repoLabelEn,
            id: form.repoLabelId,
          },
          url: form.repoUrl,
        },
      ],
      ...(form.liveUrl ? { liveUrl: form.liveUrl } : {}),
      ...(form.imageUrl ? { imageUrl: form.imageUrl } : {}),
    };

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
      setStatus(`Project "${project.title}" tersimpan ke Firestore.`);
      setForm(initialForm);
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

  return (
    <main className="min-h-screen px-5 py-10 text-paper">
      <section className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-5 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-sm text-accent">Admin /&gt;</p>
            <h1 className="mt-3 text-4xl font-black md:text-6xl">
              Project Upload
            </h1>
            <p className="mt-4 max-w-2xl text-soft">
              Form ini menyimpan project ke Firestore collection{' '}
              <code className="text-accent-2">projects</code>. Hanya email admin
              yang boleh menulis data.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-sm">
            {user ? (
              <>
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
              </>
            ) : (
              <button
                type="button"
                onClick={signIn}
                className="inline-flex items-center gap-2 border border-accent bg-accent/10 px-4 py-3 text-paper transition-colors hover:border-accent-2"
              >
                <FiLogIn />
                Login Google
              </button>
            )}
          </div>
        </div>

        {!hasFirebaseConfig && (
          <div className="mb-6 border border-warm/50 bg-warm/10 p-4 text-sm text-warm">
            Firebase env belum tersedia. Isi <code>.env.local</code> dari{' '}
            <code>.env.example</code> supaya admin bisa login dan menulis data.
          </div>
        )}

        {user && !isAllowed && (
          <div className="mb-6 border border-red-400/50 bg-red-400/10 p-4 text-sm text-red-200">
            Email ini tidak diizinkan. Admin yang dikonfigurasi:{' '}
            <code>{adminEmail}</code>
          </div>
        )}

        <form onSubmit={submit} className="grid gap-5">
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
                onChange={(event) => update('descriptionEn', event.target.value)}
              />
            </label>
            <label>
              <span className={labelClass}>Description ID</span>
              <textarea
                className={inputClass}
                rows={4}
                value={form.descriptionId}
                onChange={(event) => update('descriptionId', event.target.value)}
              />
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label>
              <span className={labelClass}>Features EN, one per line</span>
              <textarea
                className={inputClass}
                rows={5}
                value={form.featuresEn}
                onChange={(event) => update('featuresEn', event.target.value)}
              />
            </label>
            <label>
              <span className={labelClass}>Features ID, one per line</span>
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

          <div className="grid gap-5 md:grid-cols-[1fr_1fr_2fr]">
            <label>
              <span className={labelClass}>Repo Label EN</span>
              <input
                className={inputClass}
                value={form.repoLabelEn}
                onChange={(event) => update('repoLabelEn', event.target.value)}
              />
            </label>
            <label>
              <span className={labelClass}>Repo Label ID</span>
              <input
                className={inputClass}
                value={form.repoLabelId}
                onChange={(event) => update('repoLabelId', event.target.value)}
              />
            </label>
            <label>
              <span className={labelClass}>Repo URL</span>
              <input
                className={inputClass}
                value={form.repoUrl}
                onChange={(event) => update('repoUrl', event.target.value)}
                placeholder="https://github.com/..."
              />
            </label>
          </div>

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
            disabled={saving || !isAllowed || !hasFirebaseConfig}
            className="inline-flex w-fit items-center gap-3 border border-accent bg-accent/10 px-6 py-4 font-mono text-sm font-bold text-paper transition-all hover:border-accent-2 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <FiSave />
            {saving ? 'Saving...' : 'Save project'}
          </button>

          {status && (
            <p className="border border-line bg-panel/70 p-4 font-mono text-sm text-soft">
              {status}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
