import "./globals.css";

export const metadata = {
	title: "Delfino Portfolio",
	description: "Showcasing the portfolio of Delfin Fernandez"
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en" className="dark">
			<body className="flex flex-col min-h-screen">
				<header className="p-4 bg-primary text-white">
					<h1 className="text-xl font-bold">Delfino Portfolio</h1>
				</header>
				<main className="flex-grow">{children}</main>
				<footer className="p-4 bg-gray-800 text-center text-white">
					© 2025 Delfin Fernandez
				</footer>
			</body>
		</html>
	);
}
