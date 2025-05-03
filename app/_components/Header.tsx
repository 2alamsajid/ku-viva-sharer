'use client';

import React from 'react';
import { Menu } from 'lucide-react'; // Using Lucide icons

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"; // Adjust import path if necessary

export default function Header() {

  return (
    <header className="sticky top-0 z-50 bg-[#0B1416] p-4 border-b border-[#2A2A2A] text-[#D7DADC]">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-white">
          VivaSharer
        </a>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="/about" className="text-[#D7DADC] hover:text-white transition duration-200">
            About
          </a>
          {/* <a href="/add-viva">
            <button className="
              bg-[#0079D3] text-white font-semibold
              px-4 py-2 rounded-md shadow-sm
              hover:bg-[#0063B0] transition duration-200
              focus:outline-none focus:ring-2 focus:ring-[#0079D3] focus:ring-opacity-50
            ">
              Add Viva
            </button>
          </a> */}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-[#D7DADC] hover:text-white focus:outline-none">
                 <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-[#0B1416] border-l border-[#2A2A2A] text-[#D7DADC] p-4">
              <div className="flex flex-col space-y-4 mt-6">
                <a href="/about" className="text-[#D7DADC] hover:text-white transition duration-200">
                  About
                </a>
                {/* <a href="/add-viva" className="text-[#D7DADC] hover:text-white transition duration-200">
                  Add Viva
                </a> */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
