import Navbar from "@/app/components/navbar"
import "./globals.css"
import { UserProvider } from "@/app/context/usercontext"
import { PocketProvider } from "./context/pocketcontext"

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<PocketProvider>
				<UserProvider>
					<body>
						<Navbar />
						<div>{children}</div>
					</body>
				</UserProvider>
			</PocketProvider>
		</html>
	)
}
