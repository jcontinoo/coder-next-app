import "./globals.css"
import Header from "@/components/ui/Header"
import { CartProvider } from "@/contexts/CartContext"

export const metadata = {
  title: 'NBA Store',
  description: 'Powered by CoderHouse',
  icons: [{ rel: 'icon', url: "/favicon.ico" }]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
