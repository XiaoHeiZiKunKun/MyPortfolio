'use client';

import './main.css'; // Assicurati che il percorso sia corretto
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="portfolio-container">
      
      {/* Sidebar a sinistra */}
      <aside className="sidebar">
        <div className="profile-section">
          <div className="profile-img-container">
            <div className="profile-img-inner">
              <span style={{color: 'white', fontWeight: 'bold'}}>AC</span>
            </div>
          </div>
          <h2 style={{color: 'white'}}>Tommaso Rao</h2>
          <p style={{fontSize: '11px', opacity: 0.6}}>Computer engineer</p>
        </div>

        <div className="info-list">
          <div className="info-item"><span>Residenza:</span><span>Italia</span></div>
          <div className="info-item"><span>Città:</span><span>Trieste</span></div>
          <div className="info-item"><span>Età:</span><span>23</span></div>
        </div>
      </aside>

      {/* Contenuto principale a destra */}
      <main className="main-content">
        
        <section className="hero-banner" style={{backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200')"}}>
          <div className="hero-overlay"></div>
          <div className="hero-text">
            <h1 style={{fontSize: '3rem', color: 'white', marginBottom: '20px'}}>
              Scopri il mio <br/><span style={{color: 'var(--accent)'}}>Art Space!</span>
            </h1>
            <button className="btn-primary" onClick={() => router.push('/progetti')}>
              Esplora Ora
            </button>
          </div>
        </section>

        <h3>I miei servizi</h3>
        <div className="services-grid">
          <div key={'curriculum'} className="service-card">
              <h4>Curriculum Vitae</h4>
              <p>Visita il mio curriculum vitae.</p>
              <a href="#" className="order-link">Curriculum &gt;</a>
            </div>
            <div key={'progetti'} className="service-card">
              <h4>Progetti Personali</h4>
              <p>Visita i miei progetti personali.</p>
              <a href="#" className="order-link">Progetti &gt;</a>
            </div>
            <div key={'certificati'} className="service-card">
              <h4>Certificati</h4>
              <p>Visita i miei certificati.</p>
              <a href="#" className="order-link">Certificati &gt;</a>
            </div>
        </div>

      </main>
    </div>
  );
}