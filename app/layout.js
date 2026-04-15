// app/layout.js
export const metadata = {
  title: 'Portfolio - Tommaso Rao',
  description: 'Portfolio di Tommaso Rao...',
  // ELIMINA la riga viewport da qui dentro
  robots: 'index, follow',
};

// Mantieni questo fuori, Next.js lo vuole così
export const viewport = { 
  width: 'device-width', 
  initialScale: 1 
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        {children}
      </body>
    </html>
  );
}