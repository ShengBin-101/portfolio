import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Sheng Bin - Portfolio",
  description: "Software Engineer | Student",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} themes={["light", "dark-blue"]}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

