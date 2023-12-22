import "./globals.css"
import Header from "@/components/ui/Header"
import { CartProvider } from "@/contexts/CartContext"
import { AuthProvider } from "@/contexts/AuthContext"

export const metadata = {
  title: 'NBA Store',
  description: 'Powered by CoderHouse',
  icons: [{ rel: 'icon', url: "/favicon.ico" }]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>
            <Header />
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
