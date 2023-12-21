import './globals.css'
import type { Metadata } from 'next'
import inter from './inter'
import ThemeRegistry from './ThemeRegistry'
import Header from './Header'
import Nav from './Nav'
import { Box, Container } from '@mui/material'


export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_NAME
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry options={{ key: 'mui' }}>
        <Box display='flex' flexDirection='column'>
          <Header /> 
          <Box display='flex' flexDirection='row'>
            <Nav/>
            <Container sx={{py:4}}>
              {children}
            </Container>
          </Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  )
}
