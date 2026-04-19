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
          <div className="info-item"><span>Email:</span><span>tommaso.rao@email.com</span></div>
          <div className="info-item"><span>Telefono:</span><span>+39 123 456 7890</span></div>
        </div>

        <div style={{marginTop: 'auto'}}>
          <h3 style={{color: 'white', fontSize: '14px', marginBottom: '15px'}}>Competenze</h3>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
            {['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git'].map(skill => (
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
            Ingegnere informatico appassionato con esperienza nello sviluppo web e mobile.
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
              <span style={{color: 'var(--text-light)', fontSize: '14px'}}>Gen 2023 - Presente</span>
            </div>
            <h4 style={{color: 'white', fontSize: '1.1rem', marginBottom: '10px'}}>Tech Company Srl, Trieste</h4>
            <ul style={{color: 'var(--text-main)', lineHeight: '1.6', paddingLeft: '20px'}}>
              <li>Sviluppo e manutenzione di applicazioni web utilizzando React e Node.js</li>
              <li>Collaborazione con team cross-functional per la consegna di progetti complessi</li>
              <li>Implementazione di API RESTful e integrazione con database SQL</li>
              <li>Partecipazione a code review e mentoring di junior developers</li>
            </ul>
          </div>

          <div style={{backgroundColor: 'var(--bg-card)', padding: '25px', borderRadius: '8px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
              <h3 style={{color: 'var(--accent)', fontSize: '1.3rem', margin: 0}}>Sviluppatore Frontend</h3>
              <span style={{color: 'var(--text-light)', fontSize: '14px'}}>Giu 2021 - Dic 2022</span>
            </div>
            <h4 style={{color: 'white', fontSize: '1.1rem', marginBottom: '10px'}}>Startup Innovativa, Udine</h4>
            <ul style={{color: 'var(--text-main)', lineHeight: '1.6', paddingLeft: '20px'}}>
              <li>Realizzazione di interfacce utente responsive con React e CSS moderno</li>
              <li>Collaborazione con designer per l'implementazione di UI/UX</li>
              <li>Ottimizzazione delle performance delle applicazioni web</li>
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
              <span style={{color: 'var(--text-light)', fontSize: '14px'}}>2018 - 2023</span>
            </div>
            <h4 style={{color: 'white', fontSize: '1.1rem', marginBottom: '10px'}}>Università degli Studi di Trieste</h4>
            <p style={{color: 'var(--text-main)', lineHeight: '1.6'}}>
              Specializzazione in Sistemi Informativi e Tecnologie Web. Tesi di laurea su "Applicazioni Web Progressive con React".
              Voto finale: 105/110.
            </p>
          </div>

          <div style={{backgroundColor: 'var(--bg-card)', padding: '25px', borderRadius: '8px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
              <h3 style={{color: 'var(--accent)', fontSize: '1.3rem', margin: 0}}>Diploma di Maturità Scientifica</h3>
              <span style={{color: 'var(--text-light)', fontSize: '14px'}}>2013 - 2018</span>
            </div>
            <h4 style={{color: 'white', fontSize: '1.1rem', marginBottom: '10px'}}>Liceo Scientifico "Galileo Galilei", Trieste</h4>
            <p style={{color: 'var(--text-main)', lineHeight: '1.6'}}>
              Voto finale: 85/100. Approfondimento in Matematica e Fisica.
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
                Piattaforma di e-commerce completa sviluppata con React, Node.js e MongoDB.
                Include gestione carrello, pagamenti integrati e pannello amministratore.
              </p>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                {['React', 'Node.js', 'MongoDB', 'Stripe'].map(tech => (
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

            <div style={{backgroundColor: 'var(--bg-card)', padding: '25px', borderRadius: '8px'}}>
              <h3 style={{color: 'var(--accent)', fontSize: '1.3rem', marginBottom: '15px'}}>App Mobile Task Manager</h3>
              <p style={{color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '15px'}}>
                Applicazione mobile per la gestione delle attività sviluppata con React Native.
                Sincronizzazione cloud e notifiche push.
              </p>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                {['React Native', 'Firebase', 'AsyncStorage'].map(tech => (
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
              <h4 style={{color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '10px'}}>AWS Certified Developer</h4>
              <p style={{color: 'var(--text-main)', fontSize: '14px'}}>Amazon Web Services</p>
              <p style={{color: 'var(--text-light)', fontSize: '12px', marginTop: '5px'}}>2023</p>
            </div>

            <div style={{backgroundColor: 'var(--bg-card)', padding: '20px', borderRadius: '8px', textAlign: 'center'}}>
              <h4 style={{color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '10px'}}>Google Cloud Professional</h4>
              <p style={{color: 'var(--text-main)', fontSize: '14px'}}>Google Cloud Platform</p>
              <p style={{color: 'var(--text-light)', fontSize: '12px', marginTop: '5px'}}>2022</p>
            </div>

            <div style={{backgroundColor: 'var(--bg-card)', padding: '20px', borderRadius: '8px', textAlign: 'center'}}>
              <h4 style={{color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '10px'}}>Scrum Master</h4>
              <p style={{color: 'var(--text-main)', fontSize: '14px'}}>Scrum.org</p>
              <p style={{color: 'var(--text-light)', fontSize: '12px', marginTop: '5px'}}>2021</p>
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
              <p style={{color: 'var(--text-main)'}}>C1 - Avanzato</p>
            </div>

            <div style={{backgroundColor: 'var(--bg-card)', padding: '20px', borderRadius: '8px'}}>
              <h4 style={{color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '10px'}}>Spagnolo</h4>
              <p style={{color: 'var(--text-main)'}}>B2 - Intermedio</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}