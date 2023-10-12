import './globals.css';
import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Ankasa Flight Ticket',
  description: 'Web for buy plane ticket online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
