"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import clsx from "clsx";
import { Separator } from "@/components/ui/separator";
import { menuOptions } from "@/lib";
// import { ModeToggle } from '../global/mode-toggle'

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <nav className=" dark:bg-black h-screen w-1/6 overflow-scroll justify-between left-0 top-0 items-center flex-col  py-6">
      <div className="flex items-center justify-center flex-col gap-8">
        <Link className="flex font-bold flex-row " href="/">
          Fuzzie
        </Link>
        <Separator />
      </div>
      <TooltipProvider>
        <div className="flex flex-col gap-4 px-6 py-4">
          {menuOptions.map((menuItem, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <Link
                  href={menuItem.href}
                  key={index}
                  className={clsx(
                    "group flex items-center justify-start scale-[1.2] hover:border-b-white border-b-4 rounded-lg px-3 py-2 cursor-pointer",
                    {
                      "dark:bg-[#2F006B] bg-[#EEE0FF] border-b-white": pathName === menuItem.href,
                    }
                  )}
                >
                  <p
                    className={clsx(
                      "text-md flex gap-2 text-white max-lg:hidden text-white/80",
                      {
                        "font-bold": pathName === menuItem.href,
                      }
                    )}
                  >
                    <menuItem.Component selected={pathName === menuItem.href} />
                    {menuItem.name}
                  </p>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="bg-black/10 backdrop-blur-xl"
              >
                <p>{menuItem.details}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
      <Separator />
      {/* <div className="flex items-center justify-center flex-col gap-8">
        <ModeToggle />
      </div> */}
    </nav>
  );
};

export default Sidebar;
