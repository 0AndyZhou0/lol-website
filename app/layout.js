import Navbar from "@/app/components/navbar"
import "./globals.css"
import { UserProvider } from "@/app/context/usercontext"

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <UserProvider>
                <body>
                    <Navbar />
                    <div>{children}</div>
                </body>
            </UserProvider>
        </html>
    )
}
