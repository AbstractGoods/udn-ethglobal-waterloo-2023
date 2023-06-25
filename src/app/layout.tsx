import '@rainbow-me/rainbowkit/styles.css'
import './globals.css'

import { Providers } from './providers'

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
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
