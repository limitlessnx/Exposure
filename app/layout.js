import './globals.css';

export const metadata = {
  title: 'Xposure Studio | Photography & Film',
  description: 'Xposure is a premium photography and visual production studio for portraits, brands, events, film and creative direction.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
