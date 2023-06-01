import Navbar from "@/app/components/navbar"

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
				<Navbar />
                <div>{children}</div>
            </body>
        </html>
    )
}
