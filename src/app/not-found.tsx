// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold font-mono text-primary-blue mb-4">
        404
      </h1>
      <h2 className="text-3xl font-semibold text-light-slate mb-4">
        Halaman Tidak Ditemukan
      </h2>
      <p className="text-slate max-w-md mb-8">
        Maaf, halaman yang Anda cari tidak ada atau mungkin telah dipindahkan.
      </p>
      <Link
        href="/"
        className="inline-block bg-transparent border border-primary-blue text-primary-blue font-mono py-3 px-6 rounded hover:bg-primary-blue/10 transition-colors duration-300"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
