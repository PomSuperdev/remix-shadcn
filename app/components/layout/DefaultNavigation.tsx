"use client";

import { NavLink } from "@remix-run/react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";

const menus: { title: string; href: string }[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Music",
    href: "/music",
  },
  {
    title: "Mail",
    href: "/mail",
  },
  {
    title: "Tasks",
    href: "/tasks",
  },
  {
    title: "Forms",
    href: "/forms",
  },
];
export default function DefaultNavigation() {
  return (
    <NavigationMenu className="m-4">
      <NavigationMenuList>
        <NavigationMenuItem className={"mb-4 flex items-center"}>
          {menus.map((item, itemIndex) => (
            <NavigationMenuItem key={itemIndex}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary bg-muted font-medium text-primary"
                    : "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground"
                }
              >
                {item.title}
              </NavLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
