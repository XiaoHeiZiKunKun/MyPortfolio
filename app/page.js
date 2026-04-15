'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
 
  const router = useRouter();
  const vaiProdotti = () => router.push('/progetti');

  if (loading) return <div>Caricamento in corso...</div>;
  if (error) return <div>Per ora questa pagina non è disponibile.</div>;

  return (
    <>
      <main id='main'>
        <h1>Benvenuto nel mio Portfolio</h1>
        <p>Esplora i miei progetti, competenze e contatti.</p>
        <button onClick={vaiProdotti}>Scopri i miei progetti</button>
      </main>
    </>
  );
}