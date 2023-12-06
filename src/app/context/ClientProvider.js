"use client"

import { SessionProvider } from "next-auth/react"

export const ClientProvider = ({ children }) => {
  return <SessionProvider >{children}</SessionProvider>;
}