import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation */}
        <header className="fixed w-full z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold tracking-tight text-white">
                  FESTIVALSGUIDEN <span className="text-orange-500">2025</span>
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link 
                  href="/blog" 
                  className="hover:text-orange-500 transition-colors text-sm uppercase tracking-wide text-white"
                >
                  Blog
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}

