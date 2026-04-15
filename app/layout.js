// app/layout.js

export const metadata = {
  title: 'Portfolio - Tommaso Rao',
  description: 'Portfolio di Tommaso Rao, ingegnere informatico. Esplora i miei progetti, competenze e contatti.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};
export const viewport = { width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        {children}
      </body>
    </html>
  );
}