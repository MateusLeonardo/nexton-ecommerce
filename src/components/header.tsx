"use client";
import { useState } from "react";
import Logo from "@/components/logo";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";
import MenuItemsHeader from "./menu-itens-header";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="container mx-auto flex items-center justify-between p-3">
      <Link href="/">
        <Logo />
      </Link>

      <div className="relative flex-1 mx-4 max-w-lg">
        <Input
          placeholder="Search in products..."
          className="pl-10 rounded-lg w-full"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      <div className="flex items-center gap-4">
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          <MenuItemsHeader className="flex items-center gap-4" />
        </nav>
      </div>

      <nav
        className={`fixed top-0 right-0 h-full bg-white dark:bg-slate-950 z-50 p-4 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0 w-3/5" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-6 right-4"
          onClick={() => setMenuOpen(false)}
        >
          <X />
        </button>
        <MenuItemsHeader className="flex flex-col gap-4 mt-12 items-center" />
      </nav>
    </header>
  );
}
