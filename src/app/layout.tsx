import './globals.css'; // ✅ Use "./" instead of "../"
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="p-4 bg-primary text-white flex justify-between">
          <h1 className="text-xl font-bold">Delfino Portfolio</h1>
          <LanguageSwitcher />
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="p-4 bg-gray-800 text-center text-white">
          © 2025 Delfin Fernandez
        </footer>
      </body>
    </html>
  );
}
