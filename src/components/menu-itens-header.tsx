import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import { HTMLAttributes } from "react";

interface MenuItemsHeaderProps extends HTMLAttributes<HTMLUListElement> {
  className?: string;
}

export default function MenuItemsHeader({
  className,
  ...props
}: MenuItemsHeaderProps) {
  return (
    <ul className={className} {...props}>
      <li>
        <Link href="/account">
          <User />
        </Link>
      </li>
      <li>
        <Link href="/cart">
          <ShoppingCart />
        </Link>
      </li>
      <li>
        <ThemeToggle />
      </li>
    </ul>
  );
}
