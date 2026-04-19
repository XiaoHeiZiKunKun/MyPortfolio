'use client';

import '../main.css';

export default function CurriculumPage() {
  return (
    <div className="portfolio-container">

      {/* Sidebar a sinistra */}
      <aside className="sidebar">
        <div className="profile-section">
          <div className="profile-img-container">
            <div className="profile-img-inner">
              <span style={{color: 'white', fontWeight: 'bold'}}>TR</span>
            </div>
          </div>
          <h2 style={{color: 'white'}}>Tommaso Rao</h2>
          <p style={{fontSize: '11px', opacity: 0.6}}>Ingegnere Informatico</p>
        </div>

        <div className="info-list">
          <div className="info-item"><span>Residenza:</span><span>Italia</span></div>
          <div className="info-item"><span>Città:</span><span>Trieste</span></div>
          <div className="info-item"><span>Età:</span><span>23</span></div>
          <div className="info-item"><span>Email:</span><span>rao.tommaso1204@email.com</span></div>
          <div className="info-item"><span>Telefono:</span><span>+39 366 260 7570</span></div>
        </div>

        <div style={{marginTop: '30px'}}>
          <h3 style={{color: 'white', fontSize: '14px', marginBottom: '15px'}}>Competenze</h3>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
            {['JavaScript', 'React', 'Next.js', 'Node.js', 'Java', 'Android', 'C', 'C++', 'C#', 'MYSQL', 'SQLITE', 'RPC', 'Docker', 'Git'].map(skill => (
              <span key={skill} style={{
                backgroundColor: 'var(--bg-card)',
                color: 'var(--accent)',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: '500'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </aside>

      {/* Contenuto principale a destra */}
      <main className="main-content">

        {/* Sezione Introduzione */}
        <section style={{marginBottom: '40px'}}>
          <h1 style={{color: 'white', fontSize: '2.5rem', marginBottom: '20px'}}>
            Curriculum Vitae
          </h1>
          <p style={{fontSize: '16px', lineHeight: '1.6', color: 'var(--text-main)'}}>
            Laureato in ingegneria informatica all'università di Bologna e appassionato con esperienza nello sviluppo web e mobile.
            Specializzato in tecnologie moderne come React, Node.js e cloud computing.
          </p>
        </section>

        {/* Sezione Esperienza Lavorativa */}
        <section style={{marginBottom: '40px'}}>
          <h2 style={{color: 'white', fontSize: '1.8rem', marginBottom: '25px', borderBottom: '2px solid var(--accent)', paddingBottom: '10px'}}>
            Esperienza Lavorativa
          </h2>

          <div style={{backgroundColor: 'var(--bg-card)', padding: '25px', borderRadius: '8px', marginBottom: '20px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
              <h3 style={{color: 'var(--accent)', fontSize: '1.3rem', margin: 0}}>Sviluppatore Full-Stack</h3>
              <span style={{color: 'var(--text-light)', fontSize: '14px'}}> 2023 - Presente</span>
            </div>
            <h4 style={{color: 'white', fontSize: '1.1rem', marginBottom: '10px'}}>Freelancer, Trieste</h4>
            <ul style={{color: 'var(--text-main)', lineHeight: '1.6', paddingLeft: '20px'}}>
              <li>Sviluppo e manutenzione di applicazioni web utilizzando React e Node.js e database SQLITE</li>
            </ul>
          </div>

          <div style={{backgroundColor: 'var(--bg-card)', padding: '25px', borderRadius: '8px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
              <h3 style={{color: 'var(--accent)', fontSize: '1.3rem', margin: 0}}>Software Tester</h3>
              <span style={{color: 'var(--text-light)', fontSize: '14px'}}>Feb 2023 - Mar 2023</span>
            </div>
            <h4 style={{color: 'white', fontSize: '1.1rem', marginBottom: '10px'}}>Mobile3d, Buttrio</h4>
            <ul style={{color: 'var(--text-main)', lineHeight: '1.6', paddingLeft: '20px'}}>
              <li>Testing di applicazioni mobile e web</li>
              <li>Valutazione di usabilità e qualità del software</li>
              <li>Utilizzo dei loro sistemi backend</li>
            </ul>
          </div>
          <div style={{backgroundColor: 'var(--bg-card)', padding: '25px', borderRadius: '8px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
              <h3 style={{color: 'var(--accent)', fontSize: '1.3rem', margin: 0}}>Firmware Engineer</h3>
              <span style={{color: 'var(--text-light)', fontSize: '14px'}}>Mag 2022 - Giu 2022</span>
            </div>
            <h4 style={{color: 'white', fontSize: '1.1rem', marginBottom: '10px'}}>Innova Spa, Trieste</h4>
            <ul style={{color: 'var(--text-main)', lineHeight: '1.6', paddingLeft: '20px'}}>
              <li>Implementazione di firmware di un regolatore di clock su scheda STM32</li>
              <li>Lettura autonoma del datasheet del componente, saldatura, e competenze di elettrotecnica</li>
              <li>Utilizzo dell'ide STM32CubeIDE e sviluppo in linguaggio C</li>
            </ul>
          </div>
          <div style={{backgroundColor: 'var(--bg-card)', padding: '25px', borderRadius: '8px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
              <h3 style={{color: 'var(--accent)', fontSize: '1.3rem', margin: 0}}>Software Engineer</h3>
              <span style={{color: 'var(--text-light)', fontSize: '14px'}}>Giu 2020 - Set 2020</span>
            </div>
            <h4 style={{color: 'white', fontSize: '1.1rem', marginBottom: '10px'}}>Itotech srl, Trieste</h4>
            <ul style={{color: 'var(--text-main)', lineHeight: '1.6', paddingLeft: '20px'}}>
              <li>Implementazione di software per la gestione di cassa nei punti vendita</li>
              <li>Sviluppo di applicazione per web scraping</li>
              <li>Sviluppo di applicazione per l'aggiornamento automatico dei dati di shopify con i dati della cassa tramite api REST</li>
              <li>Utilizzo dell'ide Visual Studio e sviluppo in linguaggio C#</li>
            </ul>
          </div>
        </section>

        {/* Sezione Istruzione */}
        <section style={{marginBottom: '40px'}}>
          <h2 style={{color: 'white', fontSize: '1.8rem', marginBottom: '25px', borderBottom: '2px solid var(--accent)', paddingBottom: '10px'}}>
            Istruzione
          </h2>

          <div style={{backgroundColor: 'var(--bg-card)', padding: '25px', borderRadius: '8px', marginBottom: '20px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
              <h3 style={{color: 'var(--accent)', fontSize: '1.3rem', margin: 0}}>Laurea in Ingegneria Informatica</h3>
              <span style={{color: 'var(--text-light)', fontSize: '14px'}}>2023 - 2026</span>
            </div>
            <h4 style={{color: 'white', fontSize: '1.1rem', marginBottom: '10px'}}>Università degli Studi di Bologna</h4>
            <p style={{color: 'var(--text-main)', lineHeight: '1.6'}}>
              Laurea in ingegneria informatica. Tesi di laurea su "xxx".
              Voto finale: xxx.
            </p>
          </div>

          <div style={{backgroundColor: 'var(--bg-card)', padding: '25px', borderRadius: '8px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
              <h3 style={{color: 'var(--accent)', fontSize: '1.3rem', margin: 0}}>Diploma di Maturità</h3>
              <span style={{color: 'var(--text-light)', fontSize: '14px'}}>2017 - 2023</span>
            </div>
            <h4 style={{color: 'white', fontSize: '1.1rem', marginBottom: '10px'}}>Istituto tecnico industriale statale "Alessandro Volta", Trieste</h4>
            <p style={{color: 'var(--text-main)', lineHeight: '1.6'}}>
              Voto finale: 80/100. Specializzazione in Informatica.
            </p>
          </div>
        </section>

        {/* Sezione Progetti */}
        <section style={{marginBottom: '40px'}}>
          <h2 style={{color: 'white', fontSize: '1.8rem', marginBottom: '25px', borderBottom: '2px solid var(--accent)', paddingBottom: '10px'}}>
            Progetti Principali
          </h2>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
            <div style={{backgroundColor: 'var(--bg-card)', padding: '25px', borderRadius: '8px'}}>
              <h3 style={{color: 'var(--accent)', fontSize: '1.3rem', marginBottom: '15px'}}>E-commerce Platform</h3>
              <p style={{color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '15px'}}>
                Piattaforma di e-commerce completa sviluppata con React, Node.js e SQLITE.
                Include gestione carrello, pagamenti integrati e pannello amministratore.
              </p>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                {['React', 'Node.js', 'SQLITE', 'Stripe'].map(tech => (
                  <span key={tech} style={{
                    backgroundColor: 'var(--bg-input)',
                    color: 'var(--text-light)',
                    padding: '2px 6px',
                    borderRadius: '3px',
                    fontSize: '11px'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sezione Certificazioni */}
        <section style={{marginBottom: '40px'}}>
          <h2 style={{color: 'white', fontSize: '1.8rem', marginBottom: '25px', borderBottom: '2px solid var(--accent)', paddingBottom: '10px'}}>
            Certificazioni
          </h2>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
            <div style={{backgroundColor: 'var(--bg-card)', padding: '20px', borderRadius: '8px', textAlign: 'center'}}>
              <h4 style={{color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '10px'}}>certificato CISCO</h4>
              <p style={{color: 'var(--text-main)', fontSize: '14px'}}>CISCO netacad - amministrazione di reti</p>
              <p style={{color: 'var(--text-light)', fontSize: '12px', marginTop: '5px'}}>2023</p>
            </div>
            
          </div>
        </section>

        {/* Sezione Lingue */}
        <section>
          <h2 style={{color: 'white', fontSize: '1.8rem', marginBottom: '25px', borderBottom: '2px solid var(--accent)', paddingBottom: '10px'}}>
            Lingue
          </h2>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px'}}>
            <div style={{backgroundColor: 'var(--bg-card)', padding: '20px', borderRadius: '8px'}}>
              <h4 style={{color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '10px'}}>Italiano</h4>
              <p style={{color: 'var(--text-main)'}}>Madrelingua</p>
            </div>

            <div style={{backgroundColor: 'var(--bg-card)', padding: '20px', borderRadius: '8px'}}>
              <h4 style={{color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '10px'}}>Inglese</h4>
              <p style={{color: 'var(--text-main)'}}>B2 - Intermedio</p>
            </div>

            <div style={{backgroundColor: 'var(--bg-card)', padding: '20px', borderRadius: '8px'}}>
              <h4 style={{color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '10px'}}>Cinese</h4>
              <p style={{color: 'var(--text-main)'}}>Madrelingua</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}