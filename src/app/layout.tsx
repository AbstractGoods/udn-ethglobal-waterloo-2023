import '@rainbow-me/rainbowkit/styles.css'
import './globals.css'

import Link from 'next/link'
import { Providers } from './providers'
import { ConnectButton } from '../components/ConnectButton'

export const metadata = {
  title: 'Unified Data (Network) Demos| ETHGlobal Waterloo 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex p-4 gap-4">
            <Link className="underline hover:text-gray-500 active:text-black" href="/">Home</Link>
            <Link className="underline hover:text-gray-500 active:text-black" href="/bundlr">Bundlr</Link>
            <div className="ml-auto"><ConnectButton /></div>
          </div>
          {children}
        </Providers>
      </body>
    </html>
  )
}
