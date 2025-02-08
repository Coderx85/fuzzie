'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
  const pathname =  usePathname().substring(1);

  console.log(pathname)
  return (
    <div className="border-l-[1px] border-t-[1px] pb-20 h-screen rounded-l-3xl border-muted-foreground/20 overflow-scroll ">
      <div className="flex flex-col relative">
        <h1 className="text-4xl sticky top-0 z-[10] font-bold p-6 bg-background/50 backdrop-blur-lg flex items-center border-b justify-between capitalize">
          {pathname}
        </h1>
      {children}
      </div>
    </div>
  )
}

export default Layout
