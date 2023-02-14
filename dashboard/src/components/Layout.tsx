import React from "react"
import { NavBar } from "./NavBar"

export const Layout = ({ children }: { children: React.ReactNode}) => {
    return (
      <>
        <NavBar />
        <main>{children}</main>
      </>
    )
  }