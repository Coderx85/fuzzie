'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import WorkflowButton from './workflows/_components/workflow-button'
import { menuOptions } from '@/lib'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
  const pathname =  usePathname().substring(1);
  useEffect(() => {
    const currentPage = menuOptions.find(link => link.href === pathname);

    if (currentPage) {
      document.title = `${currentPage.name}: ${currentPage.details}`;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute('content', `This is the ${currentPage.name} page.`);
    }
  }, [pathname]);

  console.log(pathname)
  return (
    <div className="border-l-[1px] border-t-[1px] pb-20 h-screen rounded-l-3xl border-muted-foreground/20 overflow-scroll ">
      <div className="flex flex-col relative">
        <h1 className="text-4xl sticky top-0 z-[10] font-bold p-6 bg-background/50 backdrop-blur-lg flex items-center border-b justify-between capitalize">
          {pathname}
          {pathname === 'workflows' && (
            <WorkflowButton /> 
          )}
        </h1>
      {children}
      </div>
    </div>
  )
}

export default Layout
